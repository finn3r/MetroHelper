import React, {useState} from 'react';
import * as ST from '../../styled';
import {ReactComponent as SunButton} from "../../svg/SunButton.svg";
import {ReactComponent as MoonButton} from "../../svg/MoonButton.svg";
import {useAppDispatch} from "../../hooks/redux";
import {themeSlice} from "../../store/reducers/ThemeSlice";

const Header: React.FC = () => {
    const {changeTheme} = themeSlice.actions;
    const [theme, setTheme] = useState(false);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        setTheme(!theme);
        dispatch(changeTheme());
    }

    return (
        <ST.MenuHeaderContainer>
            <ST.ButtonContainer>
                <ST.ButtonContent>
                    {
                        theme ?
                            <SunButton style={{width: "3rem"}} onClick={handleClick}/> :
                            <MoonButton style={{width: "3rem"}} onClick={handleClick}/>
                    }
                </ST.ButtonContent>
            </ST.ButtonContainer>
            MetroHelper - "Санкт-Петербург"
        </ST.MenuHeaderContainer>
    );
};

export default Header;