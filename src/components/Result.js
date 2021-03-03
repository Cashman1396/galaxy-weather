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

const TemperatureWrap = styled.div``;

const Temperature = styled.h2`
display: block;
  font-size: 50px;
  font-weight: 400;
  color: #ffffff;
  @media ${mobile.tablet} {
    font-size: 70px;
  }
  @media ${mobile.laptop} {
    font-size: 90px;
  }
  @media ${mobile.laptopL} {
    font-size: 110px;
  }
`;

const WeatherDetailsWrap = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  align-self: flex-start;
  @media ${mobile.mobileL} {
    flex-basis: 50%;
  }
`;

const WeatherDetail = styled.div`
flex-basis: calc(100% / 3);
  padding: 10px;
  @media ${mobile.laptop} {
    padding: 20px 10px;
  }
`;


const ForecastWrap = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
`;

const Forecast = styled.div`
position: relative;
display: flex;
overflow-x: scroll;
overflow-y: hidden;
scrollbar-color: lightgray #ffffff;
scrollbar-width: thin;
margin-top: 20px;
padding-bottom: 20px;
@media ${mobile.laptop} {
  order: 4;
}
`;

const Result = ({ weather }) => {
  const {
    city,
    country,
    date, 
    description,
    main,
    temp,
    sunset,
    sunrise,
    humidity,
    wind,
    highestTemp,
    lowestTemp,
    forecast,
  } = weather;

  const forecasts = forecast.map(item => (
    <ForecastHour key={item.dt}
    temp={Math.floor(item.main.temp * 1) / 1}
    icon={item.weather[0].icon}
    month={item.dt_txt.slice(5, 7)}
    day={item.dt_txt.slice(8, 10)}
    hour={item.dt_txt.slice(11, 13) * 1}
    />
  ));

  let WeatherIcon = null;

  if (main === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  eturn (
    <Results>
      <LocationWrap>
        <BigLabel>
          {city}, {country}
        </BigLabel>
        <SmallLabel weight="400">{date}</SmallLabel>
      </LocationWrap>
      <CurrentWeatherWrap>
        <WeatherIcon>{weatherIcon}</WeatherIcon>
        <TemperatureWrap>
          <Temperature>{Math.floor(temp)}&#176;</Temperature>
          <SmallLabel weight="400" firstToUpperCase>
            {description}
          </SmallLabel>
        </TemperatureWrap>
      </CurrentWeatherWrap>
      <WeatherDetailsWrap>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {Math.floor(highestTemp)}&#176;
          </SmallLabel>
          <Text align="center">Hight</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {wind}mph
          </SmallLabel>
          <Text align="center">Wind</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {sunrise}
          </SmallLabel>
          <Text align="center">Sunrise</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {Math.floor(lowestTemp)}&#176;
          </SmallLabel>
          <Text align="center">Low</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {humidity}%
          </SmallLabel>
          <Text align="center">Rain</Text>
        </WeatherDetail>
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {sunset}
          </SmallLabel>
          <Text align="center">Sunset</Text>
        </WeatherDetail>
      </WeatherDetailsWrap>
      <ForecastWrap>
        <MediumLabel weight="400">Forecast</MediumLabel>
        <Forecast>{forecasts}</Forecast>
      </ForecastWrap>
    </Results>
  );
};

Result.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    main: PropTypes.string,
    temp: PropTypes.number,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    humidity: PropTypes.number,
    wind: PropTypes.number,
    highestTemp: PropTypes.number,
    lowestTemp: PropTypes.number,
    forecast: PropTypes.array,
  }).isRequired,
}

export default Result