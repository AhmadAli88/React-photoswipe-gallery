
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const CustomLightbox = () => {
  const options = {
    bgOpacity: 0.8, // Background opacity
    showHideOpacity: true, // Animation for showing/hiding
  };

  return (
    <Gallery withCaption options={options}>
      <Item
        original="https://via.placeholder.com/800x600"
        thumbnail="https://via.placeholder.com/150"
        width="800"
        height="600"
        title="Custom Lightbox Image"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://via.placeholder.com/150"
            alt="Custom Lightbox"
            style={{ cursor: 'pointer', margin: '10px' }}
          />
        )}
      </Item>
      <Item
        original="https://via.placeholder.com/1200x800"
        thumbnail="https://via.placeholder.com/150"
        width="1200"
        height="800"
        title="Another Image"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://via.placeholder.com/150"
            alt="Another Custom Lightbox"
            style={{ cursor: 'pointer', margin: '10px' }}
          />
        )}
      </Item>
    </Gallery>
  );
};

export default CustomLightbox;
