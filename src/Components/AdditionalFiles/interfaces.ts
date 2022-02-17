import React from "react";
import {OnlyInputTypes} from "../MetroHelperContext/MetroHelperContext";

export interface IAutoCompleteFieldProps {
    type: OnlyInputTypes;
    label?: string;
    options: string[];
    errorShow: boolean;
}

export interface IStation {
    name: string;
    cords: { x: number; y: number; };
}

export interface ICreateScheme {
    elements: ISchemeElements;

    zoomPath(cords: DOMRect): void;

    selectStation(station: IStation | undefined): void;
}

export interface IStationNames {
    [station: string]: string;
}

export interface IStationWays {
    [station: string]: {
        [station: string]: number;
    };
}

export interface IBackgroundElement {
    type: string;
    props: React.SVGProps<any>;
    width: number;
    height: number;
}

export interface IOtherElements {
    type: string;
    props: React.SVGProps<any>
}

export interface IStationElement {
    stationName: string;
    stationX: number;
    stationY: number;
    stationElements: {
        type: string;
        props: React.SVGProps<any>;
    }[];
}

export interface IRoadElement {
    from: string;
    to: string;
    type: string;
    props: React.SVGProps<any>;
}

export interface ISchemeElements {
    background: IBackgroundElement;
    others: IOtherElements[];
    stations: IStationElement[];
    roads: IRoadElement[];
}

export interface IMetroHelperProviderProps {
    city: string;
}