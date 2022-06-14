import React, {useState, useMemo, KeyboardEvent} from 'react';
import * as ST from '../../../styled';
import {ReactComponent as CircleInput} from "../../../svg/CircleInput.svg";
import {IInput} from "../../../interfaces/IInput";
import searchOptions from "../../../scripts/searchOptions"
import AutoComplete from "./AutoComplete";
import {useAppSelector} from "../../../hooks/redux";

const Index = React.forwardRef<HTMLInputElement, IInput>(({value, changeValue, placeHolder, options, focused, changeFocus}, ref) => {
    const {stations} = useAppSelector(state => state.city);
    const [select, setSelect] = useState(0);

    const searchedOptions: string[] = useMemo(() => {
        return options ? searchOptions(value, options).filter(option => option !== value) : []
    }, [options, value]);

    const handleSelect = (e: KeyboardEvent<HTMLDivElement>) => {
        switch (e.code) {
            case "Enter":
                if (searchedOptions.length !== 0) changeValue(searchedOptions[select]);
                break
            case "ArrowDown":
                (select !== searchedOptions.length - 1) ? setSelect(select + 1) : setSelect(0);
                break
            case "ArrowUp":
                (select !== 0) ? setSelect(select - 1) : setSelect(searchedOptions.length - 1);
                break
        }
    };

    return (
        <ST.InputContainer data-type={placeHolder}>
            <ST.InputCircle style={{gridArea: "circle"}} className={focused ? "focused" : ""}>
                <CircleInput fill={stations[options?.includes(value) ? value : ""] ?? "rgba(0, 0, 0, 0.5)"}/>
            </ST.InputCircle>
            <ST.InputFieldContainer className={focused ? "focused" : ""}>
                <ST.InputField
                    ref={ref}
                    spellCheck={false}
                    placeholder={placeHolder}
                    value={value}
                    onFocus={() => changeFocus ? changeFocus(true) : null}
                    onKeyDown={handleSelect}
                    onChange={(e) => changeValue(e.target.value)}
                />
                <ST.InputUnFocusButton>
                    <ST.InputUnFocusButtonText
                        onClick={() => changeFocus ? changeFocus(false) : null}
                    >
                        Отмена
                    </ST.InputUnFocusButtonText>
                </ST.InputUnFocusButton>
                <AutoComplete
                    options={value ? searchedOptions: []}
                    hidden={!value}
                    changeValue={changeValue}
                    changeSelected={setSelect}
                    selected={select}
                />
                <ST.InputClearButton hidden={!value} onClick={() => changeValue("")}>
                    x
                </ST.InputClearButton>
            </ST.InputFieldContainer>
        </ST.InputContainer>
    );
});

export default Index;