import React, {useContext, useEffect} from 'react';
import AutoCompleteField from "../AutoCompleteField/AutoCompleteField";
import SwapButton from "../SwapButton/SwapButton";
import ClearButton from "../ClearButton/ClearButton";
import HideButton from "../HideButton/HideButton";
import {get_names} from "../AdditionalFiles/get_scripts";
import {MetroHelperContext} from "../MetroHelperContext/MetroHelperContext";
import {CityContext} from "../../custom_settings";

import './InputMenu.scss';

const InputMenu: React.FC = () => {
    const {state} = useContext(MetroHelperContext);
    const city: string = useContext(CityContext).city;
    const stations: string[] = get_names(city);
    const FromOptions: string[] = stations.filter(item => (item !== state.InputList.to.state)).sort();
    const ToOptions: string[] = stations.filter(item => (item !== state.InputList.from.state)).sort();
    const FromErrorShow: boolean = !((state.InputList.from.state!=="")||(state.InputList.from.value===""));
    const ToErrorShow: boolean = !((state.InputList.to.state!=="")||(state.InputList.to.value===""))&&!FromErrorShow;

    useEffect(() => {
        const From: HTMLElement = document.getElementById('from_input')!;
        const To: HTMLElement = document.getElementById('to_input')!;
        if ((state.InputList.from.state === "")&&(state.InputList.to.state !== "")) {
            From!.focus();
        } else if ((state.InputList.to.state === "")&&(state.InputList.from.state !== "")) {
            To!.focus();
        } else if ((state.InputList.to.state !== "")&&(state.InputList.from.state !== "")) {
            From!.blur();
            To!.blur();
        }
    }, [state.InputList.from.state, state.InputList.to.state]);

    useEffect(() => {
        document.getElementById('from_input')!.focus();
    }, []);

    return (
        <div className={"menu__input"}>
            <AutoCompleteField type="from" label={"Откуда"} options={FromOptions} errorShow={FromErrorShow}/>
            <SwapButton/>
            <AutoCompleteField type="to" label={"Куда"} options={ToOptions} errorShow={ToErrorShow}/>
            <ClearButton/>
            <HideButton/>
        </div>
    );
}

export default InputMenu;