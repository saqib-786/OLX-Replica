import React from 'react';
import TV_1 from '..//Images/TV_1.jpg';
import TV_2 from '..//Images/TV_2.jpg';
import TV_3 from '..//Images/TV_3.jpg'


class TVadd_1 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={TV_1} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 50000</h5>
          <p className="card-text">Orient LED with full warnty</p>
          
        </div>
      </div>
            </div>
        )
    }
}

class TVadd_2 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={TV_2} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 60000</h5>
          <p className="card-text">Philips Smart LED Box Pack </p>
          
        </div>
      </div>
            </div>
        )
    }
}

class TVadd_3 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={TV_3} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 650000</h5>
          <p className="card-text">Samsung LED for Sell</p>
          
        </div>
      </div>
            </div>
        )
    }
}


export{
    TVadd_1,
    TVadd_2,
    TVadd_3
    
}