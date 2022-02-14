import React, {useContext, useState, useEffect} from 'react';
import {get_color} from "../AdditionalFiles/get_scripts";
import {CityContext} from "../../custom_settings";
import {MetroHelperContext} from "../MetroHelperContext/MetroHelperContext";
import './WayList.scss';

const WayList: React.FC = () => {
    const city: string = useContext(CityContext).city;
    const {state, dispatch} = useContext(MetroHelperContext);
    const from: string = state.InputList.from.state;
    const to: string = state.InputList.to.state;
    const ways: string[][] = state.WayList.all_ways;
    const times: number[] = state.WayList.all_times;
    const [NowWayNumber, setNowWayNumber] = useState<number>(0);
    const showOtherWays = state.WayList.show_all;

    useEffect(() => {
        dispatch({
            type: "change_now_way",
            way_number: NowWayNumber
        })
    }, [NowWayNumber, dispatch])

    useEffect(() => {
        const changeAllWays = (from: string, to: string) => {
            dispatch({
                type: "change_ways",
                from: from,
                to: to
            })
        }
        if ((from !== "") && (to !== "")) changeAllWays(from, to);
        else {
            changeAllWays("", "");
            setNowWayNumber(0);
        }
    }, [NowWayNumber, from, to, dispatch]);

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
    if (ways.length === 1) return <div className="menu__waylist_container"/>;
    return (
        <div className="menu__waylist_container">
            {ways.map((way, i) =>
                <div className={"menu__waylist_variant status_" + (!showOtherWays ? "hide" : "show")}
                     key={i + way.join()}
                     id={(NowWayNumber === i) ? "NowWay" : ""} onClick={() => {
                    setNowWayNumber(i);
                }}>
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