import React, {useContext, useEffect} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {FilterOptionsState} from "@mui/core/AutocompleteUnstyled/useAutocomplete";
import CustomField from "./CustomField";
import Box from '@mui/material/Box';

import {matchSorter} from 'match-sorter';
import './AutoCompleteField.scss';
import {get_names} from "../../Maps/getWay";
import {CityContext} from "../../custom_settings";

const toTransit = (text: string) => {
    return text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
        function (all, ch, space, words) {
            if (space || words) {
                return space ? '_' : '';
            }
            let code = ch.charCodeAt(0),
                index = code === 1025 || code === 1105 ? 0 :
                    code > 1071 ? code - 1071 : code - 1039,
                t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                    'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                    'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                    'shh', '', 'y', '', 'e', 'yu', 'ya'
                ];
            return t[index];
        });
}

function changeLang(text: string) {
    text = text.toLowerCase().replace(/ё/gi, 'е');
    let enTOru: any = {
        '`': 'е',
        'q': 'й',
        'w': 'ц',
        'e': 'у',
        'r': 'к',
        't': 'е',
        'y': 'н',
        'u': 'г',
        'i': 'ш',
        'o': 'щ',
        'p': 'з',
        '[': 'х',
        ']': 'ъ',
        'a': 'ф',
        's': 'ы',
        'd': 'в',
        'f': 'а',
        'g': 'п',
        'h': 'р',
        'j': 'о',
        'k': 'л',
        'l': 'д',
        ';': 'ж',
        '\'': 'э',
        'z': 'я',
        'x': 'ч',
        'c': 'с',
        'v': 'м',
        'b': 'и',
        'n': 'т',
        'm': 'ь',
        ',': 'б',
        '.': 'ю',
        '~': 'Е',
        'Q': 'Й',
        'W': 'Ц',
        'E': 'У',
        'R': 'К',
        'T': 'Е',
        'Y': 'Н',
        'U': 'Г',
        'I': 'Ш',
        'O': 'Щ',
        'P': 'З',
        '{': 'Х',
        '}': 'Ъ',
        'A': 'Ф',
        'S': 'Ы',
        'D': 'В',
        'F': 'А',
        'G': 'П',
        'H': 'Р',
        'J': 'О',
        'K': 'Л',
        'L': 'Д',
        ':': 'Ж',
        '"': 'Э',
        'Z': 'Я',
        'X': 'Ч',
        'C': 'С',
        'V': 'М',
        'B': 'И',
        'N': 'Т',
        'M': 'Ь',
        '<': 'Б',
        '>': 'Ю',
    };
    let newText: string = "";
    for (let i = 0; i < text.length; i++) {
        if (enTOru[text[i]] !== undefined) {
            newText += enTOru[text[i]];
        } else {
            newText += text[i];
        }
    }
    return newText;
}

const filterOptions = (options: string[], inputValue: FilterOptionsState<string>) => matchSorter(options, changeLang(inputValue.inputValue), {
    threshold: matchSorter.rankings.WORD_STARTS_WITH,
    keys: [item => changeLang(toTransit(item)), item => item.replace(/ё/gi, 'е')]
});

interface AutoCompleteFieldProps {
    id: string
    inputValue: string
    stationValue: string
    secondStationValue: string
    label: string
    showError: boolean

    changeState(text: string): void
    changeInput(text: string): void
}

const AutoCompleteField: React.FC<AutoCompleteFieldProps> = ({id, inputValue,stationValue, secondStationValue, label, showError, changeState, changeInput}) => {
    const stations: any = get_names(useContext(CityContext).city);
    const show = !((stationValue !== "") || (inputValue === ""));

    useEffect(() => {
        changeState(((stations[inputValue] !== undefined)&&(inputValue !== secondStationValue)) ? inputValue : "");
    }, [inputValue, changeState, stations, secondStationValue]);

    return (
        <div className="menu__input_container">
            <svg className="menu__input_circle" height="16" width="16" >
                <circle	cx="8" cy="8" r="8" fill={(stations[stationValue]!==undefined) ? (stations[stationValue]) : "rgba(84, 84, 84, 0.5)"}/>
            </svg>
            <Autocomplete
                freeSolo
                id={id}
                className="menu__input_field"
                options={(show) ? Object.keys(stations).filter(item => item !== secondStationValue).sort() : []}
                filterOptions={filterOptions}
                autoHighlight
                inputValue={inputValue}
                onInputChange={(event, value) => {
                    changeInput(value);
                }}
                renderOption={(props, option: string) => (
                    <Box
                        component="li"
                        sx={{fontSize: 15, '& > span': {mr: '10px', fontSize: 18}}}
                        {...props}
                    >
                        <svg className="OptionCircle" height="16" width="25">
                            <circle cx="8" cy="8" r="8" fill={stations[option]}/>
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
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                    />
                )}
            />
            <div style={(showError) ? {} : {display: 'none'}} className="input_error__container" id={id+"_error"}>
                <div className="input_error__arrow"/>
                <span className="input_error__content">Вы не задали точку маршрута</span>
            </div>
        </div>
    );
};

export default AutoCompleteField;