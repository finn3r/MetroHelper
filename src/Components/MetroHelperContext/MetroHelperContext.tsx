import React, {createContext, Dispatch, useEffect, useReducer} from 'react';
import {IMetroHelperProviderProps, IStation} from "../AdditionalFiles/interfaces";
import {get_names, get_ways} from "../AdditionalFiles/get_scripts";

type InputType = {
    value: string;
    state: string;
}

type InputList = {
    from: InputType;
    to: InputType;
    selected: IStation | undefined;
    cleared: boolean;
}

type WayList = {
    now_way: string[];
    all_ways: string[][];
    all_times: number[];
    show_all: boolean;
}

export type OnlyInputTypes = {
    [k in keyof InputList]: InputList[k] extends InputType ? k : never
}[keyof InputList];

type InputListPayload =
    | { type: 'from', newValue: string }
    | { type: 'to', newValue: string }
    | { type: 'select', station: IStation | undefined }
    | { type: 'swap' }
    | { type: 'clear' };

type WayListPayload =
    | { type: 'change_now_way', way_number: number }
    | { type: 'change_ways', from: string, to: string }
    | { type: 'change_show_all' };

const initialInputState = {
    from: {value: "", state: ""},
    to: {value: "", state: ""},
    selected: undefined,
    cleared: true
}

const initialWayState = {
    now_way: [],
    all_ways: [[]],
    all_times: [],
    show_all: true
}

const getInputListReducer = (city: string) => {
    const names = get_names(city);
    return (state: InputList, action: InputListPayload) => {
        switch (action.type) {
            case 'from':
                const newFromState = (names.includes(action.newValue)) ? action.newValue : "";
                return {
                    ...state,
                    from: {value: action.newValue, state: newFromState},
                };
            case 'to':
                let newToState = (names.includes(action.newValue)) ? action.newValue : "";
                return {
                    ...state,
                    to: {value: action.newValue, state: newToState},
                };
            case 'select':
                if (action.station === undefined) return {
                    ...state,
                    selected: undefined
                };
                if ((state.from.state === "") && (state.to.state !== action.station.name)) {
                    return {
                        ...state,
                        from: {value: action.station.name, state: action.station.name},
                        selected: undefined,
                    };
                } else if ((state.to.state === "") && (state.from.state !== action.station.name)) {
                    return {
                        ...state,
                        to: {value: action.station.name, state: action.station.name},
                        selected: undefined,
                    };
                } else {
                    return {
                        ...state,
                        selected: action.station
                    };
                }
            case 'swap':
                return {
                    ...state,
                    from: {value: state.to.value, state: state.to.state},
                    to: {value: state.from.value, state: state.from.state},
                };
            case 'clear':
                return {
                    from: {value: "", state: ""},
                    to: {value: "", state: ""},
                    selected: undefined,
                    cleared: !state.cleared
                };
            default:
                return state;
        }
    }
}

const getWayListReducer = (city: string) => {
    return (state: WayList, action: WayListPayload) => {
        switch (action.type) {
            case 'change_now_way':
                return {
                    ...state,
                    now_way: state.all_ways[action.way_number]
                };
            case 'change_show_all':
                return {
                    ...state,
                    show_all: !state.show_all
                };
            case 'change_ways':
                const best_ways_and_times = get_ways(action.from, action.to, city);
                return {
                    all_ways: best_ways_and_times[0],
                    all_times: best_ways_and_times[1],
                    now_way: (best_ways_and_times[0][0] === undefined) ? [] : best_ways_and_times[0][0],
                    show_all: true
                };
            default:
                return state;
        }
    }
}

const MetroHelperInputContext = createContext<{
    InputState: InputList;
    InputDispatch: Dispatch<InputListPayload>;
}>({
    InputState: initialInputState,
    InputDispatch: () => null
});

const MetroHelperWayContext = createContext<{
    WayState: WayList;
    WayDispatch: Dispatch<WayListPayload>;
}>({
    WayState: initialWayState,
    WayDispatch: () => null
});

const MetroHelperProvider: React.FC<IMetroHelperProviderProps> = ({city, children}) => {
    const [InputState, InputDispatch] = useReducer(getInputListReducer(city), initialInputState);
    const [WayState, WayDispatch] = useReducer(getWayListReducer(city), initialWayState);

    useEffect(() => {
        WayDispatch({
            type: "change_ways",
            from: InputState.from.state,
            to: InputState.to.state
        })
    }, [InputState.from.state, InputState.to.state])

    return (
        <MetroHelperInputContext.Provider value={{InputState, InputDispatch}}>
            <MetroHelperWayContext.Provider value={{WayState, WayDispatch}}>
                {children}
            </MetroHelperWayContext.Provider>
        </MetroHelperInputContext.Provider>
    )
};

export {MetroHelperProvider, MetroHelperInputContext, MetroHelperWayContext};