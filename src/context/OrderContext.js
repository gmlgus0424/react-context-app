
import { createContext, useMemo } from "react";
import { useState,useMemo } from "react";


const orderContext= createContext();


export function OrderContextProvider(){

  const [orderCounts,setOrderCounts]=useState({products: newMap() , options: newMap()});

  const value =useMemo(()=>{
    function updateItemCount(itemName,newItemCount, orderType){
      const newOrderCounts={...orderCounts};


      const orderCountMap= orderCounts[orderType];
      orderCountsMap.set(itemName,parseInt(newItemCount));

      setOrderCounts(newOrderCounts);
    }
    return [{...orderCounts}]
  },[orderCounts])
 return <OrderContext.Provider value ={value} {...props}/>
  
 
}