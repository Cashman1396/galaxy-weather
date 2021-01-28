import React from 'react'
import './Result.sass'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake,
  faSun, faSmog, } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import ForecastHour from './ForecastHour';
import ResultFadeIn from './ResultFadeIn';
import SmallLabel from './SmallLabel';
import MediumLabel from './MediumLabel';
import BigLabel from './BigLabel';
import Text from './Text';