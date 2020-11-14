import React from 'react'
import olxLogo from '../Images/Logo.png'
import searchIcon from '../Images/Search.ico'
import arrowBtn from '../Images/arrow.png'
import location from '../Images/location.png'
import marker from '../Images/marker.png';
import guitar from '../Images/guitar.png'
import heart from '../Images/heart.png'
import girl from '../Images/girl.png'
import { Link } from "react-router-dom";
import backarrow from '..//Images/backarrow.png'
import {connect} from 'react-redux';
import facebookLogin from '../Config/store/action/index'
import firebase from 'firebase';
import MobilePhone from '../Containers/MobilePhone'
import LandandPlots from '../Containers/Land&Plots'
import { Cars } from './Items'
class Header extends React.Component {
    constructor() {
        super()
        this.state = {
        disabled: true,
        pages: [LandandPlots, MobilePhone,Cars],
        userLocation: ' '
    
        }
    }
    handelChange=(input_value)=>{
        if(input_value >= 10){
            this.setState({
                disabled: false
            });
        }else{
            this.setState({
                disabled: true
            });
        }

    }
    
    GoEmail = () => {
        let emailoverlay = document.getElementById('continue_email');
        if (emailoverlay.style.display == 'none') {
            emailoverlay.style.display = 'block'
        } else {
            emailoverlay.style.display = 'none'
        }
    }
    goPhone=()=>{
        let moibileoverlay = document.getElementById('continue_phone');
        if(moibileoverlay.style.display=='none'){
            moibileoverlay.style.display ='block'
        }else{
            moibileoverlay.style.display='none'
        }
    }


    login_email = () => {
        this.props.history.push('/')

    }

    shown = () => {
        let Box_1 = document.getElementById('header-overlay');
        if (Box_1.style.display == 'none') {
            Box_1.style.display = 'block'
        } else {
            Box_1.style.display = 'none'
        }

    }

    login = () => {
        let BoxShow = document.getElementById('login-overlay');
        if (BoxShow.style.display == "none") {
            BoxShow.style.display = 'block'
        } else {
            BoxShow.style.display = 'none'
        }
    }
    close = () => {
        let closeDiv = document.getElementById('login-overlay');
        if (closeDiv.style.display == 'block') {
            closeDiv.style.display = 'none'
        } else {
            closeDiv.style.display = 'block'
        }
    }
    sendData=()=>{
        let phoneNum = document.getElementById('phoneNum_input').value
        console.log(phoneNum)
        // firebase.database().ref("User Mobile Number").push(phoneNum)
    } 

    searchPage=(userQuery)=>{
    if( userQuery == this.state.pages[0]){
        console.log(userQuery)
    }
    }




