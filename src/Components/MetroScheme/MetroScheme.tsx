import React, {useEffect, useContext, useRef, useMemo} from 'react';
import {debounce} from "@mui/material";
import * as d3Zoom from 'd3-zoom';
import {select} from 'd3-selection';
import {get_scheme} from "../AdditionalFiles/get_scripts";
import SelectMenu from "../SelectMenu/SelectMenu";
import CreateScheme from "../AdditionalFiles/CreateScheme";
import {CityContext} from "../../custom_settings";
import './MetroScheme.scss';
import {ISchemeElements, IStation} from "../AdditionalFiles/interfaces";
import {MetroHelperContext} from "../MetroHelperContext/MetroHelperContext";


const MetroScheme: React.FC = () => {
    const {state, dispatch} = useContext(MetroHelperContext);
    const way: string[] = state.WayList.now_way;
    const city: string = useContext(CityContext).city;
    const elements: ISchemeElements = get_scheme(city);
    const mapRef = useRef<null | SVGSVGElement>(null);
    const gRef = useRef<null | SVGGElement>(null);
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
                const transform = event.transform;
                g.attr("transform", transform.toString());
                let scale = gRef.current!.transform.baseVal[1].matrix.a;
                const widthScreen: number = screenSize.width / scale;
                const heightScreen: number = screenSize.height / scale;
                const margin: number = 500;
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
        const zoom = d3Zoom.zoom<any, any>().scaleExtent([0.3, 1]).on("zoom", get_zoomed_func(mapSize, screenSize));
        const bounds = mapRef.current!.getBBox();
        const scale = Math.max(bounds.width / screenSize.width, bounds.height / screenSize.height),
            x = (screenSize.width / 2 - bounds.width / (2 * scale)) * scale,
            y = (screenSize.height / 2 - bounds.height / (2 * scale)) * scale;
        map.call(zoom).call(zoom.transform, d3Zoom.zoomIdentity.scale(1/scale).translate(x, y));
        window.onresize = debounce(() => zoom.on("zoom", get_zoomed_func(mapSize, {width: window.innerWidth, height: window.innerHeight})), 200);
        /*const zoom_on_point = ([[x0, y0], [x1, y1]]) => {
            map.transition().duration(750).call(
                zoom.transform,
                d3Zoom.zoomIdentity
                    .scale(points.k)
                    .translate(points.x, points.y)
                    .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
                    .translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
            );
        }*/
    }, [mapSize]);
    const elementClickHandler = (station: IStation) => {
        dispatch({
            type: "select",
            station: station
        })
    };
    return (
        <div className="metro_map__container">
            <svg xmlns="http://www.w3.org/2000/svg" className="metro_map__content" preserveAspectRatio='xMinYMin slice'
                 ref={mapRef}>
                <g ref={gRef}>
                    <CreateScheme elements={elements} selectStation={elementClickHandler} way={way}/>
                    <SelectMenu/>
                </g>
            </svg>
        </div>
    );
};

export default MetroScheme;