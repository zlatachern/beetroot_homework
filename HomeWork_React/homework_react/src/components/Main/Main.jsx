import './main.scss';
import Container from '../Container/Container';
import backCoffee from '../../image/back.png';
import Blog from '../Blog/Blog';
import News from '../News/News';

// Blogs
const data1 = {
  title: 'Exotic Ethiopian Delight: Discover Our New Single-Origin Coffee',
  desctiption: 'Discover the vibrant flavors of Ethiopia with our latest addition to our coffee collection. Sourced from the highlands of Ethiopia, this single-origin coffee boasts a unique taste profile, characterized by fruity undertones and a hint of floral notes. Immerse yourself in the captivating flavors of Ethiopia with every sip.',
}

const data2 = {
  title: 'Expand Your Palate: Join Our Coffee Tasting Workshop',
  desctiption: "Calling all coffee enthusiasts! Join us for an exclusive coffee tasting workshop where you'll learn to discern the nuances of various coffee origins, roast levels, and brewing methods. Our expert baristas will guide you through an immersive experience, helping you appreciate the complex flavors, aromas, and body of specialty coffee. Don't miss this opportunity to elevate your coffee knowledge and indulge in a sensory journey like no other.",
}

const data3 = {
  title: 'Sustainable Sourcing: Our Commitment to Ethical Coffee',
  desctiption: "We believe in the importance of ethical and sustainable coffee sourcing. We are proud to announce our partnership with local farmers who adhere to environmentally friendly practices, ensuring fair wages and improving the livelihoods of coffee-growing communities. With every cup of coffee you enjoy, you're supporting our shared mission of creating a positive impact in the world of coffee production.",
}

const data4 = {
  title: 'Embrace the Festive Spirit: Limited Edition Holiday Blend',
  desctiption: "Celebrate the joy of the holiday season with our limited edition holiday blend. Crafted with a careful selection of beans from around the world, this special blend captures the essence of warmth and togetherness. Indulge in the cozy notes of cinnamon, nutmeg, and dark chocolate, creating a perfect companion for your holiday gatherings and moments of relaxation. Hurry, as this delightful blend is available for a limited time only.",
}

// News

const news1 = {
  title: "New Brews Alert: Introducing Our Coffee Shop's Latest Selection",
  text: "Explore our coffee shop's newest collection of brews, meticulously curated to satisfy every coffee lover's palate. From rich and bold flavors to smooth and delicate notes, our latest selection offers a diverse range of taste experiences. Discover your new favorite cup of coffee today!",
  };
  
  const news2 = {
  title: "Barista Tips & Tricks: Master the Art of Home Brewing",
  text: "Unlock the secrets of professional coffee brewing from the comfort of your own home with our barista tips and tricks. Learn the art of grinding, brewing techniques, and milk frothing methods to create café-quality beverages right at your fingertips. Elevate your coffee game and impress your friends and family with your newfound expertise.",
  };
  
  const news3 = {
  title: "Special Deal: Buy One, Get One Free on Our Signature Blend!",
  text: "Indulge in the irresistible flavors of our signature blend with our special limited-time offer. For every bag of our renowned coffee blend you purchase, receive another one absolutely free! Immerse yourself in the rich aromas and smooth taste of our coffee, and share the joy of a perfect cup with someone special. Don't miss out on this fantastic deal!",
  };
  

const Main = () => (
  <main className='main'>
    <div className="main_background">
      <h1 className="heading--h1">Awaken Your Senses with Exceptional Coffee</h1>
      <img className='back_image' src={backCoffee} alt="Background Coffee" />
    </div>
    <Container>
      <div className="main__content--container">
        <section className="section--first">
          <h2 className="heading--h2">Blog</h2>
          <Blog title={data1.title} desctiption={data1.desctiption} />
          <Blog title={data2.title} desctiption={data2.desctiption} />
          <Blog title={data3.title} desctiption={data3.desctiption} />
          <Blog title={data4.title} desctiption={data4.desctiption} />
        </section>

        <section className="section--second">
        <h2 className="heading--h2">News</h2>
        <News title={news1.title} text={news1.text} />
        <News title={news2.title} text={news2.text} />
        <News title={news3.title} text={news3.text} />
        </section>
      </div>
    </Container>
  </main>
)


export default Main;