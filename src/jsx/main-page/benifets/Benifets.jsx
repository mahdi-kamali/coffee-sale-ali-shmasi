
import Item from "./components/Item.jsx"


const Benifets = () => {
    return (
        <section className="benifets">
            {<Item
                icon={"fluent-mdl2:accept-medium"}
                text={"Product authenticity"} />}
            {<Item
                text={"Fast delivery"}
                icon={"carbon:delivery-parcel"} />}
            {<Item
                text={"Product integrity"}
                icon={"bxs:coffee-bean"} />}
            {<Item
                text={"Product integrity"}
                icon={"ic:round-coffee-maker"} />}
        </section>
    )
}

export default Benifets
