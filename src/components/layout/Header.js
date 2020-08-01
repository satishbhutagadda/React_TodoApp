import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    background: '#6f6f6f',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}