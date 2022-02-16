import React, {useContext, useEffect, useRef} from 'react';
import {IBackgroundElement, ICreateScheme, IOtherElements, IRoadElement, IStation, IStationElement} from "./interfaces";
import {MetroHelperWayContext} from "../MetroHelperContext/MetroHelperContext";

const Background: React.FC<{ background: IBackgroundElement }> = ({background}) => {
    return (
        <g className={"background"}>
            {React.createElement(background.type, background.props)}
        </g>
    )
}

const OtherElements: React.FC<{ others: IOtherElements[] }> = ({others}) => {
    return (
        <g className={"other_elements"}>
            {others.map((element) => {
                return React.createElement(element.type, element.props);
            })}
        </g>
    )
}

const RoadsElements: React.FC<{ roads: IRoadElement[] }> = ({roads}) => {
    return (
        <g className={"roads"}>
            {roads.map((element) => {
                return React.createElement(element.type, element.props);
            })}
        </g>
    )
}

const StationElements: React.FC<{ stations: IStationElement[], selectStation(station: IStation): void }> = ({stations, selectStation}) => {
    return (
        <g className={"stations"}>
            {stations.map((station) => {
                const stationInfo: IStation = {
                    name: station.stationName,
                    cords: {
                        x: station.stationX,
                        y: station.stationY,
                    }
                };
                const clickHandler = () => selectStation(stationInfo);
                return React.createElement("g", {onClick: clickHandler, key: ("g_stations_" + station.stationName)},
                    station.stationElements.map((element) => {
                        return React.createElement(element.type, element.props);
                    }));
            })}
        </g>
    )
}

const CreateScheme: React.FC<ICreateScheme> = ({elements, selectStation, zoomPath}) => {
    const {WayState} = useContext(MetroHelperWayContext);
    const wayRef = useRef<null | SVGSVGElement>(null);
    const way = WayState.now_way;
    let roads: string[] = [];
    for (let i = 0; i < way.length - 1; i++) roads.push(way.slice(i, i + 2).join('-'));
    useEffect(() => {
        if (way.length !== 0) {
            const bounds = wayRef.current!.getBBox();
            zoomPath(bounds);
        }
    }, [way, zoomPath])
    if (way.length === 0) return (
        <g>
            <Background background={elements.background}/>
            <OtherElements others={elements.others}/>
            <RoadsElements roads={elements.roads}/>
            <StationElements stations={elements.stations} selectStation={selectStation}/>
        </g>
    ); else return (
        <g>
            <g className={"roads"} ref={wayRef}>
                {elements.roads.map((element) => {
                    const show: boolean = roads.includes(element.from + '-' + element.to) || roads.includes(element.to + '-' + element.from);
                    if (show) return React.createElement(element.type, element.props); else return null;
                })}
            </g>
            <g className={"opacity"}>
                <Background background={elements.background}/>
                <OtherElements others={elements.others}/>
                <RoadsElements roads={elements.roads}/>
                <StationElements stations={elements.stations} selectStation={selectStation}/>
            </g>
            <g className={"stations"}>
                {elements.stations.map((station) => {
                    const show: boolean = way.includes(station.stationName);
                    const stationInfo: IStation = {
                        name: station.stationName,
                        cords: {
                            x: station.stationX,
                            y: station.stationY,
                        }
                    };
                    const clickHandler = () => selectStation(stationInfo);
                    if (show) return React.createElement("g", {
                            onClick: clickHandler,
                            key: ("g_stations_" + station.stationName)
                        },
                        station.stationElements.map((element) => {
                            return React.createElement(element.type, element.props);
                        }));
                    else return null;
                })}
            </g>
        </g>
    );
};

export default CreateScheme;