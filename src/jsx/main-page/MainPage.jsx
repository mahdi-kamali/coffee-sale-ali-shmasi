import AboutUs from './about-us/AboutUs';
import Articles from './articles/Articles';
import CorporateProducts from './corporate-products/CorporateProducts';
import Discout from './discount/Discout';
import Footer from '../footer/Footer';
import Intro from './intro/Intro';
import MainSlider from './main-slider/MainSlider';
import PrimaryCategory from './primary-category/PrimaryCategory';
import RecentProducts from './recent-products/RecentProducts';
import SecondaryCategory from './secondary-category/SecondaryCategory';
import TopSales from './top-sales/TopSales';



const MainPage = () => {
    return (
        <div className='main-page'>
            <MainSlider />
            <Intro />
            <PrimaryCategory />
            <Discout />
            <TopSales />
            <SecondaryCategory />
            <CorporateProducts id={1} />
            <SecondaryCategory />
            <RecentProducts />
            <SecondaryCategory />
            <CorporateProducts id={2} />
            <Articles />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default MainPage
