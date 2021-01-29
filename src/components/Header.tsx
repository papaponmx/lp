import React from 'react'

const Header: React.FC<{ cta: string}> = ({ cta }) => {
    return (
        <header>
            TODO: Add nav menu
            <button className="bg-yellow-300	 text-3xl text-yellow-50 flex justify-center content-center">{cta}</button>

        </header>
    )
}

export default Header

