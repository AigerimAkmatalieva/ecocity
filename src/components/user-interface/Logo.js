import logo from "../../assets/Logo.png";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="img" />
    </div>
  );
}

export default Logo;
