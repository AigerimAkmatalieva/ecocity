import NavItem from "./NavItem/NavItem";
import classes from "./Navbar.module.css"
import Logo from "../user-interface/Logo";

function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.container}>
      <Logo/>
        <ul>
          <NavItem url="/">Главная</NavItem>
          <NavItem url="/aboutus">О нас</NavItem>
          <NavItem url="/price">Цены</NavItem>
          <NavItem url="/service">Сервис</NavItem>
        </ul>
          <ul className={classes.ul}>
        <NavItem url="/contacts">Телефон техподдержки<br/>
+996 500 583 000</NavItem>
          <NavItem url="/location" >Бишкек</NavItem> 
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
