import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from './steams/StreamList';
import StreamShow from './steams/SteamShow';
import StreamEdit from './steams/StreamEdit';
import StreamDelete from './steams/StreamDelete';
import StreamCreate from './steams/StreamCreate';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/stream/new" component={StreamCreate} />
                    <Route path="/stream/edit" component={StreamEdit} />
                    <Route path="/stream/show" component={StreamShow} />
                    <Route path="/stream/delete" component={StreamDelete} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;