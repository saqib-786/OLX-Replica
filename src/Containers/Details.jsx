import React from 'react';
import Navbar from '..//Components/Navbar';
import Footer from '..//Components/Footr_2';
import Header from '../Components/Header';
import pic from '../Images/TV_2.jpg';
import image2 from '../Images/TV_1.jpg';
import image3 from '../Images/TV_3.jpg';
import saqib from '../Images/Saqib.jpg';

class Details extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <Header />

                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="slider_div">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={pic} className="d-block w-80" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={image2} className="d-block w-80" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={image3} className="d-block w-80" alt="..." />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="details_div">
                                <h5 style={{ margin: "10px", fontWeight: 'bold', color: '#002F34' }}>Details</h5>
                                <ul>
                                    <li className="details_li">Make</li>
                                    <li className="details_li">Samsung</li>
                                    <li className="details_li">Condition</li>
                                    <li className="details_li">New</li>
                                </ul>
                                <hr />
                                <h5 style={{ margin: "10px", fontWeight: 'bold', color: '#002F34' }}>Description</h5>
                                <p style={{ margin: "10px", color: '#002F34' }}>Hell Everyone I am selling my new Samsung Smart LED with complete accessroies
                                and full waranty. kindly serious buyers contact me thanks...
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="pirce_div">
                                <h5 style={{ margin: "10px", fontWeight: 'bold', color: '#002F34' }}>RS: 60000</h5>
                                <p style={{ margin: "10px", color: '#002F34' }}>Samsung Smart LED with full Waranty</p>
                                <p style={{ margin: "10px", lineHeight: '170px', color: 'gray', fontSize: '15px' }}>Posted in Hyderabad Sindh</p>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="seller_dec">
                                <h5 style={{ margin: "10px", fontWeight: 'bold', color: '#002F34' }}>Seller Description</h5>
                                <img style={{ width: '60px', height: '60px', margin: '10px', borderRadius: '50px' }} src={saqib} alt="Saqib Ali" />
                                <p style={{ margin: "10px", color: '#002F34', fontWeight: 'bold', display: 'inline-block' }}>Saqib Ali</p>
                                <button id="chat_btn">Chat with Seller</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="posted_in">
                                <h5 style={{ margin: "10px", fontWeight: 'bold', color: '#002F34' }} >Posted in</h5>
                                <iframe width="420" height="275" frameborder="0"
                                    scrolling="no" marginheight="0" marginwidth="0"
                                    src="https://maps.google.co.uk/maps?f=q&amp;
 source=s_q&amp;hl=en&amp;geocode=&amp;
 q=charing+cross+road+hyderabad&amp;output=embed">
                                </iframe>



                            </div>
                        </div>
                    </div>
                </div>
                <div id="detail_footer" className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default Details