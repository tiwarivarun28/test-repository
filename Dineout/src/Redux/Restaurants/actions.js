import { GET_DATA, SET_LOADING, SET_PAGE, SET_MAX_PAGE, SET_SORT, SET_CITY, SET_CUISINE_FILTER, SET_TYPE_FILTER, SET_TOTAL, SET_QUICK_FILTER } from "./actionTypes"

export const get_data = (payload) => ({
    type: GET_DATA,
    payload: payload
})

export const set_loading = (payload) => ({
    type: SET_LOADING,
    payload: payload
})

export const set_cuisine_filter = (payload) => ({
    type:SET_CUISINE_FILTER,
    payload:payload
})

export const set_type_filter = (payload) => ({
    type:SET_TYPE_FILTER,
    payload:payload
})

export const set_quick_filter = (payload) => ({
    type:SET_QUICK_FILTER,
    payload:payload
})

export const set_sort = (payload) => ({
    type:SET_SORT,
    payload:payload
})

export const set_page = (payload) => ({
    type:SET_PAGE,
    payload:payload
})

export const set_max_page = (payload) => ({
    type:SET_MAX_PAGE,
    payload:payload
})

export const set_city = (payload) => ({
    type: SET_CITY,
    payload: payload
})

export const set_total = (payload) => ({
    type: SET_TOTAL,
    payload: payload
})


