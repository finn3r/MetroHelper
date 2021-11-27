import React, {useContext, useEffect, useState} from 'react';
import {get_best_ways, get_names} from "../../Maps/getWay";
import {CityContext} from "../../custom_settings";
import './WayList.scss';
import arrows from './arrows.png';

interface WayListProps {
    from: string
    to: string

    changeNowWay(way: string[]): void
}

const WayList: React.FC<WayListProps> = ({from, to, changeNowWay}) => {
    const [ways, setWays] = useState<string[][]>([[]]);
    const [times, setTimes] = useState<number[]>([]);
    const [NowWayNumber, setNowWayNumber] = useState<number>(0);
    const [showOtherWays, setShowOtherWays] = useState<boolean>(true);
    const city = useContext(CityContext).city;
    const disabled = (from === "") || (to === "");

    useEffect(() => {
        const best_ways_and_times = ((from!=="")&&(to!=="")) ? get_best_ways(from, to, city) : [[[]],[[]]];
        setWays((best_ways_and_times[0]===[[]]) ? undefined : best_ways_and_times[0]);
        setTimes(best_ways_and_times[1]);
        setShowOtherWays(true);
        setNowWayNumber(0);
        changeNowWay(best_ways_and_times[0][0]);
    }, [from, to, city, changeNowWay]);

    const WayTransfers = (way: string[]) => {
        let stations = get_names(city);
        let NowStation = way[0];
        let NowColor = stations[NowStation];
        let Transfers = [NowColor];
        for (let i = 1; i < way.length; ++i) {
            if (NowColor !== stations[way[i]]) {
                NowColor = stations[way[i]];
                Transfers.push(NowColor);
            }
            NowStation = way[i];
        }
        return Transfers;
    }
    return (
        <div className="menu__waylist_container">
            <div className="menu__waylist_hide_button_container">
                <input type="image"
                       className={"menu__waylist_hide_button menu__button status_" + (showOtherWays ? "hide" : "show")}
                       src={arrows} onClick={() => setShowOtherWays(!showOtherWays)}
                       alt={showOtherWays ? "Hide" : "Show"} disabled={disabled}/>
            </div>
            {ways.map((way, i) =>
                <div className={"menu__waylist_variant status_" + (!showOtherWays ? "hide" : "show")} key={i}
                     id={(NowWayNumber === i) ? "NowWay" : ""} onClick={() => {
                    setNowWayNumber(i);
                    changeNowWay(way);
                }}>
                    <span className="menu__waylist_time">{times[i]} мин</span>
                    <span
                        className="menu__waylist_transfers_text">{(WayTransfers(way).length - 1 === 0) ? "Без пересадок" : (WayTransfers(way).length - 1 === 1) ? "1 пересадка" : (WayTransfers(way).length - 1) + " пересадки"}</span>
                    <p className="menu__waylist_transfers">{WayTransfers(way).map((transfer) =>
                        <svg height="16" width="16" key={i + transfer}>
                            <circle cx="8" cy="8" r="8" fill={transfer}/>
                        </svg>
                    )}</p>
                </div>
            )}
        </div>
    );
};

export default WayList;