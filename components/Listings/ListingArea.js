import Link from "next/link";
import ListingPagination from "./ListingPagination";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
//import DG from '2gis-maps';

const VerticalListingsWihMap = ({ listings, totalPages }) => {

  useEffect(() => {
    const DG = require("2gis-maps");
    const map = DG.map("map", {
      center: [54.98, 82.89],
      zoom: 13,
    });
    // ... rest of your code

    const markers = [
      [54.98, 82.89],
      [54.97, 82.88],
      // ... more coordinates
    ];

    // Loop through the array to add markers to the map
    markers.forEach((coords) => {
      DG.marker(coords).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <section className="listings-area ptb-100">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-xl-8 col-lg-12 col-md-12 p-0">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <aside className="listings-widget-area">
                    <section className="widget widget_filters">
                      <h3 className="widget-title">Filters</h3>

                      <ul>
                        <li>
                          <button type="button">$</button>
                        </li>
                        <li>
                          <button type="button">$$</button>
                        </li>
                        <li>
                          <button type="button">$$$</button>
                        </li>
                        <li>
                          <button type="button">$$$$</button>
                        </li>
                      </ul>
                    </section>

                    <section className="widget widget_categories">
                      <h3 className="widget-title">Categories</h3>

                      <ul>
                        <li>
                          <input id="categories1" type="checkbox" />
                          <label htmlFor="categories1">Restaurant</label>
                        </li>
                        <li>
                          <input id="categories2" type="checkbox" />
                          <label htmlFor="categories2">Hotel</label>
                        </li>
                        <li>
                          <input id="categories3" type="checkbox" />
                          <label htmlFor="categories3">Beauty & Spa</label>
                        </li>
                        <li>
                          <input id="categories4" type="checkbox" />
                          <label htmlFor="categories4">Fitness</label>
                        </li>
                        <li>
                          <input id="categories5" type="checkbox" />
                          <label htmlFor="categories5">Shopping</label>
                        </li>
                        <li className="hide">
                          <input id="categories6" type="checkbox" />
                          <label htmlFor="categories6">Hospital</label>
                        </li>
                        <li className="hide">
                          <input id="categories7" type="checkbox" />
                          <label htmlFor="categories7">Events</label>
                        </li>
                        <li className="hide">
                          <input id="categories8" type="checkbox" />
                          <label htmlFor="categories8">Clothing</label>
                        </li>
                        <li className="see-all-btn">
                          <span>See All</span>
                        </li>
                      </ul>
                    </section>

                    <section className="widget widget_features">
                      <h3 className="widget-title">Features</h3>

                      <ul>
                        <li>
                          <input id="categories1" type="checkbox" />
                          <label htmlFor="categories1">Restaurant</label>
                        </li>
                        <li>
                          <input id="categories2" type="checkbox" />
                          <label htmlFor="categories2">Hotel</label>
                        </li>
                        <li>
                          <input id="categories3" type="checkbox" />
                          <label htmlFor="categories3">Beauty & Spa</label>
                        </li>
                        <li>
                          <input id="categories4" type="checkbox" />
                          <label htmlFor="categories4">Fitness</label>
                        </li>
                        <li>
                          <input id="categories5" type="checkbox" />
                          <label htmlFor="categories5">Shopping</label>
                        </li>
                        <li className="hide">
                          <input id="categories6" type="checkbox" />
                          <label htmlFor="categories6">Hospital</label>
                        </li>
                        <li className="hide">
                          <input id="categories7" type="checkbox" />
                          <label htmlFor="categories7">Events</label>
                        </li>
                        <li className="hide">
                          <input id="categories8" type="checkbox" />
                          <label htmlFor="categories8">Clothing</label>
                        </li>
                        <li className="see-all-btn">
                          <span>See All</span>
                        </li>
                      </ul>
                    </section>

                    <section className="widget widget_distance">
                      <h3 className="widget-title">Distance</h3>

                      <ul>
                        <li>
                          <input id="distance1" type="checkbox" />
                          <label htmlFor="distance1">Driving (5 mi.)</label>
                        </li>
                        <li>
                          <input id="distance2" type="checkbox" />
                          <label htmlFor="distance2">Walking (1 mi.)</label>
                        </li>
                        <li>
                          <input id="distance3" type="checkbox" />
                          <label htmlFor="distance3">Biking (2 mi.)</label>
                        </li>
                        <li>
                          <input id="distance4" type="checkbox" />
                          <label htmlFor="distance4">Within 4 blocks</label>
                        </li>
                        <li>
                          <input id="distance5" type="checkbox" />
                          <label htmlFor="distance5">Bicycle (6 mi.)</label>
                        </li>
                        <li className="hide">
                          <input id="distance6" type="checkbox" />
                          <label htmlFor="distance6">Driving (10 mi.)</label>
                        </li>
                        <li className="hide">
                          <input id="distance7" type="checkbox" />
                          <label htmlFor="distance7">Walking (11 mi.)</label>
                        </li>
                        <li className="see-all-btn">
                          <span>See All</span>
                        </li>
                      </ul>
                    </section>
                  </aside>
                </div>

                <div className="col-lg-8 col-md-12">
                  <div className="all-listings-list">
                    <div className="listings-grid-sorting row align-items-center">
                      <div className="col-lg-5 col-md-6 result-count">
                        <p>
                          <span className="count">9</span> Results
                        </p>
                      </div>

                      <div className="col-lg-7 col-md-6 ordering">
                        <div className="d-flex justify-content-end">
                          <div className="select-box">
                            <label>Sort By:</label>
                            <select className="blog-select">
                              <option>Recommended</option>
                              <option>Default</option>
                              <option>Popularity</option>
                              <option>Latest</option>
                              <option>Price: low to high</option>
                              <option>Price: high to low</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      {listings &&
                        listings.map(
                          (list) =>
                            list.status === "active" && (
                              <div
                                className="col-lg-12 col-md-12"
                                key={list.id}
                              >
                                <div className="single-listings-item">
                                  <div className="row m-0">
                                    <div className="col-lg-4 col-md-4 p-0">
                                      <a href={`/listing/${list.id}`}>
                                        <img
                                          src={
                                            list.gallery
                                              ? list.gallery[0]
                                              : null
                                          }
                                          alt="image"
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                          }}
                                        />
                                      </a>
                                    </div>

                                    <div className="col-lg-8 col-md-8 p-0">
                                      <div className="listings-content">
                                        <span className="status">
                                          <i className="flaticon-save"></i> Open
                                          Now
                                        </span>
                                        <h3>
                                          <Link href={`/listing/${list.id}`}>
                                            <a>{list.listingTitle}</a>
                                          </Link>
                                        </h3>
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="rating">
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <i className="bx bxs-star"></i>
                                            <span className="count">(18)</span>
                                          </div>
                                          <div className="price">
                                            Start From <span>$121</span>
                                          </div>
                                        </div>
                                        <ul className="listings-meta">
                                          <li>
                                            <a href="#">
                                              <i className="flaticon-furniture-and-household"></i>{" "}
                                              Women clothing
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <i className="flaticon-pin"></i>{" "}
                                              Bishkek, KG
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                        )}

                      <div className="col-xl-12 col-lg-12 col-md-12">
                        {listings.length > 0 && (
                          <ListingPagination totalPages={totalPages} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-12 col-md-12 p-0">
              <div className="map-container fw-map side-full-map">
                <div id="main-full-map">
                  <div
                    id="map"
                    style={{ width: "100%", height: "400px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerticalListingsWihMap;
