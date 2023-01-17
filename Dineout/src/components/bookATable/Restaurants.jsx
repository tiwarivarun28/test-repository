import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { get_data, set_cuisine_filter, set_loading, set_max_page, set_page, set_sort, set_total, set_type_filter } from '../../Redux/Restaurants/actions'
import style from "./Restaurants.module.css"
import Restaurant from "./Restaurant"
import Skeleton from 'react-loading-skeleton'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";



const Restaurants = ({ city }) => {
    const dispatch = useDispatch()
    city = city.charAt(0).toUpperCase() + city.slice(1);

    let pagearr = []

    const loading = useSelector(store => store.RestaurantReducer.loading)
    const restaurants = useSelector(store => store.RestaurantReducer.restaurants)
    let page = useSelector(store => store.RestaurantReducer.page)
    let maxpage = useSelector(store => store.RestaurantReducer.maxpage)
    let sort = useSelector(store => store.RestaurantReducer.sort)
    let cuisine_filter = useSelector(store => store.RestaurantReducer.cuisine_filter)
    let type_filter = useSelector(store => store.RestaurantReducer.type_filter)
    let quick_filter = useSelector(store => store.RestaurantReducer.quick_filter)
    let total = useSelector(store => store.RestaurantReducer.total)


    useEffect(() => {
        dispatch(set_loading(true))
        get()
        dispatch(set_loading(false))

    }, [page])

    useEffect(() => {
        dispatch(set_loading(true))
        get()
        get1()
        dispatch(set_loading(false))

    }, [sort, cuisine_filter, type_filter, quick_filter, city])



    for (let i = 1; i <= maxpage; i++) {
        pagearr.push(i)
    }

    const Pagination = () => {
        return pagearr.map(ele => {
            return <span key={ele} onClick={() => { dispatch(set_page(ele)); localStorage.setItem("page", ele) }} className={ele === page ? `${style.active} ${style.activePageSpan}` : `${style.activePageSpan}`}>{ele}</span>
        })
    }


    async function get1() {
        let res = await fetch(`https://fake-json-server2.herokuapp.com/posts?city=${city}&cuisine_like=${cuisine_filter}&type_like=${type_filter}&quick_like=${quick_filter}`)
        let res1 = await res.json()
        dispatch(set_max_page(Math.ceil(res1.length / 9)))
        localStorage.setItem("maxpage", maxpage)
        dispatch(set_page(1))
        dispatch(set_total(res1.length))
        localStorage.setItem("page", page)
    }
    async function get() {
        let res = await fetch(`https://fake-json-server2.herokuapp.com/posts?_page=${page}&_limit=9&_sort=${sort}&city=${city}&cuisine_like=${cuisine_filter}&type_like=${type_filter}&quick_like=${quick_filter}`)
        let res1 = await res.json()
        dispatch(get_data(res1))
    }

    const Loading = () => {
        return <Skeleton width={100} height={100} />
    }

    const ShowData = () => {
        return (
            <>
                <div className={style.upperlinks}>
                    Dineout <MdKeyboardArrowRight fill="black"/> {city} <MdKeyboardArrowRight fill="black"/> {city} Restaurant {!quick_filter ==""?  quick_filter==="dineoutpay"? <span><MdKeyboardArrowRight fill="black"/>Dineout pay</span>: <span><MdKeyboardArrowRight fill="black"/>Super Savers</span>: ``}
                </div>


                <div className={style.topheading}>

                    <h2>Best {quick_filter.charAt(0).toUpperCase() + quick_filter.slice(1)} Restaurants Near Me in {city} <span>({total})</span></h2>
                    <div className={style.sort_dropdown_div}>
                        Sort By :&nbsp;
                        <select className={style.sort_dropdown} value={sort} onChange={(e) => { dispatch(set_sort(e.target.value)); localStorage.setItem("sort", e.target.value) }}>
                            <option value=""></option>
                            <option value="rating&_order=desc">Popularity- high to low</option>
                            <option value="rating&_order=asc">Popularity- low to high</option>
                            <option value="name">Name</option>
                        </select>

                    </div>
                </div>
                <div className={style.filter_dropdown_div}>
                    Cuisine : &nbsp;
                    <select className={style.filter_dropdown} value={cuisine_filter} onChange={(e) => { dispatch(set_cuisine_filter(e.target.value)); localStorage.setItem("cuisine_filter", e.target.value) }}>
                        <option value=""></option>
                        <option value="Japanese">Japanese</option>
                        <option value="North Indian">North Indian</option>
                        <option value="Thai">Thai</option>
                        <option value="Asian">Asian</option>
                    </select>

                    <br />

                    Tags : &nbsp;
                    <select className={style.filter_dropdown} value={type_filter} onChange={(e) => { dispatch(set_type_filter(e.target.value)); localStorage.setItem("type_filter", e.target.value) }}>
                        <option value=""></option>
                        <option value="Nightlife">Night Life</option>
                        <option value="Bar">Bar</option>
                        <option value="Lounge">Lounge</option>
                        <option value="Casual Dining">Casual Dining</option>

                    </select>
                </div>

                <div className={style.cards}>
                    {restaurants.map(x => {
                        return <Restaurant key={x.id} x={x} />
                    })}
                </div>
                <div className={style.pageBtns}>
                    <button className={style.prebtn} disabled={page === 1 ? true : false} onClick={() => { dispatch(set_page(page - 1)); localStorage.setItem("page", page - 1) }} > <MdKeyboardArrowLeft/>  Previous</button>{<Pagination />}<button className={style.nextbtn} disabled={page === maxpage ? true : false} onClick={() => { dispatch(set_page(page + 1)); localStorage.setItem("page", page + 1) }} >Next <MdKeyboardArrowRight/></button>

                </div>
            </>
        )
    }

    return (
        <div>

            {loading ? <div><Loading /></div> : <div><ShowData /></div>}
        </div>
    )
}

export default Restaurants