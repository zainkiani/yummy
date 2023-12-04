import React, { useState , useEffect} from 'react';
import { Link, Params, useParams } from 'react-router-dom';
import styled from 'styled-components';


function Searched() {
    const [searchedRecipes , setSearchedRecipes] = useState([]);
    const [loading,setLoading] = useState(false);
    const [isError,setIsError] = useState(false);
    let params = useParams();

    const getSearched = async (name)=>{
        setLoading(true);
        try{
    
          const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
          const recipes = await data.json();
          setLoading(false);
          setIsError(false);
          setSearchedRecipes(recipes.results);
        } catch(error){
          setIsError(true);
        }
      }

      useEffect(()=>{
        if(params.search){
    
          getSearched(params.search)
        }
        // console.log(params)
      },[params.search]);


  return (
    <Grid>
    {searchedRecipes.map((item)=>{
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

export default Searched;