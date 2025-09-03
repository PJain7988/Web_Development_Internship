import React,{useState,useEffect} from 'react'

const useApiData = () =>{
    const [data,setData] = useState([]); // data is variable and setData is function to change state [] is initial value
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        const getData = async ()=>{};
        getData;
    },[url]); // url is dependency array
    return {data,error,loading}; // data to be returned
}

export default useApiData;