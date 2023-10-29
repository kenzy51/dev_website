import { useState, useContext } from 'react';
import { IndiceContext } from '../../contexts';
import { handleLogout } from '../../utils/auth';
import Link from '../../utils/ActiveLink';

const NavbarTwo = ({ userRole }) => {
  const { toggleSideMenu } = useContext(IndiceContext);
  const [showMenu, setshowMenu] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [displayDropdownProfile, setDisplayDropdownProfile] = useState(false);

  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  const toggleDropdownProfile = () => {
    setDisplayDropdownProfile(!displayDropdownProfile);
  };

  return (
    <>
      <div className='navbar-area'>
        <div className='miran-responsive-nav'>
          <div className='miran-responsive-menu'>
            <div
              onClick={() => toggleMenu()}
              className='hamburger-menu hamburger-two dashboard-hamburger'
            >
              {showMenu ? (
                <i className='bx bx-x'></i>
              ) : (
                <i className='bx bx-menu'></i>
              )}
            </div>
            <div
              className='responsive-burger-menu d-lg-none d-block'
              onClick={toggleSideMenu}
            >
              <span className='top-bar'></span>
              <span className='middle-bar'></span>
              <span className='bottom-bar'></span>
            </div>
          </div>
        </div>

        <div className={showMenu ? 'miran-nav show' : 'miran-nav'}>
          <nav className='navbar navbar-expand-md navbar-light'>
            <div className='collapse navbar-collapse mean-menu'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link href='/' activeClassName='active'>
                    <a className='nav-link'>Home</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link href='/listings' activeClassName='active'>
                    <a className='nav-link'>Listings</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link href='/about' activeClassName='active'>
                    <a className='nav-link'>About Us</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <a href='#' className='dropdown-toggle nav-link'>
                    Pages
                  </a>
                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link href='/testimonial' activeClassName='active'>
                        <a className='nav-link'>Testimonials</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/faq' activeClassName='active'>
                        <a className='nav-link'>FAQ</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/how-it-works' activeClassName='active'>
                        <a className='nav-link'>How It Works</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/events' activeClassName='active'>
                        <a className='nav-link'>Events</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/single-events' activeClassName='active'>
                        <a className='nav-link'>Single Events</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/pricing' activeClassName='active'>
                        <a className='nav-link'>Pricing</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/gallery' activeClassName='active'>
                        <a className='nav-link'>Gallery</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/privacy-policy' activeClassName='active'>
                        <a className='nav-link'>Privacy Policy</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/terms-and-condition' activeClassName='active'>
                        <a className='nav-link'>Terms and Condition</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link href='/contact' activeClassName='active'>
                    <a className='nav-link'>Contact</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <a className='dropdown-toggle nav-link user-drop global-pointer'>
                    User Panel
                  </a>
                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link href='/dashboard' activeClassName='active'>
                        <a className='nav-link'>Dashboard</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/dashboard/messages' activeClassName='active'>
                        <a className='nav-link'>Messages</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/dashboard/bookings' activeClassName='active'>
                        <a className='nav-link'>Bookings</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/dashboard/wallet' activeClassName='active'>
                        <a className='nav-link'>Wallet</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/dashboard/my-listing/active'
                        activeClassName='active'
                      >
                        <a className='nav-link'>My Listings</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/dashboard/reviews' activeClassName='active'>
                        <a className='nav-link'>Reviews</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/dashboard/bookmarks'
                        activeClassName='active'
                      >
                        <a className='nav-link'>Bookmarks</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/dashboard/add-listing'
                        activeClassName='active'
                      >
                        <a className='nav-link'>Add Listings</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/dashboard/profile' activeClassName='active'>
                        <a className='nav-link'>My Profile</a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/dashboard/invoice' activeClassName='active'>
                        <a className='nav-link'>Invoice</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className='others-option d-flex align-items-center'>
                <div className='option-item'>
                  <div className='dropdown profile-nav-item menu-profile-one'>
                    <a
                      className='dropdown-toggle global-pointer'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <div className='menu-profile'>
                        {userRole.avatar ? (
                          <img
                            src={userRole.avatar}
                            className='rounded-circle'
                            alt='image'
                          />
                        ) : (
                          <span className='default-user'>
                            <i className='flaticon-user'></i>
                          </span>
                        )}

                        <span className='name' onClick={toggleDropdownProfile}>
                          {userRole && userRole.name}
                        </span>
                      </div>
                    </a>

                    <div
                      className={
                        displayDropdownProfile
                          ? 'dropdown-menu show'
                          : 'dropdown-menu'
                      }
                    >
                      <div className='dropdown-header d-flex flex-column align-items-center'>
                        <div className='figure mb-3'>
                          {userRole.avatar ? (
                            <img
                              src={userRole.avatar}
                              className='rounded-circle'
                              alt='image'
                            />
                          ) : (
                            <span className='default-user'>
                              <i className='flaticon-user'></i>
                            </span>
                          )}
                        </div>

                        <div className='info text-center'>
                          <span className='name'>
                            {userRole && userRole.name}
                          </span>
                          <p className='mb-3 email'>
                            {userRole && userRole.email}
                          </p>
                        </div>
                      </div>

                      <div className='dropdown-body'>
                        <ul className='profile-nav p-0 pt-3'>
                          <li className='nav-item'>
                            <Link href='/dashboard'>
                              <a className='nav-link'>
                                <i className='bx bx-user'></i>{' '}
                                <span>Dashboard</span>
                              </a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/dashboard/messages'>
                              <a className='nav-link'>
                                <i className='bx bx-envelope'></i>
                                <span>Messages</span>
                              </a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/dashboard/bookings'>
                              <a className='nav-link'>
                                <i className='bx bx-edit-alt'></i>{' '}
                                <span>Bookings</span>
                              </a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/dashboard/profile'>
                              <a className='nav-link'>
                                <i className='bx bx-cog'></i>{' '}
                                <span>Settings</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className='dropdown-footer'>
                        <ul className='profile-nav'>
                          <li className='nav-item'>
                            <a
                              className='nav-link global-pointer'
                              onClick={handleLogout}
                            >
                              <i className='bx bx-log-out'></i>{' '}
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='option-item'>
                  <Link href='/dashboard/add-listing'>
                    <a
                      className='default-btn button-one'
                    >
                      <i className='flaticon-more'></i> Add Listing
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className='others-option-for-responsive'>
          <div className='container'>
            <div className='dot-menu' onClick={toggleMiniAuth}>
              <div className='inner'>
                <div className='circle circle-one'></div>
                <div className='circle circle-two'></div>
                <div className='circle circle-three'></div>
              </div>
            </div>

            <div className={displayMiniAuth ? 'container active' : 'container'}>
              <div className='option-inner'>
                <div className='others-option'>
                  <div className='option-item'>
                    <div className='dropdown profile-nav-item'>
                      <a
                        href='#'
                        className='dropdown-toggle'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <div className='menu-profile'>
                          {userRole.avatar ? (
                            <img
                              src={userRole.avatar}
                              className='rounded-circle'
                              alt='image'
                            />
                          ) : (
                            <span className='default-user'>
                              <i className='flaticon-user'></i>
                            </span>
                          )}

                          <span
                            className='name'
                            onClick={toggleDropdownProfile}
                          >
                            My Account
                          </span>
                        </div>
                      </a>

                      <div
                        className={
                          displayDropdownProfile
                            ? 'dropdown-menu show'
                            : 'dropdown-menu'
                        }
                      >
                        <div className='dropdown-header d-flex flex-column align-items-center'>
                          <div className='figure mb-3'>
                            {userRole.avatar ? (
                              <img
                                src={userRole.avatar}
                                className='rounded-circle'
                                alt='image'
                              />
                            ) : (
                              <span className='default-user'>
                                <i className='flaticon-user'></i>
                              </span>
                            )}
                          </div>

                          <div className='info text-center'>
                            <span className='name'>Andy Smith</span>
                            <p className='mb-3 email'>hello@androsmith.com</p>
                          </div>
                        </div>

                        <div className='dropdown-body'>
                          <ul className='profile-nav p-0 pt-3'>
                            <li className='nav-item'>
                              <Link href='/dashboard'>
                                <a className='nav-link'>
                                  <i className='bx bx-user'></i>{' '}
                                  <span>Dashboard</span>
                                </a>
                              </Link>
                            </li>

                            <li className='nav-item'>
                              <Link href='/dashboard/messages'>
                                <a className='nav-link'>
                                  <i className='bx bx-envelope'></i>{' '}
                                  <span>Messages</span>
                                </a>
                              </Link>
                            </li>

                            <li className='nav-item'>
                              <Link href='/dashboard/bookings'>
                                <a className='nav-link'>
                                  <i className='bx bx-edit-alt'></i>{' '}
                                  <span>Bookings</span>
                                </a>
                              </Link>
                            </li>

                            <li className='nav-item'>
                              <Link href='/dashboard/profile'>
                                <a className='nav-link'>
                                  <i className='bx bx-cog'></i>{' '}
                                  <span>Settings</span>
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className='dropdown-footer'>
                          <ul className='profile-nav'>
                            <li className='nav-item'>
                              <a
                                className='nav-link global-pointer'
                                onClick={handleLogout}
                              >
                                <i className='bx bx-log-out'></i>{' '}
                                <span>Logout</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='option-item'>
                    <a
                      href='/dashboard/add-listing'
                      className='default-btn'
                    >
                      <i className='flaticon-more'></i> Add Listing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;
