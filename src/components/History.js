import React from 'react';

const History = () =>{
  

  var searchHistory = JSON.parse(localStorage.getItem('searchHistory'))
  if (!searchHistory.length){
    searchHistory[0] = { 
      id: 0,
      value: "You have not searched anything."}
  }else {

  }
    return(
        <div> 
        <h1>Here is your search History </h1>
          {searchHistory && searchHistory.map((item) =>(
              <p key={item.id}>
                {item.value}
              </p>
          )
           )}
        </div>
    )
};

export default History;