import React from 'react'
import styled from 'styled-components'
import Constants from '../Constants'
import Image1 from '../assets/artificial-intelligence.png'
import Image2 from '../assets/artificial-intelligence-isometric.jpg'

function Home() {
    return (
        <div>
            <Section1>
                <TextBanner>
                    Super Charge Your Prospecting With
                    Your Personal Ai Assistant.
                </TextBanner>
                <Image src={Image1} alt="image1" />
            </Section1>
            <Section2>
                <div className='sc2-text'>
                    <h1>Experience The Power of Akido! </h1>
                    <p>
                        Say goodbye to cold calling and wasted time chasing unqualified leads. Our AI-powered prospecting tool takes the guesswork out of finding new business by analyzing intent data and prior sales history to recommend only the most relevant and high-quality leads for your company.
                    </p>
                    <p>
                        Our platform is easy to use and delivers actionable insights that help your sales team close more deals and grow your business. With personalized recommendations and data-driven insights, you can focus your efforts on building meaningful relationships with qualified prospects, while our tool takes care of the heavy lifting.
                    </p>
                </div>
                <div className='sc2-img'>
                    <img src={Image2} alt="image2" />
                </div>
            </Section2>
        </div>
    )
}

export default Home

const Section2 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60vh;
    color: #000;
    background: linear-gradient(0deg, #E6FCFF 0%, #FFFFFF 100%);
    font-weight: 400;
    
    .sc2-text {
        width: 50%;
        height: 100%;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        text-align: center;
    }
    
    h1 {
        width: 100%;
        font-size: 1.7rem;
        padding-bottom: 1.5rem;
    }
    
    p{
        font-size: 1.1rem;
        box-sizing: border-box;
        margin: 0  1rem;
    }

    .sc2-img{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    img {
        width: 75%;
        object-fit: contain;
        background-color: red;
        margin-bottom: 3rem;
        border-radius: 8rem;
    }
    `

const Section1 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 30vh;
    color: #fff;
    background-color: ${Constants().Theme.Base};
    `

const TextBanner = styled.span`
    width: 50%;
    font-size: 1.6rem;
    font-weight: 670;
    text-align: left;
    color: #fff;
    letter-spacing: 0.05rem;
    `

const Image = styled.img`
    height: 100%;
    width: 40%;
    object-fit: contain;
    box-sizing: border-box;
    `

