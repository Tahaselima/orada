import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components';

const Links = styled(Link)`
  font-size: 1em;
  margin: 1em;
  padding: 1em 2em;
  border-radius: 8px;
  color: #ff8338;
  text-decoration: unset;
  background: linear-gradient(to right,#242424 0,#191919 157%);
  border: 1px solid #191919;
  transition: 0.5s;
  justify-content: center;
  display: block;
  margin: auto;
  max-width: fit-content;
  &:hover {
    background: linear-gradient(to right,#191919 0,#242424 157%);
    border: 1px solid #191919;
    color: white;
    border: 1px solid #ff8338;
  }
`;

export default () => {
    return (
    <Links className="add-new-link" to="/new">
        <span>Add New Link</span>
    </Links>
    )
}