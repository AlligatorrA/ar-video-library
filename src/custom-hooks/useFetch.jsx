import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState()
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoader(true)

        setTimeout(() => {
            const getData = async () => {

                try {
                    const res = await axios.get(url)
                    setLoader(false)
                    setData(res.data)
                }
                catch (error) {
                    setLoader(false)
                    setError(error);
                }

            }; getData()

        }, 100);
    }, [url])
    return {
        data, loader, error
    }
}
export { useFetch }