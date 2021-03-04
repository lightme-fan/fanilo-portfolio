import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from './ContextProvider'
import Header from './Header'

const Wrapper = styled.div`
    max-width: 1225px;
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
    }

    li {

        a {
            color: transparent;
            background-repeat: no-repeat;
            padding: 14px 1px;
        }
    }
`;

const Frame = styled.div`
    text-align: center;
    margin: 5rem 0;
    margin-left: -11%;
`;

const Image = styled.img`
    width: 40%;
    height: 40%;
    border-radius: 50%;
    box-shadow: 41px 15px 0px -7px rgba(6,47,150,0.72);
    -webkit-box-shadow: 41px 15px 0px -7px rgba(6,47,150,0.72);
`;


function Home() {
    const { showModal } = useContext(Context)
    return (
        <Wrapper>
            <Header showModal={showModal}/>
            <Frame>
                <Image 
                    src='https://avatars.githubusercontent.com/u/60210180?s=460&u=4f917a503d9aa83ef8b1a75ba78f9223543d7743&v=4' 
                    alt='Photo profile'
                />
            </Frame>
            <div>
                <h2>Hello There!</h2>
                <p>
                    I am Fanilo and I love creating useful stuff. I am a Passionate
                    Front-end Developer, react, redux, typescript and sass. 
                </p>
            </div>

            <ul>
                <li><a className='facebook' href='https://www.facebook.com/fanilo.tokiniaina/'>Facebook</a></li>
                <li><a className='twitter' href='https://twitter.com/Fanilo85066531'>Twitter</a></li>
                <li><a className='github' href='https://github.com/lightme-fan'>Github</a></li>
            </ul>
        </Wrapper>
    )
}

export default Home
