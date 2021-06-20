import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import logo2 from '../../images/logo2.png';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';
import slide4 from '../../images/slide4.jpg';
import axios from 'axios';

const HomepageSlider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(props.size);

    axios
      .post('http://core.twtu.ir/api/News/GetNews', {
        categories: [3646, 3647, 3648, 3649, 3650, 3651],
        pageSize: 10,
        page: 1,
      })
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  };
  return (
    <div>
      <Slider {...settings} className="grid mx-auto gap-x-4">
        <div className="px-3">
          <img className="mx-auto" src={slide1}></img>
        </div>
        <div className="px-3">
          <img className="mx-auto" src={slide2}></img>
        </div>
        <div className="px-3">
          <img className="mx-auto" src={slide3}></img>
        </div>
        <div className="px-3">
          <img className="mx-auto" src={slide4}></img>
        </div>
      </Slider>
    </div>
  );
};
export default HomepageSlider;
