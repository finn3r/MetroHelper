import React, {useEffect, useState} from 'react';
import * as ST from '../../styled';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {inputSlice} from "../../store/reducers/InputSlice";
import get_ways from "../../scripts/getWays";
import {IStationNames} from "../../interfaces/IStationNames";
import {ReactComponent as CircleInput} from "../../svg/CircleInput.svg";
import {ReactComponent as ArrowForward} from "../../svg/ArrowForward.svg";

const WayTransfers = (stations: IStationNames, way: string[]) => {
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

const WayList: React.FC = () => {
    const {stations, times} = useAppSelector(state => state.city);
    const {from, to, hideWays} = useAppSelector(state => state.input);
    const {changeWay, changeHideWays} = inputSlice.actions;
    const dispatch = useAppDispatch();
    const [NowWayNumber, setNowWayNumber] = useState<number>(0);
    const [waysList, setWaysList] = useState<{ ways: string[][], times: number[] }>({
        ways: [[]],
        times: []
    })

    const handleClick = (way_number: number) => () => {
        setNowWayNumber(way_number);
        dispatch(changeWay(waysList.ways[way_number]));
    };

    useEffect(() => {
        const newWayList = get_ways(from.state, to.state, times);
        setWaysList(newWayList);
    }, [from.state, times, to.state]);

    useEffect(() => {
        setNowWayNumber(0);
        dispatch(changeWay(waysList.ways[0]));
        dispatch(changeHideWays(true));
    }, [changeHideWays, changeWay, dispatch, waysList]);

    return (
        <ST.MenuWayListContainer>
            {waysList.ways[0][0] ? waysList.ways.map((way, i) =>
                <ST.MenuWayListVariant key={i} nowWay={i === NowWayNumber} onClick={handleClick(i)} hide={hideWays}>
                    <ST.MenuWayListTime className="menu__waylist_time">{waysList.times[i]} мин</ST.MenuWayListTime>
                    <ST.MenuWayListTransferText
                        className="menu__waylist_transfers_text">{(WayTransfers(stations, way).length - 1 === 0) ? "Без пересадок" : (WayTransfers(stations, way).length - 1 === 1) ? "1 пересадка" : (WayTransfers(stations, way).length - 1) + " пересадки"}</ST.MenuWayListTransferText>
                    <ST.MenuWayListTransferCircles
                        className="menu__waylist_transfers">{WayTransfers(stations, way).map((transfer, j) =>
                        <span style={{display: "inline-flex", justifyContent: "center", alignItems: "center"}} key={j + transfer}>
                            <CircleInput fill={transfer}/>
                            {j !== (WayTransfers(stations, way).length - 1) ? <ArrowForward/> : null}
                        </span>
                    )}</ST.MenuWayListTransferCircles>
                </ST.MenuWayListVariant>
            ) : null}
        </ST.MenuWayListContainer>
    );
};

export default WayList;