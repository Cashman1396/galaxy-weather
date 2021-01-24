import React, { Component } from 'react';
import styled from 'styled-components';


const AppTitle = styled.h1`
  display: block;
  height: 64px; 
  margin: 0;
  padding: 20px 0;
  font-size 30px;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
  transition: 0.3s 1.4s;
  opacity: ${({ showLabel }) => (showLabel ? 1 : 0)};

  ${({ secondary }) =>
  secondary &&
  `
  opacity: 1;
  height: auto;
  position: relative;
  padding: 20px 0;
  font-size: 30px;
  top: 20%;
  text-align: center;
  transition: .5s;
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 50px;
  }
  @media ${device.laptopL} {
    font-size: 60px;
  }
  @media ${device.desktop} {
    font-size: 70px;
  }
  
`}

${({ showResult }) =>
showResult &&
`
opacity: 0;
visibility: hidden;
top: 10%;
`}


`;

const WeatherWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: calc(100vh - 64px);
  width: 100%;
  position: relative;
`;

  class App extends Component {
    state = {
      value: '',
      weatherInfo: null,
      error: false,
    };
    
    handleInputChange = e => {
      this.setState({
        value: e.target.value,
      })
    }

    handleSearchCity = e => {
      e.preventDefault();
      const APIkey = process.env.REACT_APP_API_KEY
      const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIkey}&units=metric`;
      const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${APIkey}&units=metric`;

      Promise.all([fetch(weather), fetch(forecast)])
        .then(([res1, res2]) => {
          if (res1.ok && res2.ok) {
            return Promise.all([res1.json(), res2.json()]);
          }
          throw Error(res1.statusText, res2.statusText)

        })
        .then(([data1, data2]) => {
          const months =  [
            'January',
            'Febuary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
          const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ]
          const currentDate = new Date();
          const date = `${day[currentDate.getDate()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}` 
        })
    }
    
  }

  

