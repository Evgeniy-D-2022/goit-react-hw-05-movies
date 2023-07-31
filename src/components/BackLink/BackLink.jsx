import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import BackLink from "./BackLink.module.css";


 

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};