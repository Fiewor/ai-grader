import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "@carbon/react";
import { Home, UserAvatar, Login } from "@carbon/react/icons";
import { Link } from "react-router-dom";

const MainHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="AI GRADER">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="AI ">
          GRADER
        </HeaderName>
        <HeaderNavigation aria-label="AI GRADER">
          <HeaderMenuItem href="/about">About</HeaderMenuItem>
          <HeaderMenuItem href="/register">Register</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/login">Login</HeaderMenuItem>
              <HeaderMenuItem href="/register">Register</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Home" tooltipAlignment="center">
            <Link to="/">
              <Home size={20} />
            </Link>
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Login" tooltipAlignment="center">
            <Link to="/login">
              <Login size={20} />
            </Link>
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Register" tooltipAlignment="end">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default MainHeader;
