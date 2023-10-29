import Link from '../../utils/ActiveLink';

const ListingAreaNav = ({activeListings, pendingListings}) => {
  return (
    <>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item'>
          <Link href='/dashboard/my-listing/active' activeClassName='active'>
            <a className='nav-link' id='all-listing-tab'>
              Active listing ({activeListings})
            </a>
          </Link>
        </li>

        <li className='nav-item'>
          <Link href='/dashboard/my-listing/pending' activeClassName='active'>
            <a className='nav-link' id='pending-listing-tab'>
              Pending listing ({pendingListings})
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ListingAreaNav;
