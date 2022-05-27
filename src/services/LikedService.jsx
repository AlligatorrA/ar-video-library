import axios from "axios";

const LikedService = async (token, video, typeDispatch) => {
    try {
        const res = await axios.post(`/api/user/likes`, { video }, { headers: { authorization: token } })
        res && typeDispatch({
            type: "ADD_TO_LIKED",
            payload: res.data.likes,
        })
    } catch (error) {
        console.log(error);
    }
}

const removeFromLike = async (token, id, typeDispatch) => {
    try {
        const res = await axios.delete(`/api/user/likes/${id}`, {
            headers: {
                authorization: token,
            },
        });
        res && typeDispatch({
            type: 'ADD_TO_LIKED',
            payload: res.data.likes,
        })
    } catch (error) {
        console.log(error);
    }
}
export { LikedService, removeFromLike }

