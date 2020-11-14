import React from 'react';
import {
    BrowserRouter as Router,Route,} from "react-router-dom";
    import Home from '../Containers/Home'
    import MobilePhone from '../Containers/MobilePhone';
    import Cars from '../Containers/Cars';
    import Motorcycles from '../Containers/Motorcycles';
    import Houses from '../Containers/Houses';
    import TV_Video_Audio from '../Containers/TV-Video-Audio';
    import Tablets from '../Containers/Tablets';
    import LandandPlots from '../Containers/Land&Plots'
    import Email_login from '..//Components/Email_login';
    import Phone_login from '../Components/Phone_login';
    import Post_add from '../Containers/Post_add';
    import Post_attribute from '..//Containers/Post_attribute';
    import Details from '../Containers/Details';
    
    

    class OlxRouter extends React.Component{
        render(){
            return(
                <Router>
                    <Route exact path='/' component={Home} />
                    <Route path="/MobilePhone" component={MobilePhone}/>
                    <Route path="/Cars" component={Cars}/>
                    <Route path="/Motorcycles" component={Motorcycles}/>
                    <Route path="/Houses" component={Houses}/>
                    <Route path="/TV_Video_Audio" component={TV_Video_Audio}/>
                    <Route path="/Tablets" component={Tablets}/>
                    <Route path="/Land&Plots" component={LandandPlots}/>
                    <Route path="/Email" component={Email_login}/>
                    <Route path="/Phone" component={Phone_login}/>
                    <Route path='/Post_add' component={Post_add}/>
                    <Route path='/Post_attribute' component={Post_attribute}/>
                    <Route path='/Details' component={Details}/>
                    
                    
                    



                    
                </Router>
            )
        }
    }
  export default OlxRouter