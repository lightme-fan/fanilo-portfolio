import React, { createContext, useEffect, useState } from 'react'

import projects from '../../projects.json'

const Context = createContext()

function ContextProvider({children}) {
    const [ portfolios, setPortfolios ] = useState([])
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    
    const showModal = () => {
        console.log('Ít is working');
        setIsModalOpen(!isModalOpen)
    }

    const hideModal = () => {
        console.log('Ít is working');
        setIsModalOpen(false)
    }

    useEffect(() => {      
        setPortfolios(projects)
    }, [])

    return (
        <Context.Provider value={{portfolios, isModalOpen, hideModal, showModal}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
