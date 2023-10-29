import React from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import Navbar from "../components/_App/Navbar";
import Banner from "../components/HomeOne/Banner";
import CategoryTwo from "../components/Common/CategoryTwo";
import ListingAreaTwo from "../components/Common/ListingAreaTwo";
import DestinationsOne from "../components/Common/DestinationsOne";
import Feedback from "../components/Common/Feedback";
import EventsArea from "../components/HomeOne/EventsArea";
import HowItWorks from "../components/Common/HowItWorks";
import Blog from "../components/HomeOne/Blog";
import AppDownload from "../components/Common/AppDownload";
import Footer from "../components/_App/Footer";
import MapComponent from "../components/Shared/Map";
import { useRouter } from "next/router";
import Link from "next/link";

// translation
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ManufacturerList } from "../components/Manufacturers/ManufacturerComponent";
import { ManufacturerListWithSidebar } from "../components/Manufacturers/ManufacturerList";

const Index = ({ user, manufacturers }) => {
  const { t } = useTranslation("common");
  console.log(manufacturers)
  return (
    <>
      <Navbar userRole={user} />

      <Banner />
      {/* 
			<CategoryTwo 
				titleOne={true} 
			/>

			{listings && (
				<ListingAreaTwo
					bgColor="bg-f9f9f9"
					titleOne={true}
					listings={listings}
				/>
			)}

			<DestinationsOne 
				titleOne={true} 
				paddingBottom70="pb-70" 
			/>

			<Feedback 
				title={true} 
				bgImage="bg-image" 
			/>

			<EventsArea />
			<HowItWorks 
				bgColor="bg-f9f9f9" 
			/>

			<Blog />

			<AppDownload /> */}

      <ManufacturerListWithSidebar manufacturers={manufacturers} />

      <Footer />
    </>
  );
};

export async function getServerSideProps({ query, locale }) {
  const url = `${baseUrl}/api/v1/manufacturers`;
  const response = await axios.get(url);

  return {
    props: {
      manufacturers: response.data,
      // totalPages: Math.ceil(response.headers["x-total-count"] / limit),
      // currentPage: page,
      ...(await serverSideTranslations(locale, ["header"])),
    },
  };
}

export default Index;
