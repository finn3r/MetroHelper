export interface IInput {
    value: string;
    placeHolder?: string;
    options?: string[];
    focused?:boolean;

    changeFocus?(state: boolean):void;
    changeValue(value: string): void;
}