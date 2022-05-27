
const Share = (title, _id,) => {
    const shareData = {
        title: title,
        url: `https://www.youtube.com/embed/${_id}`,
    }

    try {
        navigator.share(shareData)
    } catch (error) {
        console.log(error);
    }
}

export { Share }