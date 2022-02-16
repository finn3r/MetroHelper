import React, {useContext, useEffect} from 'react';
import AutoCompleteField from "../AutoCompleteField/AutoCompleteField";
import SwapButton from "../SwapButton/SwapButton";
import ClearButton from "../ClearButton/ClearButton";
import HideButton from "../HideButton/HideButton";
import {get_names} from "../AdditionalFiles/get_scripts";
import {MetroHelperInputContext} from "../MetroHelperContext/MetroHelperContext";
import {CityContext} from "../../custom_settings";

import './InputMenu.scss';

const InputMenu: React.FC = () => {
    const {InputState} = useContext(MetroHelperInputContext);
    const city: string = useContext(CityContext).city;
    const stations: string[] = get_names(city);
    const FromOptions: string[] = stations.filter(item => (item !== InputState.to.state)).sort();
    const ToOptions: string[] = stations.filter(item => (item !== InputState.from.state)).sort();
    const FromErrorShow: boolean = !((InputState.from.state!=="")||(InputState.from.value===""));
    const ToErrorShow: boolean = !((InputState.to.state!=="")||(InputState.to.value===""))&&!FromErrorShow;

    useEffect(() => {
        const From: HTMLElement = document.getElementById('from_input')!;
        const To: HTMLElement = document.getElementById('to_input')!;
        if ((InputState.from.state === "")&&(InputState.to.state !== "")) {
            From!.focus();
        } else if ((InputState.to.state === "")&&(InputState.from.state !== "")) {
            To!.focus();
        } else if ((InputState.to.state !== "")&&(InputState.from.state !== "")) {
            From!.blur();
            To!.blur();
        }
    }, [InputState.from.state, InputState.to.state]);

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