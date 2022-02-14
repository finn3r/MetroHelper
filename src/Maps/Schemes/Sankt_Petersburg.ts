import React from 'react';
import {ISchemeElements} from "../../Components/AdditionalFiles/interfaces";

export const SanktPetersburg: ISchemeElements = {
    background: {
        type: "rect",
        props: {
            className: "visual map_element map_background",
            width: "2000",
            height: "2000",
            key: "background_1"
        },
        width: 2000,
        height: 2000
    },
    others: [
        {
            type: "path",
            props: {
                className: "map_element map_river",
                d: "M548.28,490c8.8,0,16,6.1,16,13.59V692.52c0,7.49-7.16,13.59-16,13.59H40V503.59C40,496.1,47.16,490,56,490H548.28m0-40H56c-30.91,0-56,24-56,53.59V746.11H548.28c30.9,0,56-24,56-53.59V503.59c0-29.6-25.06-53.59-56-53.59Z",
                key: "path_1"
            },
        }, {
            type: "path",
            props: {
                className: "map_element map_river",
                d: "M951.15,745.6c8.78,0,15.91,6.11,15.91,13.59V1087c0,7.5-7.16,13.59-16,13.59L40,1101.53V747.45l911.15-1.85m0-40L0,707.53v434l951.1-1c30.91,0,56-24,56-53.59V759.19c0-29.6-25-53.59-56-53.59Z",
                key: "path_2"
            },
        }, {
            type: "polyline",
            props: {
                className: "map_element map_river_no_fill",
                points: "981.88 939.02 1712 939.02 1712 2000",
                key: "polyline_1"
            }
        }
    ],
    stations: [{
        stationName: "Парнас",
        stationX: 1000,
        stationY: 200,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "200",
                r: "30",
                key: "circle_1"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "205",
                children: "Парнас",
                key: "text_1"
            },
        }]
    }, {
        stationName: "Проспект Просвещения",
        stationX: 1000,
        stationY: 300,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "300",
                r: "30",
                key: "circle_2"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "305",
                children: ["Проспект", React.createElement("tspan", {x: "1035", dy: "1em", key: "text_2_2"}, "Просвещения")],
                key: "text_2_1"
            },
        }]
    }, {
        stationName: "Озерки",
        stationX: 1000,
        stationY: 400,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "400",
                r: "30",
                key: "circle_3"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "405",
                children: "Озерки",
                key: "text_3"
            },
        }]
    }, {
        stationName: "Удельная",
        stationX: 1000,
        stationY: 500,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "500",
                r: "30",
                key: "circle_4"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "505",
                children: "Удельная",
                key: "text_4"
            },
        }]
    }, {
        stationName: "Пионерская",
        stationX: 1000,
        stationY: 600,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "600",
                r: "30",
                key: "circle_5"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "605",
                children: "Пионерская",
                key: "text_5"
            },
        }]
    }, {
        stationName: "Чёрная речка",
        stationX: 1000,
        stationY: 700,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "700",
                r: "30",
                key: "circle_6"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "705",
                children: "Чёрная речка",
                key: "text_6"
            },
        }]
    }, {
        stationName: "Петроградская",
        stationX: 1000,
        stationY: 800,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "800",
                r: "30",
                key: "circle_7"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "805",
                children: "Петроградская",
                key: "text_7"
            },
        }]
    }, {
        stationName: "Горьковская",
        stationX: 1000,
        stationY: 900,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "900",
                r: "30",
                key: "circle_8"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "905",
                children: "Горьковская",
                key: "text_8"
            },
        }]
    }, {
        stationName: "Невский проспект",
        stationX: 1000,
        stationY: 1000,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "1000",
                r: "30",
                key: "circle_9"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "1005",
                children: ["Невский", React.createElement("tspan", {x: "1035", dy: "1em", key: "text_9_2"}, "проспект")],
                key: "text_9_1"
            },
        }]
    }, {
        stationName: "Сенная площадь",
        stationX: 1000,
        stationY: 1100,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "1100",
                r: "30",
                key: "circle_10"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "1105",
                children: ["Сенная", React.createElement("tspan", {x: "1035", dy: "1em", key: "text_10_2"}, "площадь")],
                key: "text_10_1"
            },
        }]
    }, {
        stationName: "Технологический институт 2",
        stationX: 1015,
        stationY: 1200,
        stationElements: [{
            type: "path",
            props: {
                className: "map_element map_station map_blue_station",
                d: "M1000,1230a30,30,0,0,0,0-60",
                key: "circle_11"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "1235",
                children: ["Технологический", React.createElement("tspan", {x: "1035", dy: "1em", key: "text_11_2"}, "институт 2")],
                key: "text_11_1"
            },
        }]
    }, {
        stationName: "Фрунзенская",
        stationX: 1000,
        stationY: 1300,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "1300",
                r: "30",
                key: "circle_12"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "1305",
                children: "Фрунзенская",
                key: "text_12"
            },
        }]
    }, {
        stationName: "Московские ворота",
        stationX: 1000,
        stationY: 1400,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "1400",
                r: "30",
                key: "circle_13"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "1405",
                children: "Московские ворота",
                key: "text_13"
            },
        }]
    }, {
        stationName: "Электросила",
        stationX: 1000,
        stationY: 1500,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "1500",
                r: "30",
                key: "circle_14"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "1505",
                children: "Электросила",
                key: "text_14"
            },
        }]
    }, {
        stationName: "Парк Победы",
        stationX: 1000,
        stationY: 1600,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "1600",
                r: "30",
                key: "circle_15"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "1605",
                children: "Парк Победы",
                key: "text_15"
            },
        }]
    }, {
        stationName: "Московская",
        stationX: 1000,
        stationY: 1700,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "1700",
                r: "30",
                key: "circle_16"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "1705",
                children: "Московская",
                key: "text_16"
            },
        }]
    }, {
        stationName: "Звёздная",
        stationX: 1000,
        stationY: 1800,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "1800",
                r: "30",
                key: "circle_17"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "1805",
                children: "Звёздная",
                key: "text_17"
            },
        }]
    }, {
        stationName: "Купчино",
        stationX: 1000,
        stationY: 1900,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_blue_station",
                cx: "1000",
                cy: "1900",
                r: "30",
                key: "circle_18"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1035",
                y: "1905",
                children: "Купчино",
                key: "text_18"
            },
        }]
    }, {
        stationName: "Девяткино",
        stationX: 1300,
        stationY: 100,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "100",
                r: "30",
                key: "circle_19"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "105",
                children: "Девяткино",
                key: "text_19"
            },
        }]

    }, {
        stationName: "Гражданский проспект",
        stationX: 1300,
        stationY: 200,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "200",
                r: "30",
                key: "circle_20"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "205",
                children: "Гражданский проспект",
                key: "text_20"
            },
        }]
    }, {
        stationName: "Академическая",
        stationX: 1300,
        stationY: 300,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "300",
                r: "30",
                key: "circle_21"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "305",
                children: "Академическая",
                key: "text_21"
            },
        }]

    }, {
        stationName: "Политехническая",
        stationX: 1300,
        stationY: 400,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "400",
                r: "30",
                key: "circle_22"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "405",
                children: "Политехническая",
                key: "text_22"
            },
        }]

    }, {
        stationName: "Площадь Мужества",
        stationX: 1300,
        stationY: 500,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "500",
                r: "30",
                key: "circle_23"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "505",
                children: "Площадь Мужества",
                key: "text_23"
            },
        }]

    }, {
        stationName: "Лесная",
        stationX: 1300,
        stationY: 600,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "600",
                r: "30",
                key: "circle_24"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "605",
                children: "Лесная",
                key: "text_24"
            },
        }]

    }, {
        stationName: "Выборгская",
        stationX: 1300,
        stationY: 700,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "700",
                r: "30",
                key: "circle_25"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "705",
                children: "Выборгская",
                key: "text_25"
            },
        }]

    }, {
        stationName: "Площадь Ленина",
        stationX: 1300,
        stationY: 800,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "800",
                r: "30",
                key: "circle_26"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "805",
                children: "Площадь Ленина",
                key: "text_26"
            },
        }]

    }, {
        stationName: "Чернышевская",
        stationX: 1300,
        stationY: 900,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "900",
                r: "30",
                key: "circle_27"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "905",
                children: "Чернышевская",
                key: "text_27"
            },
        }]

    }, {
        stationName: "Площадь Восстания",
        stationX: 1300,
        stationY: 1000,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "1000",
                r: "30",
                key: "circle_28"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "1005",
                children: "Площадь Восстания",
                key: "text_28"
            },
        }]

    }, {
        stationName: "Владимирская",
        stationX: 1300,
        stationY: 1100,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "1100",
                r: "30",
                key: "circle_29"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "1105",
                children: "Владимирская",
                key: "text_29"
            },
        }]

    }, {
        stationName: "Пушкинская",
        stationX: 1300,
        stationY: 1200,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "1300",
                cy: "1200",
                r: "30",
                key: "circle_30"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text",
                x: "1335",
                y: "1205",
                children: "Пушкинская",
                key: "text_30"
            },
        }]

    }, {
        stationName: "Технологический институт 1",
        stationX: 985,
        stationY: 1200,
        stationElements: [{
            type: "path",
            props: {
                className: "map_element map_station map_red_station",
                d: "M1000,1230a30,30,0,0,1,0-60",
                key: "circle_31"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text map_text_left",
                x: "950",
                y: "1180",
                children: ["Технологический", React.createElement("tspan", {dx: "-5em", dy: "1em", key: "text_31_2"}, "институт 1")],
                key: "text_31_1"
            },
        }]

    }, {
        stationName: "Балтийская",
        stationX: 705,
        stationY: 1400,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "705",
                cy: "1400",
                r: "30",
                key: "circle_32"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text map_text_left",
                x: "670",
                y: "1410",
                children: "Балтийская",
                key: "text_32"
            },
        }]

    }, {
        stationName: "Нарвская",
        stationX: 705,
        stationY: 1500,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "705",
                cy: "1500",
                r: "30",
                key: "circle_33"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text map_text_left",
                x: "670",
                y: "1505",
                children: "Нарвская",
                key: "text_33"
            },
        }]

    }, {
        stationName: "Кировский завод",
        stationX: 705,
        stationY: 1600,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "705",
                cy: "1600",
                r: "30",
                key: "circle_34"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text map_text_left",
                x: "670",
                y: "1605",
                children: "Кировский завод",
                key: "text_34"
            },
        }]

    }, {
        stationName: "Автово",
        stationX: 705,
        stationY: 1700,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "705",
                cy: "1700",
                r: "30",
                key: "circle_35"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text map_text_left",
                x: "670",
                y: "1705",
                children: "Автово",
                key: "text_35"
            },
        }]

    }, {
        stationName: "Ленинский проспект",
        stationX: 705,
        stationY: 1800,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "705",
                cy: "1800",
                r: "30",
                key: "circle_36"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text map_text_left",
                x: "670",
                y: "1805",
                children: "Ленинский проспект",
                key: "text_36"
            },
        }]

    }, {
        stationName: "Проспект Ветеранов",
        stationX: 705,
        stationY: 1900,
        stationElements: [{
            type: "circle",
            props: {
                className: "map_element map_station map_red_station",
                cx: "705",
                cy: "1900",
                r: "30",
                key: "circle_37"
            },
        }, {
            type: "text",
            props: {
                className: "visual map_element map_text map_text_left",
                x: "670",
                y: "1905",
                children: "Проспект Ветеранов",
                key: "text_37"
            },
        }]

    }],
    roads: [
        {
            from: "Парнас",
            to: "Проспект Просвещения",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,200V300",
                key: "road_1"
            }
        }, {
            from: "Проспект Просвещения",
            to: "Озерки",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,300V400",
                key: "road_2"
            }
        }, {
            from: "Озерки",
            to: "Удельная",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,400V500",
                key: "road_3"
            }
        }, {
            from: "Удельная",
            to: "Пионерская",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,500V600",
                key: "road_4"
            }
        }, {
            from: "Пионерская",
            to: "Чёрная речка",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,600V700",
                key: "road_5"
            }
        }, {
            from: "Чёрная речка",
            to: "Петроградская",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,700V800",
                key: "road_6"
            }
        }, {
            from: "Петроградская",
            to: "Горьковская",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,800V900",
                key: "road_7"
            }
        }, {
            from: "Горьковская",
            to: "Невский проспект",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,900v100",
                key: "road_8"
            }
        }, {
            from: "Невский проспект",
            to: "Сенная площадь",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,1000v100",
                key: "road_9"
            }
        }, {
            from: "Сенная площадь",
            to: "Технологический институт 2",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,1100v105",
                key: "road_10"
            }
        }, {
            from: "Технологический институт 2",
            to: "Фрунзенская",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,1200v100",
                key: "road_11"
            }
        }, {
            from: "Фрунзенская",
            to: "Московские ворота",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,1300v100",
                key: "road_12"
            }
        }, {
            from: "Московские ворота",
            to: "Электросила",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,1400v100",
                key: "road_13"
            }
        }, {
            from: "Электросила",
            to: "Парк Победы",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,1500v100",
                key: "road_14"
            }
        }, {
            from: "Парк Победы",
            to: "Московская",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,1600v100",
                key: "road_15"
            }
        }, {
            from: "Московская",
            to: "Звёздная",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,1700v100",
                key: "road_16"
            }
        }, {
            from: "Звёздная",
            to: "Купчино",
            type: "path",
            props: {
                className: "map_element map_road map_blue_road",
                d: "M1000,1800v100",
                key: "road_17"
            }
        }, {
            from: "Девяткино",
            to: "Гражданский проспект",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,100V200",
                key: "road_18"
            }
        }, {
            from: "Гражданский проспект",
            to: "Академическая",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,200V300",
                key: "road_19"
            }
        }, {
            from: "Академическая",
            to: "Политехническая",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,300V400",
                key: "road_20"
            }
        }, {
            from: "Политехническая",
            to: "Площадь Мужества",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,400V500",
                key: "road_21"
            }
        }, {
            from: "Площадь Мужества",
            to: "Лесная",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,500V600",
                key: "road_22"
            }
        }, {
            from: "Лесная",
            to: "Выборгская",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,600V700",
                key: "road_23"
            }
        }, {
            from: "Выборгская",
            to: "Площадь Ленина",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,700V800",
                key: "road_24"
            }
        }, {
            from: "Площадь Ленина",
            to: "Чернышевская",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,800V900",
                key: "road_25"
            }
        }, {
            from: "Чернышевская",
            to: "Площадь Восстания",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,900v100",
                key: "road_26"
            }
        }, {
            from: "Площадь Восстания",
            to: "Владимирская",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,1000v100",
                key: "road_27"
            }
        }, {
            from: "Владимирская",
            to: "Пушкинская",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M1300,1100v100",
                key: "road_28"
            }
        }, {
            from: "Пушкинская",
            to: "Технологический институт 1",
            type: "path",
            props: {
                className: "map_element map_road_not_stroke map_red_road",
                d: "M1027.75 1212.5H1293.82V1187.5H1027C1029.04 1191.65 1030.13 1196.19 1030.13 1200.83C1030.13 1204.86 1029.31 1208.81 1027.75 1212.5Z",
                key: "road_29"
            }
        }, {
            from: "Технологический институт 1",
            to: "Балтийская",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M986.15,1198.12,705,1400",
                key: "road_30"
            }
        }, {
            from: "Балтийская",
            to: "Нарвская",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M705,1400v100",
                key: "road_31"
            }
        }, {
            from: "Нарвская",
            to: "Кировский завод",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M705,1500v100",
                key: "road_32"
            }
        }, {
            from: "Кировский завод",
            to: "Автово",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M705,1600v100",
                key: "road_33"
            }
        }, {
            from: "Автово",
            to: "Ленинский проспект",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M705,1700v100",
                key: "road_34"
            }
        }, {
            from: "Ленинский проспект",
            to: "Проспект Ветеранов",
            type: "path",
            props: {
                className: "map_element map_road map_red_road",
                d: "M705,1800v100",
                key: "road_35"
            }
        }
    ]
};