import React from 'react';
import Mobile_1 from '..//Images/Mobile_1.jpg';
import Mobile_2 from '..//Images/Mobile_2.jpg';
import Moible_3 from '../Images/Smartphones.jpg';
class Mobileadd_1 extends React.Component{
render(){
    return(
        <div>
            <div className="card" style={{width: '18rem'}}>
        <img src={Mobile_1} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 60000</h5>
          <p className="card-text">With Complete Accesseries</p>
          
        </div>
      </div>
        </div>
    )
}
}

class Mobileadd_2 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Mobile_2} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 65000</h5>
          <p className="card-text">With Complete Accesseries</p>
          
        </div>
      </div>
            </div>
        )
    }
}

class Mobileadd_3 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Moible_3} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 50000</h5>
          <p className="card-text">West Open Banglow for sell</p>
          
        </div>
      </div>
            </div>
        )
    }
}



export{
    Mobileadd_1,
    Mobileadd_2,
    Mobileadd_3,
    
}