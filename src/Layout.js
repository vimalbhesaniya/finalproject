import React from "react"
import { Link, Outlet } from "react-router-dom"
import Footer from "./componants/Footer"
import Header from "./componants/Header";
import "./Style/body.css"
import Check from "./Auth/check";
const  Layout = () => {
	Check()
	return (
		<>
			<div className="  " >
				<Header />
			</div>
			<div className="body--">
				<Outlet></Outlet>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</>
	);
}

export default Layout;
