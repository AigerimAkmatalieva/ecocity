import Logo from "../user-interface/Logo";
import classes from "./Footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../../assets/Logo.png"

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className="row">
          <div className="col-6">
         <div className={classes.display}>
         <img src={logo} alt="img" />
           <span>Остались вопросы? <br/> Звоните или пишите <br/> +996 500 583 000</span>
         </div>
          </div>
          <div className="col-6">
            <div className={classes.icons}>
              <AiFillFacebook />
              <AiFillTwitterSquare />
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
