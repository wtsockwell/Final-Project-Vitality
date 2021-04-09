import * as React from 'react';
import { useState, useEffect } from 'react';
import {Hashpassword} from '../utils/security/password';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import home from './components/home';
import about from './components/about';
import BMI from './components/views/bmi'
import Twitter from './components/views/news';
import Feed from './components/views/newsfeed';


/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path = "/" component = {home}/>
				<Route exact path = "/about" component={about} />
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
