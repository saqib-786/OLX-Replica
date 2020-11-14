import React from 'react';
import Plot_1 from '..//Images/Plot_1.jpg';
import Plot_2 from '..//Images/Plot_2.jpg';
import Plot_3 from '..//Images/Plot_3.jpg';


class Plotadd_1 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Plot_1} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 2500000</h5>
          <p className="card-text">1500 Square feet plot </p>
          
        </div>
      </div>
            </div>
        )
    }
}


class Plotadd_2 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Plot_2} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 1500000</h5>
          <p className="card-text">Plot for sell in Hyderabad</p>
          
        </div>
      </div>
            </div>
        )
    }
}


class Plotadd_3 extends React.Component{
    render(){
        return(
            <div>
                <div className="card" style={{width: '18rem'}}>
        <img src={Plot_3} className="card-img-top" alt="Car" />
        <div className="card-body">
          <h5 className="card-title">RS 30000</h5>
          <p className="card-text">Plot on installment are avaliable</p>
          
        </div>
      </div>
            </div>
        )
    }
}

export{
    Plotadd_1,
    Plotadd_2,
    Plotadd_3,
}