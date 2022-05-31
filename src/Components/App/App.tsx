import React, {useContext, useEffect} from 'react';
import WayList from "../WaysList/WayList";
import MetroScheme from "../MetroScheme/MetroScheme";
import InputMenu from "../InputMenu/InputMenu";
import {MetroHelperProvider} from "../MetroHelperContext/MetroHelperContext";
import {CityContext} from "../../custom_settings";
import './App.scss';

const App: React.FC = () => {
    const city: string = useContext(CityContext).city;
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.onresize = () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        return () => {
            window.onresize = null;
        }
    },[])
    return (
        <div className="main">
            <MetroHelperProvider city={city}>
                <MetroScheme/>
                <div className="menu__container">
                    <div className="menu__content">
                        <h1 className="menu__header">Санкт-Петербург — схема метро</h1>
                        <InputMenu/>
                        <WayList/>
                    </div>
                </div>
            </MetroHelperProvider>
        </div>
    );
}

export default App;
