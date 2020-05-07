import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Styled = styled.div`
    & > .public-layout 
    { 
        background: ${props => props.theme.dark};
        height: 100vh;
        .Header {
            min-height: 80px;
            background: ${props => props.theme.black};
            position: sticky;
            top: 0;
            left: 0;
            z-index: 10;
            .container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-height: inherit;
                max-width: 1200px;
                margin: auto;
                .logo{
                    color: ${props => props.theme.orange};
                    font-size: ${props => props.theme.fontSizeLg};
                    text-decoration-line: unset;
                }
                .linkVote{
                    color: ${props => props.theme.white};
                }
            }
        }
        .content {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-top: 60px;
            min-height: inherit;
            max-width: 1200px;
            margin: auto;
            .container {
                width: 100%
            }
        }
    }
`;

export const Links = styled(Link)`
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
  & span {
    display: flex;
    align-items: center;
  }
`;

export const SelectBoxs = styled.select`
    align-items: center;
    display: flex;
    margin: auto;
    appearance: none;
    font-size: 1em;
    border: 1px solid #ff8338;
    flex: 1;
    outline: none;
    background: linear-gradient(to right,#191919 0,#242424 157%);
    color: #ff8338;
    padding: 1em 2em 1em 1em;
    margin-top: 20px;
`;

export const Input = styled.input`
    align-items: center;
    display: flex;
    margin: auto;
    appearance: none;
    font-size: 1em;
    border: 1px solid #383838;
    flex: 1;
    border-radius: 10px;
    min-width: 300px;
    outline: none;
    background: linear-gradient(to right,#191919 0,#242424 157%);
    color: #ff8338;
    padding: 1em 2em 1em 1em;
    margin-top: 20px;
    &:focus{
        box-shadow: inset 0px 0px 29px -16px rgba(0,0,0,0.82);
        border: 1px solid #ff8338;
    }
    &.error {
        border: 1px solid red !important;
    }
`;

export const Error = styled.p`
    margin: auto;
    display: flex;
    justify-content: center;
    color: red;
`;

export const Button = styled.button`
  font-size: 1em;
  padding: 1em 2em;
  border-radius: 8px;
  color: #ff8338;
  text-decoration: unset;
  background: linear-gradient(to right,#242424 0,#191919 157%);
  border: 1px solid #191919;
  transition: 0.5s;
  justify-content: center;
  cursor: pointer;
  display: block;
  margin: auto;
  margin-top: 30px;
  max-width: fit-content;
  &:hover {
    background: linear-gradient(to right,#191919 0,#242424 157%);
    border: 1px solid #191919;
    color: white;
    border: 1px solid #ff8338;
  }
  & span {
    display: flex;
    align-items: center;
  }
`;