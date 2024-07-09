"use client"

import React from 'react'
import AuthForm from '../AuthForm'

function Signup() {
    const handleSubmit = async (e, email, password) => {
        e.preventDefault()

        console.log("signup", email, password)
    }

    return (
        <main>
            <h2 className='text-center'>Signup</h2>
            <AuthForm handleSubmit={handleSubmit} />
        </main>
    )
}

export default Signup