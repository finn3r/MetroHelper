import React, {useContext, useEffect, useRef} from 'react';
import * as d3Zoom from 'd3-zoom';
import {select} from 'd3-selection';
import './MetroScheme.scss';
import GetScheme from "../../Maps/getScheme";
import {CityContext} from "../../custom_settings";

interface MetroSchemeProps {
    way: string[]
}

const changeElementStatus = (element: Element, show: boolean) => {
    if(show){
        element.classList.remove('hide');
        element.classList.add('show');
    }else{
        element.classList.remove('show');
        element.classList.add('hide');
    }
}

const MetroScheme: React.FC<MetroSchemeProps> = ({way}) => {
    const mapRef = useRef<null | SVGSVGElement>(null);
    const gRef = useRef<null | SVGGElement>(null);
    const city = useContext(CityContext).city;
    useEffect(() => {
        const metro_map = {
            width: 2000,
            height: 2000
        };
        const mapSize = {
            width: mapRef.current!.clientWidth,
            height: mapRef.current!.clientHeight
        };
        let k = 2000 / mapSize.height;
        let x = (mapSize.width / 2 - metro_map.width / (2 * k)) * k;
        let y = (mapSize.height / 2 - metro_map.height / (2 * k)) * k;
        const map = select(mapRef.current);
        const g = select(gRef.current);
        const zoom = d3Zoom.zoom<any, any>()
            .scaleExtent([0.2, 1.5])
            .on("zoom", zoomed);

        function zoomed(event: d3Zoom.D3ZoomEvent<any, any>) {
            const transform = event.transform;
            g.attr("transform", transform.toString());
            let scale = gRef.current!.transform.baseVal[1].matrix.a;
            const widthScreen = mapSize.width / scale;
            const heightScreen = mapSize.height / scale;
            const margin = 500;
            const worldTopLeft: [number, number] = [
                margin - widthScreen,
                margin - heightScreen]
            ;
            const worldBottomRight: [number, number] = [
                widthScreen + metro_map.width - margin,
                heightScreen + metro_map.height - margin
            ];
            zoom.translateExtent([worldTopLeft, worldBottomRight]);
        }
        map.call(zoom);
        map.call(zoom.transform, d3Zoom.zoomIdentity.scale(1 / k).translate(x, y));
    }, []);
    useEffect(() => {
        const all_elements = document.getElementsByClassName('visual map_element');
        if(way.length > 1) {
            Array.from(all_elements).forEach((element) => {
                const className: string = element.classList.value;
                if (className.includes('map_station')) {
                    let station = element.id.replace('Station:', '');
                    changeElementStatus(element, way.includes(station));
                } else if (className.includes('map_road')) {
                    let id = element.id.replace('Road:', '').split('-');
                    let station_first = id[0];
                    let station_second = id[1];
                    changeElementStatus(element, (way.includes(station_first) && way.includes(station_second)));
                } else if (className.includes('map_text')) {
                    let station = element.previousElementSibling!.id.replace('Station:', '');
                    changeElementStatus(element, way.includes(station));
                } else {
                    element.classList.add('hide');
                }
            });
        }else{
            Array.from(all_elements).forEach((element) => changeElementStatus(element, true));
        }
    }, [way]);
    return (
        <div className="metro_map__container">
            <svg xmlns="http://www.w3.org/2000/svg" className="metro_map__content" preserveAspectRatio='xMinYMin slice'
                 ref={mapRef}>
                <g ref={gRef}>
                    <GetScheme city={city}/>
                </g>
            </svg>
        </div>
    )
        ;
};

export default MetroScheme;