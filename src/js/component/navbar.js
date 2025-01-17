import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/descarga.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context)
	const removeFavorite = (name) => {
		actions.removeFavorite(name)
		console.log('me removieron', name)
	}
	return (

		<nav className="navbar navbar-light bg-dark py-0">
			<div className="container-fluid">
				<a className="navbar-brand ms-5 col-12 col-md-2" href="#">
					<img src={Logo} alt="" width="90" height="50" className="d-inline-block align-text-top ms-3 " />
				</a>
				<div className="d-flex">
					<form className="d-flex">
						<input className="form-control me-2 bg-dark border-info text-light" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-warning" type="button"><ion-icon name="search-outline" style={{ fontSize: '24px' }}></ion-icon></button>
					</form>
					<div className="btn-group">
						<button type="button" className="btn btn-outline-danger dropdown-toggle mx-5 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
							<ion-icon name="heart" style={{ fontSize: '24px' }}></ion-icon>
							<ion-icon name="menu" style={{ fontSize: '18px' }}></ion-icon>
						</button>
						<ul className="dropdown-menu dropdown-menu-lg-end border-danger bg-dark p-0" style={{ width: '270px' }} onClick={(e) => e.stopPropagation()} >
							{store.favorites.length === 0 ? (
								<li><a className="dropdown-item" href="#">No hay favoritos</a></li>
							) : (
								store.favorites.map((fav, index) => (
									<li key={index} className='d-flex justify-content-between dropdown-item align-items-center'><div>{fav.name}</div><div  onClick={() => removeFavorite(fav.name)}><ion-icon style={{ fontSize: '24px' }} name="heart-dislike"></ion-icon></div></li>
								))
							)}
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
