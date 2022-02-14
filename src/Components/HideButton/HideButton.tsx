import React, {useContext} from 'react';
import {MetroHelperContext} from "../MetroHelperContext/MetroHelperContext";
import hide_button from "./hide_button.svg"
import './HideButton.scss';

const HideButton: React.FC = () => {
    const {state, dispatch} = useContext(MetroHelperContext);
    const disabled = (state.InputList.from.state === "") || (state.InputList.to.state === "");
    const clickHandler = () => {
        dispatch({
            type: "change_show_all"
        })
    }
    return (
        <div className="menu__hide_button_container">
            <input type="image"
                   className={"menu__hide_button menu__button status_" + (state.WayList.show_all ? "hide" : "show")}
                   src={hide_button} onClick={clickHandler}
                   alt={state.WayList.show_all ? "Hide" : "Show"} disabled={disabled}/>
        </div>
    );
};

export default HideButton;