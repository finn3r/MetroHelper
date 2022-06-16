import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IStation} from "../../interfaces/ISchemeElements";

interface InputState {
    from: {
        value: string,
        state: string
    };
    to: {
        value: string,
        state: string
    };
    cleared: boolean;
    way: string[];
    hideWays: boolean;
    selectedStation: IStation | undefined
}

const initialState: InputState = {
    from: {
        value: "",
        state: ""
    },
    to: {
        value: "",
        state: ""
    },
    cleared: true,
    way: [],
    hideWays: true,
    selectedStation: undefined
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        swap(state) {
            let from = state.from;
            state.from = {
                value: state.to.value,
                state: state.to.state
            };
            state.to = {
                value: from.value,
                state: from.state
            };
        },
        changeFrom(state, action: PayloadAction<{ value: string, stations?: string[] }>) {
            state.from.value = action.payload.value;
            if (action.payload.stations?.includes(action.payload.value)) {
                state.from.state = action.payload.value;
            } else {
                if (action.payload.stations?.includes(state.to.value)) state.to.state = state.to.value;
                state.from.state = "";
            }
        },
        changeTo(state, action: PayloadAction<{ value: string, stations?: string[] }>) {
            state.to.value = action.payload.value;
            if (action.payload.stations?.includes(action.payload.value)) {
                state.to.state = action.payload.value;
            } else {
                if (action.payload.stations?.includes(state.from.value)) state.from.state = state.from.value;
                state.to.state = "";
            }
        },
        clear(state) {
            state.from = {
                value: "",
                state: ""
            };
            state.to = {
                value: "",
                state: ""
            };
            state.cleared = !state.cleared;
        },
        changeWay(state, action: PayloadAction<string[]>) {
            state.way = action.payload;
        },
        selectStation(state, action: PayloadAction<IStation | undefined>) {
            if(state.selectedStation !== action.payload){
                if(action.payload === undefined){
                    state.selectedStation = undefined;
                }else if ((state.from.state === "")&&(action.payload.name !== state.to.state)) {
                    state.from = {value: action.payload.name, state: action.payload.name};
                } else if ((state.to.state === "")&&(action.payload.name !== state.from.state)) {
                    state.to = {value: action.payload.name, state: action.payload.name};
                } else {
                    state.selectedStation = action.payload;
                }
            }
        },
        changeHideWays(state, action: PayloadAction<boolean>){
            state.hideWays = action.payload;
        }
    }
})

export default inputSlice.reducer;