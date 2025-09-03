import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useUser } from '../store/useUser'; //step-2
const useApi = (url) =>{
    const [data,setdata] = useState([]);
    const [error,seterror] = useState("");
    const [loading,setloading] = useState(true);
    const {setUser} = useUser(); //step-3

    useEffect(()=>{
        const getdata = async()=>{
            try{
            //    const res = await fetch(url);
            // now we ue axios so we don't need to convert json manually
            const res = await axios.get(url);
            //    const response = await res.json();
               setdata(res.data);
               setUser(res.data); //step-4
            }catch(error){
               console.log(error.message);
               seterror(error.message);
            }finally{
                setloading(false);
            }
        }
        getdata();
    },[url]);
    return {data,error,loading}
};

export default useApi;