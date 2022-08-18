import Suggestion from './components/Suggestion';
import FavCarousel from './components/FavCarousel';
import SuggestionCarousel from './components/SuggestionCarousel';
const Favoriote = () => {
    return (
        <div className="favoriote-page">

            <FavCarousel />
            <Suggestion />
            <SuggestionCarousel />

        </div>
    )
}

export default Favoriote
