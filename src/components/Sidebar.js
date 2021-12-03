import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { IoMdLogOut } from "react-icons/io";

const Nav = styled.div`
  background: lightgrey;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #fff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  border: 1px solid lightgrey;
  bottom: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <section className="d-flex align-items-center justify-content-center">
          <div>
            <img src="logo.png" />
          </div>

          <div className="text-center flex-grow-1 heading">
            <h1 className="blue">3.3 Beheer Rooters</h1>
            <p className="blue">3.3.1 Pandlist</p>
          </div>
        </section>
        <section className="d-flex align-items-center section-border">
          <div className="flex-grow-1 d-flex align-items-center">
            <div>
              <img src="icon.png" />
              <span className="red">schoonzorg</span>
            </div>

            <div className="right-arrow">
              <span className="">
                <img src="arrow-left-circle.svg" />
              </span>
            </div>
          </div>

          <div className="right-dropdown">
            <div class="dropdown">
              <button
                class="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="fa fa-user"></span>
                Rianne Kondon
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </section>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#"></NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
