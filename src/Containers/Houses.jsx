import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import  {Houseadd_1, Houseadd_2, Houseadd_3, Houseadd_4, Houseadd_5, Houseadd_6} from '..//Components/House_add';
import arrowBtn from '../Images/arrow.png';
import Footer2 from '../Components/Footr_2';
class Houses extends React.Component{
    ShowDiv=()=>{
        let HideDiv = document.getElementById('UsedItems');
        if(HideDiv.style.display=='none'){
            HideDiv.style.display='block'
        }else{
            HideDiv.style.display = 'none'
        }
    }
    ShowDiv_1=()=>{
        
        let new_Litsted_Div = document.getElementById('new-Listed');
        if(new_Litsted_Div.style.display=='none'){
            new_Litsted_Div.style.display ='block'
        }else new_Litsted_Div.style.display='none'
    }
    ShowDiv_2=()=>{
       let filterDivs1 = document.getElementById('filter_Divs_1');
       if(filterDivs1.style.display=='none'){
           filterDivs1.style.display = 'block'
       }else filterDivs1.style.display ='none'

    }
    ShowDiv_3=()=>{
        
        let filterDivs1 = document.getElementById('filter_Divs_2');
        if(filterDivs1.style.display=='none'){
            filterDivs1.style.display= 'block'
        }else filterDivs1.style.display='none'
 
     }
     ShowDiv_4=()=>{
        let filterDivs1 = document.getElementById('filter_Divs_3');
        if(filterDivs1.style.display=='none'){
            filterDivs1.style.display ='block'
        }else{
            filterDivs1.style.display='none'
        }
 
     }
     ShowDiv_5=()=>{
        let filterDivs1 = document.getElementById('filter_Divs_4');
        if(filterDivs1.style.display=='none'){
            filterDivs1.style.display='block'
        }else{
            filterDivs1.style.display ='none'
        }
 
     }
    render(){
        return(
            <div>
                 <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                        <Header/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <Navbar/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col"><h4>Houses</h4></div>
                        <div className="col"><p style={{display:"inline-block", fontWeight:"bold"}}>View</p> 
                        <button className="svg-logo"><svg  width="24px" height="24px"  viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M896 682.667l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 469.333l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 256l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768z"></path></svg></button>
                        
                        <button className="svg-logo"><svg  width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-2BsmJ" d="M426.662 554.667l42.667 42.667v298.667l-42.667 42.667h-298.667l-42.667-42.667v-298.667l42.667-42.667h298.667zM746.667 554.667c105.856 0 192 86.123 192 192s-86.144 192-192 192c-105.856 0-192-86.123-192-192s86.144-192 192-192zM384.017 640h-213.355v213.355h213.355v-213.355zM746.667 640c-58.816 0-106.667 47.851-106.667 106.667s47.851 106.667 106.667 106.667c58.816 0 106.667-47.851 106.667-106.667s-47.851-106.667-106.667-106.667zM426.662 85.342l42.667 42.667v298.645l-42.667 42.688h-298.667l-42.667-42.688v-298.645l42.667-42.667h298.667zM895.985 85.342l42.667 42.667v298.645l-42.667 42.688h-298.645l-42.688-42.688v-298.645l42.688-42.667h298.645zM384.017 170.675h-213.355v213.333h213.355v-213.333zM853.34 170.675h-213.333v213.333h213.333v-213.333z"></path></svg></button>
                        <button className="svg-logo"><svg  width="24px" height="24px" viewBox="0 0 1024 1024"
                       data-aut-id="icon" class="" fill-rule="evenodd">
                       <path class="rui-77aaa" d="M149.333 85.333h725.333l42.667 42.667v426.667l-42.667 42.667h-725.333l-42.667-42.667v-426.667l42.667-42.667zM192 512h640v-341.333h-640v341.333zM149.333 682.667h725.333l42.667 42.667v170.667l-42.667 42.667h-725.333l-42.667-42.667v-170.667l42.667-42.667zM192 853.333h640v-85.333h-640v85.333z"></path></svg></button>
                       <p style={{display:"inline-block", fontWeight:"bold"}}>SORT BY</p> <p style={{display:"inline-block", fontSize: "15px",color:"#002F34"}}>:Newly Listed</p> 
                       <img onClick={this.ShowDiv_1} id="Btn_1" style={{padding: "20px",cursor: "pointer"}} src={arrowBtn} width="50px" alt="Btn"/>
                       <div id="new-Listed">
                       <p>Hello Wrold!</p>
                       <p>Hello Wrold!</p>
                       <p>Hello Wrold!</p>
                       <p>Hello Wrold!</p>
                       <p>Hello Wrold!</p>

                       </div>
                        </div>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        
                        <div id="CT-Mobile">
                            <hr/>
                        <ul>
                                <li className= "User-Ad"><Houseadd_1/></li>
                                <li className= "User-Ad"><Houseadd_2/></li>
                            <li className= "User-Ad"><Houseadd_3/></li>
                            </ul>
                        </div>
                            
                        
                    </div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="Filters">
                                <p>Filter</p>
                                <hr/>
                                <p>CATEGORIES</p>  <img onClick={this.ShowDiv_2} id="Btn_2" className="Rotat-Arrow" style={{position: "relative",bottom:"45px", left: "300px"}} src={arrowBtn} width="20px" alt="Btn"/>
                                <div id="filter_Divs_1">
                                    <ul>
                                        <li className="filter_li">All Categories</li>
                                        <li className="filter_li">Mobile ( )</li>
                                        <li className="filter_li">Tablets ( )</li>
                                        <li className="filter_li">Accessories ( )</li>
                                    </ul>
                                </div>
                                <hr/>
                                <p>LOCATIONS</p> <img onClick={this.ShowDiv_3} id="Btn_3" className="Rotat-Arrow" style={{position: "relative",bottom:"45px", left: "300px"}} src={arrowBtn} width="20px" alt="Btn"/>
                                <div id="filter_Divs_2">
                                <ul>
                                        <li className="filter_li">Pakistan</li>
                                        <li className="filter_li">Sindh</li>
                                        <li className="filter_li">Hyderabad</li>
                                        <li className="filter_li">Karachi</li>
                                    </ul>
                                </div>
                                <hr/>
                                <p>MAKE</p> <img onClick={this.ShowDiv_4} id="Btn_4" className="Rotat-Arrow" style={{position: "relative",bottom:"45px", left: "300px"}} src={arrowBtn} width="20px" alt="Btn"/>
                                <div id="filter_Divs_3">
                                <ul>
                                        <li className="filter_li">Samsung</li>
                                        <li className="filter_li">Apple</li>
                                        <li className="filter_li">Huawei</li>
                                        <li className="filter_li">OPPO</li>
                                        <li className="filter_li">VIVO</li>
                                    </ul>
                                </div>
                                <hr/>
                                <p>PRICE</p> <img onClick={this.ShowDiv_5} id="Btn_5" className="Rotat-Arrow" style={{position: "relative",bottom:"45px", left: "300px"}} src={arrowBtn} width="20px" alt="Btn"/>
                                <div id="filter_Divs_4">
                                    <input className="filter_input" placeholder="Min" type= "text" size="5"/>
                                    <input className="filter_input" placeholder="Max" type= "text" size="5"/>
                                </div>
                                <hr/>
                                <p>CONDITION</p> <img onClick={this.ShowDiv}  id="Rotate_Arrow" className="Rotat-Arrow" style={{position: "relative",bottom:"45px", left: "300px"}} src={arrowBtn} width="20px" alt="Btn"/>

                                <div id="UsedItems">
                                <input type="checkbox" id="usedCheckbox" /> <p id="used" style={{display:"inline-block" ,fontSize:"15px",color:"#A3B4B5",fontWeight:"normal"}}>Used</p><br/>
                                <input type="checkbox" id="usedCheckbox" /> <p id="used" style={{display:"inline-block" ,fontSize:"15px",color:"#A3B4B5",fontWeight:"normal"}}>New</p>
                                </div>
                               
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div>
                            <Footer2/>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Houses