import React from 'react'
import Footer from '../component/Layout/Footer/Footer'
import Nav from '../component/Layout/Nav/Nav'
import CardContainer from '../component/List/CardContainer/CardContainer'

function List() {
    return (
        <div>
            <Nav />
            <CardContainer 
                style={{
                    marginTop: "8vh"
                }}/>
            <Footer />
        </div>
    )
}

export default List

