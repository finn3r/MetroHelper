import React, {useState} from 'react';
import * as ST from '../../styled';
import {ReactComponent as SunButton} from "../../svg/SunButton.svg";
import {ReactComponent as MoonButton} from "../../svg/MoonButton.svg";
import {ReactComponent as HideButton} from "../../svg/HideButton.svg";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {themeSlice} from "../../store/reducers/ThemeSlice";
import {cities, citySlice} from "../../store/reducers/CitySlice";

const Header: React.FC = () => {
    const {name} = useAppSelector(state => state.city);
    const {changeTheme} = themeSlice.actions;
    const {changeCity} = citySlice.actions;
    const [theme, setTheme] = useState(false);
    const [hideSelector, setHideSelector] = useState(false);
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
                <ST.MenuHeaderCityVariantSelector>
                    <ST.MenuHeaderCitySelectedVariant onClick={() => setHideSelector(!hideSelector)} onBlur={() => setHideSelector(false)}>
                        {name}
                        <ST.HideButtonContent hidden={false} status={!hideSelector}>
                            <HideButton/>
                        </ST.HideButtonContent>
                    </ST.MenuHeaderCitySelectedVariant>
                    {hideSelector ? cities.filter((city) => city !== name).map((city,id) =>
                        <ST.MenuHeaderCityVariant
                            onClick={() => {
                                dispatch(changeCity(city));
                                setHideSelector(!hideSelector);
                            }}
                            key={id}
                        >{city}</ST.MenuHeaderCityVariant>) : null}
                </ST.MenuHeaderCityVariantSelector>
            </ST.MenuHeaderCityChanger>
        </ST.MenuHeaderContainer>
    );
};

export default Header;