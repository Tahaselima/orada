import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border-radius: 8px;
  color: #ff8338;
  text-decoration: unset;
  background: linear-gradient(to right,#242424 0,#191919 157%);
  border: 1px solid #191919;
  transition: 0.5s;
  justify-content: center;
  display: inline;
  margin: 0px 5px;
  max-width: fit-content;
  cursor: pointer;
  &:hover, &.current {
    background: linear-gradient(to right,#191919 0,#242424 157%);
    border: 1px solid #191919;
    color: white;
    border: 1px solid #ff8338;
  }
`;

const Styled = styled.div`
  display: flex;
  justify-content: center;
  }
`;

export default function Pagination(props) {
    return (
        props.maxPage > 1 
        ? 
            <Styled>
                <Button  
                        onClick={() => props.prev()} >
                        Prev
                </Button>
                {
                    Array(props.maxPage).fill().map((item, index) => 
                        <Button 
                            key={index} 
                            className={index + 1 === props.currentPage ? 'current': ''} 
                            onClick={() => props.jump(index + 1)} >
                            {index + 1}
                        </Button>)
                }
                <Button  
                        onClick={() => props.next()} >
                        Next
                </Button>
            </Styled>
        : null
    );
}