import React from "react";
import "../style/style.css";

function Header () {
	return (
		<div className="header">
			<h1 className="title">Employee Directory </h1>
			<h6 className="subtitle">Click on name to sort alphebetically and search for name in the search box</h6>
		</div>
	);
}

export default Header;