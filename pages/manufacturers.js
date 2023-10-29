import React from "react";
import axios from "axios";
import Navbar from "../components/_App/Navbar";
import PopularPlacesFilter from "../components/Common/PopularPlacesFilter";
import ListingArea from "../components/Listings/ListingArea";
import Footer from "../components/_App/Footer";
import { withRouter, useRouter } from "next/router";
import baseUrl from "../utils/baseUrl";
import { ManufacturerList } from "../components/Manufacturers/ManufacturerComponent";
const listImage = "../images/empty-listing.png";

const Manufacturers = ({ user, manufacturers }) => {
	return (
		<>
			<Navbar 
				userRole={user} 
			/>

			<PopularPlacesFilter />

			{manufacturers ? (
				<ManufacturerList manufacturers={manufacturers}/>
			) : (
				<div className="empty-page-image">
					<img src={listImage} alt="image" />
					<p>No manufacturers Available</p>
				</div>
			)}

			<Footer 
				bgColor="bg-f5f5f5" 
			/>
		</>
	);
};

Manufacturers.getInitialProps = async ({ query }) => {
	const page = query.page ? query.page : "1";
	const keyword = query.keyword;
	const title = query.title;
	const location = query.location;
	const category = query.category;
	const payload = {
		params: {
			page,
			limit: 10,
			keyword,
		},
	};
	const url = `${baseUrl}/api/v1/manufacturers`;

	const response = await axios.get(url, payload);
	return {manufacturers:response.data}
};

export default withRouter(Manufacturers);
