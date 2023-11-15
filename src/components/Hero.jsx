import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1000px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;
const Title = styled.h1`
    font-size: 54px;
`;
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Line = styled.img`
    height: 5px;
`;
const Subtitle = styled.h2`
    color: #da4ea2;
`;
const Desc = styled.p`
    font-size: 24px;
    color: light-grey;
`;
const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer; 
`;

const Right = styled.div`
    flex: 3;
    position: relative;
    //background-color: yellow;
    
`;
const Img = styled.img`
    width: 500px;
    height: 400px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate{
        to{
            transform: translateY(20px);
        }
    }
`;

const Hero = () => {
    return(
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>Innovate. Create. Resolve. </Title>
                    <WhatWeDo>
                        <Line src="./img/line.png"/>
                        <Subtitle>What we do</Subtitle>
                    </WhatWeDo>
                    <Desc>We take pleasure in crafting user-centric digital interactions that bring joy.</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    <Canvas >
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3,2,1]} />
                        <Sphere args={[1,100,200]} scale={2.6}>
                            <MeshDistortMaterial color="#0000af" attach="material" distort={0.5} speed={2} />
                        </Sphere>
                    </Canvas>
                    <Img src="./img/myself.png"/>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero