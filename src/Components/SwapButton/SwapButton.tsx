import React, {useContext, useState} from 'react';
import {MetroHelperInputContext} from "../MetroHelperContext/MetroHelperContext";
import swap_button from "./swap_button.svg"
import './SwapButton.scss';

const SwapButton: React.FC = () => {
    const {InputState, InputDispatch} = useContext(MetroHelperInputContext);
    const [rotate, setRotate] = useState<boolean>(false);
    const clickHandler = () => {
        setRotate(!rotate);
        InputDispatch({
            type: "swap"
        })
    };
    const disable = (InputState.from.state === "") || (InputState.to.state === "");
    return (
        <div className="menu__swap_container">
            <input type="image" className={"menu__swap_button menu__button " + ((rotate) ? "button_rotate_360_deg" : "")}
                   onClick={clickHandler} src={swap_button}
                   alt="Swap" disabled={disable}/>
        </div>
    );
};

export default SwapButton;