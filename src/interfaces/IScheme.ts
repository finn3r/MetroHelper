import {ISchemeElements, IStation} from "./ISchemeElements";

export interface IScheme {
    elements: ISchemeElements;

    zoomPath(cords: DOMRect): void;
    selectStation(station: IStation | undefined): void;
}