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

export const Socials = styled.div`
  display: flex;

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
`;

export const SocialCardIcon = styled.div<{ background: string }>`
  display: flex;

  align-items: center;
  justify-content: center;

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
