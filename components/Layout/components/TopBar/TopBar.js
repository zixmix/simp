import React from "react";
import Link from "next/link"

export default function TopBar()
{
    return(
        <div className="black-header" id="nav">
            <header>
                <div className="nav-top">
                    <div className="container" >
                        <div className="row" >
                            <div className="col-lg-11 centered">
                                <div className="top-nav-left" id="first-nav">
                                    <ul className="top-left-list">
                                        <li>
                                            <a href="./decor">Decor</a>
                                        </li>
                                        <li>
                                            <a href="./feedback">Feedback</a>
                                        </li>
                                        <li>
                                            <a href="./charity">Charity</a>
                                        </li>
                                        <li>
                                            <a href="./kontakt">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="top-right-nav">
                                    <li>
                                        <a className="gold-text" href="./order">ORDER ONLINE</a>
                                    </li>
                                    <li>
                                        <a href="./delivery" className="gold-text" style={{color:'#d2c41a;'}}>Delivery</a>
                                </li>
                                <li>
                                    <a href="./gift" className="gold-text" style={{color:'#d2c41a;'}}>Online Gift Cards</a>
                            </li>
                        </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>



    )
}