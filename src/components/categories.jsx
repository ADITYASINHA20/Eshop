import React from "react";
import electronicsImage from "../assets/electronics.png";
import clothingImage from "../assets/clothing.png";
import accessoriesImage from "../assets/accessories.png";

const Categories = () => {
  const categories = [
    { name: 'Electronics', image: electronicsImage },
    { name: 'Clothing', image: clothingImage },
    { name: 'Accessories', image: accessoriesImage },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around', // <-- Even space on sides and between
    alignItems: 'center',
    marginTop: '50px',
    padding: '30px',
    backgroundColor: '#f5f5f5',
    flexWrap: 'wrap' // Optional for responsiveness
  };

  const cardStyle = {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '200px',
    transition: 'transform 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold'
  };

  return (
    <section style={containerStyle}>
      {categories.map((category, index) => (
        <div
          key={index}
          style={cardStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <img src={category.image} alt={category.name} style={imageStyle} />
          <h3 style={titleStyle}>{category.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default Categories;
