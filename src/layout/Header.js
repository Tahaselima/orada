import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return(
    <header className="Header">
      <div className="container">
        <div>
          <Link className="logo" to="/">hepsiorada</Link>
        </div>
        <div>
          <span className="linkVote"><b>Link</b><span>VOTE</span> Challenge</span>
        </div>
      </div>
    </header>
  )
}