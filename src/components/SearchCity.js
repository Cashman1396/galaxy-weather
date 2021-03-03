import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import mobile from '../Responsive/Mobile'

const SearchBar = styled.form`
top: ${({ showResult }) => (showResult ? '0%' : '30%')};
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  transition: 0.8s 0.5s;
  @media ${mobile.laptopL} {
    max-width: 600px;
  }
  @media ${mobile.desktop} {
    max-width: 700px;
  }
`;

const SearchInput = styled.input`
width: 100%;
border: none;
background-color: #ffffff;
font-size: 16px;
padding: 10px 15px 10px 40px;
color: #c5c5c5;
transition: 0.2s;
border-radius: 20px;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
&:focus {
  color: #191919;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  outline: none;
}
@media ${device.tablet} {
  font-size: 18px;
}
@media ${device.laptop} {
  padding: 15px 20px 15px 45px;
  border-radius: 30px;
}
`