import axios from "axios"

const HistoryServices = async (token, video, typeDispatch) => {
    try {
        const res = await axios.post(`/api/user/history`, { video }, {
            headers: { authorization: token }
        })
        res && typeDispatch({
            type: 'ADD_TO_HISTORYCOLLECTION',
            payload: res.data.history
        })

    } catch (error) {
        console.log(error);
    }

}

const removeFromHistory = async (token, id, typeDispatch) => {
    try {
        const res = await axios.delete(`/api/user/history/${id}`, {
            headers: {
                authorization: token,
            },
        })
        res && typeDispatch({
            type: 'ADD_TO_HISTORYCOLLECTION',
            payload: res.data.history
        })

    } catch (error) {
        console.log(error);
    }
}
const clearAllHistory = async (token, typeDispatch) => {
    try {
        const res = await axios.delete(`/api/user/history/all`, {
            headers: {
                authorization: token,
            },
        })

        res && typeDispatch({
            type: 'ADD_TO_HISTORYCOLLECTION',
            payload: res.data.history
        })

    } catch (error) {
        console.log(error);

    }
}

export { HistoryServices, removeFromHistory, clearAllHistory }