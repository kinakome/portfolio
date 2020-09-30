import React from "react";
import { Link } from "react-scroll";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { HamburgerVortex } from "react-animated-burgers";
import Modal from "react-modal";

type Props = {};

const Header: React.FC<Props> = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
    setIsOpen(!modalIsOpen);
  };

  const customStyles = {
    content: {
    },
  };
  return (
    <div className="header">
      <div className="header__menu">
        <div className="header__menu--hamburger">
          <HamburgerVortex
            isActive={isActive}
            toggleButton={toggleButton}
            className="header__menu--hamburger hover-elm"
          />
        </div>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
          className="header__modal"
        >
          <div className="header__modal--contents">
            <ul className="">
              <Link activeClass="active" to="top" spy smooth duration={800}>
                <li className="hover-elm" onClick={toggleButton}>
                  Profile
                </li>
              </Link>
              <Link activeClass="active" to="skill" spy smooth duration={800}>
                <li className="hover-elm" onClick={toggleButton}>
                  Skill
                </li>
              </Link>
              <Link activeClass="active" to="works" spy smooth duration={800}>
                <li className="hover-elm" onClick={toggleButton}>
                  Works
                </li>
              </Link>
            </ul>
          </div>
        </Modal>
        <ul className="header__menu--list">
          <Link activeClass="active" to="top" spy smooth duration={800}>
            <li className="hover-elm">Profile</li>
          </Link>
          <Link activeClass="active" to="skill" spy smooth duration={800}>
            <li className="hover-elm">Skill</li>
          </Link>
          <Link activeClass="active" to="works" spy smooth duration={800}>
            <li className="hover-elm">Works</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
