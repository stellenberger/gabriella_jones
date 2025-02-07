import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
    font-size: 100%;
    padding-left: 20px;
  }
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 10rem;
    margin: 0;
    transition: transform 0.3s ease-in-out;
    li {
      padding-top: 30px;
      color: white;
      font-size: 35px;
    }
  }
`;
const RightNav = ({ changeColor, backgroundColor, open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/about" onClick={() => changeColor(backgroundColor)}>
          about
        </Link>
      </li>
      <li>
        <Link to="/schedule" onClick={() => changeColor(backgroundColor)}>
          schedule
        </Link>
      </li>
      <li>
        <Link to="/media" onClick={() => changeColor(backgroundColor)}>
          media
        </Link>
      </li>
      <li>
        <Link to="/projects" onClick={() => changeColor(backgroundColor)}>
          projects
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
