import React from 'react';
import { Link } from 'react-router-dom';
import arrowBtn from '..//Images/backarrow.png'
import logo from '..//Images/Logo.png'
import firebase from '..//Config/firebase.js'
import {connect} from 'react-redux';
import {sendData} from '../Config/store/action/index';



class Post_attribute extends React.Component{
    constructor(){
        super()
        this.state={
            files: " "
        }
    }
   


    goBack=()=>{
        this.props.history.push('/Post_add')
    }
    render(){
        return(
            <div>
                <div style={{backgroundColor: "whitesmoke"}} className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <img onClick={this.goBack} src={arrowBtn} style={{cursor: 'pointer'}}  alt ="arrow Button"/>
                            <img style={{padding: "20px", width: "100px"}} src ={logo} alt="OLX logo"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div  className="col">
                            <div>
                            <h4  className="post_add">POST YOUR ADD</h4>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div id="selected_catagory" className="container">
                    <div className="row">
                        <div className="col">
                            <h5 className="add_heading">SELECTED CATEGORY</h5>
                            <p><Link to='/Post_add'>Change</Link></p>
                        </div>
                    </div>
                </div>
                <div id="details" className="container">
                    <div className="row">
                        <div className="col">
                            <h5 className="add_heading">INCLUDE SOME DETAILS</h5>
                            <p className="add_titles">Make*</p>
                            <input id="make" className="post_add_input" type="text" size="50"/>
                            <br/>
                            <p className="add_titles">Year*</p>
                            <input id="year" className="post_add_input" type="text" size="50"/>
                            <p className="add_titles">Condition*</p>
                            <button id="new" className="condition_btn">New</button>
                            <button id ='used' className="condition_btn">Used</button>
                            <p className="add_titles">Add title*</p>
                            <input id='title' className="post_add_input" type="text" size="50"/>
                            <br/>
                            <br/>
                            <p className="add_titles">Decription*</p>
                            <textarea id="decription" rows="4" cols="53"></textarea>

                        </div>
                    </div>
                </div>
                <div id="set_price" className="container">
                    <div className="row">
                        <div className="col">
                            <h5 className="add_heading">SET A PRICE</h5>
                            <p className="add_titles">Price*</p>
                            <input id='price' className="post_add_input" type="text" placeholder="RS" size="50"/>

                        </div>
                    </div>
                </div>
                <div id="uplod_photos" className="container">
                    <div className="row">
                        <div className="col">
                            <h5 className="add_heading">UPLOAD UP TO 12 PHOTOS</h5>
                            <input onChange={(e)=>this.setState({files: e.target.files[0]})} id="upload_photo" className type="file" name=" Image"/>
                            
                        </div>
                    </div>
                </div>
                <div id="location_select" className="container">
                    <div className="row">
                        <div className="col">
                            <h5 className="add_heading">CONFIRM YOUR LOCATION</h5>
                            <button className="location_btn">List</button>
                            <button className="location_btn">CURRENT LOCATION</button>
                            <p className="add_titles">State*</p>
                            <input id='state' className="post_add_input" type="text" size="50"/>
                        </div>
                    </div>
                </div>
                <div id="review_details" className="container">
                    <div className="row">
                        <div className="col">
                            <h5 className="add_heading">REVIEW YOUR DETAILS</h5>

                            <p className="add_titles">Name</p>
                            <input id='name' className="post_add_input" type="text" placeholder="User Name" size="50"/>
                            <br/>
                            <p>Your Phone Number</p>
                            <p>Show my phone number on my ads</p> 
                            <br/>
                            <input id="input_checkbox" type="checkbox" /> 
                            <input id="input_checkbox1" type="checkbox" />
                            

                        </div>
                    </div>
                </div>
                <div id="post_add" className="container">
                    <div className="row">
                        <div className="col">
                            <button  onClick={()=>this.props.sendData()}  id="post_Button">Post Now</button>

                        </div>
                    </div>
                </div>
                <div id="Site_Map" className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="container">
                                <div className="row">
                                    <div className="col">Sitemap</div>
                                    <div className="col">Free Classifieds in Pakistan. © 2006-2020 OLX</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                

            </div>
        )
    }
}
const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({
    sendData: ()=> dispatch(sendData())
})
export default connect(mapStateToProps,mapDispatchToProps) (Post_attribute)