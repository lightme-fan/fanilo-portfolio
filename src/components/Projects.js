import React, { useContext, useState } from 'react'
import ProjectTemplate from './ProjectTemplate'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Context } from './ContextProvider';
import Header from './Header';
import styled from 'styled-components';

const Frame = styled.section`
    max-width: 1225px;
    margin: auto;
    padding: 1rem;
`;

function Projects() {
    const { portfolios, isModalOpen, hideModal, showModal } = useContext(Context)
    
    const cssData = portfolios.filter(item => item.build_with === '#HTML #SCSS #responsive')
    const jsData = portfolios.filter(item => item.build_with === 'Vanilla js')
    const reactData = portfolios.filter(item => item.build_with === 'React')

    return (
        <>
        <Header hideModal={hideModal} showModal={showModal}/>
        <Frame>
            <Router>
                <div>
                    <Link to='/'><button>Html and CSS</button></Link>
                    <Link to='/js'><button>Javascript</button></Link>
                    <Link to='/react'><button>React</button></Link>
                </div>
                <Switch>
                    <Route exact path='/'>
                        <div className='project--list'>                
                            {cssData.map(item => 
                                <ProjectTemplate key={item.id} {...item}/>
                            )}
                        </div>
                    </Route>

                    <Route path='/js'>
                        <div className='project--list'>                
                            {jsData.map(item => 
                                <ProjectTemplate key={item.id} {...item}/>
                            )}
                        </div>
                    </Route>

                    <Route path='/react'>
                        <div className='project--list'>                
                            {reactData.map(item => 
                                <ProjectTemplate key={item.id} {...item}/>
                            )}
                        </div>
                    </Route>
                </Switch>
            </Router>
        </Frame>
        </>
    )
}

export default Projects
