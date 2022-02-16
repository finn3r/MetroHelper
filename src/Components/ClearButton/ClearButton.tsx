import React, {useContext} from 'react';

import './ClearButton.scss';
import {MetroHelperInputContext} from "../MetroHelperContext/MetroHelperContext";

const ClearButton: React.FC = () => {
    const {InputState, InputDispatch} = useContext(MetroHelperInputContext);
    const display = (InputState.from.value !== "") || (InputState.to.value !== "");
    const clickHandler = () => {
        InputDispatch({
            type: "clear"
        })
    }
    return (
        <div className="menu__clear_container">
            <span
                style={(display) ? {} : {display: 'none'}}
                className="menu__clear_button"
                onClick={clickHandler}
            >Очистить маршрут</span>
        </div>
    );
};

export default ClearButton;