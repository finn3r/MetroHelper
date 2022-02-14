import React from 'react';
import {IBackgroundElement, ICreateScheme, IOtherElements, IRoadElement, IStation, IStationElement} from "./interfaces";

const Background: React.FC<{background: IBackgroundElement}> = ({background}) => {
    return (
        <g className={"background"}>
            {React.createElement(background.type, background.props)}
        </g>
    )
}

const OtherElements: React.FC<{others: IOtherElements[]}> = ({others}) => {
    return (
        <g className={"other_elements"}>
            {others.map((element) => {
                return React.createElement(element.type, element.props);
            })}
        </g>
    )
}

const RoadsElements: React.FC<{roads: IRoadElement[]}> = ({roads}) => {
    return (
        <g className={"roads"}>
            {roads.map((element) => {
                return React.createElement(element.type, element.props);
            })}
        </g>
    )
}

const StationElements: React.FC<{stations: IStationElement[], selectStation(station: IStation):void}> = ({stations, selectStation}) => {
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

const CreateScheme: React.FC<ICreateScheme> = ({elements, selectStation, way}) => {
    if (way.length === 0) return (
        <g>
            <Background background={elements.background}/>
            <OtherElements others={elements.others}/>
            <RoadsElements roads={elements.roads}/>
            <StationElements stations={elements.stations} selectStation={selectStation}/>
        </g>
    ); else return (
        <g>
            <g className={"roads"}>
                {elements.roads.map((element) => {
                    const show: boolean = (way.includes(element.from)) && (way.includes(element.to));
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
//className: (show) ? "" : "opacity"
export default CreateScheme;