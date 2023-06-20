import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Produccts from './Products';
import Options from './Options';
import EroorBanner from './EroorBanner';

const Type = ({orderType}) => {


  const [Items,setItems]=useState([]);
    useEffect(()=>{
      loadItems(orderType);
    },[orderType])


    const loadItems= async()=>{
     try{ 
      
     const response= await axios.get(`http://localhost:4000/${orderType}`)
     setItems(response.data);
    }catch(error){
      
    }
  }


  //렌더링
  const ItemComponent= orderType==="products"? Produccts : null;

  const optionItmes= items.map(item=>(
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}

    />
  ))

  if(error){
    return <ErrorBanner message="에러가 발생했습니다"/>
  }
  return (
    <div>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>   
      <p>총 가격 : </p> 
      <div 
      style={{display:'flex', flexDirection : orderType==="options"?"column":"row"}}
     >
      item
     </div>
   </div>
  )
}

export default Type