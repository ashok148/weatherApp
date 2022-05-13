import React from 'react';
import './App.css';
import {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { REQUEST_API_DATA } from './redux/actionType';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

function App() {
  const [ search,setSearch ] = useState("");
  const state = useSelector(state=>state.data);
  const [ value,setValue ] = useState("")
  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:REQUEST_API_DATA, payload:value});
  },[value]);

  const updateData = ()=>{
    setValue(search)
    setSearch("");
  }

  return (
    <div className={!state.weather?"common":state?.main?.temp_max-273 > 30 ? "App_hot" : "App_cold"}>
      <h1 style={{padding:"10px",fontSize:"70px"}}>Weather App</h1>
      <form>
        <TextField 
          id="outlined-basic" 
          variant="outlined" 
          label="City" 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <Button  
          variant="outlined" 
          onClick={updateData} 
          color='primary' 
          style={{height:"56px",color:"white",backgroundColor:"",marginLeft:"7px"}}
          >Search</Button>
      </form>
      {state.weather &&
        <div className='data'>
          <h1 style={{color:"Highlight",fontSize:"80px"}}>{state?.name}</h1>
          <h3 style={{color:"blue",fontSize:"50px"}}>{state?.weather[0]?.main}</h3>
          <div className='temp'>
            <h3 style={{color:"aliceblue",fontSize:"40px"}}>{(state?.main?.temp_min-273)?.toFixed(2)}°C</h3>
            <h1>----</h1>
            <h3 style={{color:"HighlightText",fontSize:"40px"}}>{(state?.main?.temp_max-273)?.toFixed(2)}°C</h3>
          </div>
        </div>}
    </div>
  );
}

export default App;