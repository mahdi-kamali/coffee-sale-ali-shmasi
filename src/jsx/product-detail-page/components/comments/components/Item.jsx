import { Icon } from '@iconify/react';
import { useState } from "react";


const Item = () => {

    const [toggle, setToggle] = useState(false)

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
                            {toggle ? "انصراف" :'پاسخ دادن' }
                        </button>

                    </div>
                    <div className={toggle ? "toggle reply-body" : "reply-body"}>
                        <textarea ></textarea>
                        <button className='button'>
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
