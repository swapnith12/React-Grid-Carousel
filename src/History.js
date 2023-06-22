import React, { useState } from 'react';
import Carousel from 'react-grid-carousel';
import image1 from './pxl1.jpg'
import image2 from './pxl2.jpg'
import image3 from './pxl3.jpg'
import image4 from './pxl4.jpg'
import image5 from './pxl5.jpg'
import image6 from './pxl6.jpg'
import './Styling.css';

const History = () => {
    const [image, setImage] = useState(image1);

    const updateImage = (props) => {
        setImage(props);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'grey' }}>
            <div className='img' style={{ backgroundImage: `url(${image})`, height: "100vh", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h1 style={{ textAlign: "center" }}>01. History</h1>
            </div>
            <Carousel cols={3} rows={1} loop>
                <Carousel.Item >
                    <img width="100%" height="150px" src={image1} onClick={() => updateImage(image1)} />
                </Carousel.Item>
                <Carousel.Item >
                    <img width="100%" height="150px" src={image2} onClick={() => updateImage(image2)} />
                </Carousel.Item>
                <Carousel.Item >
                    <img width="100%" height="150px"
                        src={image3} onClick={() => updateImage(image3)} />
                </Carousel.Item>
                <Carousel.Item >
                    <img width="100%" height="150px" src={image4} onClick={() => updateImage(image4)} />
                </Carousel.Item>
                <Carousel.Item >
                    <img width="100%" height="150px" src={image5} onClick={() => updateImage(image5)} />
                </Carousel.Item>
                <Carousel.Item >
                    <img width="100%" height="150px" src={image6} onClick={() => updateImage(image6)} />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default History;
