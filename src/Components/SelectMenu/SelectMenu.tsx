import React, {useContext, useEffect} from 'react';

import './SelectMenu.scss';
import {get_names} from "../../Maps/getWay";
import {CityContext} from "../../custom_settings";

interface SelectMenuProps {
    station: string
    fromStation:string
    toStation:string

    changeFrom(station: string):void
    changeTo(station: string):void
    changeSelected(station: string):void
}

const SelectMenu: React.FC<SelectMenuProps> = ({station, fromStation, toStation, changeFrom, changeTo, changeSelected}) => {
    const stations: any = get_names(useContext(CityContext).city);
    useEffect(() =>{
        if(station!=="") if(fromStation===""){
            changeFrom(station);
            changeSelected("");
        }else if(toStation===""){
            changeTo(station);
            changeSelected("");
        }
    },[changeFrom, changeTo, changeSelected, station, toStation, fromStation])
    if(station==="")return null;
    return (
        <div className="menu__select_content menu__content">
            <div className="menu__select_container">
                <svg className="menu__select_text_circle" height="16" width="16" >
                    <circle	cx="8" cy="8" r="8" fill={(stations[station]!==undefined) ? (stations[station]) : "rgba(84, 84, 84, 0.5)"}/>
                </svg>
                <p className="menu__select_text">{station}</p>
            </div>
            <div className="menu__select_container">
                <button className="menu__select_button" onClick={() => {changeFrom(station);changeSelected("");}}>Откуда</button>
                <button className="menu__select_button" onClick={() => {changeTo(station);changeSelected("");}}>Куда</button>
            </div>
        </div>
    );
};

export default SelectMenu;