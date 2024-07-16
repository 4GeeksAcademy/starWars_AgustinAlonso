import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/descarga.png"

export const Navbar = () => {
	return (

		<nav className="navbar navbar-light bg-dark py-0">
			<div className="container-fluid">
				<a className="navbar-brand ms-5" href="#">
					<img src={Logo} alt="" width="90" height="50" className="d-inline-block align-text-top ms-3" />
				</a>
				<div className="d-flex">
					<form className="d-flex">
						<input className="form-control me-2 bg-dark border-info text-light" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-warning" type="submit"><ion-icon name="search-outline" style={{ fontSize: '24px' }}></ion-icon></button>
					</form>
					<div className="btn-group">
						<button type="button" className="btn btn-outline-info dropdown-toggle mx-5" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
							<ion-icon name="chevron-down-outline" style={{ fontSize: '18px' }}></ion-icon>
							<ion-icon name="star-outline" style={{ fontSize: '24px' }}></ion-icon>
						</button>
						<ul className="dropdown-menu dropdown-menu-lg-end" onClick={(e) => e.stopPropagation()} >
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
							<li><a className="dropdown-item" href="#">Menu item</a></li>
						</ul>
					</div>

				</div>
			</div>
		</nav>



		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
