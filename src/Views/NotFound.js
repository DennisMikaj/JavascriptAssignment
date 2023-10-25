import React from 'react'
import Footer from '../Components/Footer'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="wrapper">
    <main>
      <div className="page-not-found">
    <h1>404 Page Not Found</h1>
    <Link to="/" className="btn-yellow" >Go back</Link>
    </div>
    </main>
    <Footer />
    </div>
)
}

export default NotFound