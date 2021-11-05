import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

import {
  ArrowButton,
  Arrows,
  Avatar,
  Container,
  Description,
  DescriptionText,
  Header,
  Name,
  SocialCard,
  SocialCardIcon,
  SocialDescription,
  SocialName,
  Socials,
  User,
  UserName,
} from "./styles";

const Content: React.FC = () => {
  return (
    <Container>
      <Header>
        <Arrows>
          <ArrowButton>
            <ChevronLeft strokeWidth={1} size={20} color="#FFFFFF" />
          </ArrowButton>
          <ArrowButton>
            <ChevronRight strokeWidth={1} size={20} color="#FFFFFF" />
          </ArrowButton>
        </Arrows>
        <User>
          <Avatar />
          <UserName>Victor Augusto</UserName>
        </User>
      </Header>
      <Description>
        <Name>Victor Augusto</Name>
        <DescriptionText>
          Meu nome é Victor, tenho 20 anos, nascido em Cerquilho, São Paulo.
          Estudo programação desde que tinha 15 anos, desde então, estudo cerca
          de no mínimo 2 horas por dia, sempre a procura de novos desafios e
          novas tecnologias
        </DescriptionText>
      </Description>
      <Socials>
        <SocialCard href="https://github.com/Auguxto">
          <SocialCardIcon background="#ffffff">
            <Github color="#030303" size={80} />
          </SocialCardIcon>
          <SocialName>Github</SocialName>
          <SocialDescription>Perfil no Github</SocialDescription>
        </SocialCard>
        <SocialCard href="https://www.linkedin.com/in/victor-augusto-ferreira-076209209/">
          <SocialCardIcon background="#0A66C2">
            <Linkedin
              strokeWidth={1}
              fill="#ffffff"
              color="#ffffff"
              size={80}
            />
          </SocialCardIcon>
          <SocialName>Linkedin</SocialName>
          <SocialDescription>Perfil no Linkedin</SocialDescription>
        </SocialCard>
        <SocialCard href="https://www.instagram.com/victor_auguxt0/">
          <SocialCardIcon background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)">
            <Instagram strokeWidth={1} color="#ffffff" size={80} />
          </SocialCardIcon>
          <SocialName>Instagram</SocialName>
          <SocialDescription>Perfil no Instagram</SocialDescription>
        </SocialCard>
      </Socials>
      <Socials>
        <SocialCard href="https://github.com/Auguxto">
          <SocialCardIcon background="#ffffff">
            <Github color="#030303" size={80} />
          </SocialCardIcon>
          <SocialName>Github</SocialName>
          <SocialDescription>Perfil no Github</SocialDescription>
        </SocialCard>
        <SocialCard href="https://www.linkedin.com/in/victor-augusto-ferreira-076209209/">
          <SocialCardIcon background="#0A66C2">
            <Linkedin
              strokeWidth={1}
              fill="#ffffff"
              color="#ffffff"
              size={80}
            />
          </SocialCardIcon>
          <SocialName>Linkedin</SocialName>
          <SocialDescription>Perfil no Linkedin</SocialDescription>
        </SocialCard>
        <SocialCard href="https://www.instagram.com/victor_auguxt0/">
          <SocialCardIcon background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)">
            <Instagram strokeWidth={1} color="#ffffff" size={80} />
          </SocialCardIcon>
          <SocialName>Instagram</SocialName>
          <SocialDescription>Perfil no Instagram</SocialDescription>
        </SocialCard>
      </Socials>
      <Socials>
        <SocialCard href="https://github.com/Auguxto">
          <SocialCardIcon background="#ffffff">
            <Github color="#030303" size={80} />
          </SocialCardIcon>
          <SocialName>Github</SocialName>
          <SocialDescription>Perfil no Github</SocialDescription>
        </SocialCard>
        <SocialCard href="https://www.linkedin.com/in/victor-augusto-ferreira-076209209/">
          <SocialCardIcon background="#0A66C2">
            <Linkedin
              strokeWidth={1}
              fill="#ffffff"
              color="#ffffff"
              size={80}
            />
          </SocialCardIcon>
          <SocialName>Linkedin</SocialName>
          <SocialDescription>Perfil no Linkedin</SocialDescription>
        </SocialCard>
        <SocialCard href="https://www.instagram.com/victor_auguxt0/">
          <SocialCardIcon background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)">
            <Instagram strokeWidth={1} color="#ffffff" size={80} />
          </SocialCardIcon>
          <SocialName>Instagram</SocialName>
          <SocialDescription>Perfil no Instagram</SocialDescription>
        </SocialCard>
      </Socials>
    </Container>
  );
};

export { Content };
