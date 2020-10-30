import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer.js'
import './Layout.css'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default Layout
