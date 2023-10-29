import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Pricing = ({ user }) => {
  return (
    <>
      <Navbar 
        userRole={user} 
      />

      <PageBanner 
        pageTitle="Pricing" 
        pageName="Pricing" 
      />

      <section className="pricing-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="pricing-tabs">
            <Tabs>
              <TabList>
                <Tab>Monthly</Tab>
                <Tab>Annually</Tab>
              </TabList>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box">
                      <h3>Starter Plan</h3>

                      <div className="pricing-features">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i> 5 Listing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Non-Featured
                          </li>
                          <li>
                            <i className="bx bx-check"></i> 90 Days Availability
                          </li>
                          <li>
                            <i className="bx bx-check"></i> One Time Fee
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Multi Team Tasking
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Registration &
                            Ticketing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Features
                          </li>
                          <li>
                            <i className="bx bx-x action-close"></i> Online
                            Booking
                          </li>
                          <li>
                            <i className="bx bx-x action-close"></i> Limited
                            Support
                          </li>
                        </ul>
                      </div>

                      <div className="price">
                        $9.99
                        <span>Per Month</span>
                      </div>

                      <a href="#" className="default-btn">
                        Select Plan
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box">
                      <h3>Advance Plan</h3>

                      <div className="pricing-features">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i> 10 Listing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Non-Featured
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Lifetime
                            Availability
                          </li>
                          <li>
                            <i className="bx bx-check"></i> One Time Fee
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Multi Team Tasking
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Registration &
                            Ticketing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Features
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Online Booking
                          </li>
                          <li>
                            <i className="bx bx-x action-close"></i> Limited
                            Support
                          </li>
                        </ul>
                      </div>

                      <div className="price">
                        $19.99
                        <span>Per Month</span>
                      </div>

                      <a href="#" className="default-btn">
                        Select Plan
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box">
                      <h3>Premium Plan</h3>

                      <div className="pricing-features">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i> 50 Listing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Featured
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Lifetime
                            Availability
                          </li>
                          <li>
                            <i className="bx bx-check"></i> One Time Fee
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Multi Team Tasking
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Registration &
                            Ticketing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Features
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Online Booking
                          </li>
                          <li>
                            <i className="bx bx-check"></i> 24/7 Support
                          </li>
                        </ul>
                      </div>

                      <div className="price">
                        $29.99
                        <span>Per Month</span>
                      </div>

                      <a href="#" className="default-btn">
                        Select Plan
                      </a>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box">
                      <h3>Starter Plan</h3>

                      <div className="pricing-features">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i> 5 Listing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Non-Featured
                          </li>
                          <li>
                            <i className="bx bx-check"></i> 90 Days Availability
                          </li>
                          <li>
                            <i className="bx bx-check"></i> One Time Fee
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Multi Team Tasking
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Registration &
                            Ticketing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Features
                          </li>
                          <li>
                            <i className="bx bx-x action-close"></i> Online
                            Booking
                          </li>
                          <li>
                            <i className="bx bx-x action-close"></i> Limited
                            Support
                          </li>
                        </ul>
                      </div>

                      <div className="price">
                        $119.99
                        <span>Per Year</span>
                      </div>

                      <a href="#" className="default-btn">
                        Select Plan
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box">
                      <h3>Annual Plan</h3>

                      <div className="pricing-features">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i> 10 Listing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Non-Featured
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Lifetime
                            Availability
                          </li>
                          <li>
                            <i className="bx bx-check"></i> One Time Fee
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Multi Team Tasking
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Registration &
                            Ticketing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Features
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Online Booking
                          </li>
                          <li>
                            <i className="bx bx-x action-close"></i> Limited
                            Support
                          </li>
                        </ul>
                      </div>

                      <div className="price">
                        $129.99
                        <span>Per Year</span>
                      </div>

                      <a href="#" className="default-btn">
                        Select Plan
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box">
                      <h3>Premium Plan</h3>

                      <div className="pricing-features">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i> 50 Listing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Featured
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Lifetime
                            Availability
                          </li>
                          <li>
                            <i className="bx bx-check"></i> One Time Fee
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Multi Team Tasking
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Registration &
                            Ticketing
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Basic Features
                          </li>
                          <li>
                            <i className="bx bx-check"></i> Online Booking
                          </li>
                          <li>
                            <i className="bx bx-check"></i> 24/7 Support
                          </li>
                        </ul>
                      </div>

                      <div className="price">
                        $139.99
                        <span>Per Year</span>
                      </div>

                      <a href="#" className="default-btn">
                        Select Plan
                      </a>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;
