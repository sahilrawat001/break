 import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/ui/Header';
import CharacterGrid from './Components/characters/CharacterGrid';
import Search from './Components/ui/Search';

const App=()=> {
const [item,setItem]=useState([]);
const [IsLoading,setIsLoading]=useState([true]);
const [query,setQuery]=useState( '');

useEffect(  ()=>{
  const fetchItems = async ()=>{
    const result = await   axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

        console.log(result.data);
 setItem(result.data)
 setIsLoading(false)
      } 
  fetchItems()
}  ,[query] )
  
 



  return (
    <div className="container">                       
 
     <Header/>
     <Search getQuery={ (q)=> setQuery(q) } />
    <CharacterGrid IsLoading={IsLoading} items={item}  />
    </div>
  );
}

export default App;
