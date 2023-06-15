import axios from "axios";
import {useState} from "react";

const BASE_URL = "https://nominatim.openstreetmap.org/search"

export default function useAddressLookup(){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const doRequest = async (address) => {
        setLoading(true)
        try{
            const res = await axios.get(BASE_URL, { params: { q: address, format: 'json'} });
            console.log(res)
            setData(res.data)
            
        } catch (err) {
            setError(err)
            console.log(err)
        } finally{
            setLoading(false) 
        }  
    }

    return { data, loading, error, doRequest }

}
