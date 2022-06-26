import {
    IBackgroundElement,
    IOtherElements,
    IRoadElement,
    ISchemeElements,
    IStationElement
} from "./ISchemeElements";
import {ZoomView} from "d3-interpolate";

export interface IScheme {
    elements: ISchemeElements;

    zoomPath(zoom_cords: ZoomView): void;
    selectStation(station: string): void;
}

export interface ISchemeBackground {
    background: IBackgroundElement;
}

export interface ISchemeOther {
    others: IOtherElements[];
}

export interface ISchemeRoad {
    roads: IRoadElement[];
    stations: IStationElement[];
    way?: string[];
}

export interface ISchemeStation {
    stations: IStationElement[];
    stationState?: string[];
    way?: string[];

    selectStation(station: string): void;
}