import React from 'react'

import { Links } from '../layout/styles'

import { Plus } from '@styled-icons/entypo'


export default () => {
    return (
    <Links className="add-new-link" to="/new">
        <span><Plus size="20"/> Add New Link</span>
    </Links>
    )
}