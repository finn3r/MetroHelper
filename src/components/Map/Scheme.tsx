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

const SchemeRoads: React.FC<ISchemeRoad> = ({roads, way, stations}) => {
    const roads_way: string[] = [];
    if (way) for (let i = 0; i < way.length - 1; i++) roads_way.push(way.slice(i, i + 2).join('-'));
    return (
        <g className={"roads"}>
            {roads.map((element) => {
                const show: boolean = !way || roads_way.includes(element.from + '-' + element.to) || roads_way.includes(element.to + '-' + element.from);
                if (show) {
                    const station_from = stations.filter(station => station.stationName===element.from)[0];
                    const station_to = stations.filter(station => station.stationName===element.to)[0];
                    return (
                        <g key={element.props.key}>
                            {React.createElement(element.type, element.props)}
                            {React.createElement(ST.MapStationCircle, {cx: station_from.stationX, cy: station_from.stationY, r:"20" , bg_circle: true})}
                            {React.createElement(ST.MapStationCircle, {cx: station_to.stationX, cy: station_to.stationY, r:"20" , bg_circle: true})}
                        </g>
                    )
                } else {
                    return null;
                }
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
                const StationElement = React.createElement(ST.MapStation, {
                        onClick: clickHandler,
                        key: ("g_stations_" + station.stationName),
                        selected: selected
                    },
                    station.stationElements.map((element, id) => {
                        return(id===1 ?
                            <g key={"g_stations_text_" + id}>
                                {React.createElement((element.type===ST.MapText) ? ST.MapTextStroke : ST.MapTextStrokeLeft, {...element.props, selected: selected, key:(element.props.key + "_1")})}
                                {React.createElement(element.type, {...element.props, key:(element.props.key + "_2")})}
                            </g>
                            :
                            React.createElement(element.type, element.props))
                    }));
                if (show)
                    return StationElement;
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
            <SchemeRoads roads={elements.roads} stations={elements.stations}/>
            <SchemeStations stations={elements.stations} selectStation={selectStation}
                            stationState={[to.state, from.state]}/>
        </g>
    ); else return (
        <g>
            <ST.MapOpacity>
                <SchemeBackground background={elements.background}/>
                <SchemeOther others={elements.others}/>
                <SchemeRoads roads={elements.roads} stations={elements.stations}/>
            </ST.MapOpacity>
            <g className={"way"} ref={wayRef}>
                <SchemeRoads roads={elements.roads} way={way} stations={elements.stations}/>
                <SchemeStations stations={elements.stations} selectStation={selectStation} way={way}/>
            </g>
            <ST.MapOpacity>
                <SchemeStations stations={elements.stations} selectStation={selectStation}/>
            </ST.MapOpacity>
        </g>
    );
};

export default Scheme;