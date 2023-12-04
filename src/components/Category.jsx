import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { color } from "framer-motion";




function Category() {
  return (

    <List>
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Chinese"}>
            <GiNoodles/>
            <h4>Chinese</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
            <GiChopsticks/>
            <h4>Thai</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    
    
`;

const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius: 50%;
    margin:1rem;
    /* margin-right: 1rem;
    margin-left:1rem; */
    text-decoration: none;
    background: linear-gradient(35deg,#494949,#313131);
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right,#f27121,#e94057 );
        svg{
            color: white;
        }
        h4{
            color: white;
        }

    }


`
   

export default Category