import axios from "axios";
import { useEffect, useState } from "react";


export const fetchData=()=>{
    const [data,setData]=useState(null);

    useEffect(()=>{
        axios
        .get("https://fakestoreapi.com/products")
        .then((response)=>{
            setData(response.data)
        })
    },[]);

    return data;
}
