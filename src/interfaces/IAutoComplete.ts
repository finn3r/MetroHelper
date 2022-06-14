export interface IAutoComplete {
    hidden: boolean;
    options: string[];
    selected: number;

    changeSelected(id: number): void;
    changeValue(value: string): void;
}