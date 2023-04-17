import { Icon } from "@iconify/react"

const Item = ({ icon, text }) => {
  return (
    <div className="item">
      <div className="item-header">
        <Icon icon={icon} />
      </div>
      <div className="item-body">
        <h1>{text}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime nihil saepe quod praesentium harum
        </p>
      </div>
      <div className="item-place-holder">
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default Item
