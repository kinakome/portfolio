import React from "react";
import LogoSvg from "../images/entrance/logo.jpg";
import TitleSvg from "../images/entrance/title.svg";
import ButtonSvg from "../images/entrance/button.svg";
import Dn from "../images/works/dn.jpg";
import Portfolio from "../images/works/portfolio.jpg";
import Bplus from "../images/works/b-plus.jpg";
import IllustChat from "../images/works/illustya.jpg";
import Tameru from "../images/works/tameru.jpg";

export const Logo: React.FC = () => {
  return <img src={LogoSvg} alt="logo" className="entrance__contents--logo" />;
};

export const Title: React.FC = () => {
  return (
    <img src={TitleSvg} alt="title" className="entrance__contents--title" />
  );
};

export const Button: React.FC = () => {
  return (
    <img
      src={ButtonSvg}
      alt="button"
      className="entrance__contents--button hover-elm"
    />
  );
};

export const PortfolioIcon: React.FC = () => {
  return <img src={Portfolio} alt="portfolio" className="hover-elm" />;
};

export const BplusIcon: React.FC = () => {
  return <img src={Bplus} alt="bplus" className="hover-elm" />;
};

export const DnIcon: React.FC = () => {
  return <img src={Dn} alt="dn" className="hover-elm" />;
};

export const IllustChatIcon: React.FC = () => {
  return <img src={IllustChat} alt="illustChat" className="hover-elm" />;
};

export const TameruIcon: React.FC = () => {
  return <img src={Tameru} alt="tameru" className="hover-elm" />;
};
