import styled, {createGlobalStyle} from "styled-components";
import {IColors} from "./interfaces/IColors";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Kdam Thmor Pro', sans-serif;
    font-size: clamp(15px, calc(0.9375rem + ((1vw - 7.68px) * 0.3472)), 19px);
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-radius: .6rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: .6rem;
    opacity: 0.7;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  @media (max-width: 700px) {
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  background: ${props => props.theme.second_bg};
  position: absolute;
  width: 25rem;
  flex-direction: column;
  margin: .5rem;

  backdrop-filter: blur(3px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;

  @media (max-width: 700px) {
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
  padding: .3rem 0;
  color: ${props => props.theme.fg};
`;

export const MenuHeaderContainer = styled(MenuItem)`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid rgba(255, 255, 255, 0.18);
  font-size: 1.3rem;
  @media (max-width: 700px) {
    position: fixed;
    font-size: 1rem;
    color: black;
    top: calc(100% - var(--vh, 1vh) * 100 + 1px);
    background: ${props => props.theme.second_dark_bg};
  }
`;

export const MenuInputListContainer = styled(MenuItem)`
  display: grid;
  grid-template-areas: "inputFrom swap"
                       "inputTo swap"
                       "clear hide";
  grid-template-rows: 1fr 1fr .5fr;
  grid-template-columns: 87% 13%;
  @media (max-width: 700px) {
    grid-template-areas: "inputFrom swap inputTo"
                         "clear clear hide";
    grid-template-rows: 1fr .2fr;
    grid-template-columns: 46% 8% 46%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 .3rem;
`;

export const ButtonContent = styled.div<{ disabled?: boolean, hidden?: boolean }>`
  display: flex;
  align-items: center;
  opacity: ${props => props.disabled ? 0.3 : 0.5};
  visibility: ${props => props.hidden ? "hidden" : "visible"};
  transition: all 0.7s, opacity 0.2s;

  :hover {
    cursor: ${props => props.disabled ? "" : "pointer"};
    opacity: ${props => props.disabled ? "" : 0.8};
  }
`;

export const HideButtonContainer = styled(ButtonContainer)`
  justify-content: right;
`;

export const HideButtonContent = styled(ButtonContent)<{ status: boolean }>`
  transform: ${props => props.status ? "rotate(0deg)" : "rotate(180deg)"};
  width: 3rem;
`;

export const SwapButtonContent = styled(ButtonContent)<{ status: boolean }>`
  transform: ${props => props.status ? "rotate(360deg)" : ""};
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-areas: "circle field";
  grid-template-columns: 13% 87%;

  @media (max-width: 700px) {
    &[data-type='Куда'] {
      grid-template-columns: 87% 13%;
      grid-template-areas: "field circle";
    }
  }
`;

export const InputCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25%;
  @media (max-width: 700px) {
    padding: 0;
    &.focused {
      left: .25rem;
      width: 1.5rem;
      height: 2rem;
      top: calc(100% - var(--vh, 1vh) * 100 + 1.25rem);
      position: fixed;
      z-index: 15;
    }
  }
`;

export const InputFieldContainer = styled.div`
  position: relative;
  margin: .5rem;

  :hover {
    & > .input__clear_button {
      display: flex;
    }
  }

  @media (max-width: 700px) {
    &.focused {
      text-align: left;
      background: ${props => props.theme.alter_bg};
      z-index: 10;
      position: fixed;
      left: 0;
      margin: 0;
      top: calc(100% - var(--vh, 1vh) * 100 + 1px);
      width: calc(100vw - 2px);
      height: calc(var(--vh, 1vh) * 100);

      .input__autocomplete, .input__unfocus_button {
        display: block;
      }

      .input__field {
        margin-left: 2rem;
        margin-top: 1rem;
        width: calc(100% - 9rem);
      }

      .input__clear_button {
        bottom: 0;
        margin-top: 1rem;
        align-items: start;
        right: 4.5rem;
      }
    }
  }
`

export const InputField = styled.input.attrs({
    className: "input__field"
})`
  background: ${props => props.theme.third_bg};
  font-size: 1rem;
  width: calc(100% - 2.6rem);
  padding: .6rem 2rem .6rem .6rem;
  border-radius: .5rem;
  transition: border 150ms ease-in;
  border: 1px solid rgba(0, 0, 0, 0);
  text-overflow: ellipsis;

  ::placeholder {
    font-weight: 400;
    color: black;
    opacity: 0.6;
  }

  :focus-visible {
    outline: none;
  }

  :hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  :focus {
    border: 1px solid ${props => props.theme.bg};

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
  height: calc(100% - 1rem);
  width: 2rem;
  right: .5rem;
  top: .5rem;
`;

export const InputUnFocusButton = styled(ButtonContent).attrs({
    className: "input__unfocus_button"
})`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: black;
  height: calc(100% - 1rem);
  right: .2rem;
  top: 1.2rem;
`;

export const InputUnFocusButtonText = styled.div`
  border: 1px ${props => props.theme.bg} solid;
  padding: .2rem;
  border-radius: .5rem;
`;

export const InputAutoCompleteContainer = styled.div<{ hidden?: boolean }>.attrs({
    className: "input__autocomplete"
})`
  z-index: 99;
  position: absolute;
  visibility: ${props => props.hidden ? "hidden" : "visible"};
  width: 100%;
  border-radius: .5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background: ${props => props.theme.second_bg};
  backdrop-filter: blur(3px);
  max-height: 530%;
  overflow-y: auto;
  display: none;
  @media (max-width: 700px) {
    max-height: none;
    visibility: visible;
    position: fixed;
    box-shadow: none;
    background: ${props => props.theme.alter_bg};
    height: calc(var(--vh, 1vh) * 100 - 43%);
  }
`
export const InputAutoCompleteContent = styled.div`
  display: grid;
  align-items: center;
  text-align: left;
  padding: .2rem .5rem;
  grid-template-columns: 1rem 1fr;
  grid-column-gap: .3rem;

  :hover {
    cursor: pointer;
  }

  &[id="selected"] {
    backdrop-filter: blur(5px);
    background: ${props => props.theme.second_bg};
  }
`

export const MenuWayListContainer = styled(MenuItem)`
  max-height: 100%;
  width: 100%;
  padding-bottom: 0;
`;

export const MenuWayListVariant = styled.div<{ hide?: boolean, nowWay?: boolean }>`
  font-size: 1.2rem;
  text-align: left;
  height: 3rem;
  border-left: 4px solid ${props => props.nowWay ? props.theme.dark_bg : "rgba(0, 0, 0, 0)"};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.2rem .8rem;
  transition: all 0.2s, opacity 0.35s, margin-top 0.7s;
  border-radius: .8rem;

  :hover {
    cursor: pointer;
  }

  margin-top: ${props => (props.hide && !props.nowWay) ? "-5.4rem" : "0"};
  opacity: ${props => (props.hide && !props.nowWay) ? "0" : "1"};
  visibility: ${props => (props.hide && !props.nowWay) ? "hidden" : "visible"};
`;

export const MenuWayListTime = styled.span`
  font-weight: 600;
`;

export const MenuWayListTransferText = styled.span`
  font-size: 1rem;
  margin-left: 1rem;
  color: ${props => props.theme.fg};
  opacity: 0.5;
`;

export const MenuWayListTransferCircles = styled.div`
  margin-top: .8rem;
  margin-bottom: -1rem;
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
  fill: ${props => props.theme.alter_bg};
`;

export const MapRiverNoFill = styled.path`
  fill: none;
  stroke: ${props => props.theme.alter_bg};
  stroke-linejoin: round;
  stroke-width: 40px;
`;

export const MapText = styled.text.attrs({
    className: "map_text"
})`
  font-size: 1.2rem;
  font-weight: 600;
  fill: ${props => props.theme.fg};
  transition: 0.1s;

  :hover {
    cursor: pointer;
    fill: tomato;
  }
`;

export const MapTextLeft = styled(MapText)`
  text-anchor: end;
`;

const colors: IColors = {
    "blue": {
        road: "#29335c",
        station: "#0b86bd"
    },
    "red": {
        road: "#780116",
        station: "#ee6352"
    },
    "purple": {
        road: "#4A02C9",
        station: "#7302C9"
    },
    "orange": {
        road: "#C96902",
        station: "#FC8C17"
    },
    "green": {
        road: "#055718",
        station: "#038A22"
    }
};

export const MapRoad = styled.path<{ color: string }>`
  fill: ${props => colors[props.color].road};
  stroke: ${props => colors[props.color].road};
  stroke-miterlimit: 10;
  stroke-width: 25px;
`;

export const MapStationCircle = styled.circle<{ color: string }>`
  fill: ${props => colors[props.color].station};

  :hover {
    cursor: pointer;

    & + .map_text {
      fill: tomato;
    }
  }
`;

export const MapStationPath = styled.path<{ color: string }>`
  fill: ${props => colors[props.color].station};

  :hover {
    cursor: pointer;

    & + .map_text {
      fill: tomato;
    }
  }
`;