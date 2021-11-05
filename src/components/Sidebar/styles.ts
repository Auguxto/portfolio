import styled, { css } from "styled-components";

import spotify from "../../assets/spotify.svg";

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  grid-area: side-bar;

  width: 300px;
  height: 100%;

  background: #030303;

  user-select: none;

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

export const Logo = styled.img.attrs({
  src: spotify,
  onDragStart: (e) => e.preventDefault(),
})`
  width: 148px;
  height: 44px;

  margin-top: 40px;
  margin-left: 24px;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
`;

export const NavText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: rgba(255, 255, 255, 0.5);

  margin-left: 20px;
`;

export const NavItem = styled.button<{ active?: boolean }>`
  display: flex;

  height: 40px;

  align-items: center;

  padding: 24px;
  position: relative;

  background: transparent;
  border: none;

  cursor: pointer;

  ${(props) => (props.active ? NavItemActive : null)}

  transition: all 0.2s;

  :hover {
    background: rgba(255, 255, 255, 0.04);
  }
`;

const NavItemActive = css`
  ::after {
    content: "";

    width: 4px;
    height: 100%;

    position: absolute;

    left: 0;

    background: #66d36e;
  }

  ${NavText} {
    color: rgba(255, 255, 255);
  }
`;

export const Projects = styled.div`
  display: flex;

  flex-direction: column;

  margin-top: 70px;

  padding: 0 24px;
`;

export const ProjectsTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  letter-spacing: 0.15em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.5);
`;

export const CreateProject = styled.button`
  display: flex;

  align-items: center;

  height: 32px;

  background: transparent;
  border: none;

  margin-top: 17px;

  cursor: pointer;
`;

export const CreateProjectIcon = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  background: rgba(255, 255, 255, 0.5);
`;

export const CreateProjectText = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: rgba(255, 255, 255, 0.5);

  margin-left: 20px;

  transition: all 0.2s;

  :hover {
    color: rgba(255, 255, 255);
  }
`;

export const Techs = styled.div`
  display: flex;

  flex-direction: column;

  margin-top: 40px;
  margin-bottom: 50px;

  padding: 0 24px;
`;

export const TechsTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  letter-spacing: 0.15em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.5);
`;

export const Tech = styled.button`
  display: flex;

  align-items: center;

  height: 32px;

  background: transparent;
  border: none;

  margin-top: 17px;

  cursor: pointer;
`;

export const TechIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const TechText = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: rgba(255, 255, 255, 0.5);

  margin-left: 20px;

  transition: all 0.2s;

  :hover {
    color: rgba(255, 255, 255);
  }
`;
