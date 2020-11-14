import React from 'react';
import arrowBtn from '..//Images/backarrow.png'
import logo from '..//Images/Logo.png'
import './style.css';
import right_arrow from '..//Images/right_arrow.png';
import {Link} from "react-router-dom";

class Post_add extends React.Component{
    Go_Back=()=>{
        this.props.history.push('/')

    }
    GotO=()=>{
        this.props.history.push('/Post_attribute')
    }
    showButton1=()=>{
       let Box = document.getElementById('Mobile_toggle');
       if(Box.style.display =='none'){
           Box.style.display ='block'
       }else{
           Box.style.display ='none'
       }

    }
    showButton2=()=>{
        let Box = document.getElementById('vehicels_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton3=()=>{
        let Box = document.getElementById('property_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton4=()=>{
        let Box = document.getElementById('rent_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton5=()=>{
        let Box = document.getElementById('Electronic_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton6=()=>{
        let Box = document.getElementById('Bikes_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton7=()=>{
        let Box = document.getElementById('Busnies_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton8=()=>{
        let Box = document.getElementById('service_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton9=()=>{
        let Box = document.getElementById('jobs_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton10=()=>{
        let Box = document.getElementById('animal_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton11=()=>{
        let Box = document.getElementById('furniture_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton12=()=>{
        let Box = document.getElementById('fashion_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton13=()=>{
        let Box = document.getElementById('kids_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }
     showButton14=()=>{
        let Box = document.getElementById('kids_toggle');
        if(Box.style.display =='none'){
            Box.style.display ='block'
        }else{
            Box.style.display ='none'
        }
 
     }

    render(){
        return(
            <div>
                <div style={{backgroundColor: "whitesmoke"}} className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <img onClick={this.Go_Back} src={arrowBtn} style={{cursor:"pointer"}} alt ="arrow Button"/>
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
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="post_catagory">
                                <h5 style={{fontWeight:"bold",color:" #002F34", position: "relative", right:"30px"}}>CHOOSE A CATEGORY</h5>
                                <br/>
                                <button  onClick={this.showButton1}  className="Mobile_Btn" className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"></path></svg><li className="post_add_li"></li>Mobiles <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="Mobile_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Tablet</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Accessroies</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Mobile Phones</button>
                                </div>
                                <button onClick={this.showButton2} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M744.747 124.16l38.4 33.28 36.949 258.731 107.221 107.179 11.349 27.435v193.963l-38.827 38.784h-38.741v116.352h-77.568v-116.352h-543.061v116.352h-77.568v-116.352h-38.741l-38.827-38.827v-193.877l11.349-27.435 107.264-107.221 36.949-258.731 38.4-33.28h465.493zM768.555 474.325h-513.109l-92.544 92.501v139.093h698.197v-139.093l-92.544-92.501zM298.667 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM725.333 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM711.083 201.685h-398.165l-27.904 195.115h453.888l-27.861-195.072z"></path></svg><li className="post_add_li"></li>Vehicels <img  className="post_btn" src={right_arrow} alt=""/></button>
                                <div id='vehicels_toggle'>
                                    <button onClick={this.GotO} className="mobile_toggle">Cars</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Cars on Installments</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Cars Accessroies</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Spare Parts</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Buses, Vans & Truks</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Rikshaw & Chingchi</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Other Vehicels</button>
                                    <button onClick={this.GotO} className="mobile_toggle" >Boats</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Tractors & Trallers</button>
                                </div>
                                <button onClick={this.showButton3} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M814.546 512v-53.489h-50.036v-17.106h44.529v-50.23h-44.529v-15.749h50.036v-53.489h-118.69v190.061h118.69zM684.179 512v-53.489h-52.13v-136.571h-68.965v190.061h121.095zM452.306 395.52l-10.861 39.098h21.45l-10.59-39.098zM421.625 512h-67.335l65.707-190.061h67.879l65.707 190.061h-70.593l-8.417-29.051h-44.529l-8.417 29.051zM284.51 454.982c0 3.065-1.785 4.615-5.43 4.615-8.844 0-17.299-6.71-25.25-20.091l-49.145 26.609c1.978 5.43 4.849 10.783 8.571 16.135 3.685 5.352 8.533 10.629 14.507 15.787s13.498 9.349 22.535 12.607c9.037 3.258 18.929 4.888 29.595 4.888 22.613 0 40.65-5.547 54.031-16.563 13.421-11.054 20.091-25.95 20.091-44.8 0-9.969-2.56-18.773-7.603-26.453s-11.249-13.809-18.579-18.347c-7.33-4.499-14.662-8.494-21.992-11.791-7.37-3.374-13.575-6.593-18.618-9.774-5.081-3.181-7.603-6.284-7.603-9.387 0-3.258 1.901-4.888 5.702-4.888 3.995 0 7.873 1.746 11.675 5.159 3.801 3.451 6.866 7.525 9.231 12.218l48.33-27.694c-3.219-10.317-11.288-20.364-24.165-30.138-12.839-9.774-29.051-14.662-48.601-14.662-21.333 0-38.593 5.547-51.705 16.563-13.15 11.015-19.705 25.677-19.705 43.986 0 8.883 1.823 16.833 5.43 23.893 3.647 7.059 8.185 12.684 13.73 16.95 5.509 4.267 11.481 8.185 17.92 11.713 6.4 3.49 12.373 6.361 17.92 8.533 5.509 2.171 10.085 4.499 13.691 7.059 3.647 2.56 5.43 5.159 5.43 7.873zM162.909 589.575v-349.091h698.182v349.091h-698.182zM899.879 162.909h-349.091v-38.789l-38.789-38.789-38.789 38.789v38.789h-349.091l-38.789 38.789v426.667l38.789 38.789h349.091v193.939h-77.575v77.575h232.728v-77.575h-77.575v-193.939h349.091l38.789-38.789v-426.667l-38.789-38.789z"></path></svg> <li className="post_add_li"></li> Property for Sale <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id='property_toggle'>
                                    <button onClick={this.GotO} className="mobile_toggle">Lands & Plots</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Houses</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Apartments & Flats</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Shops-Offices-Commercial Spaces</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Portions & Floors</button>

                                </div>
                                <button onClick={this.showButton4} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M706.21 385.164v126.836h64v-126.836h34.792v-49.649h-133.352v49.649h34.521zM557.189 512v-82.968l38.323 82.968h64.775v-176.485h-63.263v82.929l-38.361-82.929h-64.775v176.485h63.302zM478.759 512v-49.649h-46.39v-15.903h41.349v-46.662h-41.349v-14.623h46.39v-49.649h-110.157v176.485h110.157zM271.283 383.418v24.709h7.564c3.879 0 6.943-1.28 9.192-3.801s3.413-5.352 3.413-8.571c0-3.142-1.125-6.050-3.413-8.571-2.25-2.521-5.313-3.763-9.192-3.763h-7.603zM271.283 455.021v56.979h-62.022v-176.485h78.43c20.17 0 36.15 5.43 47.903 16.251 11.791 10.861 17.649 24.513 17.649 40.96 0 9.774-2.637 18.618-7.912 26.609-5.313 7.99-11.986 14.235-20.053 18.773l40.339 73.89h-69.352l-25.018-56.979zM162.909 589.575v-349.091h698.182v349.091h-698.182zM899.879 162.909h-349.091v-38.789l-38.789-38.789-38.789 38.789v38.789h-349.091l-38.789 38.789v426.667l38.789 38.789h349.091v193.939h-77.575v77.575h232.728v-77.575h-77.575v-193.939h349.091l38.789-38.789v-426.667l-38.789-38.789z"></path></svg> <li className="post_add_li"></li>Property for Rent <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="rent_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Houses</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Apartments & Flats</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Portions & Floors</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Shops-Offices-Commercial Spaces</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Rooms</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Roommates & Paying Guests</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Vocation Rental Guest Houses</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle"> Lands & Plots</button>

                                </div>
                                <button onClick={this.showButton5} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M149.76 128l-64.427 62.848v480.853l69.333 67.84h317.781l0.725 75.477h-169.6v80.981h416.128v-80.981h-161.621l-0.683-75.435h315.648l65.621-68.693v-482.389l-75.733-60.501h-713.173zM170.24 638.72v-414.848l15.232-14.848h646.656l21.632 17.28v413.184l-18.176 19.072h-645.12l-20.224-19.84z"></path></svg> <li className="post_add_li"></li>Electronic & Home Appliances <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="Electronic_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Computers & Accessroies</button>
                                    <button onClick={this.GotO} className="mobile_toggle">TV-Video-Audio</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Camera & Accessroies</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Games & Entertaintment</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Other Home Appliances</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Generators, UPS, & Other Power Solutions </button>
                                    <button onClick={this.GotO} className="mobile_toggle">Kitchen Appliances</button>
                                    <button onClick={this.GotO} className="mobile_toggle">AC & Coolers</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Fridges & Freezers</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Washing Machines & Dryers</button>
                                </div>
                                <button onClick={this.showButton6} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M674.657 245.333l47.813 129.715 23.448-51.706h51.11l26.563 33.51v80.171h-78.406l26.746 72.064h9.892c75.576 0 136.843 60.253 136.843 134.579s-61.267 134.579-136.843 134.579c-59.691-0.227-112.346-38.479-130.112-94.523s3.455-116.947 52.44-150.495v0l2.931-1.982-28.578-78.189-77.49 225.74h-167.070v3.243c-19.579 65.476-85.893 106.172-154.3 94.693s-117.248-71.498-113.643-139.654c3.605-68.156 58.515-122.867 127.764-127.303s130.911 42.808 143.476 109.928v0 3.783h122.554l22.716-66.839h-121.455l-61.735-80.171h-197.662l-58.071 132.598-36.638 9.008-21.616-28.826 69.796-168.089h228.255l64.849-62.696h196.197l-16.304-44.319h-89.763v-68.821h136.294zM796.845 577.368l25.463 69.362-20.884 31.888-43.233-6.306-26.746-75.307-5.129 6.846v0.54c-17.559 23.523-17.878 55.449-0.79 79.306s47.76 34.314 76.196 25.976c28.435-8.338 48.277-33.608 49.289-62.772s-17.032-55.706-44.823-65.931v0l-9.343-3.603zM365.248 616.823c-12.157-27.922-41.767-44.432-72.372-40.354s-54.681 27.74-58.847 57.836c-4.166 30.096 12.603 59.227 40.986 71.201s61.403 3.848 80.707-19.861v0l5.862-7.387-85 0.18v-57.111l29.86-18.016 30.41 19.818h31.142zM627.943 413.233h-153.88l-31.142 33.568 32.791 46.432h128.233l23.998-80zM318.667 345.333v66.667h-133.333v-66.667h133.333z"></path></svg> <li className="post_add_li"></li>Bikes <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="Bikes_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Motorcycles</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Spare Parts</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Bicycle</button>
                                    <button onClick={this.GotO} className="mobile_toggle">ATV & Quads</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Scooters</button>

                                </div>
                                <button onClick={this.showButton7} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M724.48 717.013c0.64 2.773 0.853 5.547 0.853 8.32s-0.213 5.547-0.853 8.32-1.28 5.333-2.347 7.893c-1.067 2.773-2.56 5.12-4.053 7.467s-3.2 4.48-5.333 6.4c-7.893 8.107-18.773 12.587-30.080 12.587s-22.187-4.48-30.080-12.587c-2.133-1.92-3.84-4.053-5.333-6.4s-2.987-4.693-4.053-7.467c-1.067-2.56-1.92-5.12-2.347-7.893-0.64-2.773-0.853-5.547-0.853-8.32s0.213-5.547 0.853-8.32c0.427-2.773 1.28-5.333 2.347-8.107 1.067-2.56 2.56-4.907 4.053-7.253s3.2-4.48 5.333-6.613c1.92-1.92 4.053-3.627 6.4-5.12s4.693-2.987 7.253-4.053c2.773-1.067 5.333-1.707 8.107-2.347 13.867-2.773 28.587 1.707 38.4 11.52 2.133 2.133 3.84 4.267 5.333 6.613s2.987 4.693 4.053 7.253c1.067 2.773 1.707 5.333 2.347 8.107zM553.813 717.013c0.64 2.773 0.853 5.547 0.853 8.32 0 11.307-4.48 22.187-12.587 30.293-1.92 1.92-4.053 3.627-6.4 5.12s-4.693 2.987-7.253 4.053c-2.773 1.067-5.333 1.92-8.107 2.347-2.773 0.64-5.547 0.853-8.32 0.853s-5.547-0.213-8.32-0.853c-2.773-0.427-5.333-1.28-8.107-2.347-2.56-1.067-4.907-2.56-7.253-4.053s-4.48-3.2-6.4-5.12c-8.107-8.107-12.587-18.987-12.587-30.293 0-2.773 0.213-5.547 0.853-8.32s1.28-5.333 2.347-8.107c1.067-2.56 2.56-4.907 4.053-7.253s3.2-4.48 5.333-6.4c1.92-2.133 4.053-3.84 6.4-5.333s4.693-2.987 7.253-4.053c2.773-1.067 5.333-1.707 8.107-2.347 13.867-2.773 28.587 1.707 38.4 11.733 2.133 1.92 3.84 4.053 5.333 6.4s2.987 4.693 4.053 7.253c1.067 2.773 1.92 5.333 2.347 8.107zM371.413 695.253c8.107 7.893 12.587 18.773 12.587 30.080s-4.48 22.187-12.587 30.080c-7.893 8.107-18.773 12.587-30.080 12.587s-22.187-4.48-30.080-12.587c-8.107-7.893-12.587-18.773-12.587-30.080s4.48-22.187 12.587-30.080c15.787-16 44.373-16 60.16 0zM853.333 853.333h-682.667v-682.667h85.333v416.683l213.333-128v137.984l170.667-128v118.016l213.333-128v393.984zM725.333 436.651v-137.984l-170.667 128v-118.016l-213.333 128v-308.651l-42.667-42.667h-170.667l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-587.349l-213.333 128z"></path></svg> <li className="post_add_li"></li>Bussiness, Industrial & Agriculture <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="Busnies_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Bussiness for Sale</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Food & Resturants</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Trade & Industrial</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Construction & Heavy Machinery </button>
                                    <button onClick={this.GotO} className="mobile_toggle">Agriculture</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Other Bussiness Industary</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Madical & Pharma</button>

                                </div>
                                <button onClick={this.showButton8} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M845.419 795.973l-18.078 18.059h-643.422l-18.078-18.059v-37.922l18.078-18.059h643.422l18.078 18.059v37.922zM198.941 562.396l43.308-63.059v-153.289c0-46.52 37.845-84.365 84.365-84.365h356.844c46.52 0 84.365 37.845 84.365 84.365v155.441l46.249 54.576v15.597h-615.134v-9.269zM859.19 663.070h-320.595v-14.48h352.403v-120.712l-46.249-54.576v-127.248c0-88.94-72.347-161.287-161.287-161.287h-144.863v-18.924h71.095v-76.922h-216.422v76.922h68.404v18.924h-135.058c-88.94 0-161.287 72.347-161.287 161.287v129.404l-43.308 63.040v110.096h339.653v14.48h-309.596l-63.155 63.136v101.616l63.155 63.136h707.114l63.155-63.136v-101.616l-63.155-63.136z"></path></svg> <li className="post_add_li"></li>Services <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="service_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Education & Classes</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Travel & Visa</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Car Rental</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Drivers & Texi</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Web Development</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Other Services</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Electronics & Computer Repairs</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Event Services</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Health & Beauty</button>
                                    <button onClick={this.GotO}  className="mobile_toggle">Maid & Domestic Help</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Mover & Packers</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Home & Office Repair</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Catering & Resturants</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Farm & Fresh Food</button>
                                    

                                </div>
                                <button onClick={this.showButton9} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M341.665 89.769l-82.848 72.739v66.327h-70.534l-98.517 98.906v468.388l95.92 104.215h649.246l99.298-102.676v-478.475l-107.179-90.359h-58.539v-2.275h-3.907v-65.087l-85.419-71.703h-337.522zM350.693 204.115l25.616-22.448h269.404l26.995 22.677v24.491h-322.015v-24.72zM181.668 365.697l44.756-44.963h567.065l48.844 41.17v79.17h-660.665v-75.381zM696.787 595.514v-62.538h145.545v227.542l-46.362 47.901h-569.959l-44.341-48.156v-227.29h127.763v62.538l31.132 17.116 31.132-17.116v-62.538h262.832v62.538l31.132 17.116 31.132-17.116z"></path></svg> <li className="post_add_li"></li>Jobs <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="jobs_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Online</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Marketing</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Advertising & PR</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Education</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Customer Service</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Sals</button>
                                    <button onClick={this.GotO} className="mobile_toggle">IT & Networking</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Hotel & Tourism</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Clerical & Adminstration</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Human Resources</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Accounting & Finance</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Menufacturing</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Medical</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Domestic Staff</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Part Time</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Other Jobs</button>

                                </div>
                                <button onClick={this.showButton10} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M653.689 147.951l168.004 35.403 99.123 140.646-104.437 161.363-24.699 166.528-48.766 44.876v80.131l-78.051 100.6h-291.644l-78.521-105.184 0.336-75.789-50.86-37.2-53.461-171.971-99.76-163.964 98.543-139.806 162.335-35.46 301.86-0.167zM668.063 715.029h-298.247l-0.149 32.58 41.095 55.034h217.445l39.859-51.368v-36.246zM625.751 222.82l-249.539 0.13-111.211 251.167 43.32 139.375 36.472 26.684h349.054l27.675-25.451 20.378-137.43-116.152-254.479zM560.227 494.238v19.798l-55.651 50.581-54.605-48.092v-22.288h110.258zM714.622 237.285l71.616 156.89 44.277-68.377-53.050-75.262-62.838-13.248zM618.824 353.349c10.647 0 19.275 8.644 19.275 19.275 0 10.665-8.626 19.313-19.275 19.313s-19.295-8.644-19.295-19.313c0-10.627 8.644-19.275 19.295-19.275zM380.916 353.349c10.647 0 19.295 8.644 19.295 19.275 0 10.665-8.644 19.313-19.295 19.313s-19.295-8.644-19.295-19.313c0-10.627 8.644-19.275 19.295-19.275zM287.553 238.315l-53.5 12.013-53.649 76.086 39.447 64.822 67.702-152.923z"></path></svg> <li className="post_add_li"></li>Animals <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="animal_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Fish & Aquariums</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Birds</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Heens & Aseel</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Cats</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Dogs</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Livestock</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Horses</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Pet Food & Accessroies</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Other Animals</button>

                                </div>
                                <button onClick={this.showButton11} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M268.748 91.803l-70.244 96.818v124.45l-24.559-0.152-82.195 104.783v430.333h152.539v75.637h91.975v-75.637h333.816v75.637h91.975v-75.637h170.135v-436.888l-82.295-97.219h-4.335v-117.692l-78.665-104.431h-498.206zM429.605 396.172l-79.319-82.195-59.755-0.353v-95.152l25.112-34.692h405.422l32.524 43.213v86.934h-87.64l-65.504 77.403v75.284h-170.792v-70.444zM183.829 449.472l34.743-44.274 92.48 0.505 26.626 27.632v125.207h354.845v-133.528l16.137-19.111h98.633l32.977 38.93v311.176h-656.49v-306.588z"></path></svg><li className="post_add_li"></li>Furniture & Home Decor <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="furniture_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Sofa & Chairs</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Beds & Wardrobes</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Home & Decrotion</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Table & Dining</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Garden & Outdoor</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Painting & Mirriors</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Rugs & Carpets</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Curtains & Blinds</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Office Furniture</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Other Houshold Items</button>

                                </div>
                                <button onClick={this.showButton12} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M708.012 340.654v471.101h-391.011v-471.101h-116.125l48.317-144.445 32.889-26.596h106.075c17.154 51.007 65.474 87.906 122.014 87.906s104.908-36.899 122.062-87.906h101.002l28.423 17.258 56.135 153.784h-109.781zM827.639 132.662l-71.867-43.647h-197.179l-0.252 40.097c-0.204 26.393-21.824 47.809-48.165 47.809-26.393 0-47.964-21.468-48.116-47.861l-0.304-39.993h-208.092l-73.39 59.282-91.204 272.855h147.339v471.101h552.103v-471.101h144.397l-105.212-288.538z"></path></svg> <li className="post_add_li"></li>Fashion & Beauty <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="fashion_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Accessroies</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Clothes</button>
                                    <button onClick={this.GotO} className="mobile_toggle">FootWear</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Jewellery</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Make Up</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Skin & Hair</button>
                                    <button onClick={this.GotO} className="mobile_toggle">watches</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Wedding</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Lawn & Pret</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Couture</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Ohter Fashion</button>

                                </div>
                                <button onClick={this.showButton13} className="catagory_Button" ><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M777.049 133.012l69.146 7.353 48.548 49.856 5.553 69.297-95.903 93.421-60.089-6.386-24.218 23.781c19.044 29.22 29.447 63.633 29.447 98.728 0 84.059-57.645 154.894-135.469 175.074 2.028 12.791 3.050 25.676 3.050 38.544 0 138.711-112.843 251.535-251.535 251.535-187.504 0-327.75-206.226-205.791-403.793 74.207-77.997 153.737-106.060 231.734-97.893 16.941-82.279 89.952-144.318 177.158-144.318 24.407 0 48.093 4.794 70.397 14.231v0l4.301 2.141 22.285 12.98 21.602-21.223-0.568-0.587-5.553-69.335 95.903-93.402zM568.679 364.005c-57.948 0-105.057 47.128-105.057 105.057 0 1.346 0.114 2.69 0.208 4.017v0l3.393 56.469-51.808-15.291c-16.373-4.831-33.124-7.297-49.837-7.297-138.008 0-239.388 159.952-128.478 304.214 144.261 110.91 304.214 9.551 304.214-128.497 0-19.517-3.412-39.093-10.119-58.213v0l-18.324-52.206 57.626 1.914c56.109-0.057 103.237-47.185 103.237-105.113 0-15.386-3.544-30.034-9.779-43.603v0l-115.498 113.451-44.171-6.783-8.944-47.298 114.246-112.2-2.103-1.233c-12.317-4.907-25.354-7.391-38.809-7.391zM367.141 573.986c54.271 0 98.271 44 98.271 98.271s-44 98.252-98.271 98.252c-54.271 0-98.271-43.981-98.271-98.252s44-98.271 98.271-98.271zM804.43 212.125l-44.892 43.754 0.53 6.556 10.384 10.668 6.556 0.7 44.892-43.735-0.53-6.537-10.403-10.687-6.537-0.719z"></path></svg>< li className="post_add_li"></li>Books Sports & Hobbies <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="books_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Books & Magazines</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Musical Instruments</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Sports Equipments</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Gym & Fitness</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Ohter Hobbies</button>

                                </div>
                                <button onClick={this.showButton14} style={{borderBottom: "1px solid black"}} className="catagory_Button"><svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-vUQO_" d="M395.636 861.090v-387.879h232.728v77.575h-77.575v77.575h77.575v77.575h-155.151v77.575h155.151v77.575h-232.728zM434.425 395.636h155.151v-38.789h-155.151v38.789zM512 240.485c21.41 0 38.789 17.415 38.789 38.789h-77.575c0-21.371 17.377-38.789 38.789-38.789zM667.151 395.636v-77.575l-38.789-38.789c0-50.541-32.427-93.556-77.575-109.575v-45.575l-38.789-38.789-38.789 38.789v45.575c-45.15 16.019-77.575 59.035-77.575 109.575l-38.789 38.789v77.575l-38.789 38.789v465.454l38.789 38.789h310.303l38.789-38.789v-465.454l-38.789-38.789z"></path></svg> <li className="post_add_li"></li>Kids <img className="post_btn" src={right_arrow} alt=""/></button>
                                <div id="kids_toggle">
                                    <button onClick={this.GotO} className="mobile_toggle">Kids Furniture</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Toys</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Parms & Walkers</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Swings & Sliders</button>
                                    <button onClick={this.GotO} className="mobile_toggle">Kids Bikes</button>
                                    <button onClick={this.GotO} style={{borderBottom:"1px solid gray"}} className="mobile_toggle">Kids Accessroies</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="siteMap" className="container-fluid">
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
export default Post_add