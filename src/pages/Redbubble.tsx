import './Redbubble.css';

const Redbubble = () => {
  const topSelling = [
    { image: '/designs/design1.jpg', link: 'https://www.redbubble.com/i/sticker/green-lizzy-mcalpine-star-by-BAMsketches/159852777.EJUG5' },
    { image: '/designs/design2.jpg', link: 'https://www.redbubble.com/i/sticker/lizzy-mcalpine-by-BAMsketches/162291921.EJUG5' },
    { image: '/designs/design3.jpg', link: 'https://www.redbubble.com/i/sticker/princeton-tiger-by-BAMsketches/163645091.EJUG5' },
    { image: '/designs/design4.jpg', link: 'https://www.redbubble.com/i/sticker/lizzy-mcalpine-vortex-by-BAMsketches/173010089.EJUG5' },
  ];

  const favorites = [
    { image: '/designs/fav1.jpg', link: 'https://www.redbubble.com/i/sticker/ghost-guitarist-by-BAMsketches/157536531.EJUG5' },
    { image: '/designs/fav2.jpg', link: 'https://www.redbubble.com/i/sticker/pink-skater-dog-by-BAMsketches/172986538.EJUG5' },
    { image: '/designs/fav3.jpg', link: 'https://www.redbubble.com/i/sticker/taylor-swift-red-cassette-tape-by-BAMsketches/157539722.EJUG5' },
    { image: '/designs/fav4.jpg', link: 'https://www.redbubble.com/i/sticker/dog-with-its-bone-by-BAMsketches/173627800.EJUG5' },
  ];

  return (
    <div className="redbubble-page">
      <div className="redbubble-header">
        <img src="/sketchesbanner.png" alt="Redbubble" className="redbubble-title-image" />
      </div>
      
      <div className="redbubble-content">
        <p className="redbubble-description">
          I create and sell original digital artwork through my Redbubble shop, designing 
          stickers and merchandise using Adobe Illustrator and Procreate. I started this 
          venture in December 2023, during my senior year of high school, when I was 
          searching for more personable stickers and couldn't find what I was looking 
          for. So, I decided to make my own! I manage all aspects of the shop, from 
          developing and uploading new products to marketing designs and handling 
          customer service. What began as a personal creative outlet has grown into 
          an ongoing exploration of illustration, design, and entrepreneurship.
        </p>

        <a 
          href="https://www.redbubble.com/people/BAMsketches/shop?asc=u" 
          target="_blank" 
          rel="noopener noreferrer"
          className="shop-button"
        >
          Visit My Shop
        </a>

        <section className="design-section">
          <h2>Top Selling Designs</h2>
          <div className="designs-row">
            {topSelling.map((design, index) => (
              <a 
                key={index}
                href={design.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="design-card"
              >
                <img src={design.image} alt={`Design ${index + 1}`} />
              </a>
            ))}
          </div>
        </section>

        <section className="design-section">
          <h2>My Favorite Designs</h2>
          <div className="designs-row">
            {favorites.map((design, index) => (
              <a 
                key={index}
                href={design.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="design-card"
              >
                <img src={design.image} alt={`Favorite ${index + 1}`} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Redbubble;