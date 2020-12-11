import React, { createContext, useEffect, useState } from 'react'

import projects from '../../projects.json'

const Context = createContext()

function ContextProvider({children}) {
    const [ portfolios, setPortfolios ] = useState([])
    
    useEffect(() => {      
        setPortfolios(projects)
    }, [])

    return (
        <Context.Provider value={{portfolios}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
