import About from '../components/About';
import Blog from '../components/Blog';
import Category from '../components/Category';
import Client from '../components/Client';
import Footer from '../components/Footer';
import HomeSlider from '../components/HomeSlider';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Package from '../components/Package';
import Review from '../components/Review';
import Services from '../components/Services';
import Shop from '../components/Shop';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSlider />
      <Category />

      <About />
      <Shop />
      <Package />
      <Review />
      <Services />
      <Blog />
      <NewsLetter />
      <Client />
      <Footer />
    </>
  );
}
