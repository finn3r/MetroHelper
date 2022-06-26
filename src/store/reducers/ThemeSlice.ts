import {createSlice} from "@reduxjs/toolkit";

interface ThemeState {
    name: string;
    bg: string;
    bg_blue: string;
    menu_bg: string;
    menu_bg_no_opacity: string;
    menu_input_bg: string;
    fg: string;
    fg_second: string;
}

const lightTheme: ThemeState = {
    name: "light",
    bg: "whitesmoke",
    bg_blue: "rgba(109, 191, 224, 1)",
    menu_bg: "rgba(227,227,227,0.8)",
    menu_bg_no_opacity: "rgb(222,222,222)",
    menu_input_bg: "rgba(255,255,255,0.5)",
    fg: "rgba(0, 0, 0, 1)",
    fg_second: "rgb(25,109,255)"
}

const darkTheme: ThemeState = {
    name: "dark",
    bg: "rgb(28, 28, 28)",
    bg_blue: "rgb(37,95,112)",
    menu_bg: "rgba(70,70,70,0.8)",
    menu_bg_no_opacity: "rgb(70,70,70)",
    menu_input_bg: "rgba(140,139,139,0.5)",
    fg: "rgb(255,255,255)",
    fg_second: "rgb(25,109,255)"
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: lightTheme,
    reducers: {
        changeTheme(state) {
            (state.name === "light") ? Object.assign(state, darkTheme) : state = Object.assign(state, lightTheme);
        }
    }
})

export default themeSlice.reducer;