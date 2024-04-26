"use client"
import CatCard from "@/components/CatCard";
import axios from "axios";
import { parsedEnv } from "../../parseEnv";
import { useEffect, useState } from "react";


export default function Home() {

  const [cats, setCats]= useState([]);
useEffect(()=>{
  const fetchData =async ()=>{
    const response = await axios.get(
      process.env['NEXT_PUBLIC_API_URL']?? '',

   {
    headers:{
      "x-api-key":process.env['NEXT_PUBLIC_API_KEY'],

    }
  }
  );
  setCats(response.data)
  console.log(response.data)
};
fetchData();
}, []);
  return (
    <main>
    <h1>Listado de gatos</h1>
    <div>
      {
        cats.map((cat)=>(
          <CatCard key={cat.id} id={cat.id}  src={cat.url}/>
        ))
        
      }
   
    </div>
  </main>
 );

}
