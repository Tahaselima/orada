import React from 'react'
import {InfoBox, ListNodes} from '../components'

export default function Links(props) {
    return (
        props.links.length 
            ? <ListNodes links={props.links} deleteAction={ (data) => props.deleteAction(data)} /> 
            : <InfoBox/>
    );
}