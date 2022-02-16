import React, {useContext} from 'react';

import './SelectMenu.scss';
import {MetroHelperInputContext} from "../MetroHelperContext/MetroHelperContext";

const SelectMenu: React.FC = () => {
    const {InputState, InputDispatch} = useContext(MetroHelperInputContext);
    if (InputState.selected === undefined) return null;
    const selectedFrom: boolean = InputState.selected.name === InputState.from.state;
    const selectedTo: boolean = InputState.selected.name === InputState.to.state;
    const fromClickHandler = () => {
        InputDispatch({
            type:"from",
            newValue:InputState.selected?.name!
        })
        InputDispatch({
            type:"select",
            station: undefined
        })
    }
    const toClickHandler = () => {
        InputDispatch({
            type:"to",
            newValue:InputState.selected?.name!
        })
        InputDispatch({
            type:"select",
            station: undefined
        })
    }
    return (
        <g className={"menu__select_container"}>
            <svg x={InputState.selected.cords.x - 29} y={InputState.selected.cords.y - 71} width="120" height="71"
                 viewBox="0 0 120 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_3_16" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10 0C4.47715 0 0 4.47715 0 10V50.121C0 55.6438 4.47715 60.121 10 60.121H21.1027L28.2189 69.0229C28.6192 69.5237 29.3808 69.5237 29.7811 69.0229L36.8973 60.121H110C115.523 60.121 120 55.6438 120 50.121V10C120 4.47715 115.523 0 110 0H10Z"/>
                </mask>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M10 0C4.47715 0 0 4.47715 0 10V50.121C0 55.6438 4.47715 60.121 10 60.121H21.1027L28.2189 69.0229C28.6192 69.5237 29.3808 69.5237 29.7811 69.0229L36.8973 60.121H110C115.523 60.121 120 55.6438 120 50.121V10C120 4.47715 115.523 0 110 0H10Z"
                      fill="white"/>
                <path
                    d="M21.1027 60.121L21.8838 59.4966L21.5836 59.121H21.1027V60.121ZM28.2189 69.0229L29 68.3985L29 68.3985L28.2189 69.0229ZM29.7811 69.0229L29 68.3985L29 68.3985L29.7811 69.0229ZM36.8973 60.121V59.121H36.4164L36.1162 59.4966L36.8973 60.121ZM1 10C1 5.02944 5.02944 1 10 1V-1C3.92487 -1 -1 3.92487 -1 10H1ZM1 50.121V10H-1V50.121H1ZM10 59.121C5.02944 59.121 1 55.0915 1 50.121H-1C-1 56.1961 3.92487 61.121 10 61.121V59.121ZM21.1027 59.121H10V61.121H21.1027V59.121ZM29 68.3985L21.8838 59.4966L20.3216 60.7454L27.4378 69.6473L29 68.3985ZM29 68.3985H29L27.4378 69.6473C28.2385 70.6489 29.7615 70.6489 30.5622 69.6473L29 68.3985ZM36.1162 59.4966L29 68.3985L30.5622 69.6473L37.6784 60.7454L36.1162 59.4966ZM110 59.121H36.8973V61.121H110V59.121ZM119 50.121C119 55.0915 114.971 59.121 110 59.121V61.121C116.075 61.121 121 56.1961 121 50.121H119ZM119 10V50.121H121V10H119ZM110 1C114.971 1 119 5.02944 119 10H121C121 3.92487 116.075 -1 110 -1V1ZM10 1H110V-1H10V1Z"
                    fill="black" mask="url(#path-1-inside-1_3_16)"/>
                <line x1="60.5" y1="8.01613" x2="60.5" y2="51.1028" stroke="black"/>
                <g className={"menu__select_button " + ((selectedTo) ? "menu__select_button_now" : "")} onClick={toClickHandler}>
                    <rect x="25" y="11.0222" width="8" height="27.0544"/>
                    <path d="M29 48.0968L19.4737 36.1799H38.5263L29 48.0968Z"/>
                </g>
                <g className={"menu__select_button " + ((selectedFrom) ? "menu__select_button_now" : "")} onClick={fromClickHandler}>
                    <rect x="95" y="48.0968" width="8" height="27.0544" transform="rotate(-180 95 48.0968)"/>
                    <path d="M91 11.0222L100.526 22.939L81.4737 22.939L91 11.0222Z" />
                </g>
            </svg>

        </g>
    );
};

export default SelectMenu;