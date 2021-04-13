import * as React from 'react';
import { useState, useEffect } from 'react';
import { Hashpassword } from '../utils/security/password';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import about from './components/about';
import videos from './components/views/Videos';
import Navbar from './components/navbar';
 import signup from './components/views/signup'
import Feed from './components/views/newsfeed'
import homepage from './components/views/homepage';
import Twitter from './components/views/news';
import BMI from './components/views/bmi';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<BrowserRouter>
		<Navbar />
			<Switch>
				<Route exact path="/" component={homepage} />
				<Route exact path="/about" component={about} />
				<Route exact path="/signup" component={signup} />
				<Route exact path="/feed" component={Feed} />
				<Route exact path="/videos" component={videos} />
				<Route exact path="/twitter" component={Twitter} />
				<Route exact path="/bmi" component={BMI} />

			</Switch>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;
