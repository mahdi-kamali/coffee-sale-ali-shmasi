import { Icon } from '@iconify/react';

const CategoryItem = () => {
    return (
        <div className="item">
            <div className="item-header">
                <img src={require("../../../../images/search-section/categories-cards/1.png")} alt="" />
            </div>
            <div className="item-body">
                <div className="item-name row">
                    Lavazza
                </div>
                <div className="item-price row">
                    $200
                </div>
                <div className="item-category row">
                    Espresso
                </div>
                <div className="item-rating row">
                    <div className="stars">
                        <Icon icon="ic:round-star-rate" />
                        <Icon icon="ic:round-star-rate" />
                        <Icon icon="ic:round-star-rate" />
                        <Icon icon="ic:round-star-rate" />
                        <Icon icon="ic:round-star-rate" />
                    </div>
                    <div className="count">
                        4/5
                    </div>
                </div>
                <div className="item-properties row">
                    <span>healthy</span>
                    <span>caffeine</span>
                </div>
                <div className="item-description row">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsam dolorum. Sit sint voluptate dicta cupiditate cum ex vero nam nulla itaque eius recusandae, quaerat minus blanditiis tempora beatae distinctio?
                </div>
                <div className="item-grams row">
                    <h1 className='grams-header'>grams</h1>
                    <div className="grams-body ">
                        <span>0.5k</span>
                        <span>1k</span>
                        <span>2k</span>
                        <span>3k</span>
                    </div>
                </div>
            </div>
            <div className="item-buttons">
                <button>
                    <Icon icon="material-symbols:share" />
                </button>
                <button>
                    <Icon icon="mdi:cards-heart-outline" />
                </button>
                <button>
                    <Icon icon="dashicons:admin-comments" />
                </button>
            </div>
            <button className="item-add-to-cart">
                <Icon icon="carbon:shopping-cart-plus" />
            </button>
        </div>
    )
}

export default CategoryItem
