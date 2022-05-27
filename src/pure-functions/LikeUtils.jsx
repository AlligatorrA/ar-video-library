import { LikedService, removeFromLike } from "../services/LikedService";

export const likeHandler = (token, videodetail, typeDispatch, islikedCollection) => {
    const { _id } = videodetail;
    islikedCollection
        ? removeFromLike(token, _id, typeDispatch)
        : LikedService(token, videodetail, typeDispatch);
};