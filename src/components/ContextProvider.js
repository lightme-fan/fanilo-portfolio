import React, { createContext, useEffect, useState } from 'react'

import { portfolioData } from '../../data/portfolioData.json'
const Context = createContext()

function ContextProvider({children}) {
    const [ portfolios, setPortfolios ] = useState([])

    useEffect(async () => {
        const response = await fetch(portfolioData)
        const data = await response.json()
        setPortfolios(data)
    }, [])

    console.log(portfolioData);
    return (
        <Context.Provider value={{portfolios}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
