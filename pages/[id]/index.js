import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import PageBanner from "../../components/Common/PageBanner";
import Image from "next/image";
import { ManufacturerSwiper } from "../../components/Manufacturers/Swiper/ManufacturerSwiper";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";

const styles = {
  contactDetails: {
    marginBottom: "30px",
    backgroundColor: "#fbfbfb",
    border: "1px solid #e0e0e0",
    borderRadius: "5px",
    padding: "30px",
  },
};

const ManufacturerIdPage = ({ manufacturer }) => {
  const parseContactInfo = (contactInfo) => {
    try {
      return contactInfo.map((info, index) => {
        const parsedInfo = JSON.parse(info);
        const email = parsedInfo.email ? `Email: ${parsedInfo.email}, ` : "";
        const telephone1 = parsedInfo.telephone1
          ? `Telephone 1: ${parsedInfo.telephone1}, `
          : "";
        const telephone2 = parsedInfo.telephone2
          ? `Telephone 2: ${parsedInfo.telephone2}`
          : "";

        return (
          <li key={index}>
            <a href={`mailto:${email}`}>{email}</a>
            {telephone1}
            {telephone2}
          </li>
        );
      });
    } catch (error) {
      console.error("Error parsing contactInfo:", error);
      return null;
    }
  };

  const ManufacturerDetail = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="listings-details-desc">
              <h3>{manufacturer && manufacturer.name}</h3>
              <p>{manufacturer && manufacturer.description}</p>
            </div>
            <br />
            {manufacturer && manufacturer.photos && <h3>Photos</h3>}
            <ManufacturerSwiper photos={manufacturer && manufacturer.photos} />
          </div>
          <div className="col-lg-4 col-md-12 " style={{ paddingTop: "40px" }}>
            <div className="listing-sidebar">
              <div
                className="listings-widget listings_contact_details"
                style={styles.contactDetails}
              >
                <h3>Contact Details</h3>
                <ul>
                  {parseContactInfo(manufacturer && manufacturer.contactInfo)}
                </ul>
                <p>
                  Website:{" "}
                  <a
                    href={manufacturer && manufacturer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {manufacturer && manufacturer.website}
                  </a>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i className="bx bx-map"></i>
                  {manufacturer && manufacturer.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Manufacturer detail"
        pageName="Manufacturer detail"
      />
      <ManufacturerDetail />
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  try {
    const url = `${baseUrl}/api/v1/manufacturers/${id}`;
    const response = await axios.get(url);
    const data = response.data;
    return {
      props: {
        manufacturer: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        manufacturer: null,
      },
    };
  }
}

export default ManufacturerIdPage;
