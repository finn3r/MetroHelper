import React, {useEffect, useRef} from 'react';
import {IScheme} from "../../interfaces/IScheme";
import {
    IBackgroundElement,
    IOtherElements,
    IRoadElement,
    IStation,
    IStationElement
} from "../../interfaces/ISchemeElements";
import {useAppSelector} from "../../hooks/redux";
import * as ST from '../../styled';

const Background: React.FC<{ background: IBackgroundElement, selectStation(station: IStation | undefined): void }> = ({background, selectStation}) => {
    return (
        <g className={"background"} onClick={() => selectStation(undefined)}>
            {React.createElement(background.type, background.props)}
        </g>
    )
}

const OtherElements: React.FC<{ others: IOtherElements[], selectStation(station: IStation | undefined): void }> = ({others, selectStation}) => {
    return (
        <g className={"other_elements"} onClick={() => selectStation(undefined)}>
            {others.map((element) => {
                return React.createElement(element.type, element.props);
            })}
        </g>
    )
}

const RoadsElements: React.FC<{ roads: IRoadElement[], selectStation(station: IStation | undefined): void }> = ({roads, selectStation}) => {
    return (
        <g className={"roads"} onClick={() => selectStation(undefined)}>
            {roads.map((element) => {
                return React.createElement(element.type, element.props);
            })}
        </g>
    )
}

const StationElements: React.FC<{ stations: IStationElement[], selectStation(station: IStation | undefined): void }> = ({stations, selectStation}) => {
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

const Scheme: React.FC<IScheme> = ({elements, zoomPath, selectStation}) => {
    const {way} = useAppSelector(state => state.input);
    const wayRef = useRef<null | SVGSVGElement>(null);
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
            <Background background={elements.background} selectStation={selectStation}/>
            <OtherElements others={elements.others} selectStation={selectStation}/>
            <RoadsElements roads={elements.roads} selectStation={selectStation}/>
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
            <ST.MapOpacity>
                <Background background={elements.background} selectStation={selectStation}/>
                <OtherElements others={elements.others} selectStation={selectStation}/>
                <RoadsElements roads={elements.roads} selectStation={selectStation}/>
                <StationElements stations={elements.stations} selectStation={selectStation}/>
            </ST.MapOpacity>
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

export default Scheme;