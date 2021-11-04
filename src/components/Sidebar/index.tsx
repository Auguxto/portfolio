import React, { useState } from "react";
import { Home, Search, Library, Plus } from "lucide-react";

import {
  Container,
  CreateProject,
  CreateProjectIcon,
  CreateProjectText,
  Logo,
  Navigation,
  NavItem,
  NavText,
  Projects,
  ProjectsTitle,
  Tech,
  TechIcon,
  Techs,
  TechsTitle,
  TechText,
} from "./styles";

import javascript from "../../assets/icons/javascript.svg";
import typescript from "../../assets/icons/typescript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";

const Sidebar: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  return (
    <Container>
      <Logo />
      <Navigation>
        <NavItem
          active={activeNavItem === "home" ? true : false}
          onClick={() => setActiveNavItem("home")}
        >
          <Home
            size={22}
            color={activeNavItem === "home" ? "#FFFFFF" : "#797979"}
          />
          <NavText>Início</NavText>
        </NavItem>
        <NavItem
          active={activeNavItem === "search" ? true : false}
          onClick={() => setActiveNavItem("search")}
        >
          <Search
            size={22}
            color={activeNavItem === "search" ? "#FFFFFF" : "#797979"}
          />
          <NavText>Buscar</NavText>
        </NavItem>
        <NavItem
          active={activeNavItem === "library" ? true : false}
          onClick={() => setActiveNavItem("library")}
        >
          <Library
            size={22}
            color={activeNavItem === "library" ? "#FFFFFF" : "#797979"}
          />
          <NavText>Sua Biblioteca</NavText>
        </NavItem>
      </Navigation>
      <Projects>
        <ProjectsTitle>Projetos</ProjectsTitle>
        <CreateProject>
          <CreateProjectIcon>
            <Plus size={16} color="#000000" strokeWidth={4} />
          </CreateProjectIcon>
          <CreateProjectText>Criar novo projeto</CreateProjectText>
        </CreateProject>
      </Projects>
      <Techs>
        <TechsTitle>Tecnologias</TechsTitle>
        <Tech>
          <TechIcon src={javascript} />
          <TechText>Javascript</TechText>
        </Tech>
        <Tech>
          <TechIcon src={typescript} />
          <TechText>Typescript</TechText>
        </Tech>
        <Tech>
          <TechIcon src={react} />
          <TechText>React</TechText>
        </Tech>
        <Tech>
          <TechIcon src={html} />
          <TechText>Html</TechText>
        </Tech>
        <Tech>
          <TechIcon src={css} />
          <TechText>Css</TechText>
        </Tech>
      </Techs>
    </Container>
  );
};

export { Sidebar };
