

const typeReducer = (pre, cur) => {
    switch (cur.type) {
        case 'SORT_BY':
            return {
                ...pre, typefilter: cur.payload
            }
        case 'INITIAL_VIDEOS':
            return {
                ...pre, videos: cur.payload
            }
        case 'TYPES':
            return {
                ...pre, categories: cur.payload
            }
        case 'ADD_TO_LIKED':
            return {
                ...pre,
                videos: pre.videos.map((video) => ({
                    ...video,
                    islikedCollection: cur.payload.some((item) => item._id === video._id),
                })),
            };
        case 'ADD_TO_WATCHLATER':
            return {
                ...pre,
                videos: pre.videos.map((video) => ({
                    ...video,
                    watchLaterCollection: cur.payload.some((item) => item._id === video._id),
                })),
            };
        case 'ADD_TO_HISTORYCOLLECTION':
            return {
                ...pre,
                videos: pre.videos.map((video) => ({
                    ...video,
                    historyCollection: cur.payload.some((item) => item._id === video._id),
                })),
            };
        case 'ADD_TO_PLAYLIST':
            return {
                ...pre,
                playlistCollection: cur.payload,
            };
        case 'ADD_TO_PLAYLIST_VIDEO':
            return {
                ...pre,
                playlistCollection: pre.playlistCollection.map((list) =>
                    list._id === cur.payload._id ? cur.payload : list
                ),
            };
        default:
            return pre;
    }
}

export default typeReducer