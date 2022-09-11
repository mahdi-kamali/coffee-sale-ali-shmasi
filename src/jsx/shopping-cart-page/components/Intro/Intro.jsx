import { ReactComponent as FirstSVG } from "../../../../svgs/shopping-cart/log-in.svg"
import { ReactComponent as SecondSVG } from "../../../../svgs/shopping-cart/location.svg"
import { ReactComponent as ThirdSVG } from "../../../../svgs/shopping-cart/date.svg"
import { ReactComponent as FourthSVG } from "../../../../svgs/shopping-cart/pay.svg"
import { Icon } from '@iconify/react';
import Step from "./components/Step";

import { useDispatch, useSelector } from "react-redux/es/exports"
import { useEffect } from "react";
import { setSteps } from "../../../features/shoppingCart";


const Intro = () => {


    const user = useSelector(state => state.user.value)
    const steps = useSelector(state => state.shoppingCart.value.steps)
    const location = useSelector(state => state.shoppingCart.value.location)
    const date = useSelector(state => state.shoppingCart.value.date)

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

        if (date === undefined || date === null || date === '') {
            setCurrentStep(3)
            return
        }
        else {
            setCurrentStep(4)
        }

    },
        [
            user,
            location,
            date
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
                {steps[0].selected ? <FirstSVG /> : ''}
                {steps[1].selected ? <SecondSVG /> : ''}
                {steps[2].selected ? <ThirdSVG /> : ''}
                {steps[3].selected ? <FourthSVG /> : ''}
            </div>

        </section>
    )
}

export default Intro
