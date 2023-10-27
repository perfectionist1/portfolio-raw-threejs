import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
    height: 100vh;
    // background-color: rebeccapurple;
    scroll-snap-align: center;
`

const Hero = () => {
    return(
        <Section>
            <Navbar/>
        </Section>
    )
}

export default Hero