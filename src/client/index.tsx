import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import BMI from './components/views/bmi'
import Twitter from './components/views/news';
import Feed from './components/views/newsfeed';

import './scss/app';

render(<Feed />, document.getElementById("root"));