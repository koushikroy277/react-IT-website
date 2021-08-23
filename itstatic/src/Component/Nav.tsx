import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
import "./Nav.scss";
import { FaDiceFive } from "react-icons/fa";

interface boolProp {
  firstMenu: boolean;
  secondMenu: boolean;
}

const Nav: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolProp>({
    firstMenu: false,
    secondMenu: false,
  });
  const [navScroll, setNavScroll] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavScroll(true);
    } else if (window.scrollY < 100) {
      setNavScroll(false);
    }
  }
  window.addEventListener('scroll', handleScroll)

  const iconSize = 20;

  return (
    <>
      <div className={navScroll ? "navParent active" : "navParent"}>
        <div className="company">
          <h1>DeltaRose</h1>
        </div>
        <div className="linkContainer">
          <div className="linkItem">
            <NavLink to="/" className="link" activeClassName="linkActive">
              <h1>Home</h1>
            </NavLink>
          </div>
          <div
            className="linkItem"
            style={{
              cursor: 'pointer'
            }}
            onMouseLeave={() =>
              setMenuActive((menu) => {
                return {
                  ...menu,
                  firstMenu: false,
                };
              })
            }
          >
            <div
              className="link"
              onMouseEnter={() =>
                setMenuActive((menu) => {
                  return {
                    ...menu,
                    firstMenu: true,
                  };
                })
              }
            >
              <h1>Company</h1>
              <GoTriangleDown size={iconSize} className="linkIcon" />
            </div>
            <div
              className={
                menuActive.firstMenu ? "menuContainer active" : "menuContainer"
              }
            >
              <div className="menuWrapper">
                <NavLink to="/company" className="link">
                  <div className="menuItem">
                    <h1>About US</h1>
                  </div>
                </NavLink>
                <NavLink to="#" className="link">
                  <div className="menuItem">
                    <h1>Purpose</h1>
                  </div>
                </NavLink>
                <NavLink to="#" className="link">
                  <div className="menuItem">
                    <h1>Requirement</h1>
                  </div>
                </NavLink>
                <NavLink to="#" className="link">
                  <div className="menuItem">
                    <h1>Progress</h1>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div
            className="linkItem"
            onMouseLeave={() =>
              setMenuActive((menu) => {
                return {
                  ...menu,
                  secondMenu: false,
                };
              })
            }
          >
            <NavLink
              to="/service"
              className="link"
              activeClassName="linkActive"
              onMouseEnter={() =>
                setMenuActive((menu) => {
                  return {
                    ...menu,
                    secondMenu: true,
                  };
                })
              }
            >
              <h1>Service</h1>
              <GoTriangleDown size={iconSize} className="linkIcon" />
            </NavLink>
            <div
              className={
                menuActive.secondMenu ? "menuContainer active" : "menuContainer"
              }
            >
              <div className="menuWrapper">
                <NavLink to="" className="link">
                  <div className="menuItem">
                    <h1>Cloud Services</h1>
                  </div>
                </NavLink>
                <NavLink to="" className="link">
                  <div className="menuItem">
                    <h1>Marketing</h1>
                  </div>
                </NavLink>
                <NavLink to="" className="link">
                  <div className="menuItem">
                    <h1>Advertisement</h1>
                  </div>
                </NavLink>
                <NavLink to="" className="link">
                  <div className="menuItem">
                    <h1>Development</h1>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="linkItem">
            <NavLink
              to="/contact"
              className="link"
              activeClassName="linkActive"
            >
              <h1>Contact</h1>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
