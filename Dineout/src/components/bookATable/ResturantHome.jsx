import React from 'react'
import Restaurants from './Restaurants'
import style from "./RestaurantHome.module.css"
import SideFilter from './SideFilter'
import { useSelector } from 'react-redux'


const ResturantHome = () => {
  
  let city = useSelector(store => store.RestaurantReducer.city)
  return (
    <div className={style.restauranthome}>
        <SideFilter/>
        <Restaurants city={city}/>
    </div>
  )
}

export default ResturantHome