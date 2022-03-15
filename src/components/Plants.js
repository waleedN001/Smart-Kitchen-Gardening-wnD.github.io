import React,{useState} from 'react';
import data from "./data";
import closeIcon from './img/close-icon.svg';
const Plants=()=>{
    const [filter, setFilter] = useState('');
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSerach = data.cardData.filter(itemF=>{
        console.log("hey fillter is call")
        return Object.keys(itemF).some(key=>
            itemF[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

    return(
        <>
                <section className="page-section bg-light" id="Plants">
                           
                    <h2 className="section-heading text-center ">Types of Plants</h2>
                    
                    <h3 className="section-subheading text-muted"></h3>
                    
                
                <form className="d-flex mb-5">
                    <input className="form-control text-center me-2"  type="text"
                                value={filter}
                                onChange={searchText.bind(this)} 
                                placeholder="Enter keyword to Search" aria-label="Search"/>
                      <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
         <div className='row'>
                {dataSerach.map((itemF, index)=>{
                    return(
                        <>
                        <div className=" col-md-6 col-lg-3 mx-0 mb-4">
                           <div className="plants-item overflow-hidden h-100 shadow" >
                                 <a className="plants-link" data-bs-toggle="modal" href="#plantsModal">
                                     <div className="plants-hover">
                                         <div className="plants-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                     </div>
                                     <img className="img-fluid" src={itemF.img}  />
                                 </a>
                                 <div className="plants-caption">
                                     <div className="plants-caption-heading">{itemF.title}</div>
                                     <div className="plants-caption-subheading text-justify">{itemF.desc}</div>
                                 </div>
                             </div>
                         </div>
                                        
<div className="plants-modal modal fade" id="plantsModal"  role="dialog" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src={closeIcon} alt="Close modal" /></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="modal-body">   
                        <h2 className="text-uppercase">{itemF.title}</h2>
                        <img className="img-fluid d-block mx-auto" src={itemF.img} alt="..." />
                        <p>{itemF.desc}</p>
                        <ul className="list-inline">
                            <li>
                                <strong>We get Vitamins:</strong>
                                {itemF.Vitamins}
                            </li>
                            <li>
                                <strong>Temprature:</strong>
                                {itemF.temp}
                            </li>
                            <li>
                                <strong>Best Soil:</strong>
                                {itemF.soil}
                            </li>
                        </ul>
                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                            <i className="fas fa-times me-1"></i>
                            Close This
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
export default Plants;