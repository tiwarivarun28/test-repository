import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import style from "./SideFilter.module.css"
import { set_cuisine_filter, set_quick_filter, set_type_filter } from "../../Redux/Restaurants/actions"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FaMinus } from "react-icons/fa"


const SideFilter = () => {
  const { dineoutpay } = useParams()


  const dispatch = useDispatch()
  useEffect(() => {

    if (dineoutpay === "dineoutpay") {
      dispatch(set_quick_filter(dineoutpay))
      localStorage.setItem("quick_filter", dineoutpay)
    }

    else if (dineoutpay === "supersaver") {
      dispatch(set_quick_filter("supersaver"))
      localStorage.setItem("quick_filter", "supersaver")
    }
    else {
      dispatch(set_quick_filter(""))
      localStorage.setItem("quick_filter", "")
    }
  }, [dineoutpay])
  let cuisine_filter = useSelector(store => store.RestaurantReducer.cuisine_filter)
  let type_filter = useSelector(store => store.RestaurantReducer.type_filter)
  let quick_filter = useSelector(store => store.RestaurantReducer.quick_filter)


  return (
    <div className={style.side_filter_div}>

      <h4>Quick Fitlers <span><FaMinus /></span></h4>

      <input type="text" placeholder='Search' />

      <div className={style.quick}>
        <div>
          <input type="radio" name='quick' onChange={(e) => { dispatch(set_quick_filter(e.target.value)); localStorage.setItem("quick_filter", e.target.value) }} value="" checked={quick_filter === "" ? "checked" : ""} />
          <label htmlFor="">None</label>

        </div>
        <div>

          <input type="radio" name='quick' onChange={(e) => { dispatch(set_quick_filter(e.target.value)); localStorage.setItem("quick_filter", e.target.value) }} value="dineoutpay" checked={quick_filter === "dineoutpay" ? "checked" : ""} />
          <label htmlFor="">Dineout Pay</label>
        </div>
        <div>
          <input type="radio" name='quick' onChange={(e) => { dispatch(set_quick_filter(e.target.value)); localStorage.setItem("quick_filter", e.target.value) }} value="supersaver" checked={quick_filter === "supersaver" ? "checked" : ""} />
          <label htmlFor="">Super Saver</label>

        </div>
      </div>

      <hr />
      <h4>Cuisines <span><FaMinus /></span></h4>

      <input type="text" placeholder='Search For Cuisines' />
      <div className={style.cuisine}>

        <div>
          <input type="radio" id='none' name='cuisine_filter' onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }} value="" checked={cuisine_filter === "" ? "checked" : ""} />
          <label htmlFor="none" className={cuisine_filter === "" ? `${style.active}` : ""}>None</label>

        </div>

        <div>
          <input type="radio" id='north' name='cuisine_filter' onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }} value="North Indian" checked={cuisine_filter === "North Indian" ? "checked" : ""} />
          <label htmlFor="north" className={cuisine_filter === "North Indian" ? `${style.active}` : ""}>North Indian</label>

        </div>

        <div>
          <input type="radio" id='thai' name='cuisine_filter' onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }} value="Thai" checked={cuisine_filter === "Thai" ? "checked" : ""} />
          <label htmlFor="thai" className={cuisine_filter === "Thai" ? `${style.active}` : ""} >Thai</label>

        </div>

        <div>

          <input type="radio" id='japanese' name='cuisine_filter' onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }} value="Japanese" checked={cuisine_filter === "Japanese" ? "checked" : ""} />
          <label htmlFor="japanese" className={cuisine_filter === "Japanese" ? `${style.active}` : ""}>Japanese</label>
        </div>

        <div>
          <input type="radio" id='asian' name='cuisine_filter' onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }} value="Asian" checked={cuisine_filter === "Asian" ? "checked" : ""} />
          <label htmlFor="asian" className={cuisine_filter === "Asian" ? `${style.active}` : ""}>Asian</label>

        </div>
      </div>

      <br />

      <hr />
      <h4>Tags <span> <FaMinus /></span></h4>
      <input type="text" placeholder='Search' />

      <div className={style.type}>

        <div>

          <input type="radio" name='type_filter' value="" onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }} checked={type_filter === "" ? "checked" : ""} />
          <label htmlFor="">None</label>
        </div>
        <div>

          <input type="radio" name='type_filter' value="Nightlife" onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }} checked={type_filter === "Nightlife" ? "checked" : ""} />
          <label htmlFor="">Night Life</label>
        </div>

        <div>

          <input type="radio" name='type_filter' value="Bar" onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }} checked={type_filter === "Bar" ? "checked" : ""} />
          <label htmlFor="">Bar</label>
        </div>

        <div>
          <input type="radio" name='type_filter' value="Lounge" onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }} checked={type_filter === "Lounge" ? "checked" : ""} />
          <label htmlFor="">Lounge</label>

        </div>

        <div>
          <input type="radio" name='type_filter' value="Casual Dining" onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }} checked={type_filter === "Casual Dining" ? "checked" : ""} />
          <label htmlFor="">Casual Dining</label>

        </div>

      </div>

    </div>
  )
}

export default SideFilter