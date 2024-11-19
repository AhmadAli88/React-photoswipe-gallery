
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const BasicGallery = () => {
  const images = [
    {
      src: 'https://via.placeholder.com/800x600',
      thumbnail: 'https://via.placeholder.com/150',
      width: 800,
      height: 600,
      caption: 'Image 1',
    },
    {
      src: 'https://via.placeholder.com/1200x800',
      thumbnail: 'https://via.placeholder.com/150',
      width: 1200,
      height: 800,
      caption: 'Image 2',
    },
  ];

  return (
    <Gallery>
      {images.map((image, index) => (
        <Item
          key={index}
          original={image.src}
          thumbnail={image.thumbnail}
          width={image.width}
          height={image.height}
          title={image.caption}
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src={image.thumbnail}
              alt={image.caption}
              style={{ margin: '10px', cursor: 'pointer' }}
            />
          )}
        </Item>
      ))}
    </Gallery>
  );
};

export default BasicGallery;
