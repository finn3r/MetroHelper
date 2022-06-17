import React, {useEffect, useRef} from 'react';
import {IScheme, ISchemeBackground, ISchemeOther, ISchemeRoad, ISchemeStation} from "../../interfaces/IScheme";
import {useAppSelector} from "../../hooks/redux";
import * as ST from '../../styled';
import {ZoomView} from "d3-interpolate";

const SchemeBackground: React.FC<ISchemeBackground> = ({background}) => {
    return (
        <g className={"background"}>
            {React.createElement(background.type, background.props)}
        </g>
    )
}

const SchemeOther: React.FC<ISchemeOther> = ({others}) => {
    return (
        <g className={"other_elements"}>
            {others.map((element) => {
                return React.createElement(element.type, element.props);
            })}
        </g>
    )
}

const SchemeRoads: React.FC<ISchemeRoad> = ({roads, way}) => {
    const roads_way: string[] = [];
    if (way) for (let i = 0; i < way.length - 1; i++) roads_way.push(way.slice(i, i + 2).join('-'));
    return (
        <g className={"roads"}>
            {roads.map((element) => {
                const show: boolean = !way || roads_way.includes(element.from + '-' + element.to) || roads_way.includes(element.to + '-' + element.from);
                if (show)
                    return React.createElement(element.type, element.props);
                else
                    return null;
            })}
        </g>
    )
}

const SchemeStations: React.FC<ISchemeStation> = ({stations, selectStation, stationState, way}) => {
    return (
        <g className={"stations"}>
            {stations.map((station) => {
                const show: boolean = !way || way.includes(station.stationName);
                const clickHandler = () => selectStation(station.stationName);
                const selected = (stationState?.includes(station.stationName));
                if (show)
                    return React.createElement("g", {
                            onClick: clickHandler,
                            key: ("g_stations_" + station.stationName)
                        },
                        station.stationElements.map((element) => {
                            return React.createElement(element.type, {...element.props, selected: selected});
                        }));
                else
                    return null;
            })}
        </g>
    )
}

const Scheme: React.FC<IScheme> = ({elements, zoomPath, selectStation}) => {
    const {way, to, from} = useAppSelector(state => state.input);
    const wayRef = useRef<null | SVGSVGElement>(null);
    useEffect(() => {
        if (way.length !== 0) {
            const bounds = wayRef.current!.getBBox();
            const zoom_cords: ZoomView = [bounds.x + (bounds.width) / 2, bounds.y + (bounds.height) / 2, Math.max(bounds.width, bounds.height)];
            zoomPath(zoom_cords);
        }
    }, [way, zoomPath])
    if (way.length === 0) return (
        <g>
            <SchemeBackground background={elements.background}/>
            <SchemeOther others={elements.others}/>
            <SchemeRoads roads={elements.roads}/>
            <SchemeStations stations={elements.stations} selectStation={selectStation}
                            stationState={[to.state, from.state]}/>
        </g>
    ); else return (
        <g>
            <ST.MapOpacity>
                <SchemeBackground background={elements.background}/>
                <SchemeOther others={elements.others}/>
                <SchemeRoads roads={elements.roads}/>
                <SchemeStations stations={elements.stations} selectStation={selectStation}/>
            </ST.MapOpacity>
            <g className={"way"} ref={wayRef}>
                <SchemeRoads roads={elements.roads} way={way}/>
                <SchemeStations stations={elements.stations} selectStation={selectStation} way={way}/>
            </g>
        </g>
    );
};

export default Scheme;