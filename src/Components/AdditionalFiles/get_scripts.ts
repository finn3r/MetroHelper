import {ISchemeElements} from "./interfaces";
import {SanktPetersburg} from "../../Maps/Schemes/Sankt_Petersburg";
import {metroStationsTimesListSPB} from "../../Maps/Ways/Sankt_Petersburg";
import {metroStationsListSPB} from "../../Maps/Names/Sankt_Petersburg";

let counter: number = 0;
let all_ways: any[] = [];
let times: any;

function search_way(cur_station: string, end_station: string, times: any, prev_station: string[], time: number, way_list: string[]) {
    if (time === 0) {
        way_list = [];
        prev_station = [];
        way_list.push(cur_station);
    }
    if (cur_station === end_station) {
        all_ways[counter] = new Map([[way_list, time]]);
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

const defaultScheme: ISchemeElements = {
    background: {type: "g", props: {}, width: 0, height: 0},
    others: [],
    stations: [],
    roads: []
}

export function get_names(city: string): string[] {
    switch(city) {
        case "Санкт-Петербург": {
            return Object.keys(metroStationsListSPB);
        }
        default: {
            return [];
        }
    }
}

export function get_scheme(city: string): ISchemeElements {
    switch(city) {
        case "Санкт-Петербург": {
            return SanktPetersburg;
        }
        default: {
            return defaultScheme;
        }
    }
}

export function get_color(city: string, station: string): string {
    switch (city) {
        case "Санкт-Петербург": {
            return (metroStationsListSPB[station] !== undefined) ? metroStationsListSPB[station] : "rgba(84, 84, 84, 0.5)";
        }
        default: {
            return "rgba(84, 84, 84, 0.5)";
        }
    }
}

export function get_ways(start_station: string, end_station: string, city: string) {
    counter = 0;
    all_ways = [];
    switch (city) {
        case "Санкт-Петербург": {
            times = metroStationsTimesListSPB;
            break;
        }
        default: {
            break;
        }
    }
    if ((start_station === "") || (end_station === "")) return [[], []];
    search_way(start_station, end_station, times, [], 0, []);
    let best_time: number[] = [99999, 99999, 99999];
    let best_ways: string[][] = [[], [], []];
    for (const variants in all_ways) {
        let cur_dict = all_ways[variants];
        for (let times = 0; times < 3; times++) {
            if (best_time[times] > cur_dict.values().next().value) {
                for (let i = 2; i > times; i--) {
                    best_time[i] = best_time[i - 1]
                    best_ways[i] = best_ways[i - 1]
                }
                best_time[times] = cur_dict.values().next().value;
                best_ways[times] = cur_dict.keys().next().value;
                break;
            }
        }
    }
    if (best_time[2] === 99999) {
        best_time.splice(2, 1);
        best_ways.splice(2, 1);
    }
    if (best_time[1] === 99999) {
        best_time.splice(1, 1);
        best_ways.splice(1, 1);
    }
    let result: any[] = [best_ways, best_time]
    return result;
}