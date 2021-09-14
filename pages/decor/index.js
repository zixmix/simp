import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import Home_body from "../../components/Layout/components/Body/home_body";
import Decor_body from "../../components/Layout/components/Body/decor_body";

export default function Index({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <h1></h1>
                <Decor_body/>
                <Footer/>
                {childern}
            </>
        </div>
    )
}