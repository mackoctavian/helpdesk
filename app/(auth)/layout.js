import Link from "next/link"

function AuthLayout({ children }) {
    return (
        <>
            <nav>
                <h1>Helpdesk</h1>
                <Link href="/signup">Signup</Link>
                <Link href="/login">Login</Link>
            </nav>
            {children}
        </>
    )
}

export default AuthLayout