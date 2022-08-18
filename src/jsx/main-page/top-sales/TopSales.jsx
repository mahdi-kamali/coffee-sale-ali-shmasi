import Carousel from "../carousel/Carousel"
import { Icon } from '@iconify/react';
const TopSales = () => {
  return (
    <section className="top-sales">
      <h1 className="header"><Icon icon="fa6-solid:ranking-star" color="black" />پر فروش ها</h1>
      <Carousel />
    </section>
  )
}

export default TopSales
