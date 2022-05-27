import axios from "axios"

const Watchlater = async (token, video, typeDispatch) => {
    const res = await axios.post(`/api/user/watchlater`, { video }, { headers: { authorization: token } })
    res && typeDispatch({ type: 'ADD_TO_WATCHLATER', payload: res.data.watchlater })
}

const removeFromwatchlater = async (token, id, typeDispatch) => {
    try {
        const res = await axios.delete(`/api/user/watchlater/${id}`, {
            headers: {
                authorization: token,
            },
        });
        res && typeDispatch({
            type: 'ADD_TO_WATCHLATER',
            payload: res.data.watchlater,
        })
    } catch (error) {
        console.log(error);
    }
}
export { Watchlater, removeFromwatchlater }