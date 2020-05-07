import React from 'react'
import { SelectBoxs } from '../layout/styles'

export default function SelectBox(props) {
    return (
        <SelectBoxs onChange={(e) => props.setType(e.target.value)}>
        {
            props.sortOptions.map((o,index) => {
            return (<option 
                disabled={o.disabled}
                selected={o.selected}
                key={index}
                value={o.value}>
                {o.label}
                </option>)
            })
        } 
        
        </SelectBoxs>
    );
}