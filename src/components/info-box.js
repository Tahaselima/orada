import React from 'react'

import { Link } from 'react-router-dom'

export default () => {
    return (
    <Link className="empty-list" to="/new">
        <span>Liste Boş :( Ekle Bakalım -></span>
    </Link>
    )
}