import React from 'react'
import Modal from './modal';
import { useToasts } from 'react-toast-notifications'
import useModal  from '../hooks/useModal'

import styled from 'styled-components';

const Styled = styled.div`
    position: relative;
    font-size: 1em;
    margin: 1em;
    padding: 10px;
    color: white;
    cursor: pointer;
    border: 1px solid #191919;
    border-radius: 10px;
    background-color: #1b1b1b;
    transition: 0.3s;
    display:flex;
    align-items: center;
        &:hover {
            background-color: #232323;
            border: 1px solid #FF6000;
            .delete-button{
                position: absolute;
                display: block;
                right: -5px;
                padding: 1em;
                top: -5px;
                border-radius: 10px;
                background: #191919;
                border: 1px solid #FF6000;
                color: #FFF;
                line-height: 8px;
                cursor: pointer;
            }
        }
        
    & .delete-button {
        display: none;
    }
    .list {
        &-vote {
        background: linear-gradient(to right,#242424 0,#191919 157%);
        border: 1px solid #191919;
        padding: 20px;
        text-align: center;
        border-radius: 5px;
        margin-right: 20px;
            & > div:first-child {
                font-size: 20px;
                margin-bottom: 5px;
                }
        }
    }
`;


export default function ListNodes(props) {
    const { addToast } = useToasts()
    const { isShowing, toggle, data, setData } = useModal();

    let template = () => {
        return (
            <div className="template">
                <p> Do you want to remove ? </p>
                <p> {data.linkName} </p>
            </div>
        )
    }   
    
    let confirm = {
        action: (close) => {
            toggle()
            props.deleteAction(data)
            addToast(`Link removed successfully`, {
                appearance: 'success'
            })
        }
    }
    return (
        <div>
        {props.links.map((item, index) => 
                <Styled key={index}>
                    <div className="list-vote"> 
                        <div>{ item.votes }</div>
                        <div>Vote</div>
                    </div>
                    <div className="list-info">
                        <div> { item.linkName } </div>
                        <div> ({ item.linkUrl }) </div>
                    </div>
                    <button
                        className="delete-button"
                        key={index}
                        onClick={() => { setData(item); toggle(); }}
                    > X
                    </button>
                </Styled>
        )}
            <Modal
                isShowing={isShowing}
                hide={toggle}
                data={data}
                confirm={confirm}
                Template={template}
            />
        </div>
    );
}