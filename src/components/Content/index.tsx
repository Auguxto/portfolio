import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
  Play,
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
  PlayButton,
  ProjectCard,
  ProjectCardIcon,
  ProjectDescription,
  ProjectName,
  Projects,
  ProjectsTitle,
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
            <PlayButton>
              <Play size={22} color="#FFFFFF" fill="#FFFFFF" />
            </PlayButton>
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
            <PlayButton>
              <Play size={22} color="#FFFFFF" fill="#FFFFFF" />
            </PlayButton>
          </SocialCardIcon>
          <SocialName>Linkedin</SocialName>
          <SocialDescription>Perfil no Linkedin</SocialDescription>
        </SocialCard>
        <SocialCard href="https://www.instagram.com/victor_auguxt0/">
          <SocialCardIcon background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)">
            <Instagram strokeWidth={1} color="#ffffff" size={80} />
            <PlayButton>
              <Play size={22} color="#FFFFFF" fill="#FFFFFF" />
            </PlayButton>
          </SocialCardIcon>
          <SocialName>Instagram</SocialName>
          <SocialDescription>Perfil no Instagram</SocialDescription>
        </SocialCard>
      </Socials>
      <ProjectsTitle>Projetos</ProjectsTitle>
      <Projects>
        <ProjectCard>
          <ProjectCardIcon background="red">
            <PlayButton>
              <Play size={22} color="#FFFFFF" fill="#FFFFFF" />
            </PlayButton>
          </ProjectCardIcon>
          <ProjectName>Projeto 1</ProjectName>
          <ProjectDescription>Descrição projeto 1</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardIcon background="blue">
            <PlayButton>
              <Play size={22} color="#FFFFFF" fill="#FFFFFF" />
            </PlayButton>
          </ProjectCardIcon>
          <ProjectName>Projeto 2</ProjectName>
          <ProjectDescription>Descrição projeto 2</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardIcon background="green">
            <PlayButton>
              <Play size={22} color="#FFFFFF" fill="#FFFFFF" />
            </PlayButton>
          </ProjectCardIcon>
          <ProjectName>Projeto 3</ProjectName>
          <ProjectDescription>Descrição projeto 3</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardIcon background="yellow">
            <PlayButton>
              <Play size={22} color="#FFFFFF" fill="#FFFFFF" />
            </PlayButton>
          </ProjectCardIcon>
          <ProjectName>Projeto 4</ProjectName>
          <ProjectDescription>Descrição projeto 4</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardIcon background="cyan">
            <PlayButton>
              <Play size={22} color="#FFFFFF" fill="#FFFFFF" />
            </PlayButton>
          </ProjectCardIcon>
          <ProjectName>Projeto 5</ProjectName>
          <ProjectDescription>Descrição projeto 5</ProjectDescription>
        </ProjectCard>
      </Projects>
    </Container>
  );
};

export { Content };
