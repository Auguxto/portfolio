import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;

  grid-template-areas:
    "side-bar main-content"
    "now-playing now-playing";

  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;

  overflow: hidden;

  background: linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%);

  position: relative;
`;

export const Player = styled.div`
  display: flex;

  width: 100%;
  min-height: 96px;

  grid-area: now-playing;

  background: #282828;

  position: fixed;
  bottom: 0;

  z-index: 4;
`;
