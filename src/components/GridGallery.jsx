
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const GridGallery = () => {
  const images = [
    {
      src: 'https://via.placeholder.com/1200x800',
      thumbnail: 'https://via.placeholder.com/150',
      width: 1200,
      height: 800,
      caption: 'Image 1: A placeholder image',
    },
    {
      src: 'https://via.placeholder.com/800x600',
      thumbnail: 'https://via.placeholder.com/150',
      width: 800,
      height: 600,
      caption: 'Image 2: Another placeholder image',
    },
    {
      src: 'https://via.placeholder.com/1000x750',
      thumbnail: 'https://via.placeholder.com/150',
      width: 1000,
      height: 750,
      caption: 'Image 3: Yet another placeholder image',
    },
    {
      src: 'https://via.placeholder.com/900x700',
      thumbnail: 'https://via.placeholder.com/150',
      width: 900,
      height: 700,
      caption: 'Image 4: A stunning placeholder image',
    },
  ];

  return (
    <Gallery>
      <div
        className="grid-gallery"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '10px',
        }}
      >
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
                className="grid-image"
                style={{
                  cursor: 'pointer',
                  borderRadius: '8px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                }}
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default GridGallery;
