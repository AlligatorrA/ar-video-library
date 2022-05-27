import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { useFetch } from '../custom-hooks/useFetch'
import typeReducer from '../reducer-function/typeReducer'

const TypeContext = createContext()


const TypeProvider = ({ children }) => {

    const { data } = useFetch("/api/videos")
    const { data: type } = useFetch("/api/categories");
    const [typeState, typeDispatch] = useReducer(typeReducer, {
        videos: [],
        categories: [],
        typefilter: 'All',
        islikedCollection: false,
        watchLaterCollection: false,
        historyCollection: false,
        playlistCollection: [],
    })
    useEffect(() => {
        data?.videos &&
            typeDispatch({
                type: 'INITIAL_VIDEOS',
                payload: data?.videos
            })
    }, [data?.videos])

    useEffect(() => {
        type?.categories &&
            typeDispatch({
                type: 'TYPES',
                payload: type?.categories

            })
    }, [type?.categories])



    return (
        <TypeContext.Provider value={{ typeState, typeDispatch }}>{children}</TypeContext.Provider>
    )
}
const useType = () => useContext(TypeContext)

export { TypeProvider, useType }