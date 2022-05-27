

const TypeFilterFunc = (videos, sortBy) => {
    if (sortBy !== 'All') {
        return videos.filter(video => video.type === sortBy)
    }
    return videos
}

export { TypeFilterFunc }