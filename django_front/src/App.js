import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Top } from './User/pages/Top';
import { UserTop } from './User/pages/UserTop';
import { UserDetail } from './User/pages/UserDetail';
import { UserNew } from './User/pages/UserNew';
import { UserUpdate } from './User/pages/UserUpdate';

export const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route exact path='/' element={<Top />} />
                        <Route exact path='/user' element={<UserTop />} />
                        <Route exact path='/user/new' element={<UserNew />} />
                        <Route exact path='/user/detail/:id' element={<UserDetail />} />
                        <Route exact path='/user/detail/:id/update' element={<UserUpdate />} />
                        <Route render={() => <h4>not found...</h4>} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;