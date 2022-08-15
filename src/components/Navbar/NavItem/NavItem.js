import { Link } from "react-router-dom";
import classes from "./NavItem.module.css"


function NavItem(props) {
  return (
    <li className={classes.NavItem}>
      <Link to={props.url}>
        {props.children}
      </Link>
    </li>
  );
}

export default NavItem;