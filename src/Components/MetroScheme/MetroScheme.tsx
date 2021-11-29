import React, {useContext, useEffect, useRef} from 'react';
import * as d3Zoom from 'd3-zoom';
import {select} from 'd3-selection';
import './MetroScheme.scss';
import GetScheme from "../../Maps/getScheme";
import {CityContext} from "../../custom_settings";

interface MetroSchemeProps {
    way: string[]

    changeSelected(station: string): void
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

const MetroScheme: React.FC<MetroSchemeProps> = ({way, changeSelected}) => {
    const mapRef = useRef<null | SVGSVGElement>(null);
    const gRef = useRef<null | SVGGElement>(null);
    const city = useContext(CityContext).city;
    const all_elements = document.getElementsByClassName('visual map_element');
    useEffect(() => {
        //Работа с контейнером карты
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
                margin - heightScreen
            ];
            const worldBottomRight: [number, number] = [
                widthScreen + metro_map.width - margin,
                heightScreen + metro_map.height  - margin
            ];
            zoom.translateExtent([worldTopLeft, worldBottomRight]);
        }
        map.call(zoom);
        map.call(zoom.transform, d3Zoom.zoomIdentity.scale(1 / k).translate(x, y));
        //Работа с кликами
        const all_station = Array.from(document.getElementsByClassName('map_station'));
        const all_text = Array.from(document.getElementsByClassName('map_text'))
        all_station.forEach((station) => {
            let station_text = station.id.replace('Station:', '');
            station.addEventListener('click',() => changeSelected(station_text));
        })
        all_text.forEach((text) => {
            let station_text = text.previousElementSibling!.id.replace('Station:', '');
            text.addEventListener('click',() => changeSelected(station_text));
        })
    }, [changeSelected]);
    useEffect(() => {
        if(way.length > 1) {
            let roads: string[] = [];
            for(let i=0;i<way.length;i++)roads.push(way.slice(i,i+2).join('-'));
            Array.from(all_elements).forEach((element) => {
                const className: string = element.classList.value;
                if (className.includes('map_station')) {
                    let station = element.id.replace('Station:', '');
                    changeElementStatus(element, way.includes(station));
                } else if (className.includes('map_road')) {
                    let id = element.id.replace('Road:', '').split('-');
                    let road_first = id[0] + '-' + id[1];
                    let road_second = id[1] + '-' + id[0];
                    changeElementStatus(element, (roads.includes(road_first)||roads.includes(road_second)));
                } else if (className.includes('map_text')) {
                    let station = element.previousElementSibling!.id.replace('Station:', '');
                    changeElementStatus(element, way.includes(station));
                } else {
                    changeElementStatus(element, false);
                }
            });
        }else{
            Array.from(all_elements).forEach((element) => changeElementStatus(element, true));
        }
    }, [way, all_elements]);
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