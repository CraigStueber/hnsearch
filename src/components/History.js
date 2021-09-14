import React from 'react';
import Logo from '../assets/RTSLogo.jpeg';


function clearLocal(){
  window.localStorage.clear('searchHistory');

};

const History = () =>{
  const [searchHistory, setSearchHistory] = React.useState(
    JSON.parse(localStorage.getItem('searchHistory')) || []
  );

  
    

    if (!searchHistory.length){
      searchHistory[0]={
        id: 1,
        value: "You have not searched for anything yet"
      }
    } else{

    }
 

 
    return(
      <div>
        <div className="row"> 
            <h1>Here is your search history </h1>
            <div className="col-md-8">
              {searchHistory && searchHistory.map((item) =>(
                    <p key={item.id} className="searchItems ">
                      {item.value}
                    </p>
                  )
                )}
            </div>
              <div class="col-md-4 d-md-block d-none">
                  <img src={Logo} alt="R T S Labs Logo with white background"  />
              </div>
        </div>
        <button 
            className="btn btnRed" 
            onClick={() => {  
              window.localStorage.clear('searchHistory'); 
              setSearchHistory([]);
            }}>
            Delete
        </button>
      </div>
    )
};

export default History;
