import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IStationTimes} from "../../interfaces/IStationTimes";
import {IStationNames} from "../../interfaces/IStationNames";
import {ISchemeElements} from "../../interfaces/ISchemeElements";

interface CityState {
    stations: IStationNames,
    times: IStationTimes,
    elements: ISchemeElements
}

const initialState: CityState = {
    stations: require("../../cities/spb/stations").default,
    times: require("../../cities/spb/times").default,
    elements: require("../../cities/spb/elements").default,
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        changeCity(state, action:PayloadAction<string>){
            switch (action.payload) {
                case "Санкт-Петербург":
                    state.stations = require("../../cities/spb/stations").default;
                    state.times = require("../../cities/spb/times").default;
                    state.elements = require("../../cities/spb/elements").default;
            }
        }
    }
})

export default citySlice.reducer;