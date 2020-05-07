import React from 'react'

import { Link } from 'react-router-dom'

export default () => {
    return (
    <Link className="GoBackButton" to="/">
        <span className="m-left-10">Return To List</span>
    </Link>
    )
}