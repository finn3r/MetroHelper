import React, {useContext} from 'react';

import './ClearButton.scss';
import {MetroHelperContext} from "../MetroHelperContext/MetroHelperContext";

const ClearButton: React.FC = () => {
    const {state, dispatch} = useContext(MetroHelperContext);
    const display = (state.InputList.from.value !== "") || (state.InputList.to.value !== "");
    const clickHandler = () => {
        dispatch({
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