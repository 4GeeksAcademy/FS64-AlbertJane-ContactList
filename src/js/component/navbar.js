import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end px-5">
			
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Add a Task</button>
				</Link>
			</div>
		</nav>
	);
};
