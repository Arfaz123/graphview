import GlassPane from 'components/Glasspane'
import React from 'react'
import '../components/App.css'
const Home = ({ children }) => {
    return (
        <div className="candy-mesh h-screen w-screen p-6">
            <GlassPane className="flex h-full w-full items-center justify-center">
                {children}
            </GlassPane>
        </div>
    )
}

export default Home
