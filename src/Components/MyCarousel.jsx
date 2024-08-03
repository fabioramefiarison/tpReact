import React, {useState} from 'react'
import "./MyCarousel.css"

const MyCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        <i className='fas fa-chevron-left'></i>
      </button>
      <img src={images[currentIndex]} alt="carousel slide" className="carousel-image" />
      <button className="carousel-button next" onClick={nextSlide}>
      <i className='fas fa-chevron-right'></i>
      </button>
    </div>
  );
};


export default MyCarousel

/*const lesImages = [
   img1, img2, img3, img4
]

const App = () => {

   return(
       <MyCarousel images={lesImages}/>
   )
};
*/