
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const VideoGallery = () => {
  const mediaItems = [
    {
      type: 'image',
      original: 'https://via.placeholder.com/1200x800',
      thumbnail: 'https://via.placeholder.com/150',
      width: 1200,
      height: 800,
      title: 'Sample Image 1',
    },
    {
      type: 'image',
      original: 'https://via.placeholder.com/800x600',
      thumbnail: 'https://via.placeholder.com/150',
      width: 800,
      height: 600,
      title: 'Sample Image 2',
    },
    {
      type: 'video',
      original: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: 'https://via.placeholder.com/150',
      width: 1280,
      height: 720,
      title: 'Sample Video',
    },
  ];

  return (
    <Gallery>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {mediaItems.map((item, index) => (
          <Item
            key={index}
            original={item.type === 'video' ? undefined : item.original} // Pass undefined for videos
            thumbnail={item.thumbnail}
            width={item.width}
            height={item.height}
            title={item.title}
          >
            {({ ref, open }) => (
              <div
                style={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  margin: '10px',
                }}
                onClick={() => {
                  if (item.type === 'video') {
                    window.open(item.original, '_blank');
                  } else {
                    open();
                  }
                }}
              >
                <img
                  ref={ref}
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ maxWidth: '150px', marginBottom: '5px' }}
                />
                <div>{item.title}</div>
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default VideoGallery;
