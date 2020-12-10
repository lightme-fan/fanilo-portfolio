import React, { useContext, useState } from 'react'
import ProjectTemplate from './ProjectTemplate'
import {portfolioData} from '../../data/portfolioData.json'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Context } from './ContextProvider';


function Projects() {
    const { portfolios } = useContext(Context)
    console.log(portfolios);

    const cssData = portfolios.filter(item => item.build_with === '#HTML #CSS #responsive')
    const jsData = portfolios.filter(item => item.build_with === 'js')
    const reactData = portfolios.filter(item => item.build_with === 'react')

    return (
        <Router>
            <section>
                <h2>Project</h2>
                <button><Link to='/'>Html and CSS</Link></button>
                <button><Link to='/js'>Javascript</Link></button>
                <button><Link to='/react'>React</Link></button>
            </section>
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
    )
}

export default Projects
