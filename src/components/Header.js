import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from './ContextProvider'

const HeaderStyle = styled.header`
    position: relative;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* max-width: 1225px;
        margin: auto;
        padding: 1rem; */
    }

    h1 {
        margin: 0;
        text-transform: uppercase;

    }

    button {
        margin: 0;
        color: transparent;
        background-color: transparent;
    }

    nav {
        font-size: 24px;
        font-weight: 600px;
        text-transform: uppercase;
        position: absolute;
        top: 100px;
        left: 25%;
        text-align: center;

        ul {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            a {
                color: hsl(231deg, 30%, 52%)
            }
        }
    }
` 

function Header({hideModal, showModal}) {
    const {isModalOpen} = useContext(Context)
    return (
        <HeaderStyle className={isModalOpen && 'modal-header'}>
            <div>
                <h1>
                    <Link to='/'>Fanilo</Link>
                </h1>

                <button className={isModalOpen ? 'open-modal': 'hidden-modal'} onClick={showModal}>Menu</button>
                {isModalOpen &&
                    <nav>
                        <ul>
                            <li>
                                <Link to='/project' onClick={hideModal}>See my work</Link>    
                            </li>    
                            <li>
                                <Link to='/blog' onClick={hideModal}>Blog</Link>    
                            </li>    
                        </ul>    
                    </nav>
                }                
            </div>
        </HeaderStyle>
    )
}

export default Header
