import React, { useEffect, useState, useCallback, useContext } from 'react';
import { parseCookies } from 'nookies';
import { toast } from "react-hot-toast";
import { Spinner } from 'react-bootstrap';
import { IndiceContext } from '../../../contexts';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import { useDropzone } from 'react-dropzone';
import Link from 'next/link';
import NavbarTwo from '../../../components/_App/NavbarTwo';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';

import controls from "../../../utils/RTEControl";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});

const INITIAL_MANUFACTURER = {
  userId: '',
  listingTitle: '',
  category:'',
  keyword: [],
  address: '',
  city: '',
  state: '',
  zipcode: '',
  galleryFacility: [],
  description: '',
  email: '',
  website: '',
  contactPerson: '',
  phone: '',
  whatsApp: '',
  telegram: '',
  facebook: '',
  twitter: '',
  linkedin: '',
  status: '',
};


const AddManufacturer = ({ user }) => {
  // context state
  const { setPendingListing } = useContext(IndiceContext);

  const [files, setFiles] = useState([]);
  const { token } = parseCookies();
  const [createManufacturer, setCreateManufacturer] = useState(INITIAL_MANUFACTURER);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');

  // select form value
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');


  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(async (acceptedFile) => {
      const data = new FormData();
      data.append('file', acceptedFile);
      data.append('upload_preset', process.env.UPLOAD_PRESET);
      data.append('cloud_name', process.env.CLOUD_NAME);

      const response = await axios.post(process.env.CLOUDINARY_URL, data);
      const mediaUrl = await response.data.url;

      setFiles((old) => [...old, mediaUrl]);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const thumbs = files.map((file, i) => (
    <div key={i} className='drop-gallery-thumb'>
      <img src={file} alt="Image" />
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCreateManufacturer((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append('file', createManufacturer.gallery);
    data.append('upload_preset', process.env.UPLOAD_PRESET);
    data.append('cloud_name', process.env.CLOUD_NAME);
    const response = await axios.post(process.env.CLOUDINARY_URL, files);

    const mediaUrl = response.data.url;
    return mediaUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormError('');
      let mediaUrl = '';
      if (createManufacturer.gallery) {
        const imageUrl = await handleImageUpload();
        mediaUrl = imageUrl.replace(/^http:\/\//i, 'https://');
      }
      const url = `${baseUrl}/api/v1/manufacturer`;

      const {
        userId,
        listingTitle,
        keyword,
        address,
        city,
        state,
        zipcode,
        galleryFacility,
        description,
        email,
        website,
        contactPerson,
        phone,
        whatsApp,
        telegram,
        facebook,
        twitter,
        linkedin,
        status,
      } = createManufacturer;

      const payload = {
        userId,
        listingTitle,
        category,
        keyword,
        address,
        city,
        state,
        zipcode,
        galleryFacility:files,
        description,
        email,
        website,
        contactPerson,
        phone,
        whatsApp,
        telegram,
        facebook,
        twitter,
        linkedin,
        status,
      };

      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });

      {
        user.role === 'admin'
          ? setPendingListing(response.data.adminPendingListings)
          : setPendingListing(response.data.pendingListings);
      }

      setLoading(false);
      setCreateManufacturer(INITIAL_MANUFACTURER);
      setFiles([]);
      toast.success("Listing created successfully. Thank you for posting! Your post will not be visible until a admin has approved");
    } catch (error) {
      toast.error("Please, fillup all required fields");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DashboardNavbar />
      <div className='main-content d-flex flex-column'>
        <NavbarTwo 
          userRole={user} 
        />
        <div className='breadcrumb-area'>
          <h1>Add Manufacturer</h1>
          <ol className='breadcrumb'>
            <li className='item'>
              <Link href='/dashboard'>
                <a>Home</a>
              </Link>
            </li>
            <li className='item'>
              <Link href='/dashboard'>
                <a>Dashboard</a>
              </Link>
            </li>
            <li className='item'>Add Manufacturer</li>
          </ol>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='add-listings-box'>
            <h3>Basic Informations</h3>
            <div className='row'>
              <div className='col-lg-12 col-md-12'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-briefcase-alt'></i> Listing Title:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name of your business'
                    name='listingTitle'
                    value={createManufacturer.listingTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-duplicate'></i> Type / Category:
                  </label>
                  <select
                    className='dashbaord-category-select'
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Select Category</option>
                    <option>Restaurants</option>
                    <option>Another option</option>
                  </select>
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bxs-key'></i> Keywords:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Maximum 15 , should be separated by commas'
                    name='keyword'
                    value={createManufacturer.keyword}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='add-listings-box'>
            <h3>Location</h3>

            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-menu-alt-left'></i> Address:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='e.g. 55 County Laois'
                    name='address'
                    value={createManufacturer.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-menu-alt-left'></i> City:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='e.g. Bishkek'
                    name='city'
                    value={createManufacturer.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
 
              <div className='col-lg-6 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-menu-alt-left'></i> State:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='state'
                    value={createManufacturer.state}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-menu-alt-left'></i> Zip-Code:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='zipcode'
                    value={createManufacturer.zipcode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div {...getRootProps()} className='dropzone add-listings-box'>
            <h3>Gallery</h3>
            {files.length > 0 ? (
              <div className='gallery-flex'>
                {thumbs}
                <input {...getInputProps()} />
              </div>
            ) : (
              <div className='file-upload-box global-pointer'>
                <input {...getInputProps()} />
                <p>Click here to select files</p>
              </div>
            )}
          </div>
          <p className="form-text mar-top-minus-20 mb-4"><b>Noted:</b> Upload the image size 790x525</p>

          <div className='add-listings-box'>
            <h3>Details</h3>

            <div className='row'>
              <div className='col-lg-12 col-md-12'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-text'></i> Description:
                  </label>

                  {/* <RichTextEditor
                    controls={controls}
                    value={createManufacturer.description}
                    onChange={(e) =>
                      setcreateManufacturer((prevState) => ({
                        ...prevState,
                        description: e,
                      }))
                    }
                  /> */}

                  {/* changed it to usual textarea, because didn't work properly */}
                  <textarea type="text" className="form-control" value={createManufacturer.description} name="description" onChange={handleChange}/>
                </div>
              </div>

              <div className='col-lg-4 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-envelope'></i> Email Address:{' '}
                    <span>(optional)</span>
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    value={createManufacturer.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='col-lg-4 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-globe'></i> Website:{' '}
                    <span>(optional)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='website'
                    value={createManufacturer.website}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* contact person */}
              <div className='col-lg-4 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-phone-call'></i> Contact person:{' '}
                    <span>(optional)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='contactPerson'
                    value={createManufacturer.contactPerson}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* phone */}
              <div className='col-lg-4 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-phone-call'></i> Phone:{' '}
                    <span>(optional)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='phone'
                    value={createManufacturer.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bxl-whatsapp'></i> WhatsApp:{' '}
                    <span>(optional)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='https://www.whatsApp.com/'
                    name='whatsApp'
                    value={createManufacturer.whatsApp}
                    onChange={handleChange}
                  />
                </div>
              </div> 
              <div className='col-lg-4 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bxl-telegram'></i> Telegram:{' '}
                    <span>(optional)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='https://www.telegram.com/'
                    name='telegram'
                    value={createManufacturer.telegram}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='col-lg-4 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bxl-facebook-square'></i> Facebook:{' '}
                    <span>(optional)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='https://www.facebook.com/'
                    name='facebook'
                    value={createManufacturer.facebook}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='col-lg-4 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bxl-twitter'></i> Twitter:{' '}
                    <span>(optional)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='https://www.twitter.com/'
                    name='twitter'
                    value={createManufacturer.twitter}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='col-lg-4 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bxl-linkedin'></i> Linkedin:{' '}
                    <span>(optional)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='https://www.linkedin.com/'
                    name='linkedin'
                    value={createManufacturer.linkedin}
                    onChange={handleChange}
                  />
                </div>
              </div>  
              {/* status */}
              <div className='col-lg-4 col-md-6'>
                <div className='form-group'>
                  <label>
                    Status
                    <span>(optional)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='status'
                    name='status'
                    value={createManufacturer.status}
                    onChange={handleChange}
                  />
                </div>
              </div>

            </div>
          </div>

          <div className='add-listings-btn'>
            <button type='submit'>
              Submit Listings{' '}
              {loading ? (
                <Spinner
                  color='success'
                  className='product-spinner'
                  animation='border'
                  size='sm'
                />
              ) : (
                ''
              )}
            </button>
          </div>
          <div className='flex-grow-1'></div>
        </form>

        <div className='copyrights-area'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-sm-6 col-md-6'>
              <p>
                <i className='bx bx-copyright'></i> Indice All rights reserved
              </p>
            </div>

            <div className='col-lg-6 col-sm-6 col-md-6 text-right'>
              <p>
                Designed by ❤️{' '}
                <a
                  href='https://envytheme.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddManufacturer;
