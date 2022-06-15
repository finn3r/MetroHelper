import React, {useEffect, useRef, useState} from 'react';
import * as ST from '../../styled';
import Input from "./Input";
import {ReactComponent as SwapButton} from "../../svg/SwapButton.svg";
import {ReactComponent as HideButton} from "../../svg/HideButton.svg";
import {inputSlice} from "../../store/reducers/InputSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const InputList: React.FC = () => {
    const {stations} = useAppSelector(state => state.city);
    const {from, to, hideWays} = useAppSelector(state => state.input);
    const {changeFrom, changeTo, swap, clear, changeHideWays} = inputSlice.actions;
    const fromRef = useRef<HTMLInputElement>(null);
    const toRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const stationsNames: string[] = Object.keys(stations);
    const [fromFocus, setFromFocus] = useState(false);
    const [toFocus, setToFocus] = useState(false);
    const [rotate, setRotate] = useState(false);

    const stationOptions = {
        from: stationsNames.filter(station => station !== to.state),
        to: stationsNames.filter(station => station !== from.state)
    };

    const handleFocus = (from: boolean, to: boolean) => {
        setFromFocus(from);
        setToFocus(to);
    };

    //Autofocus
    useEffect(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 700) {
            //For PC
            if (from.state === "") {
                fromRef.current?.focus();
            } else if (to.state === "") {
                toRef.current?.focus();
            } else {
                fromRef.current?.blur();
                toRef.current?.blur();
                handleFocus(false, false);
            }
        } else {
            //For mobile
            if (from.state !== "") {
                fromRef.current?.blur();
                setFromFocus(false);
            }
            if (to.state !== "") {
                toRef.current?.blur();
                setToFocus(false);
            }
        }
    }, [from.state, to.state]);

    return (
        <ST.MenuInputListContainer>
            {/*INPUT FROM*/}
            <Input ref={fromRef} placeHolder={"Откуда"} value={from.value} focused={fromFocus}
                   changeFocus={(state) => handleFocus(state, false)}
                   changeValue={(value) => dispatch(changeFrom({value, stations: stationOptions.from}))}
                   options={stationOptions.from}/>
            {/*INPUT TO*/}
            <Input ref={toRef} placeHolder={"Куда"} value={to.value} focused={toFocus}
                   changeFocus={(state) => handleFocus(false, state)}
                   changeValue={(value) => dispatch(changeTo({value, stations: stationOptions.to}))}
                   options={stationOptions.to}/>
            {/*SWAP BUTTON*/}
            <ST.ButtonContainer style={{gridArea: "swap"}}>
                <ST.SwapButtonContent disabled={!from.state && !to.state} status={rotate}>
                    <SwapButton style={{width: "100%"}}
                                onClick={() => {
                                    dispatch(swap());
                                    setRotate(!rotate);
                                }}
                    />
                </ST.SwapButtonContent>
            </ST.ButtonContainer>
            {/*CLEAR BUTTON*/}
            <ST.ButtonContainer style={{gridArea: "clear", marginLeft: ".7rem"}}>
                <ST.ButtonContent onClick={() => dispatch(clear())} hidden={!from.state && !to.state}>
                    Очистить маршрут
                </ST.ButtonContent>
            </ST.ButtonContainer>
            {/*HIDE BUTTON*/}
            <ST.HideButtonContainer style={{gridArea: "hide", marginLeft: "-.3rem"}}>
                <ST.HideButtonContent hidden={!from.state || !to.state} status={hideWays}>
                    <HideButton style={{width: "100%"}} onClick={() => dispatch(changeHideWays(!hideWays))}/>
                </ST.HideButtonContent>
            </ST.HideButtonContainer>
        </ST.MenuInputListContainer>
    );
};

export default InputList;