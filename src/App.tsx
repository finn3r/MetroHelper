import React, {useEffect} from 'react';
import Menu from "./components/Menu";
import Map from "./components/Map";
import * as ST from './styled';
import {ThemeProvider} from "styled-components";
import {useAppSelector} from "./hooks/redux";

const App: React.FC = () => {
    const theme = useAppSelector(state => state.theme);

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
    },[]);

    return (
        <ThemeProvider theme={theme}>
            <ST.GlobalStyle/>
            <ST.AppWrapper>
                <Menu/>
                <Map/>
            </ST.AppWrapper>
        </ThemeProvider>
    );
};

export default App;