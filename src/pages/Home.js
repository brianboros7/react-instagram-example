import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return(
        <section>
            <h1>Hello World</h1>

            <Link to="/login">Login</Link>
        </section>
    )
}

export default Home 