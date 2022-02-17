import React, {useEffect, useContext, useRef, useMemo, useState, useCallback} from 'react';
import {debounce} from "@mui/material";
import * as d3Zoom from 'd3-zoom';
import * as d3Ease from 'd3-ease';
import {interpolateZoom, ZoomView} from "d3-interpolate";
import {select} from 'd3-selection';
import {get_scheme} from "../AdditionalFiles/get_scripts";
import SelectMenu from "../SelectMenu/SelectMenu";
import CreateScheme from "../AdditionalFiles/CreateScheme";
import {CityContext} from "../../custom_settings";
import './MetroScheme.scss';
import {ISchemeElements, IStation} from "../AdditionalFiles/interfaces";
import {MetroHelperInputContext} from "../MetroHelperContext/MetroHelperContext";


const MetroScheme: React.FC = () => {
    const {InputState, InputDispatch} = useContext(MetroHelperInputContext);
    const city: string = useContext(CityContext).city;
    const elements: ISchemeElements = get_scheme(city);
    const mapRef = useRef<null | SVGSVGElement>(null);
    const gRef = useRef<null | SVGGElement>(null);
    const [zoomProps, setZoomProps] = useState({
        zoom: d3Zoom.zoom<any, any>()
    });
    const mapSize: { width: number, height: number } = useMemo(() => {
        return {
            width: elements.background.width,
            height: elements.background.height
        }
    }, [elements]);
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
                const margin: number = 500 / scale;
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
        const zoom = d3Zoom.zoom<any, any>().scaleExtent([0.3, 1.75]).on("zoom", get_zoomed_func(mapSize, screenSize));
        const bounds: DOMRect = gRef.current!.getBBox();
        const zoom_cords = [bounds.width / 2, bounds.height / 2, Math.max(bounds.width, bounds.height)];
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
    }, [mapSize]);
    const elementClickHandler = (station: IStation | undefined) => {
        InputDispatch({
            type: "select",
            station: station
        })
    };
    const zoom_on_point = useCallback((bounds: DOMRect) => {
        const map = select(mapRef.current);
        const screenSize: { width: number, height: number } = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const current_bounds = mapRef.current!.getBBox();
        const current_scale = d3Zoom.zoomTransform(map.node()!).k;
        const current_cords: ZoomView = [(screenSize.width/2 - current_bounds.x) / current_scale, (screenSize.height/2 - current_bounds.y) / current_scale, Math.min(screenSize.width, screenSize.height) / current_scale];
        const zoom_cords: ZoomView = [bounds.x + (bounds.width) / 2, bounds.y + (bounds.height) / 2, Math.max(bounds.width + 650, bounds.height + 120)];
        const interpolator = interpolateZoom(current_cords, zoom_cords);
        function transform(t: number) {
            let zoom_enable: boolean = false;
            interpolator(t).forEach((value, index) => {
                if (Math.round(value) !== Math.round(interpolator(t-0.5)[index])) zoom_enable = true;
            })
            const view = (zoom_enable) ? interpolator(t) : interpolator(1)
            const scale = Math.min(screenSize.width, screenSize.height) / view[2],
                x = screenSize.width / 2 - view[0] * scale,
                y = screenSize.height / 2 - view[1] * scale;
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
    useEffect(() => {
        const map = select(mapRef.current);
        const screenSize: { width: number, height: number } = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const bounds: DOMRect = gRef.current!.getBBox();
        const zoom_cords = [bounds.width / 2, bounds.height / 2, Math.max(bounds.width, bounds.height)];
        const scale = Math.min(screenSize.width, screenSize.height) / zoom_cords[2],
            x = screenSize.width / 2 - zoom_cords[0] * scale,
            y = screenSize.height / 2 - zoom_cords[1] * scale;
        map.transition().duration(750).ease(d3Ease.easeCubicOut).call(
            zoomProps.zoom.transform,
            d3Zoom.zoomIdentity
                .translate(x, y)
                .scale(scale)
        );
    },[zoomProps.zoom.transform, InputState.cleared])
    return (
        <div className="metro_map__container">
            <svg xmlns="http://www.w3.org/2000/svg" className="metro_map__content" preserveAspectRatio='xMinYMin slice'
                 ref={mapRef}>
                <g ref={gRef}>
                    <CreateScheme elements={elements} selectStation={elementClickHandler} zoomPath={zoom_on_point}/>
                    <SelectMenu/>
                </g>
            </svg>
        </div>
    );
};

export default MetroScheme;