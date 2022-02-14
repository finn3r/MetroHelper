import React, {createContext, Dispatch, useReducer} from 'react';
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
}

type WayList = {
    now_way: string[];
    all_ways: string[][];
    all_times: number[];
    show_all: boolean;
}

type InitialStateType = {
    InputList: InputList;
    WayList: WayList;
}

export type OnlyInputTypes = {
    [k in keyof InputList]: InputList[k] extends InputType ? k : never
}[keyof InputList];

type InputListPayload =
    | { type: 'from', newValue: string }
    | { type: 'to', newValue: string }
    | { type: 'select', station: IStation}
    | { type: 'swap' }
    | { type: 'clear'};

type WayListPayload =
    | { type: 'change_now_way', way_number: number }
    | { type: 'change_ways', from: string, to: string }
    | { type: 'change_show_all' };

const initialState = {
    InputList: {
        from: {value: "", state: ""},
        to: {value: "", state: ""},
        selected: undefined
    },
    WayList: {
        now_way: [],
        all_ways: [[]],
        all_times: [],
        show_all: true
    }
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

const getReducer = (city: string) => {
    const InputListReducer = getInputListReducer(city);
    const WayListReducer = getWayListReducer(city);
    return ({ InputList, WayList}: InitialStateType, action: InputListPayload | WayListPayload) => ({
        InputList: InputListReducer(InputList, action as InputListPayload),
        WayList: WayListReducer(WayList, action as WayListPayload)
    });
}

const MetroHelperContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<InputListPayload | WayListPayload>;
}>({
    state: initialState,
    dispatch: () => null
});

const MetroHelperProvider: React.FC<IMetroHelperProviderProps> = ({city, children}) => {
    const [state, dispatch] = useReducer(getReducer(city), initialState);

    return (
        <MetroHelperContext.Provider value={{state, dispatch}}>
            {children}
        </MetroHelperContext.Provider>
    )
};

export {MetroHelperProvider, MetroHelperContext};