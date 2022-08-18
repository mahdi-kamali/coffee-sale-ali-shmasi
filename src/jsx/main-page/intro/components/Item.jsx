import { Icon } from '@iconify/react';



const Item = (props) => {
    return (
        <div className="item">
            <div className="item-header">
                {props.data.svg}
            </div>
            <div className="item-body">
                <h1>{props.data.header}</h1>
                <small>{props.data.body}</small>
            </div>
        </div>
    )
}

export default Item
