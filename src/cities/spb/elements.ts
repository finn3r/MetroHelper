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
                d: "M1042.84 641C1064.57 641 1082.19 658.612 1082.19 680.34V824.827C1082.19 826.217 1082.46 827.558 1082.99 828.841C1083.52 830.128 1084.28 831.261 1085.26 832.245C1086.24 833.221 1087.39 833.994 1088.67 834.518C1089.94 835.049 1091.3 835.321 1092.68 835.319H1957.66C1979.39 835.319 1997 852.932 1997 874.658V1644.76C1997 1649.98 1997 1666.98 1997 1677.6V1810.04C1997 1823.12 1965.52 1823.12 1965.52 1810.04V1677.6C1965.52 1671.88 1965.52 1677.6 1965.52 1664.52C1965.52 1654.71 1965.51 1654.82 1965.52 1649.65L1964.52 877.646C1964.52 876.256 1964.25 874.915 1963.72 873.632C1963.2 872.358 1962.42 871.2 1961.45 870.228C1960.47 869.252 1959.32 868.479 1958.04 867.955C1956.77 867.424 1955.41 867.152 1954.03 867.154H1639L1092.68 870.228H1030.43H921L359 1364.5C359 1364.5 306.26 1412.04 306.26 1450V1939.21C303.067 1942.4 299.214 1944 294.698 1944H44.4777C39.9624 1944 36.1076 1942.4 32.9165 1939.21L23.8418 1930.14C22.6209 1928.92 21.654 1927.47 20.9973 1925.88C20.3353 1924.29 19.9963 1922.59 20 1920.86C20 1919.12 20.3335 1917.45 20.9973 1915.85C21.654 1914.25 22.6209 1912.81 23.8418 1911.59C31.267 1904.17 31.3961 1896.02 26.5425 1890.88L26.2776 1890.61C18.8524 1883.19 18.7216 1875.04 23.5769 1869.9L23.8418 1869.63C31.267 1862.2 31.3961 1854.06 26.5425 1848.92L26.2776 1848.65C18.8524 1841.22 18.7216 1833.08 23.5769 1827.94L23.8418 1827.67C31.267 1820.24 31.3961 1812.1 26.5425 1806.96L26.2776 1806.69C18.8524 1799.26 18.7216 1791.12 23.5769 1785.98L23.8418 1785.7C31.267 1778.28 31.3961 1770.13 26.5425 1764.99L26.2776 1764.72C18.8524 1757.3 18.7216 1749.15 23.5769 1744.01L23.8418 1743.74C31.267 1736.32 31.3961 1728.17 26.5425 1723.03L26.2776 1722.76C18.8524 1715.34 18.7216 1707.19 23.5769 1702.05L23.8418 1701.78C31.267 1694.35 31.3961 1686.21 26.5425 1681.07L26.2776 1680.8C18.8524 1673.37 18.7216 1665.23 23.5769 1660.09L23.8418 1659.82C31.267 1652.39 31.3961 1644.25 26.5425 1639.11L26.2776 1638.83C18.8524 1631.41 18.7216 1623.27 23.5769 1618.13L23.8418 1617.85C31.267 1610.43 31.3961 1602.28 26.5425 1597.14L26.2776 1596.87C18.8524 1589.45 18.7216 1581.3 23.5769 1576.16L23.8418 1575.89C31.267 1568.46 31.3961 1560.32 26.5425 1555.18L26.2776 1554.91C18.8524 1547.48 18.7216 1539.34 23.5769 1534.2L23.8418 1533.93C31.267 1526.5 31.3961 1518.36 26.5425 1513.22L26.2776 1512.95C18.8524 1505.52 18.7216 1497.38 23.5769 1492.24L23.8418 1491.96C31.267 1484.54 31.3961 1476.4 26.5425 1471.26L26.2776 1470.98C18.8524 1463.56 18.7216 1455.41 23.5769 1450.27L23.8418 1450C31.267 1442.58 31.3961 1434.43 26.5425 1429.29L26.2776 1429.02C18.8524 1421.6 18.7216 1413.45 23.5769 1408.31L23.8418 1408.04C31.267 1400.61 31.3961 1392.47 26.5425 1387.33L26.2776 1387.06C18.8524 1379.63 18.7216 1371.49 23.5769 1366.35L23.8418 1366.08C31.267 1358.65 31.3961 1350.51 26.5425 1345.37L26.2776 1345.09C18.8524 1337.67 18.7216 1329.53 23.5769 1324.39L23.8418 1324.11C31.267 1316.69 31.3961 1308.54 26.5425 1303.4L26.2776 1303.13C18.8524 1295.71 18.7216 1287.56 23.5769 1282.42L23.8418 1282.15C31.267 1274.73 31.3961 1266.58 26.5425 1261.44L26.2776 1261.17C18.8524 1253.75 18.7216 1245.6 23.5769 1240.46L23.8418 1240.19C31.267 1232.76 31.3961 1224.62 26.5425 1219.48L26.2776 1219.21C18.8524 1211.78 18.7216 1203.64 23.5769 1198.5L23.8418 1198.23C31.267 1190.8 31.3961 1182.66 26.5425 1177.52L26.2776 1177.24C18.8524 1169.82 18.7216 1161.68 23.5769 1156.54L23.8418 1156.26C31.267 1148.84 31.3961 1140.69 26.5425 1135.55L26.2776 1135.28C18.8524 1127.86 18.7216 1119.71 23.5769 1114.57L23.8418 1114.3C31.267 1106.88 31.3961 1098.73 26.5425 1093.59L26.2776 1093.32C18.8524 1085.89 18.7216 1077.75 23.5769 1072.61L23.8418 1072.34C31.267 1064.91 31.3961 1056.77 26.5425 1051.63L26.2776 1051.36C18.8524 1043.93 18.7216 1035.79 23.5769 1030.65L23.8418 1030.38C31.267 1022.95 31.3961 1014.81 26.5425 1009.67L26.2776 1009.39C18.8524 1001.97 18.7216 993.825 23.5769 988.684L23.8418 988.413C31.267 980.987 31.3961 972.844 26.5425 967.704L26.2776 967.431C18.8524 960.006 18.7216 951.862 23.5769 946.723L23.8418 946.45C31.267 939.025 31.3961 930.881 26.5425 925.741L26.2776 925.469C18.8524 918.043 18.7216 909.899 23.5769 904.759L23.8418 904.485C31.267 897.062 31.3961 888.917 26.5425 883.778L26.2776 883.505C18.8524 876.082 18.7216 867.936 23.5769 862.796L23.8418 862.524C31.267 855.1 31.3961 846.954 26.5425 841.815L26.2776 841.542C18.8524 834.119 18.7216 825.973 23.5769 820.834L23.8418 820.561C31.267 813.138 31.3961 804.993 26.5425 799.852L26.2776 799.581C18.8524 792.155 18.7216 784.01 23.5769 778.872L23.8418 778.599C31.267 771.174 31.3961 763.03 26.5425 757.889L26.2776 757.618C18.8524 750.19 18.7216 742.044 23.5769 736.907L23.8418 736.634C31.267 729.209 31.3945 721.067 26.5425 715.927L26.2776 715.653C18.8524 708.227 18.7216 700.083 23.5769 694.943L23.8418 694.671C31.267 687.248 31.3961 679.101 26.5425 673.964L26.2776 673.691C18.72 666.134 18.72 657.831 23.8418 652.708L31.71 644.841C34.2701 642.28 37.3615 641 40.9842 641H1042.84ZM431.112 763.4H212.2C206.768 763.4 202.13 765.321 198.288 769.162L152.375 829.07C148.533 832.912 146.614 837.548 146.614 842.979V1156.92C146.614 1162.12 148.674 1167.11 152.343 1170.8L306.26 1348.5C313.925 1356.2 332.28 1339.09 339.982 1331.43L635 1060C642.571 1052.46 628.045 1032.6 620.757 1024.88L620.351 1024.46L445.024 769.164C441.182 765.321 436.544 763.4 431.112 763.4ZM1030.43 672.477H878.422C873.207 672.477 868.191 673.475 863.374 675.466C858.598 677.432 854.261 680.328 850.614 683.985L769.108 751.389C765.462 755.046 761.124 757.942 756.349 759.908C751.581 761.891 746.466 762.907 741.302 762.897H495.225C492.887 762.897 491.27 763.977 490.378 766.137C489.484 768.297 489.865 770.203 491.519 771.855L642.107 1002.17C649.665 1009.72 660.5 1039.15 669.5 1030.65L684 1018L727.5 980L762.5 946.45C762.5 938.89 768.911 912.33 774.127 906.857L774.622 906.35L835.686 845.277C841.031 839.931 848.229 836.848 855.786 836.666L856.494 836.658L1030.43 835.654C1041.29 835.654 1050.1 826.848 1050.1 815.985V692.148C1050.1 681.284 1041.29 672.477 1030.43 672.477ZM890.852 846.466H856.492C851.489 846.467 846.675 848.379 843.035 851.813L842.621 852.213L781.555 913.286C778.017 916.825 775.965 921.582 775.819 926.584L775.809 927.161L771.809 958.08C771.809 958.404 771.904 958.721 772.084 958.99C772.264 959.259 772.52 959.469 772.819 959.593C773.119 959.716 773.448 959.748 773.765 959.684C774.083 959.621 774.374 959.464 774.603 959.234L892.011 849.254C892.239 849.025 892.394 848.733 892.456 848.416C892.518 848.099 892.485 847.771 892.361 847.473C892.237 847.174 892.027 846.92 891.758 846.74C891.489 846.561 891.175 846.466 890.852 846.466ZM804.905 672.477H214.545C213.153 672.477 211.815 672.742 210.53 673.275C209.243 673.808 208.11 674.567 207.126 675.548C206.149 676.521 205.376 677.678 204.85 678.952C204.321 680.224 204.049 681.59 204.053 682.968V721.434C204.053 722.824 204.319 724.163 204.85 725.448C205.383 726.733 206.142 727.868 207.126 728.852C208.099 729.828 209.256 730.6 210.53 731.125C211.802 731.655 213.167 731.927 214.545 731.924H735.744C740.951 731.924 745.943 729.861 749.63 726.189L808.608 681.439C810.266 679.788 810.648 677.881 809.754 675.72C808.862 673.557 807.245 672.477 804.905 672.477Z",
                key: "path_1"
            },
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
                d: "M1000,100V210",
                key: "road_1"
            }
        }, {
            from: "Проспект Просвещения",
            to: "Озерки",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,200V310",
                key: "road_2"
            }
        }, {
            from: "Озерки",
            to: "Удельная",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,300V410",
                key: "road_3"
            }
        }, {
            from: "Удельная",
            to: "Пионерская",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,400V510",
                key: "road_4"
            }
        }, {
            from: "Пионерская",
            to: "Чёрная речка",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,500V610",
                key: "road_5"
            }
        }, {
            from: "Чёрная речка",
            to: "Петроградская",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,600V710",
                key: "road_6"
            }
        }, {
            from: "Петроградская",
            to: "Горьковская",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,700V810",
                key: "road_7"
            }
        }, {
            from: "Горьковская",
            to: "Невский проспект",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,800v210",
                key: "road_8"
            }
        }, {
            from: "Невский проспект",
            to: "Сенная площадь",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1000v110",
                key: "road_9"
            }
        }, {
            from: "Сенная площадь",
            to: "Технологический институт 2",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1100v210",
                key: "road_10"
            }
        }, {
            from: "Технологический институт 2",
            to: "Фрунзенская",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1300v110",
                key: "road_11"
            }
        }, {
            from: "Фрунзенская",
            to: "Московские ворота",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1400v110",
                key: "road_12"
            }
        }, {
            from: "Московские ворота",
            to: "Электросила",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1500v110",
                key: "road_13"
            }
        }, {
            from: "Электросила",
            to: "Парк Победы",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1600v110",
                key: "road_14"
            }
        }, {
            from: "Парк Победы",
            to: "Московская",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1700v110",
                key: "road_15"
            }
        }, {
            from: "Московская",
            to: "Звёздная",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1800v110",
                key: "road_16"
            }
        }, {
            from: "Звёздная",
            to: "Купчино",
            type: ST.MapRoad,
            props: {
                color: "blue",
                d: "M1000,1900v110",
                key: "road_17"
            }
        }, {
            from: "Девяткино",
            to: "Гражданский проспект",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,100V210",
                key: "road_18"
            }
        }, {
            from: "Гражданский проспект",
            to: "Академическая",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,200V310",
                key: "road_19"
            }
        }, {
            from: "Академическая",
            to: "Политехническая",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,300V410",
                key: "road_20"
            }
        }, {
            from: "Политехническая",
            to: "Площадь Мужества",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,400V510",
                key: "road_21"
            }
        }, {
            from: "Площадь Мужества",
            to: "Лесная",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,500V610",
                key: "road_22"
            }
        }, {
            from: "Лесная",
            to: "Выборгская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,600V710",
                key: "road_23"
            }
        }, {
            from: "Выборгская",
            to: "Площадь Ленина",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,700V810",
                key: "road_24"
            }
        }, {
            from: "Площадь Ленина",
            to: "Чернышевская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,800V910",
                key: "road_25"
            }
        }, {
            from: "Чернышевская",
            to: "Площадь Восстания",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,900v110",
                key: "road_26"
            }
        }, {
            from: "Площадь Восстания",
            to: "Владимирская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M1300,1000v110",
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
                d: "M1300 1300H990",
                key: "road_29"
            }
        }, {
            from: "Технологический институт 1",
            to: "Балтийская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705 1500L981.5 1300H1000",
                key: "road_30"
            }
        }, {
            from: "Балтийская",
            to: "Нарвская",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705,1500v110",
                key: "road_31"
            }
        }, {
            from: "Нарвская",
            to: "Кировский завод",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705,1600v110",
                key: "road_32"
            }
        }, {
            from: "Кировский завод",
            to: "Автово",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705,1700v110",
                key: "road_33"
            }
        }, {
            from: "Автово",
            to: "Ленинский проспект",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705,1800v110",
                key: "road_34"
            }
        }, {
            from: "Ленинский проспект",
            to: "Проспект Ветеранов",
            type: ST.MapRoad,
            props: {
                color: "red",
                d: "M705,1900v110",
                key: "road_35"
            }
        }, {
            from: "Беговая",
            to: "Зенит",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M425,600V710",
                key: "road_36"
            }
        }, {
            from: "Зенит",
            to: "Приморская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M425,700V810",
                key: "road_37"
            }
        }, {
            from: "Приморская",
            to: "Василеостровская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M425,800v210",
                key: "road_38"
            }
        }, {
            from: "Василеостровская",
            to: "Гостиный двор",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M425 1000H1010",
                key: "road_39"
            }
        }, {
            from: "Гостиный двор",
            to: "Маяковская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1000 1000H1310",
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
                d: "M1860,987.5v120",
                key: "road_42"
            }
        }, {
            from: "Площадь Александра Невского 1",
            to: "Елизаровская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,1100v110",
                key: "road_43"
            }
        }, {
            from: "Елизаровская",
            to: "Ломоносовская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,1200v110",
                key: "road_44"
            }
        }, {
            from: "Ломоносовская",
            to: "Пролетарская",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,1300v110",
                key: "road_45"
            }
        }, {
            from: "Пролетарская",
            to: "Обухово",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,1400v110",
                key: "road_46"
            }
        }, {
            from: "Обухово",
            to: "Рыбацкое",
            type: ST.MapRoad,
            props: {
                color: "green",
                d: "M1860,1500v110",
                key: "road_47"
            }
        }, {
            from: "Комендантский проспект",
            to: "Старая Деревня",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705,500V610",
                key: "road_48"
            }
        }, {
            from: "Старая Деревня",
            to: "Крестовский остров",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705,600V710",
                key: "road_49"
            }
        }, {
            from: "Крестовский остров",
            to: "Чкаловская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705,700V810",
                key: "road_50"
            }
        }, {
            from: "Чкаловская",
            to: "Спортивная",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705,800V910",
                key: "road_51"
            }
        }, {
            from: "Спортивная",
            to: "Адмиралтейская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705,900v210",
                key: "road_52"
            }
        }, {
            from: "Адмиралтейская",
            to: "Садовая",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M705 1100H1001",
                key: "road_53"
            }
        }, {
            from: "Садовая",
            to: "Звенигородская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1000 1100H1017.5L1300 1295V1300",
                key: "road_54"
            }
        }, {
            from: "Звенигородская",
            to: "Обводный канал",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1299v110",
                key: "road_55"
            }
        }, {
            from: "Обводный канал",
            to: "Волковская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1400v110",
                key: "road_56"
            }
        }, {
            from: "Волковская",
            to: "Бухарестская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1500v110",
                key: "road_57"
            }
        }, {
            from: "Бухарестская",
            to: "Международная",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1600v110",
                key: "road_58"
            }
        }, {
            from: "Международная",
            to: "Проспект Славы",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1700v110",
                key: "road_59"
            }
        }, {
            from: "Проспект Славы",
            to: "Дунайская",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1800v110",
                key: "road_60"
            }
        }, {
            from: "Дунайская",
            to: "Шушары",
            type: ST.MapRoad,
            props: {
                color: "purple",
                d: "M1300,1900v110",
                key: "road_61"
            }
        }, {
            from: "Спасская",
            to: "Достоевская",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M1000 1100H1310",
                key: "road_62"
            }
        }, {
            from: "Достоевская",
            to: "Лиговский проспект",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M1300 1100H1590",
                key: "road_63"
            }
        }, {
            from: "Лиговский проспект",
            to: "Площадь Александра Невского 2",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M1580 1100H1870",
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
                d: "M2140,1087.5v120",
                key: "road_66"
            }
        }, {
            from: "Новочеркасская",
            to: "Ладожская",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M2140,1200v110",
                key: "road_67"
            }
        }, {
            from: "Ладожская",
            to: "Проспект Большевиков",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M2140,1300v110",
                key: "road_68"
            }
        }, {
            from: "Проспект Большевиков",
            to: "Улица Дыбенко",
            type: ST.MapRoad,
            props: {
                color: "orange",
                d: "M2140,1400v110",
                key: "road_69"
            }
        }
    ]
};

export default metroStationsElementsSPB;