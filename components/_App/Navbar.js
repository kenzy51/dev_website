import React, { useState, useEffect, useContext } from 'react';
import { toast } from "react-hot-toast";
import { IndiceContext } from '../../contexts';
import { useRouter } from 'next/router';
import Link from '../../utils/ActiveLink';

// utils
import { handleLogout } from '../../utils/auth';

// component
import AuthModal from '../Authentication/AuthModal';
import MiniAuth from '../Authentication/MiniAuth';
import LanguageSelector from '../Shared/LanguageSelector'
// translation hook
import { useTranslation } from 'next-i18next'

const Navbar = ({ userRole }) => {
  const { toggleAuthModal, displayAuthModal } = useContext(IndiceContext);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [keyword, setKeyword] = useState('');

  // sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== 'undefined') {
    // browser code
    window.addEventListener('scroll', showStickyMenu);
  }

  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let abortController = new AbortController();

    return () => {
      abortController.abort();
    };
  }, []);

  // navbar search
  const router = useRouter();

  const handleChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword) {
      router.push(`/listings/?title=${keyword}`);
    } else {
      router.push('/');
    }
  };
  // translation
  const { locales, pathname, locale } = useRouter();
  const { t } = useTranslation('header')

  return (
    <>
      <div
        className={displayAuthModal ? 'body_overlay open' : 'body_overlay'}
      ></div>
      <div className={sticky ? 'is-sticky navbar-area' : 'navbar-area'}>
        <div className='miran-responsive-nav'>
          <div className='container'>
            <div className='miran-responsive-menu'>
              <div
                onClick={() => toggleMenu()}
                className='hamburger-menu hamburger-two'
              >
                {showMenu ? (
                  <i className='bx bx-x'></i>
                ) : (
                  <i className='bx bx-menu'></i>
                )}
              </div>
              <div className='logo'>
                <Link href='/'>
                  <a>
                    <img src='/images/black-logo.png' alt='logo' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={showMenu ? 'miran-nav show' : 'miran-nav'}>
          <div className='container-fluid'>
            <nav className='navbar navbar-expand-md navbar-light'>
              <Link href='/'>
                <a className='navbar-brand'>
                  <img src='/images/black-logo.png' alt='logo' />
                </a>
              </Link>
              <div className='collapse navbar-collapse mean-menu'>
                <form
                  className='navbar-search-box search-box-one'
                  onSubmit={handleSearch}
                >
                  <label>
                    <i className='flaticon-search'></i>
                  </label>
                  <input
                    type='text'
                    className='input-search'
                    placeholder={t('lookingFor')}
                    name='search'
                    onChange={handleChange}
                  />
                </form>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link href='/' activeClassName='active'>
                      <a className='nav-link'>{t('home')}</a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/manufacturers' activeClassName='active'>
                      <a className='nav-link'>Manufacturers</a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                  <Link href='/products' activeClassName='active'>
                    <a className='nav-link'>Products</a>
                  </Link>
                </li>

                  <li className='nav-item'>
                    <Link href='/about' activeClassName='active'>
                      <a className='nav-link'>{t('about')}</a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <a href='#' className='dropdown-toggle nav-link'>
                      {t('pages')}
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

                  {/* <li className='nav-item'>
                    <a href='#' className='dropdown-toggle nav-link'>
                      {t('blog')}
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link href='/blog' activeClassName='active'>
                          <a className='nav-link'>Blog</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link href='/single-blog' activeClassName='active'>
                          <a className='nav-link'>Single Blog</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className='nav-item'>
                    <Link href='/contact' activeClassName='active'>
                      <a className='nav-link'>{t('contact')}</a>
                    </Link>
                  </li>

                  {userRole &&
                    (userRole.role === 'user' || userRole.role === 'admin') && (
                      <li className='nav-item'>
                        <a href='#' className='dropdown-toggle nav-link user-drop'>
                          User Panel
                        </a>
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link href='/dashboard' activeClassName='active'>
                              <a className='nav-link'>Dashboard</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              href='/dashboard/messages'
                              activeClassName='active'
                            >
                              <a className='nav-link'>Messages</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              href='/dashboard/bookings'
                              activeClassName='active'
                            >
                              <a className='nav-link'>Bookings</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              href='/dashboard/wallet'
                              activeClassName='active'
                            >
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
                            <Link
                              href='/dashboard/reviews'
                              activeClassName='active'
                            >
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
                            <Link
                              href='/dashboard/profile'
                              activeClassName='active'
                            >
                              <a className='nav-link'>My Profile</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              href='/dashboard/invoice'
                              activeClassName='active'
                            >
                              <a className='nav-link'>Invoice</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    )}
                </ul>

              

                <div className='others-option d-flex align-items-center'>
                  <div className='option-item'>
                    {userRole &&
                      (userRole.role === 'user' || userRole.role === 'admin') ? (
                      <span
                        data-toggle='modal'
                        className='auth-one'
                        onClick={handleLogout}
                      >
                        <i className='flaticon-user'></i> Logout
                      </span>
                    ) : (
                      <span
                        data-toggle='modal'
                        onClick={toggleAuthModal}
                        className='auth-one'
                      >
                        <i className='flaticon-user'></i> Login / Register
                      </span>
                    )}
                  </div>

                  <div className='option-item'>
                    <Link
                      href='/dashboard/add-listing'
                      activeClassName='active'
                    >
                      {userRole ? (
                        <a className='default-btn button-one'>
                          <i className='flaticon-more'></i> {t('addListing')}
                        </a>
                      ) : (
                        <a
                          onClick={(e) => {
                            toast.error("Please login to add listings.");
                          }}
                          className='default-btn button-one'
                        >
                          <i className='flaticon-more'></i> {t('addListing')}
                        </a>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
              &nbsp;
              <LanguageSelector />
            </nav>
          </div>
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

            <MiniAuth
              displayMiniAuth={displayMiniAuth}
              handleSearch={handleSearch}
              userRole={userRole}
              toggleAuthModal={toggleAuthModal}
              handleChange={handleChange}
              handleLogout={handleLogout}
            />
          </div>
        </div>
      </div>

      {/* ------ Auth Modal ------ */}
      <AuthModal />
    </>
  );
};

export default Navbar;
