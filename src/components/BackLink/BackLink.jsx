import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import css from "./BackLink.module.css";


 const BackLink = ({ to, children }) => {
  return (
    <Link className={css.Link} to={to}>
      <HiArrowLeft size="24" />
     <span>Back</span>
    </Link>
  );
};

export default BackLink;