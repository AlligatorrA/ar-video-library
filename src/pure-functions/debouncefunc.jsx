const debounceFunc = (func, delay) => {
    let timer
    return function (...args) {
        clearInterval(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}
export { debounceFunc }