import React from 'react'
import './Result.sass'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake,
  faSun, faSmog, } from '@fortawesome/free-solid-svg-icons';
import mobile from '../Responsive/Mobile'
import styled from 'styled-components';
import ForecastHour from './ForecastHour';
import ResultFadeIn from './ResultFadeIn';
import SmallLabel from './SmallLabel';
import MediumLabel from './MediumLabel';
import BigLabel from './BigLabel';
import Text from './Text';

const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  opacity: 0;
  visibility: hidden;
  position: relative;
  top: 20px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

const LocationWrap = styled.div`
  flex-basis: 100%;
`;


const CurrentWeatherWrap = styled.div`
  flex-basis: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto 1fr;
  margin: 20px 0;
  grid-gap: 30px;
  @media ${mobile.mobileL} {
    flex-basis: 50%;
    padding-right: 10px;
  }
  @media ${mobile.tablet} {
    grid-template-columns: 1fr 1fr;
    padding-right: 20px;
  }
`;

const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: #ffffff;
  @media ${mobile.tablet} {
    font-size: 100px;
    justify-content: flex-end;
  }
  @media ${mobile.laptop} {
    font-size: 120px;
  }
  @media ${mobile.laptopL} {
    font-size: 140px;
  }
`;