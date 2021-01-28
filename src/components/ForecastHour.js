import React from ' react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SmallLabel from './SmallLabel'
import Text from './Text'
import mobile from '../Responsive/Mobile'

const ForecastWrap = styled.div`
flex-shrink: 0;
  flex-basis: 90px;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  @media ${device.tablet} {
    flex-basis: 110px;
  }
  @media ${device.laptop} {
    flex-basis: 125px;
  }
  @media ${device.laptopL} {
    flex-basis: 140px;
  }
`;

const WeatherIcon = styled.img`
    display: block;
    height: 50px;
    width: 50px;
    margin: 0 auto;
`
