import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import Home_body from "../../components/Layout/components/Body/home_body";

export default function Index({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <h1> Zeljko Car - Charyty STRANA</h1>
                <Footer/>
                {childern}
            </>
        </div>
    )
}