    render() {

        return (
            <div>
                <div id="Header-Container" className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div id="login-overlay">

                                <div id="login-text">
                                    <button id="Close_Button" onClick={this.close}> X </button>



                                    <div>
                                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                                                <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                                                <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={guitar} className="d-block w-20" alt="Guitar" />
                                                    <div className="carousel-caption d-none d-md-block">

                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={heart} className="d-block w-20" alt="Heart" />
                                                    <div className="carousel-caption d-none d-md-block">

                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={girl} className="d-block w-20" alt="Girl" />
                                                    <div className="carousel-caption d-none d-md-block">

                                                    </div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div id="continue_email">
                                                    <div id="continue_email_text">
                                                        <button id="back_arrow"><img src={backarrow} alt="backarrow" /> </button>
                                                        <button onClick={this.close} id="closeBtn" type="button" className="close" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                        <img style={{ width: "90px", height: "80px", paddingTop: "40px" }} src={olxLogo} alt="OLX logo" />
                                                        <br />
                                                        <br />
                                                        <h5 style={{ fontWeight: "bold", color: " #002F34", padding: "20px" }}>Enter your Email </h5>
                                                        <div id="phoneNumInput">
                                                            <input id="phoneNum_input" type="text" placeholder="Email" size="50" />
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <button onChange={this.emailChage} id="next_btn" disabled="disabled">Next</button>
                                                        <p style={{ fontSize: "12px", color: " #002F34", padding: "20px" }}>We won't reveal your email to anyone else nor use it to send <br /> you spam</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                    <div className="row">
                        <div className="col">
                        <div id="continue_phone">
                                <div id="continue_phone_text">
                                    <button id="back_arrow"><img src={backarrow} alt="backarrow" /> </button>
                                    <button onClick={this.close} id="closeBtn" type="button" className="close" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <img style={{ width: "90px", height: "80px", paddingTop: "40px" }} src={olxLogo} alt="OLX logo" />
                                    <br />
                                    <br />
                                    <h5 style={{ fontWeight: "bold", color: " #002F34", padding: "20px" }}>Enter your phone </h5>
                                    <div id="phoneNumInput">
                                        <input onChange={(e)=>this.handelChange(e.target.value.length)} id="phoneNum_input" type="text" placeholder="Phone Number" size="50" />
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <button onClick={this.sendData} disabled={this.state.disabled} id="next_btn" >Next</button>
                                    <p style={{ fontSize: "12px", color: " #002F34", padding: "20px" }}>We won't reveal your phone number to anyone else nor use it<br /> to send you spam</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                    

                                    <div>
                                        <button onClick={this.goPhone} className="overlay-Btn">Continue With Phone</button>
                                    </div>
                                    <div>
                                        <button onClick={this.props.facebookLogin} className="overlay-Btn">Continue With Facebook</button>
                                    </div>
                                    <div>
                                        <button className="overlay-Btn">Continue With Gmail</button>
                                    </div>
                                    <div>
                                        <button onClick={this.GoEmail} className="overlay-Btn">Continue With Email</button>
                                    </div>

                                    <div>
                                        <p style={{ color: " #002F34", fontSize: "13px" }}>We won't share your personal details with anyone</p>
                                        <p className="privacy">If you continue, you are accepting <br /> OLX Terms and Conditions and Privacy Policy</p>
                                    </div>

                                </div>



                            </div>
                            <div id="header-overlay">
                                <div id="header-overlay-text">
                                    <img style={{ position: "relative", top: "27px", right: "10px" }} src={location} width="20px" alt="location-Icon" />
                                    <p style={{ display: "inline-block", fontSize: "15px", fontWeight: "bold", margin: "10px", color: "white", position: "relative", top: "10px", right: "10px" }}>Use Current Location</p>
                                    <p style={{ color: "white", lineHeight: "18px" }}>location blocked check browser/phone settings</p>
                                    < hr style={{ color: 'white' }} />

                                    <div>
                                        <td>
                                            <p>Recent Locations</p>
                                            <div id="location-li">
                                                

                                                <button onChange={(e)=>this.setState({userLocation: e.target.value})} className="location-li"><img src={marker} alt="location" /> Pakistan</button>
                                                <button className="location-li"> <img src={marker} alt="location" />Sindh</button>
                                                <button className="location-li"> <img src={marker} alt="location" />Hyderabad</button>
                                                <button className="location-li"> <img src={marker} alt="location" />Karachi</button>
                                                <button className="location-li"> <img src={marker} alt="location" />Islamabad</button>


                                            </div>


                                        </td>



                                    </div>


                                </div>
                            </div>
                            <Link to='/'><img id="Olx-logo" src={olxLogo} alt="Olx Logo" /></Link>
                            <input onClick={this.shown} id="headerInput" placeholder={this.state.userLocation} />
                            <img onClick={this.shown} id="arrow-Btn" src={arrowBtn} width="20px" alt="Arrow Btn" />

                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <input onChange={(e)=>this.searchPage(e.target.value)} id="search" type="text" className="form-control" placeholder="Find Car, Mobile Phone and more....."  aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button onClick={this.searchPage} className="btn btn-outline-secondary" type="button" id="button-addon2"><img width="20px" height="20px" src={searchIcon} alt="serch icon" /></button>
                                </div>

                                <button id="SellBtn" className=" SellBtn"><Link to="/Post_add"> + SELL</Link></button>
                                <div><h6 onClick={this.login} id="Header_login">login</h6></div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=()=>{

}

export default connect(mapStateToProps,null) (Header)