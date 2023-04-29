
import MainIntro from './main-intro/MainIntro';
import SearchSection from './search-section/SearchSection';
import Poster from './poster-1/Poster';
import Benifets from './benifets/Benifets';
import BestOffers from './best-offers/BestOffers';
import BestOffersTwo from './best-offers-2/BestOffersTwo';
import NewProducts from './new-products/NewProducts';
import ProductIntroduction from './prodcut-introduction/ProductIntroduction';


const MainPage = () => {
    return (
        <div className='main-page' >
            {/* <MainSlider /> */}

            {<MainIntro />}
            {<SearchSection />}
            {<Poster />}
            {<Benifets />}
            {<BestOffers />}
            {<BestOffersTwo />}
            {<NewProducts />}
            {<ProductIntroduction />}

            {/* {<Topsales />} */}
            {/* <Intro /> */}
            {/* <PrimaryCategory /> */}
            {/* <Discout /> */}
            {/* <TopSales /> */}
            {/* <SecondaryCategory /> */}
            {/* <CorporateProducts id={1} /> */}
            {/* <SecondaryCategory /> */}
            {/* <RecentProducts /> */}
            {/* <SecondaryCategory /> */}
            {/* <CorporateProducts id={2} /> */}
            {/* <Articles /> */}
            {/* <AboutUs /> */}
            {/* <Footer /> */}
        </div>
    )
}

export default MainPage
