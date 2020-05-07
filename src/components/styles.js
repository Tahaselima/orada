import styled from 'styled-components';

export const Button = styled.button`
    font-size: 1em;
    margin-top: 15px;
    padding:0;
    cursor: pointer;
    color: #ff8338;
    text-decoration: unset;
    background: transparent;
    transition: 0.5s;
    justify-content: center;
    display: inline;
    margin-right: 10px;
    border: 0px;
    &:hover {
        color: white;
    }
    &:disabled {
        color:gray;
    }
`;

export const Styled = styled.div`
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
        &-info{
            &-name{
                font-weight:800;
                margin: 6px 0;
            }
            &-url{
                font-size: 0.8em;
            }
        }
    }
`;

export const Modals = styled.div`
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1040;
        width: 100vw;
        height: 100vh;
        background-color: #000;
        opacity: .5;
    }
    
    .modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1050;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        outline: 0;
    }
    
    .modal {
        z-index: 100;
        background: #404040;
        position: relative;
        margin: 11.75rem auto;
        border-radius: 6px;
        max-width: 500px;
        padding: 2rem;
        border: 1px solid #FF6000;
        text-align: center;
    }
    
    .modal-header {
        display: flex;
        justify-content: flex-end;
    }
    
    .modal-close-button {
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 1;
        background: transparent;
        color: #FFF;
        opacity: .3;
        cursor: pointer;
        border: none;
    }

    .template {
        color:white;
        text-align: center;
    }
`;