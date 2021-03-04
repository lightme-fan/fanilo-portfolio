import React, { useContext } from 'react'
import Profile from './Profile'
import Languages from './Languages'
import Hobbies from './Hobbies'
import Blog from './Blog'
import Experiences from './Experiences'
import Projects from './Projects'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import { Context } from './ContextProvider'
import Home from './Home'

function App() {
    return (
        <>        
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/project">
                    <Projects />
                </Route>
                <Route path="/blog">
                    <a href='https://lightme-fan.github.io/blog/'>Blog</a>
                </Route>
                {/* <Profile/>
                <div className='menu--list'>
                    <Languages/>
                    <Hobbies/>
                    <Blog/>
                    {/* <Experiences/>
                </div>
                <Projects/>  */}
            </Switch>
        </>
    )
}

export default App
