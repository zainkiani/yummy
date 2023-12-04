import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Recipe() {

  let params = useParams();
  const [details , setDetails] = useState({});
  const [activeTab , setActiveTab] = useState("summary")

  const fetchDetails = async ()=>{
    const data =await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(()=>{
    fetchDetails();
  },[params.name]);
  

  return (
    
    <Wrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
        <p>And more stuff</p>
      </div>
      <Info>
      <Button className={activeTab === "summary" ? "active" : ""} 
        onClick={()=>{setActiveTab("summary")}}>Summary</Button>
        <Button className={activeTab === "instructions" ? "active" : ""} 
        onClick={()=>{setActiveTab("instructions")}}>Instructions</Button>
        <Button className={activeTab === "ingredients" ? "active" : ""} 
        onClick={()=>{setActiveTab("ingredients")}}>Ingredients</Button>
        
        <div>
        <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
        <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
        <h3 dangerouslySetInnerHTML={{__html:details.ingredients}}></h3>
        </div>
        
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 5rem;
  margin-bottom:5rem;
  display: flex;
  .active{
    background:linear-gradient(35deg, #494949,#313131);
    color: white;
  }
  
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size:1.2rem;
    line-height:2rem;
  }
  ul{
    margin-top:2rem;
  }
  h3{
    font-size: 1.2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`
const Info = styled.div`
  margin-left: 10rem;
`


export default Recipe;