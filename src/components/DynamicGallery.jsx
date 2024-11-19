import{ useState, useEffect } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const DynamicGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setImages([
        {
          src: 'https://via.placeholder.com/800x600',
          thumbnail: 'https://via.placeholder.com/150',
          width: 800,
          height: 600,
        },
        // Add more image data here
      ]);
    }, 1000);
  }, []);

  return (
    <Gallery>
      {images.map((image, index) => (
        <Item
          key={index}
          original={image.src}
          thumbnail={image.thumbnail}
          width={image.width}
          height={image.height}
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src={image.thumbnail}
              alt="Dynamic Image"
              style={{ margin: '10px', cursor: 'pointer' }}
            />
          )}
        </Item>
      ))}
    </Gallery>
  );
};

export default DynamicGallery;
