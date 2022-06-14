import {IStationTimes} from "../interfaces/IStationTimes";

let counter: number = 0;
let all_ways: {way_list:string[], time:number}[] = [];

const search_way = (cur_station: string, end_station: string, times: IStationTimes, prev_station: string[], time: number, way_list: string[]) => {
    if (time === 0) {
        way_list = [];
        prev_station = [];
        way_list.push(cur_station);
    }
    if (cur_station === end_station) {
        all_ways[counter] = {way_list, time};
        counter++;
    } else {
        const possible_ways = times[cur_station];
        const possible_keys = Object.keys(possible_ways);
        for (const way of possible_keys) {
            if (!prev_station!.includes(way)) {
                let new_time = time + possible_ways[way];
                let new_list = way_list!.slice();
                let prev_list = prev_station!.slice();
                new_list.push(way);
                prev_list.push(cur_station);
                search_way(way, end_station, times, prev_list, new_time, new_list);
            }
        }
    }
}

const get_ways = (start_station: string, end_station: string, station_times: IStationTimes) => {
    counter = 0;
    all_ways = [];
    if ((start_station === "") || (end_station === "")) return {ways:[[]] as string[][], times:[] as number[]};
    search_way(start_station, end_station, station_times, [], 0, []);
    let times: number[] = [99999, 99999, 99999];
    let ways: string[][] = [[], [], []];
    for (const variants in all_ways) {
        let cur_dict = all_ways[variants];
        for (let i = 0; i < 3; i++) {
            if (times[i] > cur_dict.time) {
                for (let j = 2; j > i; j--) {
                    times[j] = times[j - 1]
                    ways[j] = ways[j - 1]
                }
                times[i] = cur_dict.time;
                ways[i] = cur_dict.way_list;
                break;
            }
        }
    }
    if (times[2] === 99999) {
        times.splice(2, 1);
        ways.splice(2, 1);
    }
    if (times[1] === 99999) {
        times.splice(1, 1);
        ways.splice(1, 1);
    }
    return {ways, times};
}

export default get_ways;