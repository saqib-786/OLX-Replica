import React from 'react'
import Header from '..//Components/Header';
import HeaderImage from '../Images/Header Image.png'
import { Cars, Mobiles, Houses, Bikes } from '../Components/Items';
import Footer from '../Components/Footer';
import Navebar from '../Components/Navbar';
import LandandPlots from './Land&Plots';
import MobilePhone from './MobilePhone';
import Tablets from './Tablets';
import Motorcycles from './Motorcycles';
import TV_Video_Audio from './TV-Video-Audio';
import { connect } from 'react-redux';
import firebase from 'firebase'
import pic from '../Images/CG 125.jpg';
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap';
import Car from './Cars';
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      firebaseData: ['name', 'cast'],
      array: [{Make: 'Nokia', Year: '2012'}]


    }
  }

  componentDidMount(){
    firebase.database().ref('/').child('adds').on('child_added',data=>{
    this.setState({
      firebaseData: data.val()

    })
  
    })
    
  }
  
  
  
  render() {
    console.log(this.state.firebaseData)
    return (
      <div>
        <Header />
        <Navebar />
        <div className="container-blur" className="blur" className="container-fluid">
          <div className="row">
            <div className="col">
              <img id="Header-image" src={HeaderImage} alt="Header Image" />
            </div>
          </div>
        </div>

        <div id="User-AD" className="container-fluid">
          <div className="row">
            <div className="col">
            <li className="User-Ad"><Cars/></li>
            <li className="User-Ad"><Mobiles/></li>
            <li className="User-Ad"><Houses/></li>
            <li className="User-Ad"><Bikes/></li>
            </div>
          </div>
        </div>




        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({

})
// const mapDispatchToProps=(dispatch)=>({
//   recvideData:()=> dispatch(recvideData())
// })


export default connect(mapStateToProps, null)(Home)