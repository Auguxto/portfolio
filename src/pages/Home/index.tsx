import React from "react";

import { Container, Player } from "./styles";

import { Sidebar } from "../../components/Sidebar";
import { Content } from "../../components/Content";

const Home: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Player>dwadw</Player>
    </Container>
  );
};

export { Home };
