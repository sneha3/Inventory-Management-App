import React from "react";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { Helmet } from "react-helmet";
// import Units from '../../../server/settings-units.json'
import DisplayUnitList from "../../organisms/Unit-List/Unit-List"
import SettingsForm from "../../molecules/Forms/Form"
// import Navbar from "../../organisms/Navbar/Sidebar";
import "./Settings-Units.scss"


const Settings = () => {
    return (
        <div className="demo">
            <Helmet>
                <title>Inventory Management</title>
                <meta
                    name="description"
                    content="Login Page of the Sabka Bazaar Website"
                />
            </Helmet>
            {/* <h1>Hello</h1>
         <div>Hello Everyone</div> */}
         {/* <div className="container-settings">
         <div className="navbar-container"><Navbar/></div>
         </div> */}
        <div className="container-settings">
            
            <div className="unit-list"><DisplayUnitList /></div>
            <div className="settings-form"><SettingsForm /></div>
            
        </div>
         

</div>  
    );
};
export default Settings;