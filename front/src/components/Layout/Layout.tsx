import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, Header, Logo, Main, Nav } from "./Layout.styled";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo to="/">AdMetricsDashboard</Logo>
        <Nav>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
