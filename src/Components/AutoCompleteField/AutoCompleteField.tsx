import React, {SyntheticEvent, useContext} from 'react';
import {MetroHelperInputContext} from "../MetroHelperContext/MetroHelperContext";
import {CityContext} from "../../custom_settings";

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

import {FilterOptionsState} from "@mui/core/AutocompleteUnstyled/useAutocomplete";
import {IAutoCompleteFieldProps} from "../AdditionalFiles/interfaces";

import {matchSorter} from 'match-sorter';
import {get_color} from "../AdditionalFiles/get_scripts";

import './AutoCompleteField.scss';
import CustomField from "./CustomField";

const toTransit = (text: string): string => {
    text = text.toLowerCase().replace(/ё/gi, 'е');
    let newText: string = '';
    let converter: { [letter: string]: string } = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y',
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
        'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '', 'э': 'e',
        'ю': 'yu', 'я': 'ya'
    };

    for (let i = 0; i < text.length; ++i) {
        if (converter[text[i]] === undefined) {
            newText += text[i];
        } else {
            newText += converter[text[i]];
        }
    }

    return newText;
};

const fromEngToRu = (text: string): string => {
    text = text.toLowerCase().replace(/ё/gi, 'е');
    let newText: string = "";
    let converter: { [letter: string]: string } = {
        '`': 'е', 'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к',
        't': 'е', 'y': 'н', 'u': 'г', 'i': 'ш', 'o': 'щ',
        'p': 'з', '[': 'х', ']': 'ъ', 'a': 'ф', 's': 'ы',
        'd': 'в', 'f': 'а', 'g': 'п', 'h': 'р', 'j': 'о',
        'k': 'л', 'l': 'д', ';': 'ж', '\'': 'э', 'z': 'я',
        'x': 'ч', 'c': 'с', 'v': 'м', 'b': 'и', 'n': 'т',
        'm': 'ь', ',': 'б', '.': 'ю', '~': 'Е', '{': 'Х',
        '}': 'Ъ', ':': 'Ж', '"': 'Э', '<': 'Б', '>': 'Ю'
    };

    for (let i = 0; i < text.length; ++i) {
        if (converter[text[i]] === undefined) {
            newText += text[i];
        } else {
            newText += converter[text[i]];
        }
    }

    return newText;
};

const filterOptions = (options: string[], inputValue: FilterOptionsState<string>) => matchSorter(options, fromEngToRu(inputValue.inputValue), {
    threshold: matchSorter.rankings.WORD_STARTS_WITH,
    keys: [item => fromEngToRu(toTransit(item)), item => item.replace(/ё/gi, 'е')]
});

const AutoCompleteField: React.FC<IAutoCompleteFieldProps> = ({type, label, options, errorShow}) => {
    const city: string = useContext(CityContext).city;
    const {InputState, InputDispatch} = useContext(MetroHelperInputContext);

    const inputValue: string = InputState[type].value;
    const inputState: string = InputState[type].state;
    const inputColor: string = get_color(city, inputState);
    const inputChangeHandler = (event: SyntheticEvent, value: string) => {
        InputDispatch({
            type: type,
            newValue: value
        })
    }
    const showOptions = !((inputState !== "") || (inputValue === ""));

    return (
        <div className="menu__input_container" id={type + "_input_container"}>
            <div className={"menu__input_circle_container"} id={type + "_circle"}>
                <svg className="menu__input_circle_content" height="16" width="16">
                    <circle cx="8" cy="8" r="8" fill={inputColor}/>
                </svg>
            </div>
            <Autocomplete
                freeSolo
                id={type + "_input"}
                className="menu__input_field"
                options={showOptions ? options : []}
                filterOptions={filterOptions}
                autoHighlight
                inputValue={inputValue}
                onInputChange={inputChangeHandler}
                renderOption={(props, option: string) => (
                    <Box
                        component="li"
                        sx={{fontSize: 15, '& > span': {mr: '10px', fontSize: 18}}}
                        {...props}
                    >
                        <svg className="OptionCircle" height="16" width="25">
                            <circle cx="8" cy="8" r="8" fill={get_color(city, option)}/>
                        </svg>
                        {option}
                    </Box>
                )}
                renderInput={(params) => (
                    <CustomField
                        {...params}
                        placeholder={label}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password',
                        }}
                    />
                )}
            />
            <div style={(errorShow) ? {} : {display: 'none'}} className="input_error__container"
                 id={type + "_input_error"}>
                <div className="input_error__arrow"/>
                <div className="input_error__text_container">
                    <span className="input_error__text">Вы не задали точку маршрута</span>
                </div>
            </div>
        </div>
    );
};

export default AutoCompleteField;