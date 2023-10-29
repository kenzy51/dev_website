import { useRouter } from "next/router";
import React, { useState } from "react";

const imageStyle = {
  objectFit: "contain",
  maxHeight: "100%",
};

const innerWrapperCardStyle = {
  display: "flex",
  flexDirection: "row",
  columnGap: "13px",
  marginBottom: "30px",
  border: "1px solid var(--mainColor)",
  borderRadius: "5px",
  cursor:"pointer"
};

const imageBlockStyle = {
  width: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const infoBlockStyle = {
  padding: "20px 0",
  maxWidth: "500px",
};

export const ManufacturerItem = ({
  id,
  photos,
  name,
  description,
  location,
  website,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const router = useRouter()
  const handleItemClick = () => {
    router.push(`/${id}`); 
  };
  return (
    <div style={innerWrapperCardStyle} onClick={()=> handleItemClick()}>
      <div style={imageBlockStyle}>
        <img
          style={imageStyle}
          src={photos ? photos[0] : "Фотография отсутствует"}
          alt={name}
          onClick={()=> handleItemClick()}
        />
      </div>
      <div style={infoBlockStyle}>
        <h5>{name}</h5>
        <p>
          {showFullDescription
            ? description
            : description?.slice(0, 130) + "..."}
        </p>
        {description?.length > 130 && (
          <button onClick={toggleDescription} className="default-btn">
            {showFullDescription ? "Less" : "More"}
          </button>
        )}
        <p>Location: {location}</p>
        <p>
          Website:{" "}
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      </div>
    </div>
  );
};
