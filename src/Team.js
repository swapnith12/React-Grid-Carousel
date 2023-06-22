import React from 'react'
import image1 from './pxl1.jpg'
import Samplecard from './Samplecard'
import Footer from './Footer'


function Team() {
    return (
        <div style={{ backgroundImage: `url(${image1})`, height: "100vh", backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: 'column' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Samplecard />
            </div>
            <div style={{ marginTop: 'auto' }}>
                <Footer />
            </div>
        </div>
    )
}

export default Team
