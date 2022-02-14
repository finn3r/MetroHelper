import React, {useContext} from 'react';
import WayList from "../WaysList/WayList";
import MetroScheme from "../MetroScheme/MetroScheme";
import InputMenu from "../InputMenu/InputMenu";
import {MetroHelperProvider} from "../MetroHelperContext/MetroHelperContext";
import {CityContext} from "../../custom_settings";
import './App.scss';

const App: React.FC = () => {
    const city: string = useContext(CityContext).city;
    return (
        <div className="main">
            <MetroHelperProvider city={city}>
                <MetroScheme/>
                <div className="menu__container">
                    <div className="menu__content">
                        <header className="menu__header">Санкт-Петербург — схема метро</header>
                        <InputMenu/>
                        <WayList/>
                    </div>
                </div>
            </MetroHelperProvider>
        </div>
    );
}

export default App;
