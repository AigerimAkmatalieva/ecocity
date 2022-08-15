import classes from "./Header.module.css";
import "../../style/global.css";
import phone from "../../assets/phone.png";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";

function Header() {
  return (
    <div className={classes.Header}>
      <header className="container">
        <div className="row">
          <div className="col-6">
            <h3>Удобная аренда велосипеда через мобильное приложение</h3>
            <button>
              <span>
              <AiFillAndroid />
              </span>
              <br/>
              Скачивайте в Google Play</button>
            <button>
              <span>
              <AiFillApple />
              </span>
              <br/>
              Скачивайте в Apple Store</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
