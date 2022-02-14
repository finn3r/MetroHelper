import React, {useContext} from 'react';

import './SelectMenu.scss';
import {MetroHelperContext} from "../MetroHelperContext/MetroHelperContext";

const SelectMenu: React.FC = () => {
    const {state} = useContext(MetroHelperContext);
    if (state.InputList.selected === undefined) return null;
    return (
        <g>
            <circle cx={state.InputList.selected.cords.x} cy={state.InputList.selected.cords.y} r={5} fill={"black"}/>
        </g>
    );
};

export default SelectMenu;