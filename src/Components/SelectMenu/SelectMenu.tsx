import React, {useContext} from 'react';

import './SelectMenu.scss';
import {MetroHelperInputContext} from "../MetroHelperContext/MetroHelperContext";

const SelectMenu: React.FC = () => {
    const {InputState} = useContext(MetroHelperInputContext);
    if (InputState.selected === undefined) return null;
    return (
        <g>
            <circle cx={InputState.selected.cords.x} cy={InputState.selected.cords.y} r={5} fill={"black"}/>
        </g>
    );
};

export default SelectMenu;