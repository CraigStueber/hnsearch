import React from 'react';

import axios from 'axios';
import moment from 'moment';


const Search = () => {
    const [searchItem, setSearchItem] = React.useState('');
    const [results, setResults] = React.useState([]);
    const [currentIndex, setCurrentIndex] = React.useState();
    const [currentItem, setCurrentItem] = React.useState(null);
    const [searchHistory, setSearchHistory] = React.useState(
        JSON.parse(localStorage.getItem('searchHistory'))
    );

    
    React.useEffect(() => {
      
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }, [searchHistory])

    const onChange = event =>   setSearchItem(event.target.value);
                                       
                                    

    
    
    const handleSubmit = event => {
        event.preventDefault();
        setSearchHistory([...searchHistory, {
            id: searchHistory.length,
            value: searchItem
        }]);
        

        axios.get(`https://hn.algolia.com/api/v1/search?query=${searchItem}`)
            .then(res=> {
                const results = res.data.hits;
                setResults({results});
            })
            .catch((error) => {
                alert('Error connecting please check console.log for information. Or call Craig 804 519 3626');
                console.log('Error has happened.')
                if (error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request){
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error);
            });
    }

    const setActiveItem = (item, index) => {
    
        setCurrentItem(item);
        setCurrentIndex(index);
    }

    return(
            <>
            <div className="row list">
                <div className="mb-3 col-md-8">
                    <h1> Hacker News Search</h1>
                    <form className="input-group " onSubmit={handleSubmit}>
                        <input className="form-control" value={searchItem} type="text" onChange={onChange} />
                        <button className="btn btn-outline-secondary mx-2"type="submit">Search</button>
                    </form>
                </div>
                <div className="col-md-6">
                    
                        {results.results && results.results.map((item, index) => (
                                <p
                                    className={
                                        "searchItems " + (index === currentIndex ? "activeItem" : " ")
                                        } 
                                    onClick={() => setActiveItem(item, index)}
                                    key={item.objectID}
                                >
                                    {item.title}
                                </p>
                        ))}
                    
                </div>
                <div className="col-md-6 text-center">
                    {currentItem ? (
                        <div>
                            <h4>Article</h4>
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{" "}
                                {currentItem.title}
                            </div>
                            <div>
                                <label>
                                    <strong>Author:</strong>
                                </label>{" "}
                                {currentItem.author}
                            </div>  
                            <div>
                                <label>
                                    <strong>Date Published:</strong>
                                </label>{" "}
                                {moment(`${currentItem.created_at}`).format("MMMM Do YYYY")}
                            </div>
                            <div>
                                <label>
                                  <a href={currentItem.url} target="blank">  <strong>Click To Read Article</strong> </a>
                                </label>
                                <br/>
                               
                            </div>
                          
                        </div>

                    ) : (
                        <div>
                        <br />
                        <p>Please Click an Article</p>
                        </div>
                    )}
                </div>
            
        </div>
        </>
      
    );
};

export default Search;