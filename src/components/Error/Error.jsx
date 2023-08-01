import PropTypes from "prop-types";
import css from "./Error.module.css"

const Error = ({ errText }) => {
    <p className={css.error}>{errText}</p>
}

export default Error;

Error.propTypes = {
    errText: PropTypes.string,
}