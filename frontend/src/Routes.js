import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import NotFound from './containers/NotFound';
import NewNote from './containers/NewNote';
import Notes from './containers/Notes';
import Settings from './containers/Settings';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

export default function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<UnauthenticatedRoute exact path='/login'>
				<Login />
			</UnauthenticatedRoute>
			<UnauthenticatedRoute exact path='/signup'>
				<SignUp />
			</UnauthenticatedRoute>
			<AuthenticatedRoute exact path='/settings'>
				<Settings />
			</AuthenticatedRoute>
			<AuthenticatedRoute exact path='/notes/new'>
				<NewNote />
			</AuthenticatedRoute>
			<AuthenticatedRoute exact path='/notes/:id'>
				<Notes />
			</AuthenticatedRoute>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
}
