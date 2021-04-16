import * as React from 'react';
import { useState, useEffect } from 'react';
import { Hashpassword } from '../utils/security/password';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import homepage from './components/views/homepage';
import about from './components/about';
import videos from './components/views/Videos';
import newvideos from './components/views/Video_page';
import feed from './components/views/newsfeed';
import healthy from './components/views/healthy';

import signup from './components/views/signup';
import login from './components/views/login';
import blogpost from './components/views/blogpost';
import recipepost from './components/views/recipepost';
import eventpost from './components/views/eventpost';

import singleblog from './components/views/singleblog';
import singlerecipe from './components/views/singlerecipe';
import singleevent from './components/views/singleevent';

import editBlog from './components/views/adminblog'
import editEvent from './components/views/adminevent';
import editRecipe from './components/views/adminrecipe';
import BMI from './components/views/bmi';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<BrowserRouter>
		<Navbar />
			<Switch>
				{/* These are the open views that you can get to directly from the navbar */}
				<Route exact path="/" component={homepage} />
				<Route exact path="/about" component={about} />
				<Route exact path="/feed" component={feed} />
				<Route exact path="/videos" component={newvideos} />
				<Route exact path="/healthier_you" component={healthy} />

				{/* These are the paths for creating and posting to the DB */}
				<Route exact path="/signup" component={signup} />
				<Route exact path="/bmi" component={BMI} />

				<Route exact path="/login" component={login} />
				<Route exact path="/post/blog" component={blogpost} />
				<Route exact path="/post/recipe" component={recipepost} />
				<Route exact path="/post/event" component={eventpost} />

				{/* These are the paths for viewing individual pages from the DB */}
				<Route exact path="/view/blogs/:id?" component={singleblog} />
				<Route exact path="/view/recipe/:id?" component={singlerecipe} />
				<Route exact path="/view/event/:id?" component={singleevent} />

				{/* These are the admin paths for the posts */}
				<Route exact path="/admin/blogs/:id?" component={editBlog} />
				<Route exact path="/admin/recipe/:id?" component={editEvent} />
				<Route exact path="/admin/event/:id?" component={editRecipe} />
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;
