import React from 'react';
import './css/slider.css'; // Import your CSS file for slider styling

const Slider = ({ isOpen }) => {
  return (
    <div className={`slider ${isOpen ? 'open' : ''}`}>
      <div className="slider-content">
        {/* Add your slider content here */}
        <h2>Slider Content</h2>
        <p>This is the content of the slider</p>
      </div>
    </div>
  );
};

export default Slider;