import React from 'react';
import { MenuItems } from './MenuItems';
import {Link} from "react-router-dom";


class Header extends React.Component {

    render(){
        return(
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4"> {/*change bg-dark to change the color and do the same on the nav */}
                        <ul className="nav-menu">
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a className={item.cName} href={item.url}>
                                            <Link to={`${item.url}`}>
                                                {item.title}
                                            </Link>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>   
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <h1 className="navbar-logo">PreGram</h1>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-menu">Menu </span>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                </nav>
            </div>
        )
    } 

}
            
                


export default Header;