import axios from 'axios';

const createNewPlaylist = (token, typeDispatch, playlistName, setInput) => {
    try {
        (async () => {
            const {
                data: { playlists },
            } = await axios.post(
                "/api/user/playlists",
                {
                    playlist: {
                        title: playlistName,
                        description: "",
                    },
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            setInput(false);
            playlists &&
                typeDispatch({
                    type: 'ADD_TO_PLAYLIST',
                    payload: playlists,
                });
        })();
    } catch (error) {
        console.log("Error in add to playlist handler", error);
    }
};

export const removePlaylist = (token, id, typeDispatch) => {
    try {
        (async () => {
            const {
                data: { playlists },
            } = await axios.delete(`/api/user/playlists/${id}`, {
                headers: {
                    authorization: token,
                },
            });
            playlists &&
                typeDispatch({
                    type: 'ADD_TO_PLAYLIST',
                    payload: playlists,
                });
        })();
    } catch (error) {
        console.log("Error in remove from playlists handler", error);
    }
};

export const addVideoToPlaylist = (token,
    typeDispatch,
    video,
    id) => {

    try {
        (async () => {
            const {
                data: { playlist },
            } = await axios.post(
                `/api/user/playlists/${id}`,
                {
                    video,
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            playlist &&
                typeDispatch({
                    type: 'ADD_TO_PLAYLIST_VIDEO',
                    payload: playlist,
                });
        })();
    } catch (error) {
        console.log("Error in add video to playlist handler", error);
    }
};

export const removeVideoFromPlaylist = (token,
    id,
    videoId,
    typeDispatch) => {
    try {
        (async () => {
            const {
                data: { playlist },
            } = await axios.delete(`/api/user/playlists/${id}/${videoId}`, {
                headers: {
                    authorization: token,
                },
            });
            playlist &&
                typeDispatch({
                    type: 'ADD_TO_PLAYLIST_VIDEO',
                    payload: playlist,
                });
        })();
    } catch (error) {
        console.log("Error in remove video to playlist handler", error);
    }
};

export { createNewPlaylist }