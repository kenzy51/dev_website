import React, { useEffect, useState, useCallback } from 'react';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';
import NavbarTwo from '../../../components/_App/NavbarTwo';
import Link from 'next/link';
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-hot-toast";
import { parseCookies } from "nookies";
import { Spinner } from "react-bootstrap";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const INITIAL_PRODUCT = {
  name: '',
  description: '',
  mediaType: '',
  mediaUrls: [],
  keywords: [],
  price: '',
  manufacturerId: null,
};

const AddProduct = ({ user }) => {
  const [createProduct, setCreateProduct] = useState(INITIAL_PRODUCT);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = parseCookies();

  const handleKeywordsChange = (e) => {
    const { value } = e.target;
    const keywordsArray = value.split(',').map((keyword) => keyword.trim());
    setCreateProduct((prevState) => ({ ...prevState, keywords: keywordsArray }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(async (acceptedFile) => {
      const data = new FormData();
      data.append('file', acceptedFile);
      data.append('upload_preset', process.env.UPLOAD_PRESET);
      data.append('cloud_name', process.env.CLOUD_NAME);

      const response = await axios.post(process.env.CLOUDINARY_URL, data);
      const mediaUrl = response.data.url;

      setFiles((old) => [...old, mediaUrl]);
    });
  }, []);

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append('file', createProduct.gallery);
    data.append('upload_preset', process.env.UPLOAD_PRESET);
    data.append('cloud_name', process.env.CLOUD_NAME);

    const response = await axios.post(process.env.CLOUDINARY_URL, data);
    const mediaUrl = response.data.url;

    return mediaUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (createProduct.mediaUrls) {
        const imageUrl = await handleImageUpload();
        mediaUrl = imageUrl.replace(/^http:\/\//i, 'https://');
      }
      const mediaUrls = await Promise.all(files.map(handleImageUpload));
      const url = `${baseUrl}/api/v1/products/product`;

      const {
        name,
        mediaType,
        description,
        price,
        manufacturerId,
        keywords,
      } = createProduct;

      const payload = {
        name,
        mediaType,
        description,
        mediaUrls,
        price,
        manufacturerId,
        keywords,
      };

      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });

      setLoading(false);
      setCreateProduct(INITIAL_PRODUCT);
      setFiles([]);
      toast.success(
        "Listing created successfully. Thank you for posting! Your post will not be visible until an admin has approved"
      );
    } catch (e) {
      toast.error("Please fill all required fields");
      console.log('Submit Data:', createProduct);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const thumbs = files.map((file, i) => (
    <div key={i} className='drop-gallery-thumb'>
      <img src={file} alt="Image" />
    </div>
  ));

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <div>
      <DashboardNavbar />
      <div className='main-content d-flex flex-column'>
        <NavbarTwo userRole={user} />
        <div className='breadcrumb-area'>
          <h1>Add Product</h1>
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
            <li className='item'>Add Product</li>
          </ol>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='add-listings-box'>
            <h3>Basic Information</h3>
            <div className='row'>
              <div className='col-lg-12 col-md-12'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-briefcase-alt'></i> Product name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name of your business'
                    name='name'
                    value={createProduct.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-duplicate'></i> Media Type:
                  </label>
                  <select
                    className='dashbaord-category-select'
                    name='mediaType'
                    value={createProduct.mediaType}
                    onChange={handleChange}
                  >
                    <option value='photo'>Photo</option>
                    <option value='video'>Video</option>
                  </select>
                </div>
              </div>

              <div className='col-lg-6 col-md-6'></div>
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
          <p className="form-text mar-top-minus-20 mb-4">
            <b>Noted:</b> Upload the image size 790x525
          </p>
          <div className='add-listings-box'>
            <h3>Details</h3>
            <div className='row'>
              <div className='col-lg-12 col-md-12'>
                <div className='form-group'>
                  <label>
                    <i className='bx bx-text'></i> Description:
                  </label>
                  <textarea
                    type='text'
                    className='form-control'
                    placeholder=''
                    name='description'
                    value={createProduct.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='add-listings-box padding-field'>
            <h3>Price</h3>
            <div className='form-group'>
              <label>
                <i className='bx bx-purchase-tag'></i> Price
              </label>
              <input
                type='number'
                className='form-control'
                placeholder='$542.00'
                name='price'
                value={createProduct.price}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='add-listings-box padding-field'>
            <h3>Manufacturer ID</h3>
            <div className='form-group'>
              <label>
                <i className='bx bx-purchase-tag'></i> Manufacturer ID
              </label>
              <input
                type='number'
                className='form-control'
                placeholder='ID'
                name='manufacturerId'
                value={createProduct.manufacturerId}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
            <div className='form-group'>
              <label>
                <i className='bx bx-duplicate'></i> Keywords:
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter keywords (comma-separated)'
                name='keywords'
                value={createProduct.keywords.join(', ')}
                onChange={handleKeywordsChange}
              />
            </div>
          </div>

          <div className='add-listings-btn'>
            <button type='submit'>
              Submit Product{' '}
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
      </div>
    </div>
  );
};

export default AddProduct;
