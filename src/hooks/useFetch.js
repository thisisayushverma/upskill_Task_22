import { useEffect,useState } from "react"

const useFetch =  (url)=>{
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState({})
    const [error,setError] = useState(null)
    useEffect(()=>{
        const fetchData = async ()=>{
            setError(null)
            setData({})
            try {
                await fetch(url)
                .then(res=>res.json())
                .then(data=>setData(data))
                setLoading(false)
            } catch (error) {
                console.log(error.message);
                setError(error.message)
                setLoading(false)
            }
        }

        fetchData()
    },[url])
    // console.log(data);
    const response =  {data,loading,error};
    return response;
}

export default useFetch