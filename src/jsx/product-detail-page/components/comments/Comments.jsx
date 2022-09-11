import { ReactComponent as SVG } from "../../../../svgs/product-detail/1.svg"
import { Icon } from '@iconify/react';
import { useEffect } from "react";
import { useState } from "react";
import Item from "./components/Item";
import { useDispatch, useSelector } from "react-redux";
import { setUserWindow } from "../../../features/windows";


const Comments = (props) => {

    const [toggle, setToggle] = useState(false)
    const user = useSelector(state => state.user.value)
    const dispatcher = useDispatch()


    function handleSigninClick() {
        dispatcher(setUserWindow({ type: 'sign-in' }))
    }


    function handleSignUpClick() {
        dispatcher(setUserWindow({ type: 'sign-up' }))
    }




    return (
        <div className="product-comments">
            <div className="comments-header">
                <div className="left">
                    <h1>نظرات کاربران </h1>
                    <p>
                        در این بخش میتوانید نظرات دیگران درباره محصول  را مشاهده کنید و همجنین شما هم میتوانید نظر خودتان را پست کرده و به دیگران اشتراک بزارید
                    </p>
                    {
                        !user ?
                            <div className="user-state">
                                <div className="not-signed">
                                    <h1>برای ارسال نظر وارد شوید</h1>
                                    <div className="buttons">
                                        <button onClick={handleSigninClick}>ورود</button>
                                        <button onClick={handleSignUpClick}>ثبت نام</button>
                                    </div>
                                </div>
                            </div> :
                            <form className="user-state" action="#">
                                <div className="form-left">
                                    <div className="form-group">
                                        <textarea placeholder="پیام شما" ></textarea >
                                        <button>
                                            ثبت نظر
                                            <Icon icon="fluent:send-28-filled" />
                                        </button>
                                    </div>
                                </div>
                                <div className="form-right">
                                    <div className="form-group" >
                                        <img src={
                                            require('../../../../images/avatar/1.jpg')} alt="" />
                                    </div>
                                    <div className="form-group" id="first">
                                        <label >
                                            <span>
                                                نام شما :
                                            </span>
                                            <small>
                                                {user.fullName}
                                            </small>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label >
                                            <span>
                                                نام کاربری :
                                            </span>
                                            <small>
                                                {user.userName}
                                            </small>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label >
                                            <span>
                                                ایمیل :
                                            </span>
                                            <marquee
                                                scrollamount={2}
                                                direction={'right'}
                                            >
                                                {user.email}
                                            </marquee>
                                        </label>
                                    </div>
                                </div>
                            </form>
                    }

                </div>
                <div className="right">
                    <SVG />
                </div>
            </div>
            <div className="comments-body">
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default Comments
