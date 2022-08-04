import styled, {createGlobalStyle} from "styled-components";
import {IColors} from "./interfaces/IColors";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
    opacity: 0.7;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  @media (max-width: 700px), (max-height: 500px) {
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  background: ${props => props.theme.menu_bg};

  position: absolute;
  width: 350px;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;

  @media (max-width: 700px), (max-height: 500px) {
    margin: 0;
    padding: 0;
    position: fixed;
    bottom: 0;
    border-radius: 10px 10px 0 0;
    width: calc(100vw - 2px);
    z-index: 5;
  }
`;

const MenuItem = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.fg};
`;

export const MenuHeaderContainer = styled(MenuItem)`
  display: flex;
  width: 100%;
  margin-right: 5px;
  padding-bottom: 5px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgba(255, 255, 255, 0.18);
  font-size: 20px;
  @media (max-width: 700px), (max-height: 500px) {
    position: fixed;
    margin: 0 0 0 -1px;
    padding: 5px 0;
    width: calc(100% + 2px);
    top: calc(100% - var(--vh, 1vh) * 100);
    background: ${props => props.theme.menu_bg_no_opacity};
  }
`;

export const MenuHeaderCityChanger = styled.div`
  height: 25px;
  position: relative;
  padding-top: 15px;
  width: 207px;
  border-radius: 10px;
  z-index: 20;
  @media (max-width: 700px), (max-height: 500px) {
    margin: 0 10px;
    padding-top: 10px;
  }
`

export const MenuHeaderCityVariantSelector = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top:0;
  transition: border 150ms ease-in;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0);
  background: ${props => props.theme.menu_input_bg};
  backdrop-filter: blur(3px);
  :hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`

export const MenuHeaderCityVariant = styled.button`
  border: none;
  font-size: 20px;
  outline: none;
  display: flex;
  padding: 5px;
  border-radius: 10px;
  min-height: 30px;
  align-items: center;
  list-style: none;
  text-align: start;
  width: 100%;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  background: none;
  color: ${props => props.theme.fg};
  :hover{
    cursor: pointer;
    background: ${props => props.theme.menu_bg_no_opacity};
  }
`

export const MenuHeaderCitySelectedVariant = styled(MenuHeaderCityVariant)`
  height: 25px;
  border-top: 0;
  justify-content: space-between;
  :hover{
    background: none;
  }
