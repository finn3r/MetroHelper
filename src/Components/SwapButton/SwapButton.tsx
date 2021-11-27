import React, {useContext} from 'react';

import arrows from './arrows.png';
import './SwapButton.scss';
import {get_names} from "../../Maps/getWay";
import {CityContext} from "../../custom_settings";

interface SwapButtonProps {
    first: string
    second: string

    swap(): void
}

const SwapButton: React.FC<SwapButtonProps> = ({first, second, swap}) => {
    const stations: any = get_names(useContext(CityContext).city);
    const disabled = (stations[first] === undefined) && (stations[second] === undefined);
    return (
        <div className="menu__swap_container">
            <input type="image" className="menu__swap_button menu__button" onClick={swap} src={arrows} alt="Swap" disabled={disabled}/>
        </div>
    );
};

export default SwapButton;