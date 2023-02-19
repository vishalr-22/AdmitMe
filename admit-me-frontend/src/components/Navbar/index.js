import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/" activeStyle>
			Add Details
		</NavLink>
		<NavLink to="/getDetails" activeStyle>
			Get Details
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