`

export const MenuInputListContainer = styled(MenuItem)`
  display: grid;
  grid-template-areas: "inputFrom swap"
                       "inputTo swap"
                       "clear hide";
  grid-template-rows: 1fr 1fr .5fr;
  grid-template-columns: 87% 13%;
  @media (max-width: 700px), (max-height: 500px) {
    grid-template-areas: "inputFrom swap inputTo";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 40px 1fr;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 5px;
`;

export const SwapThemeButtonContainer = styled(ButtonContainer)`
  width: auto;
`

export const ButtonContent = styled.div<{ disabled?: boolean, hidden?: boolean }>`
  display: flex;
  align-items: center;
  opacity: ${props => props.disabled ? 0.3 : 0.5};
  visibility: ${props => props.hidden ? "hidden" : "visible"};
  transition: all 0.7s, opacity 0.2s;
  color: ${props => props.theme.fg};
  fill: ${props => props.theme.fg};

  :hover {
    cursor: ${props => props.disabled ? "" : "pointer"};
    opacity: ${props => props.disabled ? "" : 0.8};
  }
`;

export const SwapButtonContainer = styled(ButtonContainer)`
  justify-content: center;
`;

export const ClearButtonContainer = styled(ButtonContainer)`
  grid-area: clear;
  @media (max-width: 700px), (max-height: 500px) {
    display: none;
  }
`;

export const HideButtonContainer = styled(ButtonContainer)`
  justify-content: center;
  @media (max-width: 700px), (max-height: 500px) {
    display: none;
  }
`;

export const HideButtonContent = styled(ButtonContent)<{ status: boolean }>`
  transform: ${props => props.status ? "rotate(0deg)" : "rotate(180deg)"};
`;

export const SwapButtonContent = styled(ButtonContent)<{ status: boolean }>`
  @media (max-width: 700px), (max-height: 500px) {
    transform: ${props => props.status ? "rotate(270deg)" : "rotate(90deg)"};
  }
  transform: ${props => props.status ? "rotate(180deg)" : ""};
`;

export const InputCircle = styled.div`
  display: flex;
  align-items: center;
  top:25%;
  left: 0;
  z-index: 5;
  justify-content: center;
  position: absolute;
  margin: 5px;
  @media (max-width: 700px), (max-height: 500px) {
    &.focused {
      left: 4.5px;
      top: 25px;
      position: absolute;
      z-index: 15;
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    & > .input__clear_button {
      display: flex;
    }
  }

  @media (max-width: 700px), (max-height: 500px) {
    margin: 15px 8px;
    &.focused {
      text-align: left;
      background: ${props => props.theme.bg};
      z-index: 10;
      position: fixed;
      left: -1px;
      margin: 0;
      top: calc(100% - var(--vh, 1vh) * 100 + 1px);
      width: 100vw;
      height: calc(var(--vh, 1vh) * 100);

      .input__autocomplete, .input__unfocus_button {
        display: block;
      }

      .input__autocomplete {
        margin-top: 15px;
        left: 0;
        border-radius: 0;
      }

      .input__field_container {
        position: absolute;
        top: 14px;
        width: calc(100% - 110px);
        right: 80px;
      }

      .input__clear_button {
        top: 23px;
        align-items: start;
        right: 80px;
      }

      .input__field {
        padding: 10px 25px 10px 10px;
        width: calc(100% - 35px);
      }
    }
  }
`

export const InputField = styled.input.attrs({
    className: "input__field"
})`
  background: ${props => props.theme.menu_input_bg};
  font-size: 16px;
  width: calc(100% - 50px);
  padding: 10px 25px;
  border-radius: 10px;
  transition: border 150ms ease-in;
  border: 1px solid rgba(0, 0, 0, 0);
  text-overflow: ellipsis;
  color: ${props => props.theme.fg};

  ::placeholder {
    font-weight: 400;
    color: ${props => props.theme.fg};
    opacity: 0.6;
  }

  :focus-visible {
    outline: none;
  }

  :hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  :focus {
    border: 1px solid ${props => props.theme.fg};
    outline: none;

    & ~ .input__clear_button {
      display: flex;
    }

    & ~ .input__autocomplete {
      display: block;
    }

  }
`;

export const InputClearButton = styled(ButtonContent).attrs({
    className: "input__clear_button"
})`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  @media (max-width: 700px), (max-height: 500px) {
    display: flex;
  }
`;

export const InputUnFocusButton = styled(ButtonContent).attrs({
    className: "input__unfocus_button"
})`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: black;
  right: 5px;
  top: 23px;
`;

export const InputUnFocusButtonText = styled.div`
  color: ${props => props.theme.fg_second};
  padding: 3px;
  border-radius: 10px;
`;

export const InputFieldContainer = styled.div.attrs({
    className: "input__field_container"
})`
  width: 100%;
  height: 100%;
  position: relative;
`

export const InputAutoCompleteContainer = styled.div<{ hidden?: boolean }>.attrs({
    className: "input__autocomplete"
})`
  z-index: 99;
  position: absolute;
  visibility: ${props => props.hidden ? "hidden" : "visible"};
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background: ${props => props.theme.menu_bg};
  backdrop-filter: blur(3px);
  max-height: 530%;
  overflow-y: auto;
  display: none;
  @media (max-width: 700px), (max-height: 500px) {
    max-height: none;
    visibility: visible;
    position: fixed;
    box-shadow: none;
    background: ${props => props.theme.bg};
    height: calc(100vh - 75px);
  }
`
export const InputAutoCompleteContent = styled.div`
  display: grid;
  align-items: center;
  text-align: left;
  padding: 5px 10px;
  grid-template-columns: 15px 1fr;
  grid-column-gap: 5px;

  :hover {
    cursor: pointer;
  }

  &[id="selected"] {
    backdrop-filter: blur(5px);
    background: ${props => props.theme.menu_input_bg};
    @media (max-width: 700px), (max-height: 500px) {
      background: ${props => props.theme.menu_bg_no_opacity};
    }
  }
`

export const MenuWayListContainer = styled(MenuItem)`
  max-height: 100%;
  width: calc(100% + 20px);
  padding-bottom: 0;
  margin-left: -10px;
  margin-bottom: -10px;
  @media (max-width: 700px), (max-height: 500px) {
    margin: 0;
    width: 100%;
  }
`;

export const MenuWayListVariant = styled.div<{ hide?: boolean, nowWay?: boolean }>`
  font-size: 20px;
  text-align: left;
  border-left: 4px solid ${props => props.nowWay ? props.theme.bg_blue : "rgba(0, 0, 0, 0)"};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: all 0.2s, opacity 0.35s, margin-top 0.7s;
  border-radius: 10px;
  height: 54px;

  :hover {
    cursor: pointer;
  }

  margin-top: ${props => (props.hide && !props.nowWay) ? "-75px" : "0"};
  opacity: ${props => (props.hide && !props.nowWay) ? "0" : "1"};
  visibility: ${props => (props.hide && !props.nowWay) ? "hidden" : "visible"};
`;

export const MenuWayListTime = styled.span`

`;

export const MenuWayListTransferText = styled.span`
  font-size: 16px;
  margin-left: 10px;
  color: ${props => props.theme.fg};
  opacity: 0.5;
`;

export const MenuWayListTransferCircles = styled.div`
  margin-top: 5px;
`;

export const MapContainer = styled.div`
  background: ${props => props.theme.bg};
  width: 100%;
  height: 100%;
`;

export const MapContent = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none !important;
  fill: none;
`;

export const MapOpacity = styled.g`
  opacity: 0.35;
`;

export const MapBackground = styled.rect`
  fill: ${props => props.theme.bg};
`;

export const MapRiver = styled.path`
  fill: ${props => props.theme.bg_blue};
`;

const colors: IColors = {
    "blue": {
        road: "#4757E2",
        station: "#4757E2"
    },
    "red": {
        road: "#ec2222",
        station: "#ec2222"
    },
    "purple": {
        road: "#8a40ad",
        station: "#8a40ad"
    },
    "orange": {
        road: "#FF9519",
        station: "#FF9519"
    },
    "green": {
        road: "#1EAD35",
        station: "#1EAD35"
    }
};

export const MapStation = styled.g<{ selected?: boolean }>`
  .map_text {
    font-weight: ${props => props.selected ? "bold" : ""};
  }

  .map_circle {
    stroke-width: ${props => props.selected ? "2px" : ""};
    stroke: ${props => props.selected ? props.theme.bg : ""};
  }

  :hover {
    cursor: pointer;

    & > g > .map_text {
      fill: tomato;
    }

    & > .map_circle {
      stroke-width: 2px;
      stroke: ${props => props.theme.bg};
    }
  }
`

export const MapText = styled.text.attrs({
    className: "map_text"
})`
  fill: ${props => props.theme.fg};
  font-size: 20px;
  transition: 0.1s;
`;

export const MapTextStroke = styled(MapText)`
  stroke-width: 4px;
  stroke: ${props => props.theme.bg};
`

export const MapTextLeft = styled(MapText)`
  text-anchor: end;
`;

export const MapTextStrokeLeft = styled(MapTextStroke)`
  text-anchor: end;
`

export const MapRoad = styled.path<{ color: string }>`
  stroke: ${props => colors[props.color].road};
  stroke-miterlimit: 10;
  stroke-width: 20px;
`;

export const MapStationCircle = styled.circle.attrs({
    className: "map_circle"
})<{ color?: string, bg_circle?: boolean }>`
  fill: ${props => props.bg_circle ? props.theme.bg : colors[props.color ?? 0].station};
`;

export const MapStationPath = styled.path.attrs({
    className: "map_circle"
})<{ color?: string, bg_circle?: boolean }>`
  fill: ${props => props.bg_circle ? props.theme.bg : colors[props.color ?? 0].station};
`;