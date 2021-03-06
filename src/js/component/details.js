import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const Details = () => {
	const { store, actions } = useContext(Context);

	let detName = store.details.name;
	let detMass = store.details.mass;
	let detHeight = store.details.height;
	let detHair = store.details.hair_color;
	let detSkin = store.details.skin_color;
	let detEye = store.details.eye_color;
	let detGender = store.details.gender;

	console.log("store details.name: " + store.details.name);
	return (
		<div className="container ">
			<div className="detailsBox">
				<h1>Details</h1>
				<div className="row detailsRow ">
					<div className="col-sm-12 col-md-6">
						<img src="http://via.placeholder.com/800x600" alt="" className="detailsImg" />
					</div>
					<div className="col-sm-12 col-md-6 text-center align-self-center textwhite">
						{/* <h3>{detName}</h3> */}
						<h3 className="detailsH3">{detName != undefined ? detName : "name undefined"}</h3>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto consectetur, veritatis
						fuga vel ab itaque accusantium nisi expedita perferendis sunt eligendi quae in beatae maxime
						voluptas quod cumque obcaecati!{" "}
					</div>
				</div>

				<div className="row  ">
					<div className="col-md-2 col-sm-12  mx-auto">
						<ul className="detailLists ">
							<h3>Height</h3>
							<li className="detailListItem">{detHeight != undefined ? detHeight : "Mass undefined"}</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Mass</h3>
							<li className="detailListItem">{detMass != undefined ? detMass : "Mass undefined"}</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Hair Color</h3>
							<li className="detailListItem">{detHair != undefined ? detHair : "Mass undefined"}</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Skin Color</h3>
							<li className="detailListItem">{detSkin != undefined ? detSkin : "Mass undefined"}</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Eye Color</h3>
							<li className="detailListItem">{detEye != undefined ? detEye : "Mass undefined"}</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Gender</h3>
							<li className="detailListItem">{detGender != undefined ? detGender : "Mass undefined"}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
Details.propTypes = {
	propUrl: PropTypes.string
};
