import React from 'react'

import { Links } from '../layout/styles'

import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline'

export default () => {
    return (
    <Links className="go-back-link" to="/">
        <span><ArrowIosBackOutline size="20"/> Return To List</span>
    </Links>
    )
}