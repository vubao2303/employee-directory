import React from "react";
import "../style/style.css";

function Header () {
	return (
		<div className="header">
			<h1 className="title">Employee Directory </h1>
			<h4 className="subtitle">Click on arrows to filter by column</h4>
		</div>
	);
}

export default Header;