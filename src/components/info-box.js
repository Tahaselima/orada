import React from 'react'

import { Links } from '../layout/styles'

import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline'
export default () => {
    return (
    <Links className="empty-list" to="/new">
        <span>Liste Boş :( Ekle Bakalım <ArrowIosForwardOutline size="20"/></span>
    </Links>
    )
}