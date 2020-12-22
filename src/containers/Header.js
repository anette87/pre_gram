import React from 'react';
import { MenuItems } from './MenuItems';


class Header extends React.Component {

    render(){
        return(
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <ul>
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a className={item.cName} href={item.url}>
                                            {item.title}
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
                            <span class="navbar-toggler-icon"></span>
                        </button>
                </nav>
            </div>
        )
    } 

}
            
                


export default Header;