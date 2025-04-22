import React, { useState } from 'react'
import Mealcards from './Mealcards';

const Mainpage = () => {
    const [data , setData ] = useState();
    const [search , setSearch] = useState("");
    const [message , setMessage] = useState("");

    const handleInput = (e) =>{
        setSearch(e.target.value)
       

    }
    const myFun = async () =>{
        if (search == "") {
            setMessage("Please Enter Something !")

        }
        else {
            const get = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json()
        // console.log(jsonData.meals);
        setData(jsonData.meals);
        setMessage("")

        }

        
    }



    // console.log(data);
    

  return (
   <>
   <h1 className='head'>FOOD RECIPE APP</h1>
   <div className='container'>
            <div className='searchBar'>
                <input type='text' placeholder='Enter Your Fevorite Food' onChange={handleInput}/>
                <button onClick={myFun}>Search</button>
            </div>
            <h4 className='msg'>{message}</h4>
            <div>
            <Mealcards detail={data}/>
            {/* <h1 className='welcome'>WELCOME TO THE FOOD RECIPE APP !</h1>
            <h1 className='searchfood'>PLEASE SEARCH YOUR FEVORITE FOOD &#x1F355; &#x1F354; &#x1F60B;</h1> */}
            </div>

           
   </div>
   
   
   </>
  )
}

export default Mainpage
