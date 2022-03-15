import React from 'react';
import loamSoil from './img/soil/loamSoil.jpg';
import claySoil from './img/soil/claySoil.jpg';
import sandySoil from './img/soil/sandySoil.jpg';
import chalkSoil from './img/soil/chalkSoil.jpg';

export default function Tool(prop) {
    
  const isBackgroundDark = true;
  return (
    <div>
      <section className="page-section" id="Soil">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Soil Types</h2>
                </div>
                <ul className="timeline">
                    <li>
                    <div className="timeline-image" style={{backgroundColor: "black"}}>
                            <h4>
                                Loam
                                <br />
                                Soil for
                                <br />
                                Plants
                            </h4>
                     </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">loam soil</h4>
                            </div>
                            <div className="timeline-body"><p className="text-justify text-muted">The ideal blend of soil for plant growth is called loam. Often referred to as topsoil or black dirt by landscape companies, loam is a mixture of sand, clay, and silt. The estimated mixture is 40% sand – 40% silt – 20% clay</p></div>
                        </div>                                        
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image" style={{backgroundColor: "black"}}>
                            <h4>
                                Sandy
                                <br />
                                Soil for
                                <br />
                                Plants
                            </h4>
                            </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Sandy soils</h4>
                            </div>
                            <div className="timeline-body"><p className="text-justify text-muted"> Sandy soils are one of the poorest types of soil for growing plants because it has very low nutrients and poor water holding capacity, which makes it hard for the plant’s roots to absorb water.</p></div>
                        </div>
                    </li>
                    <li>
                         <div className="timeline-image" style={{backgroundColor: "black"}}>
                            <h4>
                                Clay
                                <br />
                                Soil for
                                <br />
                                Plants
                            </h4>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Clay soils</h4>
                            </div>
                            <div className="timeline-body"><p className="text-justify text-muted">Clay soils are not always bad. They hold more water than sandy soils and are often high in nutrients plants need. But clay soils can become so waterlogged that they deprive plant roots of oxygen, or so dry that they become too hard to dig in.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                         <div className="timeline-image" style={{backgroundColor: "black"}}> 
                            <h4>
                                Chalky
                                <br />
                                Soil for
                                <br />
                                Plants
                            </h4>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">PeatChalky</h4>
                            </div>
                            <div className="timeline-body"><p className="text-justify text-muted">Chalky soils are alkaline and free-draining, and the depth of soil over chalk varies considerably. The key to gardening in these often drought-prone and nutrient poor soils is to select from the wide range of colourful plants that thrive in dry summers, need sharp drainage and moderate to low fertility.</p></div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  );
}
