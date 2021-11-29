import React, {useState, useEffect, useContext} from 'react';
import AutoCompleteField from "../AutoCompleteField/AutoCompleteField";
import WayList from "../WaysList/WayList";
import SwapButton from "../SwapButton/SwapButton";
import {CityContext} from "../../custom_settings";
import {get_names} from "../../Maps/getWay";
import ClearButton from "../ClearButton/ClearButton";
import MetroScheme from "../MetroScheme/MetroScheme";
import SelectMenu from "../SelectMenu/SelectMenu";
import './App.scss';

const App: React.FC = () => {
    const [FromValue, setFromValue] = useState<string>("");
    const [ToValue, setToValue] = useState<string>("");
    const [FromInput, setFromInput] = useState<string>("");
    const [ToInput, setToInput] = useState<string>("");

    const [NowWay, setNowWay] = useState<string[]>([]);

    const FromErrorShow: boolean = !((FromValue!=="")||(FromInput===""));
    const ToErrorShow: boolean = (!((ToValue!=="")||(ToInput===""))&&!FromErrorShow);
    const stations: any = get_names(useContext(CityContext).city);

    const changeValues = (from: string, to: string) => {
        setFromInput(to);
        setToInput(from);
        setFromValue((stations[to]!==undefined) ? to : "");
        setToValue((stations[from]!==undefined) ? from : "");
    }
    useEffect(() => {
        document.getElementById('from_input')!.focus();
    }, []);

    useEffect(() => {
        const From: HTMLElement = document.getElementById('from_input')!;
        const To: HTMLElement = document.getElementById('to_input')!;
        if ((FromValue === "")&&(ToValue !== "")) {
            From!.focus();
        } else if ((ToValue === "")&&(FromValue !== "")) {
            To!.focus();
        } else if ((ToValue !== "")&&(FromValue !== "")) {
            From!.blur();
            To!.blur();
        }
    }, [FromValue, ToValue]);

    return (
        <div className="main">
            <MetroScheme way={NowWay}/>
            <div className="menu__container">
                <div className="menu__input_content">
                    <header className="menu__input_header">Санкт-Петербург — схема метро</header>
                    <AutoCompleteField id="from_input" label={"Откуда"} inputValue={FromInput} changeInput={setFromInput} showError={FromErrorShow} stationValue={FromValue} changeState={setFromValue} secondStationValue={ToValue}/>
                    <SwapButton first={FromInput} second={ToInput} swap={() => changeValues(FromInput, ToInput)}/>
                    <AutoCompleteField id="to_input" label={"Куда"} inputValue={ToInput} changeInput={setToInput} showError={ToErrorShow} stationValue={ToValue} changeState={setToValue} secondStationValue={FromValue}/>
                    <ClearButton first={FromInput} second={ToInput} clear={() => changeValues("", "")}/>
                    <WayList from={FromValue} to={ToValue} changeNowWay={setNowWay}/>
                </div>
                <SelectMenu station={"test"}/>
            </div>
        </div>
    );
}

export default App;
