import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background: linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%);

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
  }
`;

export const SidebarAndContent = styled.div`
  display: flex;
  flex: 1;
`;

export const Player = styled.div`
  display: flex;

  height: 96px;

  background: #282828;
`;
