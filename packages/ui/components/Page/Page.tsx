import React, { FC } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const About: FC = () => (
    <h1>About</h1>
);

const Home: FC = () => (
    <h1>Home</h1>
);

const User: FC = () => (
    <h1>User</h1>
);

export const Page: FC = () => (
    <>
        <Helmet>
            <title>test 123</title>
        </Helmet>
        <nav>
            <Link to="/">home</Link>
            <br />
            <Link to="/about">about</Link>
            <br />
            <Link to="/user">user</Link>
            <br />
        </nav>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
        </Switch>
    </>
);
