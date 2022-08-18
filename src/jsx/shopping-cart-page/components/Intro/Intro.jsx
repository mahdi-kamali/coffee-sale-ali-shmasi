import { ReactComponent as IntroSVG } from "../../../../svgs/11.svg"
import { Icon } from '@iconify/react';
import Step from "./components/Step";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux/es/exports"
import { useEffect } from "react";
import { setSteps } from "../../../features/shoppingCart";


const Intro = () => {



    const steps = useSelector(state => state.shoppingCart.value.steps)
    const user = useSelector(state => state.user.value)
    const location = useSelector(state => state.shoppingCart.value.location)

    // console.log(location);
    // console.log( user);

    const dispatcher = useDispatch()


    function setCurrentStep(index) {
        dispatcher(setSteps(index))
    }


    useEffect(() => {

        if (user === undefined || user === null || user === '') {
            setCurrentStep(1)
            return
        }
        else {
            setCurrentStep(2)
        }

        if (location === undefined || location === null || location === '') {
            setCurrentStep(2)
            return
        }
        else {
            setCurrentStep(3)
        }

    },
        [
            user,
            location
        ])


    return (
        <section className="shopping-cart-intro">
            <div className="left">
                <h1 className="left-header">
                    مراحل خرید
                    <Icon icon="ep:info-filled" />
                </h1>
                <div className="left-body">
                    {
                        steps.map((step, index) => {
                            return (
                                <Step data={step} selected={step.selected} key={index + 1} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <IntroSVG />
            </div>

        </section>
    )
}

export default Intro
