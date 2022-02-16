import React, {useContext} from 'react';
import {MetroHelperInputContext, MetroHelperWayContext} from "../MetroHelperContext/MetroHelperContext";
import hide_button from "./hide_button.svg"
import './HideButton.scss';

const HideButton: React.FC = () => {
    const {InputState} = useContext(MetroHelperInputContext);
    const {WayState, WayDispatch} = useContext(MetroHelperWayContext);
    const disabled = (InputState.from.state === "") || (InputState.to.state === "");
    const clickHandler = () => {
        WayDispatch({
            type: "change_show_all"
        })
    }
    return (
        <div className="menu__hide_button_container">
            <input type="image"
                   className={"menu__hide_button menu__button status_" + (WayState.show_all ? "hide" : "show")}
                   src={hide_button} onClick={clickHandler}
                   alt={WayState.show_all ? "Hide" : "Show"} disabled={disabled}/>
        </div>
    );
};

export default HideButton;