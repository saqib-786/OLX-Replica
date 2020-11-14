import React from 'react'
import arrow from '../Images/arrow.png'
import HaderImage from '../Images/Header Image.png'
import {Link} from "react-router-dom";


class Navbar extends React.Component {
  // toggle = () => {
  //   document.getElementById('overlay').style.display= "block"
  // }
  
  hideDiv=()=>{
   let HideDive= document.getElementById('overlay');
   if(HideDive.style.display='none'){
     HideDive.style.display ='block'
   }

  
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
          <div id='overlay'>
            <div id="container-text">
              <table>
                <tr>
                  <td className="nav-td">Vehicles</td>
                  <div className="nav-td-hover"><li className="vehicles-li">Tractors & Trailers</li></div>
                  <div className="nav-td-hover"><li className="vehicles-li">Boats</li></div>
                  <div className="nav-td-hover"><li className="vehicles-li">Other Vehicles</li></div>
                  <div className="nav-td-hover"><li className="vehicles-li">Rickshaw & Chingchi</li></div>
                  <div className="nav-td-hover"><li className="vehicles-li">Buses, Vans & Trucks</li></div>
                  <div className="nav-td-hover"><li className="vehicles-li">Spare Parts</li></div>
                  <div className="nav-td-hover"><li className="vehicles-li">Cars Accessories</li></div>
                  <div className="nav-td-hover"><li className="vehicles-li" >Cars on Installments</li></div>
                  <div className="nav-td-hover"><li className="vehicles-li">Cars</li></div>
                  <td className="nav-td">Animals</td>
                  <div className="nav-td-hover" ><li className="animals-li">Other Animals</li></div>
                  <div className="nav-td-hover"><li className="animals-li">Pet Food & Accessories</li></div>
                  <div className="nav-td-hover"><li className="animals-li">Horses</li></div>
                  <div className="nav-td-hover"><li className="animals-li">Livestock</li></div>
                  <div className="nav-td-hover"><li className="animals-li">Dogs</li></div>
                  <div className="nav-td-hover"><li className="animals-li">Cats</li></div>
                  <div className="nav-td-hover"><li className="animals-li">Hens & Aseel</li></div>
                  <div className="nav-td-hover"><li className="animals-li">Birds</li></div>
                  <div className="nav-td-hover"><li className="animals-li">Fish & Aquariums</li></div>
                  <td className="nav-td">Fashion </td>
                  <div className="nav-td-hover"><li className="fashion-li">Other Fashion</li></div>
                  <div className="nav-td-hover"><li className="fashion-li">Couture</li></div>
                  <div className="nav-td-hover"><li className="fashion-li">Lawn & Pret</li></div>
                  <div className="nav-td-hover"><li className="fashion-li">Wedding</li></div>
                  <div className="nav-td-hover"><li className="fashion-li">Watches</li></div>
                  <div className="nav-td-hover"><li className="fashion-li">Skin & Hair</li></div>
                  <div className="nav-td-hover"><li className="fashion-li">Make Up</li></div>
                  <div className="nav-td-hover"><li className="fashion-li">Jewellery</li></div>
                  <div className="nav-td-hover"><li className="fashion-li" >Footwear</li></div>
                  <div className="nav-td-hover"><li className="fashion-li">Clothes</li></div>
                  <div className="nav-td-hover"><li className="fashion-li">Accessories</li></div>
                  <td className="nav-td">Services</td>
                  <div className="nav-td-hover"><li className="service-li">Farm & Fresh Food</li></div>
                  <div className="nav-td-hover"><li className="service-li">Catering & Restaurant</li></div>
                  <div className="nav-td-hover"><li className="service-li">Catering & Restaurant</li></div>
                  <div className="nav-td-hover"><li className="service-li">Movers & Packers</li></div>
                  <div className="nav-td-hover"><li className="service-li">Movers & Packers</li></div>
                  <div className="nav-td-hover"><li className="service-li">Health & Beauty</li></div>
                  <div className="nav-td-hover"><li className="service-li">Event Services</li></div>
                  <div className="nav-td-hover"><li className="service-li">Electronics & Computer Repair</li></div>
                  <div className="nav-td-hover"><li className="service-li">Other Services</li></div>
                  <div className="nav-td-hover"><li className="service-li">Other Services</li></div>
                  <div className="nav-td-hover"><li className="service-li">Drivers & Taxi</li></div>
                  <div className="nav-td-hover"><li className="service-li">Car Rental</li></div>
                  <div className="nav-td-hover"><li className="service-li">Travel & Visa</li></div>
                  <div className="nav-td-hover"><li className="service-li">Education & Classes</li></div>
                </tr>
                <tr>
                  <td id="mobile-td">Mobiles</td>
                  <div className="nav-td-hover"><li className="mobile-li">Mobile Phones</li></div>
                  <div className="nav-td-hover"><li className="mobile-li">Accessories</li></div>
                  <div className="nav-td-hover"><li className="mobile-li">Tablets</li></div>
                  <td id="furniture-td">Furniture & Home Decor</td>
                  <div className="nav-td-hover"><li className="furniture-li" >Other Household Items</li></div>
                  <div className="nav-td-hover"><li className="furniture-li">Office Furniture</li></div>
                  <div className="nav-td-hover"><li className="furniture-li">Curtains & Blinds</li></div>
                  <div className="nav-td-hover"><li className="furniture-li">Rugs & Carpets</li></div>
                  <div className="nav-td-hover"><li className="furniture-li">Painting & Mirrors</li></div>
                  <div className="nav-td-hover"><li className="furniture-li">Garden & Outdoor</li></div>
                  <div className="nav-td-hover"><li className="furniture-li">Tables & Dining</li></div>
                  <div className="nav-td-hover"><li className="furniture-li">Tables & Dining</li></div>
                  <div className="nav-td-hover"><li className="furniture-li">Beds & Wardrobes</li></div>
                  <div className="nav-td-hover"><li className="furniture-li">Sofa & Chairs</li></div>
                  <td id="property-td">Property for Rent</td>
                  <div className="nav-td-hover"><li className="property-li">Land & Plots</li></div>
                  <div className="nav-td-hover"><li className="property-li">Vacation Rentals - Guest Houses</li></div>
                  <div className="nav-td-hover"><li className="property-li">Roommates & Paying Guests</li></div>
                  <div className="nav-td-hover"><li className="property-li">Roommates & Paying Guests</li></div>
                  <div className="nav-td-hover"><li className="property-li">Shops - Offices - Commercial Space</li></div>
                  <div className="nav-td-hover"><li className="property-li">Portions & Floors</li></div>
                  <div className="nav-td-hover"><li className="property-li">Apartments & Flats</li></div>
                  <div className="nav-td-hover" className="nav-td-hover"><li className="property-li">Houses</li></div>
                  <td id="books-td">Books, Sports & Hobbies</td>
                  <div className="nav-td-hover"><li className="books-li">Other Hobbies</li></div>
                  <div className="nav-td-hover"><li className="books-li">Gym & Fitness</li></div>
                  <div className="nav-td-hover"><li className="books-li">Sports Equipment</li></div>
                  <div className="nav-td-hover"><li className="books-li">Musical Instruments</li></div>
                  <div className="nav-td-hover"><li className="books-li">Books & Magazines</li></div>
                </tr>
                <tr>
                  <td id="electronic-td">Electronics & Home Appliances</td>
                  <div className="nav-td-hover"><li className="electronics-li">Washing Machines & Dryers</li></div>
                  <div className="nav-td-hover"><li className="electronics-li">Fridges & Freezers</li></div>
                  <div className="nav-td-hover"><li className="electronics-li">AC & Coolers</li></div>
                  <div className="nav-td-hover"><li className="electronics-li">Kitchen Appliances</li></div>
                  <div className="nav-td-hover"><li className="electronics-li">Generators, UPS & Power Solutions</li></div>
                  <div className="nav-td-hover"><li className="electronics-li">Other Home Appliances</li></div>
                </tr>
              </table>
            </div>
          </div>
            <div className="col"><h6 onClick={this.hideDiv} id="all-categories">ALL CATEGORIES <img onClick={this.hideDiv} id="hide" src={arrow} width="20px" alt="arrow" />  </h6>
            
            </div>

            <div className="col">
              <nav class="navbar navbar-expand-lg navbar-light bg-#FFFFFF" data-spy="affix" data-offset-top="197">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    
                    <Link class="nav-link" to="/MobilePhone">Mobile Phones</Link>
                    <Link class="nav-link" to="/Cars">Cars</Link>
                    <Link class="nav-link" to="/Motorcycles">Motorcycles</Link>
                    <Link class="nav-link" to="/Houses">Houses</Link>
                    <Link class="nav-link" to="/TV_Video_Audio">TV-Video-Audio</Link>
                    <Link class="nav-link" to="/Tablets">Tablets</Link>
                    <Link class="nav-link" to="/Land&Plots">Land & Plots</Link>
                    
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default Navbar