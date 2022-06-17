import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import * as d3Zoom from 'd3-zoom';
import * as d3Ease from 'd3-ease';
import {interpolateZoom, ZoomView} from "d3-interpolate";
import {select} from 'd3-selection';
import debounce from "lodash.debounce";
import * as ST from "../../styled";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Scheme from "./Scheme";
import {inputSlice} from "../../store/reducers/InputSlice";

const Map: React.FC = () => {
    const {cleared} = useAppSelector(state => state.input);
    const {elements} = useAppSelector(state => state.city);
    const mapRef = useRef<null | SVGSVGElement>(null);
    const gRef = useRef<null | SVGGElement>(null);
    const dispatch = useAppDispatch();
    const {selectStation} = inputSlice.actions;
    const [zoomProps, setZoomProps] = useState({
        zoom: d3Zoom.zoom<any, any>()
    });

    const mapSize: { width: number, height: number } = useMemo(() => {
        return {
            width: elements.background.width,
            height: elements.background.height
        }
    }, [elements]);

    const handleClick = (station: string) => {
        dispatch(selectStation(station));
    };

    const zoom_on_point = useCallback((zoom_cords: ZoomView) => {
        const map = select(mapRef.current);
        const current_bounds = mapRef.current!.getBBox();
        const current_scale = d3Zoom.zoomTransform(map.node()!).k;
        const current_cords: ZoomView = [(window.innerWidth / 2 - current_bounds.x) / current_scale, (window.innerHeight / 2 - current_bounds.y) / current_scale, Math.min(window.innerWidth, window.innerHeight) / current_scale];
        const interpolator = interpolateZoom(current_cords, zoom_cords);

        function transform(t: number) {
            let zoom_enable: boolean = false;
            interpolator(t).forEach((value, index) => {
                if (Math.round(value) !== Math.round(interpolator(t - 0.5)[index])) zoom_enable = true;
            })
            const view = (zoom_enable) ? interpolator(t) : interpolator(1)
            const scale = Math.min(window.innerWidth, window.innerHeight) / view[2],
                x = window.innerWidth / 2 - view[0] * scale,
                y = window.innerHeight / 2 - view[1] * scale;
            return [x, y, scale];
        }

        map.transition().duration(500).ease(d3Ease.easeCubicIn).call(
            zoomProps.zoom.transform,
            d3Zoom.zoomIdentity
                .translate(transform(0.5)[0], transform(0.5)[1])
                .scale(transform(0.5)[2])
        );
        map.transition().delay(500).duration(500).ease(d3Ease.easeCubicOut).call(
            zoomProps.zoom.transform,
            d3Zoom.zoomIdentity
                .translate(transform(1)[0], transform(1)[1])
                .scale(transform(1)[2])
        );
    }, [zoomProps.zoom.transform]);

    /*Настройки границ зума*/
    useEffect(() => {
        const get_zoomed_func = (mapSize: { width: number, height: number }, screenSize: { width: number, height: number }) => {
            return (event: d3Zoom.D3ZoomEvent<any, any>) => {
                const g = select(gRef.current);
                const map = select(mapRef.current);
                const transform = event.transform;
                g.attr("transform", transform.toString());
                const scale = d3Zoom.zoomTransform(map.node()!).k;
                const widthScreen: number = screenSize.width / scale;
                const heightScreen: number = screenSize.height / scale;
                const margin: number = (screenSize.width / 5) / scale;
                const worldTopLeft: [number, number] = [
                    margin - widthScreen,
                    margin - heightScreen
                ];
                const worldBottomRight: [number, number] = [
                    widthScreen + mapSize.width - margin,
                    heightScreen + mapSize.height - margin
                ];
                zoom.translateExtent([worldTopLeft, worldBottomRight]);
            };
        };
        const screenSize: { width: number, height: number } = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const map = select(mapRef.current);
        const zoom = d3Zoom.zoom<any, any>().scaleExtent([0.25, 1.75]).on("zoom", get_zoomed_func(mapSize, screenSize));
        const bounds: DOMRect = gRef.current!.getBBox();
        const zoom_cords = [bounds.width / 2, bounds.height / 2, Math.max(screenSize.width, screenSize.height)];
        const scale = Math.min(screenSize.width, screenSize.height) / zoom_cords[2],
            x = screenSize.width / 2 - zoom_cords[0] * scale,
            y = screenSize.height / 2 - zoom_cords[1] * scale;
        map.call(zoom).call(zoom.transform, d3Zoom.zoomIdentity.translate(x, y).scale(scale));
        window.onresize = debounce(() => zoom.on("zoom", get_zoomed_func(mapSize, {
            width: window.innerWidth,
            height: window.innerHeight
        })), 200);
        setZoomProps({
            zoom: zoom
        })
        return () => {
            window.onresize = null;
        }
    }, [mapSize]);

    /*Зум при нажатии на кнопку очистить поле*/
    useEffect(() => {
        const bounds: DOMRect = gRef.current!.getBBox();
        const zoom_cords: ZoomView = [bounds.width / 2, bounds.height / 2, Math.max(window.innerWidth, window.innerHeight)];
        zoom_on_point(zoom_cords);
    }, [zoomProps.zoom.transform, cleared, zoom_on_point]);

    return (
        <ST.MapContainer>
            <ST.MapContent xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMinYMin slice' ref={mapRef}>
                <g ref={gRef}>
                    <Scheme elements={elements} zoomPath={zoom_on_point} selectStation={handleClick}/>
                </g>
            </ST.MapContent>
        </ST.MapContainer>
    );
};

export default Map;