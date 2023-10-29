import React from 'react';

export const ManufacturerList = ({ manufacturers }) => {
  return (
    <div className="manufacturer-list">
      {manufacturers.map((manufacturer) => (
        <div className="manufacturer-card" key={manufacturer.id}>
          <img src={manufacturer.photos[0]} alt={manufacturer.name} />
          <h3>{manufacturer.name}</h3>
          <p>{manufacturer.description}</p>
          <p>Location: {manufacturer.location}</p>
          <p>Website: <a href={manufacturer.website} target="_blank" rel="noopener noreferrer">{manufacturer.website}</a></p>
        </div>
      ))}
      <style jsx>{`
        .manufacturer-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin: 20px;
        }

        .manufacturer-card {
          background-color: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .manufacturer-card img {
          max-width: 100%;
        }
      `}</style>
    </div>
  );
};
