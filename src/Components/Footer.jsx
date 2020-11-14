import React from "react";
import Phone_app from '..//Images/Phone-app.jpg'
import twitter from '../Images/Twitter.png'
import youtube from '../Images/Youtube.png'
import instagram from '../Images/Instagram.png'
import facebook from '../Images/Facebook.png'
import AppStore from '../Images/App Store.png'
import PlayStore from '../Images/playstore.png'
class Footer extends React.Component{
    render(){
        return(
            <div>
                <div style={{backgroundColor: "whitesmoke"}}  className="container-fluid">
                    <div className="row">
                        <div className="cols">
                            <div>
                                <img className="phone-app" src={Phone_app} alt="Phone app"/>
                                <h1 className="apptext" >TRY THE OLX APP</h1>
                                <span className="app-decription">Buy, sell and find just about anything using<br/> the app on your mobile.</span> 
                                <span id="get-app">GET YOUR APP TODAY</span>
                                <img id="appStore" src={AppStore} width="120px" height="50px" alt="App Store"/>
                                <img id="playStore" src={PlayStore} width="120px" height="50px" alt="Play Store"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "#EBEEEF"}} className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <table>
                                <tr>
                                    <td className="footer-td">POPULAR CATEGORIES</td>
                                    <div className="Categpries">
                                    <div className="footer-hover"><li>Cars</li></div>
                                    <div className="footer-hover"><li>Flats for rent</li></div>
                                    <div className="footer-hover"><li>Jobs</li></div>
                                    <div className="footer-hover"><li>Mobile Phones</li></div>
                                    </div>
                                    <td className="footer-td">TRENDING SEARCHES</td>
                                    <div className="treding"> 
                                    <div className="footer-hover"><li>Bikes</li></div>
                                    <div className="footer-hover"><li>Watches</li></div>
                                    <div className="footer-hover"><li>Books</li></div>
                                    <div className="footer-hover"><li>Dogs</li></div>
                                     </div>
                                    <td className="footer-td">ABOUT US</td>
                                    <div className="about">
                                    <div className="footer-hover"><li>About OLX Group</li></div>
                                    <div className="footer-hover"><li>OLX Blog</li></div>
                                    <div className="footer-hover"><li>Contact Us</li></div>
                                    <div className="footer-hover"><li>OLX for Businesses</li></div>

                                    </div>
                                    <td className="footer-td">OLX</td>
                                    <div className="olx">
                                    <div className="footer-hover"><li>Help</li></div>
                                    <div className="footer-hover"><li>OLX Blog</li></div>
                                    <div className="footer-hover"><li>Contact Us</li></div>
                                    </div>
                                    <td className="footer-td">FOLLOW US</td>
                                    <div className="follow">
                                        <img src={facebook} alt="facebook"/>
                                        <img src={twitter} alt="twitter"/>
                                        <img src={youtube} alt="youtube"/>
                                        <img src={instagram} alt="instagram"/>
                                        <div id="follow_store">
                                        <img src={AppStore} width="100px" alt="App Store"/>
                                        <img src={PlayStore} width="100px" alt="Play Store"/>
                                        </div>

                                    </div>
                                </tr>
                            </table>

                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "#002F34"}} className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <p style={{color: "white",fontWeight: "bold",fontSize: "12px", padding: "10px",display:"inline-block"}}>Other Countries</p>
                                        <p style={{color: "white", display: "inline-block",fontSize: "10px"}}> India - South Africa - Indonesia</p>
                                    </div>
                                    <div className="col"></div>
                                    <div className="col">
                                        <p style={{color: "white",fontWeight: "bold",fontSize: "12px", padding: "10px",display:"inline-block"}}>Free Classifieds in Pakistan</p>
                                        <p style={{color: "white", display: "inline-block",fontSize: "10px"}}>© 2006-2020 OLX</p>
                                        
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer