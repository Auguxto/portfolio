import styled from "styled-components";

import favicon from "../../assets/favicon.png";

export const Container = styled.div`
  display: flex;

  flex: 1;
  flex-direction: column;

  grid-area: main-content;

  padding-bottom: 120px;

  position: relative;

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

export const Header = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  height: 40px;

  margin: 32px;
`;

export const Arrows = styled.div`
  display: flex;

  gap: 8px;
`;

export const ArrowButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  background: #030303;
  border-radius: 32px;
  border: none;

  cursor: pointer;
`;

export const User = styled.button`
  display: flex;

  align-items: center;

  width: 203px;
  height: 40px;

  background: #252525;
  border-radius: 40px;
  border: none;

  cursor: pointer;

  transition: all 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;

export const Avatar = styled.img.attrs({
  src: favicon,
  onDragStart: (e) => e.preventDefault(),
})`
  width: 24px;
  height: 24px;

  border-radius: 24px;

  margin-left: 7px;
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: rgba(255, 255, 255, 0.6);

  margin-left: 8px;
`;

export const Description = styled.div`
  display: flex;

  flex-direction: column;

  margin-left: 34px;
  margin-top: 13px;
`;

export const Name = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;

  color: #ffffff;
`;

export const DescriptionText = styled.p`
  max-width: 450px;

  margin: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 14px;

  color: rgba(255, 255, 255, 0.6);
`;

export const PlayButton = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  border-radius: 48px;

  background: #66d36e;
  box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 0.8);

  position: absolute;

  bottom: 10px;
  right: 10px;

  opacity: 0;
`;

export const Socials = styled.div`
  display: flex;

  flex-wrap: wrap;

  margin-top: 11px;
  margin-left: 32px;

  gap: 16px;
`;

export const SocialCard = styled.a.attrs({
  target: "_blank",
})`
  display: flex;

  flex-direction: column;

  width: 203px;
  height: 273px;

  padding: 16px;
  position: relative;

  background: #252525;
  border-radius: 10px;
  border: none;

  text-decoration: none;

  :hover {
    ${PlayButton} {
      opacity: 1;
      bottom: 20px;

      transition: all 0.5s;
    }
  }
`;

export const SocialCardIcon = styled.div<{ background: string }>`
  display: flex;

  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 171px;

  background: ${(props) => props.background};
  border-radius: 10px;
`;

export const SocialName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  margin-top: 16px;
`;

export const SocialDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: rgba(255, 255, 255, 0.6);

  margin-top: 6px;
`;

export const ProjectsTitle = styled.h2`
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;

  color: #ffffff;

  margin-top: 48px;
  margin-left: 34px;
`;

export const Projects = styled.div`
  display: flex;

  flex-wrap: wrap;

  margin-top: 11px;
  margin-left: 32px;

  gap: 16px;
`;

export const ProjectCard = styled.button`
  display: flex;

  flex-direction: column;

  width: 203px;
  height: 273px;

  padding: 16px;
  position: relative;

  background: #252525;
  border-radius: 10px;
  border: none;

  cursor: pointer;

  :hover {
    ${PlayButton} {
      opacity: 1;
      bottom: 20px;

      transition: all 0.5s;
    }
  }
`;

export const ProjectCardIcon = styled.div<{ background: string }>`
  display: flex;

  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 171px;

  background: ${(props) => props.background};
  border-radius: 10px;
`;

export const ProjectName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  margin-top: 16px;
`;

export const ProjectDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: rgba(255, 255, 255, 0.6);

  margin-top: 6px;
`;
