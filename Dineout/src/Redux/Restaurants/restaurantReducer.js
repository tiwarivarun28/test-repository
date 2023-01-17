import { GET_DATA, SET_CITY, SET_CUISINE_FILTER, SET_LOADING, SET_MAX_PAGE, SET_PAGE, SET_QUICK_FILTER, SET_SORT, SET_TOTAL, SET_TYPE_FILTER } from "./actionTypes"

const initialState = {
  restaurants: [],
  loading: false,
  city: localStorage.getItem("navbarCity") || "Delhi",
  page: localStorage.getItem("page") || 1,
  maxpage: localStorage.getItem("maxpage") || 1,
  sort: localStorage.getItem("sort") || "",
  cuisine_filter: localStorage.getItem("cuisine_filter") || "",
  type_filter: localStorage.getItem("type_filter") || "",
  quick_filter: localStorage.getItem("quick_filter") || "",
  pagearr: [],
  total: 0
}

const RestaurantReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_DATA: {
      return {
        ...state,
        restaurants: payload
      }
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: payload
      }
    }

    case SET_SORT: {
      return {
        ...state,
        sort: payload
      }
    }

    case SET_CUISINE_FILTER: {
      return {
        ...state,
        cuisine_filter: payload
      }
    }

    case SET_TYPE_FILTER: {
      return {
        ...state,
        type_filter: payload
      }
    }

    case SET_QUICK_FILTER: {
      return {
        ...state,
        quick_filter: payload
      }
    }

    case SET_PAGE: {
      return {
        ...state,
        page: payload
      }
    }

    case SET_MAX_PAGE: {
      return {
        ...state,
        maxpage: payload
      }
    }

    case SET_CITY: {
      localStorage.setItem("navbarCity", payload)
      return {
        ...state,
        city: payload
      }
    }

    case SET_TOTAL: {
      return {
        ...state,
        total: payload
      }
    }

    default:
      return state
  }
}


export default RestaurantReducer