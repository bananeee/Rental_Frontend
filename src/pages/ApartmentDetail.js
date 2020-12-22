import React from 'react'
import ApartmentDetailMain from '../component/ApartmentDetails/ApartmentDetailMain/ApartmentDetailMain'
import Footer from '../component/Layout/Footer/Footer'
import Nav from '../component/Layout/Nav/Nav'

function ApartmentDetail({ match }) {
    return (
        <div>
            <Nav />
            <ApartmentDetailMain id={match.params.id}
                style={{
                    marginTop: "8vh"
                }}/>
            <Footer />
        </div>
    )
}

export default ApartmentDetail
