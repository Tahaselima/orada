import React from 'react'
import { Modal } from './';
import { useToasts } from 'react-toast-notifications'
import { useModal }  from '../hooks'
import { 
    ArrowIosUpwardOutline, ArrowIosDownwardOutline 
    } from '@styled-icons/evaicons-outline'
import { Button, Styled } from './styles'

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
            addToast(`${data.linkName} removed successfully`, {
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
                        <div className="list-info-name"> { item.linkName } </div>
                        <div className="list-info-url"> ({ item.linkUrl }) </div>
                        <div className="list-vote-action">
                            <Button onClick={() => props.voteUp(item)}> 
                                <ArrowIosUpwardOutline size="32" /> Up Vote 
                            </Button>
                            <Button 
                                disabled={!item.votes} 
                                onClick={() => props.voteDown(item)}> 
                                <ArrowIosDownwardOutline size="32" />  Down Vote 
                            </Button>
                        </div>
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