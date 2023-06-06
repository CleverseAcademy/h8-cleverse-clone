import Image from "next/image";
import DefaultNavData from "./nav.data";
import classes from "./nav.module.css";
import NavLink from "./navLink";

const Navbar = () => 
<nav className={`mx-4 ${classes.nav} h-[3rem]`}>
<Image src="cleverse.svg" width={101} height={28} alt="logo" />
<div className="flex font-bold gap-14 items-center">
  {
    DefaultNavData.map((props) => <NavLink key={props.text} {...props} /> )
  }
</div>
</nav>

export default Navbar