 import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/ui/Header';
import CharacterGrid from './Components/characters/CharacterGrid';

const App=()=> {
const [item,setItem]=useState([]);
const [IsLoading,setIsLoading]=useState([true]);

useEffect(  ()=>{
  const fetchItems = async ()=>{
    const result = await   axios(`https://www.breakingbadapi.com/api/characters`)

        console.log(result.data);
 setItem(result.data)
 setIsLoading(false)
      } 
  fetchItems()
}  ,[] )
  
 



  return (
    <div className="container">                       
 
     <Header/>
    <CharacterGrid IsLoading={IsLoading} items={item}  />
    </div>
  );
}

export default App;
