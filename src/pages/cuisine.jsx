import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
import { Link, useParams } from 'react-router-dom';


function Cuisine() {
  const [loading,setLoading] = useState(false);
  const [isError,setIsError] = useState(false);

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  
  const getCuisine = async (name)=>{
    setLoading(true);
    try{

      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
      const recipes = await data.json();
      setLoading(false);
      setIsError(false);
      setCuisine(recipes.results);
    } catch(error){
      setIsError(true);
    }
  }
  
  useEffect(()=>{
    if(params.type){

      getCuisine(params.type)
    }
    // console.log(params)
  },[params.type]);
  
  
  if(loading){
    return <div>Loading...</div>
  }

  if(isError){
    <div>An error occured. Please try again.</div>
  }


  return (
    <Grid>
      {cuisine.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
            <img src={item.image}/>
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
      grid-gap: 3rem;
      margin-top: 2rem
`
const Card = styled.div`
    img{
      width:100%;
      border-radius: 2rem
    }
    a{
      text-decoration:none;

    }
    h4{
      text-align: center;
      padding: 1rem;
    }

`


export default Cuisine;