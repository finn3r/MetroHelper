import React from 'react';
import * as ST from '../../styled';
import InputList from "./InputList";
import Header from "./Header";
import WayList from "./WayList";


const Menu: React.FC = () => {
    return (
        <ST.MenuContainer>
            <Header/>
            <InputList/>
            <WayList/>
        </ST.MenuContainer>
    );
};

export default Menu;