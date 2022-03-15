import React,{useState} from 'react';
import data from "./data";
const Search=()=>{
    const [filter, setFilter] = useState('');
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSerach = data.cardData.filter(itemF=>{
        console.log("hey fillter is call")
        return Object.keys(itemF).some(key=>itemF[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })

    return(
        <>
        <section className="py-4 container">
            <div className="row justify-content-center">
                <form className="d-flex mb-3">
                  <input className="form-control text-center me-2"  type="text"
                            value={filter}
                            onChange={searchText.bind(this)} 
                            placeholder="Enter keyword to Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

                {dataSerach.map((itemF, index)=>{
                    return(
                        <>
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" id="Search">
                          <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src={itemF.img} className="card-img-top img-fluid" alt="Girl in a jacket" width="500" height="600"/>
                            <div className="card-body">
                            <h5 className="card-title">{itemF.title}</h5>
                            <p className="card-text text-justify">{itemF.desc}</p>
                           </div>
                        </div>
                        </div>
                        </>
                    )
                })}
                
            </div>
        </section>
         
     </>
    )
}
export default Search;