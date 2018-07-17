import React, { Component } from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Reviews from './components/Reviews';
import AddReview from './components/AddReview';

import styled from 'styled-components';

const AppWrapper = styled.div`
    border: 1px solid blue;
    margin: auto
    width: 500px
`;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppWrapper>
                    <Switch>
                        <Route exact path="/" component={Reviews} />
                        <Route path="/reviews" component={Reviews} />
                        <Route path="/add-review" component={AddReview} />
                    </Switch>
                </AppWrapper>
            </BrowserRouter>
        );
    }
}

export default App;
