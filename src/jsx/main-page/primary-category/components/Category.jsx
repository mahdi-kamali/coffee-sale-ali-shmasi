
const Category = (props) => {
    if (props.data) {
        return (
            <div className="category">
                <img src={props.data.image} alt="" />
            </div>
        )
    } else {
        return ''
    }

}

export default Category
