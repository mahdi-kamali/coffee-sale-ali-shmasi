import { Icon } from '@iconify/react';
import { useRef } from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setUserWindow } from '../../../../features/windows';


const Item = () => {

    const [toggle, setToggle] = useState(false)
    const [message, setMessage] = useState("");
    const user = useSelector(state => state.user.value)

    const dispatcher = useDispatch()


    function handleOnSend(e) {
        if (user === undefined) {
            dispatcher(setUserWindow({ type: 'sign-in' }))
        } else {
        }
    }

    function handleOnTextAreaChange(e) {
        setMessage( e.target.value )
    }



    return (
        <div className="item">
            <div className="item-header">
                <div className="image">
                    <Icon icon="fa:user-circle-o" />
                </div>
            </div>
            <div className="item-body">
                <h1 className="name">
                    محسن خدایی
                </h1>
                <span className="date">
                    1394/2/3
                </span>
                <p className="body">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم ا
                </p>
                <div className="reply">
                    <div className="reply-header">
                        <button className="button reply-btn" onClick={() => {
                            setToggle(!toggle)
                        }}>
                            <Icon icon="fa:mail-reply" />
                            {toggle ? "انصراف" : 'پاسخ دادن'}
                        </button>

                    </div>
                    <div className={toggle ? "toggle reply-body" : "reply-body"}>
                        <textarea onChange={handleOnTextAreaChange} ></textarea>
                        <button onClick={handleOnSend} className='button'>
                            ارسال
                            <Icon icon="fluent:send-28-filled" />
                        </button>
                    </div>
                </div>
                <div className="feedback">
                    <button className="button feedback-btn" onClick={() => {
                        setToggle(!toggle)
                    }}>
                        <Icon icon="bxs:message-alt-detail" />
                        <span>3</span>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item
