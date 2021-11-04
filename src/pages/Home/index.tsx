import React from "react";

import { Container, SidebarAndContent, Player } from "./styles";

import { Sidebar } from "../../components/Sidebar";

const Home: React.FC = () => {
  return (
    <Container>
      <SidebarAndContent>
        <Sidebar />
      </SidebarAndContent>
      <Player />
    </Container>
  );
};

export { Home };
