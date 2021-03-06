import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from './ContextProvider'
import Header from './Header'

const Wrapper = styled.div`
    max-width: 1114px;
    margin: auto;
    padding: 1rem;

    h2 {
        font-weight: 600;
        line-height: 49px;
        font-size: 36px;
        letter-spacing: 0.05em;
    }

    p {
        letter-spacing: 0.05em;
        line-height: 33px;
        font-size: 24px;
        color: hsl(0, 0%, 29%);
    }

    ul {
        display: flex;
        gap: 2%;
        margin: 2.5rem 0;
    }

    li {

        a {
            color: transparent;
            background-repeat: no-repeat;
            padding: 14px 1px;
        }
    }

    li:nth-of-type(2) {
        margin-top: 4px;    
    }

    li:nth-of-type(3) {
        margin-top: -2px;
    }
`;

const Frame = styled.div`
    text-align: center;
    margin: 5rem 0;
    margin-left: -11%;
    grid-area: image;

    @media (min-width: 500px) {
        margin: 0;
        margin-top: -6rem;
    }
`;

const Image = styled.img`
    max-width: 40%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 41px 15px 0px -7px rgba(6,47,150,0.72);
    -webkit-box-shadow: 41px 15px 0px -7px rgba(6,47,150,0.72);
`;

const MainContent = styled.div`
    grid-area: mainContent;
`

const Main = styled.div`
    @media (min-width: 500px) {
        margin-top: 6rem;
        display: grid;
        
        .main-container {
            height: 74vh;
            display: grid;
            grid-template-columns: 2fr 40%;
            align-items: center;
            grid-template-areas: "mainContent image";
            gap: 10%;
        }
    }
`;

function Home() {
    const { showModal } = useContext(Context)
    return (
        <Wrapper>
            <Header showModal={showModal}/>
            <Main> 
                <div className='main-container'>               
                    <Frame>
                        <Image 
                            src='https://avatars.githubusercontent.com/u/60210180?s=460&u=4f917a503d9aa83ef8b1a75ba78f9223543d7743&v=4' 
                            alt='Photo profile'
                        />
                    </Frame>
                    <MainContent>
                        <h2>Hello There!</h2>
                        <p>
                            I am Fanilo and I love creating useful stuff. I am a Passionate
                            Front-end Developer, react, redux, typescript and sass. 
                        </p>
                    
                        <ul>
                            <li><a className='facebook' href='https://www.facebook.com/fanilo.tokiniaina/'>Facebook</a></li>
                            <li><a className='twitter' href='https://twitter.com/Fanilo85066531'>Twitter</a></li>
                            <li><a className='github' href='https://github.com/lightme-fan'>Github</a></li>
                        </ul>
                    </MainContent>
                </div>
            </Main>
        </Wrapper>
    )
}

export default Home
