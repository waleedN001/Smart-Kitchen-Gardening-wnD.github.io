import React from 'react';

export default function Footer() {
  return (
    <> 
    <footer className="footer py-4 footer-light " style={{backgroundColor:"#e3f2fd"}}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              <p className='text-justify'>Supervision by Sr. MIAN MUHAMMAD MUNIR-UD-DIN head of computer science department.</p>
			</div>
            <div className="col-lg-4 my-3 my-lg-0">
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="col-lg-4 text-lg-end">
                  <p className='text-justify'>GOVERNMENT ISLAMIA GRADUATE COLLEGE, LINES LAHORE. ©2022 group #06</p>
            </div>
        </div>
    </div>
</footer>
     
    </>
  );
}
