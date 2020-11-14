import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from '../src/Config/Router';
import {connect} from 'react-redux'
import firebase from '../src/Config/firebase';
class Olx extends React.Component{
  constructor(){
    super()
    this.state={
      firebaseDtat: []
    }
  }
  render(){
    
    return(
      
      <div>
        
      <Router/>
    
      </div>
    )
  }
}
const mapToStateProps=(state)=>({
 state
})
// const mapDispatchToProps=(dispatch)=>({
//   recvideData: ()=> dispatch(recvideData())
// })
  

export default connect(mapToStateProps,null) (Olx)