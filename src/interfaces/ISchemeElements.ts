import React from "react";

export interface ISchemeElements {
    background: IBackgroundElement;
    others: IOtherElements[];
    stations: IStationElement[];
    roads: IRoadElement[];
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
