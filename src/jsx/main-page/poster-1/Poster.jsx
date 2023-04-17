
import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";

import Lottie from 'lottie-react'
import rowOneAnimation from "../../../images/poster-1/gif/coffee-beans.json"
import secondOneAnimation from "../../../images/poster-1/gif/shop.json"
import { Icon } from "@iconify/react";


const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
    "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};


const Poster = () => {
    return (
        <section className="poster ">
            <div className="row">
                <div className="left">
                    <Lottie
                        className="lottie"
                        loop={true}
                        animationData={rowOneAnimation} />
                </div>
                <div className="right">
                    <h1>
                        Find Best
                        <span>
                            Coffee
                        </span>
                        Beans </h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nulla dolorum, distinctio eaque mollitia necessitatibus commodi magnam omnis qui blanditiis tempore, natus veniam, assumenda repudiandae numquam obcaecati est dignissimos minima.</p>
                    <button>
                        See Products
                        <Icon icon="material-symbols:arrow-circle-right-rounded" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Poster
