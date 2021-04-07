import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import BMI from './components/views/bmi'
import './scss/app';

render(<BMI />, document.getElementById("root"));