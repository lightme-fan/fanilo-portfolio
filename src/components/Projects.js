import React, { useContext, useState } from 'react'
import ProjectTemplate from './ProjectTemplate'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Context } from './ContextProvider';


function Projects() {
    const { portfolios } = useContext(Context)
    
    const cssData = portfolios.filter(item => item.build_with === '#HTML #SCSS #responsive')
    const jsData = portfolios.filter(item => item.build_with === 'Vanila js')
    const reactData = portfolios.filter(item => item.build_with === 'React')

    return (
        <Router>
            <section>
                <h2>Project</h2>
                <Link to='/'><button>Html and CSS</button></Link>
                <Link to='/js'><button>Javascript</button></Link>
                <Link to='/react'><button>React</button></Link>
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
