import React from 'react';
import Link from "next/link";
import Logo from "./helpdesk.png"
import Image from 'next/image'

function Navbar() {
    return (
        <nav>

            <h1>Helpdesk</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    )
}

export default Navbar