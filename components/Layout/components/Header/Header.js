import React from "react";

export default function Header()
{
    return(
    <div className="black-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-11 centered">
                    <div className="padding-logo-nav">
                        <div className="logo">
                            <a href="/">
                                <img src="https://symposiumcafe.com/images/logo.png" alt="Symposium Cafe Restaurant Logo"/>
                            </a>
                            <nav role="navigation" itemScope itemType="http://schema.org/SiteNavigationElement">
                                <ul>
                                    <li itemProp="name">
                                        <a itemProp="url" href="https://symposiumcafe.com" className="active">Home</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="name" href="https://symposiumcafe.com/patio-dining-menu">MENU</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="name" href="https://symposiumcafe.com/locations">Locations</a>
                                        <ul>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/ajax-restaurants">
                                                    Ajax
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/alliston-restaurants">
                                                    Alliston
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/ancaster-restaurants">
                                                    Ancaster
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/aurora-restaurants">
                                                    Aurora
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/barrie-restaurants">
                                                    Barrie
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/bolton-restaurants">
                                                    Bolton
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/brantford-restaurants">
                                                    Brantford
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/cambridge-restaurants">
                                                    Cambridge
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/cobourg-restaurants">
                                                    Cobourg
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/georgetown-restaurants">
                                                    Georgetown
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/guelph-restaurants">
                                                    Guelph
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/keswick-restaurants">
                                                    Keswick
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/lindsay-restaurants">
                                                    Lindsay
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/markham-restaurants">
                                                    Markham
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/milton-restaurants">
                                                    Milton
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/mississauga-south-restaurants">
                                                    Mississauga South
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/oakville-restaurants">
                                                    Oakville
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/oshawa-restaurants">
                                                    Oshawa
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/stoney-creek-restaurants">
                                                    Stoney Creek
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/thornhill-restaurants">
                                                    Thornhill
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/waterdown-restaurants">
                                                    Waterdown
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/waterloo-erbsville-restaurants">
                                                    Waterloo Erbsville
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/whitby-restaurants">
                                                    Whitby
                                                </a>
                                            </li>
                                            <li itemProp="name">
                                                <a itemProp="url" href="https://symposiumcafe.com/locations/woodbridge-restaurants">
                                                    Woodbridge
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="name" href="https://symposiumcafe.com/photos">Gallery</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="name" href="https://symposiumcafe.com/franchise-opportunities">Franchise</a>
                                    </li>
                                    <li itemProp="name">
                                        <a itemProp="name" href="https://symposiumcafe.com/about">About Us</a>
                                    </li>
                                    <li className="hidden-pc">
                                        <a href="https://symposiumcafe.com/decor">Decor</a>
                                    </li>
                                    <li className="hidden-pc">
                                        <a href="https://symposiumcafe.com/feedback">Feedback</a>
                                    </li>
                                    <li className="hidden-pc">
                                        <a href="https://symposiumcafe.com/charity">Charity</a>
                                    </li>
                                    <li className="hidden-pc">
                                        <a href="https://symposiumcafe.com/contact">Contact Us</a>
                                    </li>
                                    <li className="hidden-pc">
                                        <a href="https://symposiumcafe.com/delivery">Delivery</a>
                                    </li>
                                    <li className="hidden-pc">
                                        <a href="https://cws.givex.com/cws4.0/symposium4/">Online Gift Cards</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


    )
}