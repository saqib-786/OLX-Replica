import React from 'react';
import backarrow from '..//Images/backarrow.png'
import olxLogo from '../Images/Logo.png'



class Email_login extends React.Component{
    render(){
        return(
            <div>
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
                                        <input id="phoneNum_input" type="text" placeholder="Phone Number" size="50" />
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <button onClick={this.showNextBtn} id="next_btn" disabled="disabled">Next</button>
                                    <p style={{ fontSize: "12px", color: " #002F34", padding: "20px" }}>We won't reveal your phone number to anyone else nor use it<br /> to send you spam</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Email_login
