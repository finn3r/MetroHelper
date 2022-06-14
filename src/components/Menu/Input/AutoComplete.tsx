import React, {useEffect} from 'react';
import * as ST from "../../../styled";
import {ReactComponent as CircleInput} from "../../../svg/CircleInput.svg";
import {IAutoComplete} from "../../../interfaces/IAutoComplete";
import {useAppSelector} from "../../../hooks/redux";

const AutoComplete: React.FC<IAutoComplete> = ({changeSelected, changeValue, options, hidden, selected}) => {
    const {stations} = useAppSelector(state => state.city);
    useEffect(() => {
        changeSelected(0);
    },[changeSelected, options]);

    useEffect(() => {
        document.getElementById("selected")?.scrollIntoView({block: "nearest"});
    },[selected]);

    return (
        <ST.InputAutoCompleteContainer hidden={hidden} onMouseDown={(e) => e.preventDefault()}>
            {options.map((option, id) =>
                <ST.InputAutoCompleteContent
                    key={option}
                    onMouseEnter={() => changeSelected(id)}
                    onClick={() => changeValue(option)}
                    id={(id === selected) ? "selected" : ""}
                >
                    <CircleInput fill={stations[option] ?? "rgba(0, 0, 0, 0.5)"}/>
                    {option}
                </ST.InputAutoCompleteContent>
            )}
        </ST.InputAutoCompleteContainer>
    );
};

export default AutoComplete;