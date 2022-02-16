import React, {useContext, useState, useEffect} from 'react';
import {get_color} from "../AdditionalFiles/get_scripts";
import {CityContext} from "../../custom_settings";
import {MetroHelperWayContext} from "../MetroHelperContext/MetroHelperContext";
import './WayList.scss';

const WayList: React.FC = () => {
    const city: string = useContext(CityContext).city;
    const {WayState, WayDispatch} = useContext(MetroHelperWayContext);
    const ways: string[][] = WayState.all_ways;
    const times: number[] = WayState.all_times;
    const [NowWayNumber, setNowWayNumber] = useState<number>(0);
    const showOtherWays = WayState.show_all;

    const clickHandler = (way_number: number) => {
        return () => {
            setNowWayNumber(way_number);
            WayDispatch({
                type: "change_now_way",
                way_number: way_number
            })
        }
    }

    useEffect(() => {
        setNowWayNumber(0);
    }, [ways]);

    const WayTransfers = (way: string[]) => {
        let NowStation = way[0];
        let NowColor = get_color(city, NowStation);
        let Transfers = [NowColor];
        for (let i = 1; i < way.length; ++i) {
            if (NowColor !== get_color(city, way[i])) {
                NowColor = get_color(city, way[i]);
                Transfers.push(NowColor);
            }
            NowStation = way[i];
        }
        return Transfers;
    }
    if (ways[0] === undefined) return <div className="menu__waylist_container"/>;
    return (
        <div className="menu__waylist_container">
            {ways.map((way, i) =>
                <div className={"menu__waylist_variant status_" + (!showOtherWays ? "hide" : "show")}
                     key={i + way.join()}
                     id={(NowWayNumber === i) ? "NowWay" : ""} onClick={clickHandler(i)}>
                    <span className="menu__waylist_time">{times[i]} мин</span>
                    <span
                        className="menu__waylist_transfers_text">{(WayTransfers(way).length - 1 === 0) ? "Без пересадок" : (WayTransfers(way).length - 1 === 1) ? "1 пересадка" : (WayTransfers(way).length - 1) + " пересадки"}</span>
                    <p className="menu__waylist_transfers">{WayTransfers(way).map((transfer, j) =>
                        <svg height="16" width="16" key={j + transfer}>
                            <circle cx="8" cy="8" r="8" fill={transfer}/>
                        </svg>
                    )}</p>
                </div>
            )}
        </div>
    );
};

export default WayList;