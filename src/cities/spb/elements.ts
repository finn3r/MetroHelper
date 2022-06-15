import React from 'react';
import {ISchemeElements} from "../../interfaces/ISchemeElements";
import * as ST from '../../styled';

const metroStationsElementsSPB: ISchemeElements = {
    background: {
        type: ST.MapBackground,
        props: {
            width: "2400",
            height: "2050",
            key: "background_1"
        },
        width: 2400,
        height: 2050
    },
    others: [
        {
            type: ST.MapRiver,
            props: {
                d: "M722.28 410C731.08 410 738.28 416.1 738.28 423.59V612.52C738.28 620.01 731.12 626.11 722.28 626.11H214V423.59C214 416.1 221.16 410 230 410H722.28ZM722.28 370H230C199.09 370 174 394 174 423.59V666.11H722.28C753.18 666.11 778.28 642.11 778.28 612.52V423.59C778.28 393.99 753.22 370 722.28 370Z",
                key: "path_1"
            },
        }, {
            type: ST.MapRiver,
            props: {
                d: "M1125.15 665.6C1133.93 665.6 1141.06 671.71 1141.06 679.19V1007C1141.06 1014.5 1133.9 1020.59 1125.06 1020.59L214 1021.53V667.45L1125.15 665.6ZM1125.15 625.6L174 627.53V1061.53L1125.1 1060.53C1156.01 1060.53 1181.1 1036.53 1181.1 1006.94V679.19C1181.1 649.59 1156.1 625.6 1125.1 625.6H1125.15Z",
                key: "path_2"
            },
        }, {
            type: ST.MapRiverNoFill,
            props: {
                d: "M1156 859H1979V1920",
                key: "path_3"
            }
        }
    ],
    stations: [{
        stationName: "Парнас",
        stationX: 1000,
        stationY: 100,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "100",
                r: "30",
                key: "circle_1"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "105",
                children: "Парнас",
                key: "text_1"
            },
        }]
    }, {
        stationName: "Проспект Просвещения",
        stationX: 1000,
        stationY: 200,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "200",
                r: "30",
                key: "circle_2"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "205",
                children: ["Проспект", React.createElement("tspan", {
                    x: "1035",
                    dy: "1em",
                    key: "text_2_2"
                }, "Просвещения")],
                key: "text_2_1"
            },
        }]
    }, {
        stationName: "Озерки",
        stationX: 1000,
        stationY: 300,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "300",
                r: "30",
                key: "circle_3"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "305",
                children: "Озерки",
                key: "text_3"
            },
        }]
    }, {
        stationName: "Удельная",
        stationX: 1000,
        stationY: 400,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "400",
                r: "30",
                key: "circle_4"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "405",
                children: "Удельная",
                key: "text_4"
            },
        }]
    }, {
        stationName: "Пионерская",
        stationX: 1000,
        stationY: 500,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "500",
                r: "30",
                key: "circle_5"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "505",
                children: "Пионерская",
                key: "text_5"
            },
        }]
    }, {
        stationName: "Чёрная речка",
        stationX: 1000,
        stationY: 600,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "600",
                r: "30",
                key: "circle_6"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "605",
                children: "Чёрная речка",
                key: "text_6"
            },
        }]
    }, {
        stationName: "Петроградская",
        stationX: 1000,
        stationY: 700,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "700",
                r: "30",
                key: "circle_7"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "705",
                children: "Петроградская",
                key: "text_7"
            },
        }]
    }, {
        stationName: "Горьковская",
        stationX: 1000,
        stationY: 800,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "800",
                r: "30",
                key: "circle_8"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "805",
                children: "Горьковская",
                key: "text_8"
            },
        }]
    }, {
        stationName: "Невский проспект",
        stationX: 1000,
        stationY: 1000,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "blue",
                d: "M1000,1030a30,30,0,0,0,0-60",
                key: "circle_69"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "960",
                children: ["Невский", React.createElement("tspan", {
                    x: "1035",
                    dy: "1em",
                    key: "text_9_2"
                }, "проспект")],
                key: "text_9_1"
            },
        }]
    }, {
        stationName: "Сенная площадь",
        stationX: 1000,
        stationY: 1100,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "blue",
                d: "M1025.98 1115C1023.35 1119.56 1019.56 1123.35 1015 1125.98C1010.44 1128.61 1005.27 1130 1000 1130C994.738 1130 989.565 1128.62 985.004 1125.98C980.444 1123.35 976.656 1119.57 974.022 1115.01L1000 1100L1025.98 1115Z",
                key: "circle_10"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "970",
                y: "1140",
                children: ["Сенная", React.createElement("tspan", {
                    dx: "-4.4em",
                    dy: "1em",
                    key: "text_10_2"
                }, "площадь")],
                key: "text_10_1"
            },
        }]
    }, {
        stationName: "Технологический институт 2",
        stationX: 1015,
        stationY: 1300,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "blue",
                d: "M1000,1330a30,30,0,0,0,0-60",
                key: "circle_11"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "1335",
                children: ["Технологический", React.createElement("tspan", {
                    x: "1035",
                    dy: "1em",
                    key: "text_11_2"
                }, "институт 2")],
                key: "text_11_1"
            },
        }]
    }, {
        stationName: "Фрунзенская",
        stationX: 1000,
        stationY: 1400,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "1400",
                r: "30",
                key: "circle_12"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "1405",
                children: "Фрунзенская",
                key: "text_12"
            },
        }]
    }, {
        stationName: "Московские ворота",
        stationX: 1000,
        stationY: 1500,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "1500",
                r: "30",
                key: "circle_13"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "1505",
                children: "Московские ворота",
                key: "text_13"
            },
        }]
    }, {
        stationName: "Электросила",
        stationX: 1000,
        stationY: 1600,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "1600",
                r: "30",
                key: "circle_14"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "1605",
                children: "Электросила",
                key: "text_14"
            },
        }]
    }, {
        stationName: "Парк Победы",
        stationX: 1000,
        stationY: 1700,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "1700",
                r: "30",
                key: "circle_15"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "1705",
                children: "Парк Победы",
                key: "text_15"
            },
        }]
    }, {
        stationName: "Московская",
        stationX: 1000,
        stationY: 1800,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "1800",
                r: "30",
                key: "circle_16"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "1805",
                children: "Московская",
                key: "text_16"
            },
        }]
    }, {
        stationName: "Звёздная",
        stationX: 1000,
        stationY: 1900,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "1900",
                r: "30",
                key: "circle_17"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "1905",
                children: "Звёздная",
                key: "text_17"
            },
        }]
    }, {
        stationName: "Купчино",
        stationX: 1000,
        stationY: 2000,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "blue",
                cx: "1000",
                cy: "2000",
                r: "30",
                key: "circle_18"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1035",
                y: "2005",
                children: "Купчино",
                key: "text_18"
            },
        }]
    }, {
        stationName: "Девяткино",
        stationX: 1300,
        stationY: 100,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "1300",
                cy: "100",
                r: "30",
                key: "circle_19"
            },
        }, {
            type: ST.MapText,
            props: {
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
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "1300",
                cy: "200",
                r: "30",
                key: "circle_20"
            },
        }, {
            type: ST.MapText,
            props: {
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
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "1300",
                cy: "300",
                r: "30",
                key: "circle_21"
            },
        }, {
            type: ST.MapText,
            props: {
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
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "1300",
                cy: "400",
                r: "30",
                key: "circle_22"
            },
        }, {
            type: ST.MapText,
            props: {
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
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "1300",
                cy: "500",
                r: "30",
                key: "circle_23"
            },
        }, {
            type: ST.MapText,
            props: {
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
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "1300",
                cy: "600",
                r: "30",
                key: "circle_24"
            },
        }, {
            type: ST.MapText,
            props: {
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
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "1300",
                cy: "700",
                r: "30",
                key: "circle_25"
            },
        }, {
            type: ST.MapText,
            props: {
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
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "1300",
                cy: "800",
                r: "30",
                key: "circle_26"
            },
        }, {
            type: ST.MapText,
            props: {
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
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "1300",
                cy: "900",
                r: "30",
                key: "circle_27"
            },
        }, {
            type: ST.MapText,
            props: {
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
            type: ST.MapStationPath,
            props: {
                color: "red",
                d: "M1300,1030a30,30,0,0,0,0-60",
                key: "circle_67"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1325",
                y: "980",
                children: "Площадь Восстания",
                key: "text_28"
            },
        }]

    }, {
        stationName: "Владимирская",
        stationX: 1300,
        stationY: 1100,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "red",
                d: "M1300,1130a30,30,0,0,0,0-60",
                key: "circle_29"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1325",
                y: "1080",
                children: "Владимирская",
                key: "text_29"
            },
        }]

    }, {
        stationName: "Пушкинская",
        stationX: 1300,
        stationY: 1300,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "red",
                d: "M1300,1330a30,30,0,0,0,0-60",
                key: "circle_29"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1325",
                y: "1280",
                children: "Пушкинская",
                key: "text_30"
            },
        }]

    }, {
        stationName: "Технологический институт 1",
        stationX: 985,
        stationY: 1300,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "red",
                d: "M1000,1330a30,30,0,0,1,0-60",
                key: "circle_31"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "950",
                y: "1280",
                children: ["Технологический", React.createElement("tspan", {
                    dx: "-5em",
                    dy: "1em",
                    key: "text_31_2"
                }, "институт 1")],
                key: "text_31_1"
            },
        }]

    }, {
        stationName: "Балтийская",
        stationX: 705,
        stationY: 1500,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "705",
                cy: "1500",
                r: "30",
                key: "circle_32"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "1510",
                children: "Балтийская",
                key: "text_32"
            },
        }]

    }, {
        stationName: "Нарвская",
        stationX: 705,
        stationY: 1600,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "705",
                cy: "1600",
                r: "30",
                key: "circle_33"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "1605",
                children: "Нарвская",
                key: "text_33"
            },
        }]

    }, {
        stationName: "Кировский завод",
        stationX: 705,
        stationY: 1700,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "705",
                cy: "1700",
                r: "30",
                key: "circle_34"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "1705",
                children: "Кировский завод",
                key: "text_34"
            },
        }]

    }, {
        stationName: "Автово",
        stationX: 705,
        stationY: 1800,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "705",
                cy: "1800",
                r: "30",
                key: "circle_35"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "1805",
                children: "Автово",
                key: "text_35"
            },
        }]

    }, {
        stationName: "Ленинский проспект",
        stationX: 705,
        stationY: 1900,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "705",
                cy: "1900",
                r: "30",
                key: "circle_36"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "1905",
                children: "Ленинский проспект",
                key: "text_36"
            },
        }]

    }, {
        stationName: "Проспект Ветеранов",
        stationX: 705,
        stationY: 2000,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "red",
                cx: "705",
                cy: "2000",
                r: "30",
                key: "circle_37"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "2005",
                children: "Проспект Ветеранов",
                key: "text_37"
            },
        }]
    }, {
        stationName: "Обводный канал",
        stationX: 1300,
        stationY: 1400,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "1300",
                cy: "1400",
                r: "30",
                key: "circle_38"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1335",
                y: "1405",
                children: "Обводный канал",
                key: "text_38"
            },
        }]

    }, {
        stationName: "Волковская",
        stationX: 1300,
        stationY: 1500,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "1300",
                cy: "1500",
                r: "30",
                key: "circle_39"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1335",
                y: "1505",
                children: "Волковская",
                key: "text_39"
            },
        }]

    }, {
        stationName: "Бухарестская",
        stationX: 1300,
        stationY: 1600,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "1300",
                cy: "1600",
                r: "30",
                key: "circle_40"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1335",
                y: "1605",
                children: "Бухарестская",
                key: "text_40"
            },
        }]

    }, {
        stationName: "Международная",
        stationX: 1300,
        stationY: 1700,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "1300",
                cy: "1700",
                r: "30",
                key: "circle_41"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1335",
                y: "1705",
                children: "Международная",
                key: "text_41"
            },
        }]

    }, {
        stationName: "Проспект Славы",
        stationX: 1300,
        stationY: 1800,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "1300",
                cy: "1800",
                r: "30",
                key: "circle_42"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1335",
                y: "1805",
                children: "Проспект Славы",
                key: "text_42"
            },
        }]

    }, {
        stationName: "Дунайская",
        stationX: 1300,
        stationY: 1900,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "1300",
                cy: "1900",
                r: "30",
                key: "circle_43"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1335",
                y: "1905",
                children: "Дунайская",
                key: "text_43"
            },
        }]

    }, {
        stationName: "Шушары",
        stationX: 1300,
        stationY: 2000,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "1300",
                cy: "2000",
                r: "30",
                key: "circle_44"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1335",
                y: "2005",
                children: "Шушары",
                key: "text_44"
            },
        }]

    }, {
        stationName: "Адмиралтейская",
        stationX: 705,
        stationY: 1100,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "705",
                cy: "1100",
                r: "30",
                key: "circle_45"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "1095",
                children: "Адмиралтейская",
                key: "text_45"
            },
        }]

    }, {
        stationName: "Спортивная",
        stationX: 705,
        stationY: 900,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "705",
                cy: "900",
                r: "30",
                key: "circle_46"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "910",
                children: "Спортивная",
                key: "text_46"
            },
        }]

    }, {
        stationName: "Чкаловская",
        stationX: 705,
        stationY: 800,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "705",
                cy: "800",
                r: "30",
                key: "circle_47"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "810",
                children: "Чкаловская",
                key: "text_47"
            },
        }]

    }, {
        stationName: "Крестовский остров",
        stationX: 705,
        stationY: 700,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "705",
                cy: "700",
                r: "30",
                key: "circle_48"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "710",
                children: ["Крестовский", React.createElement("tspan", {
                    dx: "-3.5em",
                    dy: "1em",
                    key: "text_48_2"
                }, "остров")],
                key: "text_48"
            },
        }]

    }, {
        stationName: "Старая Деревня",
        stationX: 705,
        stationY: 600,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "705",
                cy: "600",
                r: "30",
                key: "circle_49"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "610",
                children: "Старая Деревня",
                key: "text_49"
            },
        }]

    }, {
        stationName: "Комендантский проспект",
        stationX: 705,
        stationY: 500,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "purple",
                cx: "705",
                cy: "500",
                r: "30",
                key: "circle_50"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "670",
                y: "510",
                children: ["Комендантский", React.createElement("tspan", {
                    dx: "-4.5em",
                    dy: "1em",
                    key: "text_50_2"
                }, "проспект")],
                key: "text_50"
            },
        }]

    }, {
        stationName: "Василеостровская",
        stationX: 425,
        stationY: 1000,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "green",
                cx: "425",
                cy: "1000",
                r: "30",
                key: "circle_51"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "390",
                y: "1010",
                children: "Василеостровская",
                key: "text_51"
            },
        }]

    }, {
        stationName: "Приморская",
        stationX: 425,
        stationY: 800,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "green",
                cx: "425",
                cy: "800",
                r: "30",
                key: "circle_52"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "390",
                y: "810",
                children: "Приморская",
                key: "text_52"
            },
        }]

    }, {
        stationName: "Зенит",
        stationX: 425,
        stationY: 700,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "green",
                cx: "425",
                cy: "700",
                r: "30",
                key: "circle_53"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "390",
                y: "710",
                children: "Зенит",
                key: "text_53"
            },
        }]

    }, {
        stationName: "Беговая",
        stationX: 425,
        stationY: 600,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "green",
                cx: "425",
                cy: "600",
                r: "30",
                key: "circle_54"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "390",
                y: "610",
                children: "Беговая",
                key: "text_54"
            },
        }]

    }, {
        stationName: "Елизаровская",
        stationX: 1860,
        stationY: 1200,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "green",
                cx: "1860",
                cy: "1200",
                r: "30",
                key: "circle_55"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1895",
                y: "1205",
                children: "Елизаровская",
                key: "text_55"
            },
        }]

    }, {
        stationName: "Ломоносовская",
        stationX: 1860,
        stationY: 1300,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "green",
                cx: "1860",
                cy: "1300",
                r: "30",
                key: "circle_56"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1895",
                y: "1305",
                children: "Ломоносовская",
                key: "text_56"
            },
        }]

    }, {
        stationName: "Пролетарская",
        stationX: 1860,
        stationY: 1400,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "green",
                cx: "1860",
                cy: "1400",
                r: "30",
                key: "circle_57"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1895",
                y: "1405",
                children: "Пролетарская",
                key: "text_57"
            },
        }]

    }, {
        stationName: "Обухово",
        stationX: 1860,
        stationY: 1500,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "green",
                cx: "1860",
                cy: "1500",
                r: "30",
                key: "circle_58"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1895",
                y: "1505",
                children: "Обухово",
                key: "text_58"
            },
        }]

    }, {
        stationName: "Рыбацкое",
        stationX: 1860,
        stationY: 1600,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "green",
                cx: "1860",
                cy: "1600",
                r: "30",
                key: "circle_59"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1895",
                y: "1605",
                children: "Рыбацкое",
                key: "text_59"
            },
        }]

    }, {
        stationName: "Новочеркасская",
        stationX: 2140,
        stationY: 1200,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "orange",
                cx: "2140",
                cy: "1200",
                r: "30",
                key: "circle_60"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "2175",
                y: "1205",
                children: "Новочеркасская",
                key: "text_60"
            },
        }]

    }, {
        stationName: "Ладожская",
        stationX: 2140,
        stationY: 1300,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "orange",
                cx: "2140",
                cy: "1300",
                r: "30",
                key: "circle_61"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "2175",
                y: "1305",
                children: "Ладожская",
                key: "text_61"
            },
        }]

    }, {
        stationName: "Проспект Большевиков",
        stationX: 2140,
        stationY: 1400,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "orange",
                cx: "2140",
                cy: "1400",
                r: "30",
                key: "circle_62"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "2175",
                y: "1405",
                children: "Проспект Большевиков",
                key: "text_62"
            },
        }]

    }, {
        stationName: "Улица Дыбенко",
        stationX: 2140,
        stationY: 1500,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "orange",
                cx: "2140",
                cy: "1500",
                r: "30",
                key: "circle_63"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "2175",
                y: "1505",
                children: "Улица Дыбенко",
                key: "text_63"
            },
        }]

    }, {
        stationName: "Площадь Александра Невского 1",
        stationX: 1860,
        stationY: 1100,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "green",
                d: "M1860,1130a30,30,0,0,1,0-60",
                key: "circle_64"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1895",
                y: "1065",
                children: "Площадь Александра Невского 1",
                key: "text_64"
            },
        }]

    }, {
        stationName: "Площадь Александра Невского 2",
        stationX: 1860,
        stationY: 1100,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "orange",
                d: "M1860,1130a30,30,0,0,0,0-60",
                key: "circle_64"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1895",
                y: "1135",
                children: "Площадь Александра Невского 2",
                key: "text_64"
            },
        }]

    }, {
        stationName: "Лиговский проспект",
        stationX: 1580,
        stationY: 1100,
        stationElements: [{
            type: ST.MapStationCircle,
            props: {
                color: "orange",
                cx: "1580",
                cy: "1100",
                r: "30",
                key: "circle_65"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1615",
                y: "1130",
                children: "Лиговский проспект",
                key: "text_65"
            },
        }]

    }, {
        stationName: "Достоевская",
        stationX: 1300,
        stationY: 1100,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "orange",
                d: "M1300,1130a30,30,0,0,1,0-60",
                key: "circle_66"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "1280",
                y: "1135",
                children: "Достоевская",
                key: "text_66"
            },
        }]

    }, {
        stationName: "Маяковская",
        stationX: 1300,
        stationY: 1000,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "green",
                d: "M1300,1030a30,30,0,0,1,0-60",
                key: "circle_67"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "1275",
                y: "980",
                children: "Маяковская",
                key: "text_67"
            },
        }]

    }, {
        stationName: "Звенигородская",
        stationX: 1300,
        stationY: 1300,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "purple",
                d: "M1300,1330a30,30,0,0,1,0-60",
                key: "circle_68"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1325",
                y: "1330",
                children: "Звенигородская",
                key: "text_68"
            },
        }]

    }, {
        stationName: "Гостиный двор",
        stationX: 1000,
        stationY: 1000,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "green",
                d: "M1000,1030a30,30,0,0,1,0-60",
                key: "circle_69"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "875",
                y: "960",
                children: ["Гостиный", React.createElement("tspan", {
                    dx: "-2.5em",
                    dy: "1em",
                    key: "text_69_2"
                }, "двор")],
                key: "text_69"
            },
        }]

    }, {
        stationName: "Спасская",
        stationX: 1000,
        stationY: 1100,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "orange",
                d: "M1000 1070C1005.27 1070 1010.44 1071.39 1015 1074.02C1019.56 1076.65 1023.35 1080.44 1025.98 1085.01C1028.62 1089.57 1030 1094.74 1030 1100.01C1030 1105.28 1028.61 1110.45 1025.97 1115.01L1000 1100L1000 1070Z",
                key: "circle_70"
            },
        }, {
            type: ST.MapText,
            props: {
                x: "1025",
                y: "1080",
                children: "Спасская",
                key: "text_70"
            },
        }]

    }, {
        stationName: "Садовая",
        stationX: 1000,
        stationY: 1100,
        stationElements: [{
            type: ST.MapStationPath,
            props: {
                color: "purple",
                d: "M974.019 1115C971.386 1110.44 970 1105.27 970 1100C970 1094.74 971.385 1089.56 974.018 1085C976.65 1080.44 980.436 1076.66 984.996 1074.02C989.556 1071.39 994.728 1070 999.994 1070L1000 1100L974.019 1115Z",
                key: "circle_71"
            },
        }, {
            type: ST.MapTextLeft,
            props: {
                x: "975",
                y: "1080",
                children: "Садовая",
                key: "text_71"
            },
        }]

    },],
    roads: [
        {
            from: "Парнас",
            to: "Проспект Просвещения",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,100V200",
                key: "road_1"
            }
        }, {
            from: "Проспект Просвещения",
            to: "Озерки",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,200V300",
                key: "road_2"
            }
        }, {
            from: "Озерки",
            to: "Удельная",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,300V400",
                key: "road_3"
            }
        }, {
            from: "Удельная",
            to: "Пионерская",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,400V500",
                key: "road_4"
            }
        }, {
            from: "Пионерская",
            to: "Чёрная речка",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,500V600",
                key: "road_5"
            }
        }, {
            from: "Чёрная речка",
            to: "Петроградская",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,600V700",
                key: "road_6"
            }
        }, {
            from: "Петроградская",
            to: "Горьковская",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,700V800",
                key: "road_7"
            }
        }, {
            from: "Горьковская",
            to: "Невский проспект",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,800v200",
                key: "road_8"
            }
        }, {
            from: "Невский проспект",
            to: "Сенная площадь",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1000v100",
                key: "road_9"
            }
        }, {
            from: "Сенная площадь",
            to: "Технологический институт 2",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1100v200",
                key: "road_10"
            }
        }, {
            from: "Технологический институт 2",
            to: "Фрунзенская",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1300v100",
                key: "road_11"
            }
        }, {
            from: "Фрунзенская",
            to: "Московские ворота",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1400v100",
                key: "road_12"
            }
        }, {
            from: "Московские ворота",
            to: "Электросила",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1500v100",
                key: "road_13"
            }
        }, {
            from: "Электросила",
            to: "Парк Победы",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1600v100",
                key: "road_14"
            }
        }, {
            from: "Парк Победы",
            to: "Московская",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1700v100",
                key: "road_15"
            }
        }, {
            from: "Московская",
            to: "Звёздная",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1800v100",
                key: "road_16"
            }
        }, {
            from: "Звёздная",
            to: "Купчино",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1900v100",
                key: "road_17"
            }
        }, {
            from: "Девяткино",
            to: "Гражданский проспект",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,100V200",
                key: "road_18"
            }
        }, {
            from: "Гражданский проспект",
            to: "Академическая",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,200V300",
                key: "road_19"
            }
        }, {
            from: "Академическая",
            to: "Политехническая",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,300V400",
                key: "road_20"
            }
        }, {
            from: "Политехническая",
            to: "Площадь Мужества",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,400V500",
                key: "road_21"
            }
        }, {
            from: "Площадь Мужества",
            to: "Лесная",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,500V600",
                key: "road_22"
            }
        }, {
            from: "Лесная",
            to: "Выборгская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,600V700",
                key: "road_23"
            }
        }, {
            from: "Выборгская",
            to: "Площадь Ленина",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,700V800",
                key: "road_24"
            }
        }, {
            from: "Площадь Ленина",
            to: "Чернышевская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,800V900",
                key: "road_25"
            }
        }, {
            from: "Чернышевская",
            to: "Площадь Восстания",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,900v100",
                key: "road_26"
            }
        }, {
            from: "Площадь Восстания",
            to: "Владимирская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,1000v100",
                key: "road_27"
            }
        }, {
            from: "Владимирская",
            to: "Пушкинская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,1100v200",
                key: "road_28"
            }
        }, {
            from: "Пушкинская",
            to: "Технологический институт 1",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300 1300H1025",
                key: "road_29"
            }
        }, {
            from: "Технологический институт 1",
            to: "Балтийская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1000.15 1294L719 1495.88",
                key: "road_30"
            }
        }, {
            from: "Балтийская",
            to: "Нарвская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705,1500v100",
                key: "road_31"
            }
        }, {
            from: "Нарвская",
            to: "Кировский завод",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705,1600v100",
                key: "road_32"
            }
        }, {
            from: "Кировский завод",
            to: "Автово",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705,1700v100",
                key: "road_33"
            }
        }, {
            from: "Автово",
            to: "Ленинский проспект",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705,1800v100",
                key: "road_34"
            }
        }, {
            from: "Ленинский проспект",
            to: "Проспект Ветеранов",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705,1900v100",
                key: "road_35"
            }
        }, {
            from: "Беговая",
            to: "Зенит",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M425,600V700",
                key: "road_36"
            }
        }, {
            from: "Зенит",
            to: "Приморская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M425,700V800",
                key: "road_37"
            }
        }, {
            from: "Приморская",
            to: "Василеостровская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M425,800v200",
                key: "road_38"
            }
        }, {
            from: "Василеостровская",
            to: "Гостиный двор",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M425 1000H1000",
                key: "road_39"
            }
        }, {
            from: "Гостиный двор",
            to: "Маяковская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1000 1000H1300",
                key: "road_40"
            }
        }, {
            from: "Маяковская",
            to: "Площадь Александра Невского 1",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1300 1000H1860",
                key: "road_41"
            }
        }, {
            from: "Маяковская",
            to: "Площадь Александра Невского 1",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,987.5v112.5",
                key: "road_42"
            }
        }, {
            from: "Площадь Александра Невского 1",
            to: "Елизаровская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,1100v100",
                key: "road_43"
            }
        }, {
            from: "Елизаровская",
            to: "Ломоносовская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,1200v100",
                key: "road_44"
            }
        }, {
            from: "Ломоносовская",
            to: "Пролетарская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,1300v100",
                key: "road_45"
            }
        }, {
            from: "Пролетарская",
            to: "Обухово",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,1400v100",
                key: "road_46"
            }
        }, {
            from: "Обухово",
            to: "Рыбацкое",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,1500v100",
                key: "road_47"
            }
        }, {
            from: "Комендантский проспект",
            to: "Старая Деревня",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705,500V600",
                key: "road_48"
            }
        }, {
            from: "Старая Деревня",
            to: "Крестовский остров",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705,600V700",
                key: "road_49"
            }
        }, {
            from: "Крестовский остров",
            to: "Чкаловская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705,700V800",
                key: "road_50"
            }
        }, {
            from: "Чкаловская",
            to: "Спортивная",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705,800V900",
                key: "road_51"
            }
        }, {
            from: "Спортивная",
            to: "Адмиралтейская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705,900v200",
                key: "road_52"
            }
        }, {
            from: "Адмиралтейская",
            to: "Садовая",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705 1100H1000",
                key: "road_53"
            }
        }, {
            from: "Садовая",
            to: "Звенигородская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300 1300L1000 1100",
                key: "road_54"
            }
        }, {
            from: "Звенигородская",
            to: "Обводный канал",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1300v100",
                key: "road_55"
            }
        }, {
            from: "Обводный канал",
            to: "Волковская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1400v100",
                key: "road_56"
            }
        }, {
            from: "Волковская",
            to: "Бухарестская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1500v100",
                key: "road_57"
            }
        }, {
            from: "Бухарестская",
            to: "Международная",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1600v100",
                key: "road_58"
            }
        }, {
            from: "Международная",
            to: "Проспект Славы",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1700v100",
                key: "road_59"
            }
        }, {
            from: "Проспект Славы",
            to: "Дунайская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1800v100",
                key: "road_60"
            }
        }, {
            from: "Дунайская",
            to: "Шушары",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1900v100",
                key: "road_61"
            }
        }, {
            from: "Спасская",
            to: "Достоевская",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M1000 1100H1300",
                key: "road_62"
            }
        }, {
            from: "Достоевская",
            to: "Лиговский проспект",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M1300 1100H1580",
                key: "road_63"
            }
        }, {
            from: "Лиговский проспект",
            to: "Площадь Александра Невского 2",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M1580 1100H1860",
                key: "road_64"
            }
        }, {
            from: "Площадь Александра Невского 2",
            to: "Новочеркасская",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M1860 1100H2140",
                key: "road_65"
            }
        }, {
            from: "Площадь Александра Невского 2",
            to: "Новочеркасская",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M2140,1087.5v112.5",
                key: "road_66"
            }
        }, {
            from: "Новочеркасская",
            to: "Ладожская",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M2140,1200v100",
                key: "road_67"
            }
        }, {
            from: "Ладожская",
            to: "Проспект Большевиков",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M2140,1300v100",
                key: "road_68"
            }
        }, {
            from: "Проспект Большевиков",
            to: "Улица Дыбенко",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M2140,1400v100",
                key: "road_69"
            }
        }
    ]
};

export default metroStationsElementsSPB;