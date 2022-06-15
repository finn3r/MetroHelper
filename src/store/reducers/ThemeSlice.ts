import {createSlice} from "@reduxjs/toolkit";

interface ThemeState {
    name: string;
    bg: string;
    dark_bg: string;
    alter_bg: string;
    second_bg: string;
    third_bg: string;
    fg: string;
}

const lightTheme: ThemeState = {
    name: "light",
    bg: "rgba(109, 191, 224, 1)",
    dark_bg: "rgba(0, 162, 255, 1)",
    alter_bg: "whitesmoke",
    second_bg: "rgba(192, 192, 192, 0.45)",
    third_bg: "rgba(229,229,227,0.5)",
    fg: "rgba(0, 0, 0, 1)"
}

const darkTheme: ThemeState = {
    name: "dark",
    bg: "rgba(0, 0, 0, 1)",
    dark_bg: "grey",
    alter_bg: "darkgrey",
    second_bg: "rgba(109, 191, 224, 0.45)",
    third_bg: "rgba(109, 191, 224, 0.2)",
    fg: "rgba(109, 191, 224, 1)",
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