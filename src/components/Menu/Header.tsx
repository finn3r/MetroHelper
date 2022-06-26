import React, {useState} from 'react';
import * as ST from '../../styled';
import {ReactComponent as SunButton} from "../../svg/SunButton.svg";
import {ReactComponent as MoonButton} from "../../svg/MoonButton.svg";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {themeSlice} from "../../store/reducers/ThemeSlice";

const Header: React.FC = () => {
    const {name} = useAppSelector(state => state.city);
    const {changeTheme} = themeSlice.actions;
    const [theme, setTheme] = useState(false);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        setTheme(!theme);
        dispatch(changeTheme());
    }

    return (
        <ST.MenuHeaderContainer>
            <ST.SwapThemeButtonContainer>
                <ST.ButtonContent>
                    {
                        theme ?
                            <SunButton onClick={handleClick}/> :
                            <MoonButton onClick={handleClick}/>
                    }
                </ST.ButtonContent>
            </ST.SwapThemeButtonContainer>
            <ST.MenuHeaderCityChanger>
                {name}
            </ST.MenuHeaderCityChanger>
        </ST.MenuHeaderContainer>
    );
};

export default Header;