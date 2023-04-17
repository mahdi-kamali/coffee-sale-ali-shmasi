import React from 'react'
import { Icon } from '@iconify/react';
import CategoryItem from './components/CategoryItem';





const SearchSection = () => {
    return (
        <section className='categories-section'>
            <div className="categories-header">
                <div className="left">
                    <div className="cat">
                        <div className="cat-header">
                            <img src={require("../../../images/search-section/specia-offers/1.png")} />
                        </div>
                        <div className="cat-body">
                            <h1 className='cat-name'>
                                Robusta
                            </h1>
                            <div className="cat-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vitae dignissimos cum laboriosam eaque accusamus ipsa dolorem possimus ullam nihil! Eveniet, voluptas ullam nihil labore atque perferendis voluptatibus doloribus necessitatibus!
                                Ratione molestias explicabo, voluptates fugit cum, aut quis officia velit nesciunt possimus nemo? Laboriosam mollitia eum qui neque repellat quos. Tenetur, odio! Pariatur et ratione excepturi veniam commodi reprehenderit assumenda!
                            </div>
                            <div className="cat-buttons">
                                <button>
                                    See All Products
                                    <Icon
                                        className='icon' icon="line-md:coffee-arrow-filled" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="right">
                    <img className='background' src={require("../../../images/search-section/right.png")} alt="" />
                    <ul className="categories">
                        <li>Father's Day</li>
                        <li>Chocolates</li>
                        <li>Fudge</li>
                        <li>Lolles</li>
                        <li>Hampers</li>
                        <li>Special Diet</li>
                        <li>On Sale</li>
                        <button>
                            Categegories
                        </button>
                    </ul>

                </aside>
            </div>
            <div className="categories-body">
                {<CategoryItem />}
                <div className="item">
                    <div className="item-header">
                        <img src={require("../../../images/search-section/categories-cards/4.png")} alt="" />
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
                <div className="item">
                    <div className="item-header">
                        <img src={require("../../../images/search-section/categories-cards/2.png")} alt="" />
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
                <div className="item">
                    <div className="item-header">
                        <img src={require("../../../images/search-section/categories-cards/3.png")} alt="" />
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
            </div>

        </section>
    )
}

export default SearchSection
