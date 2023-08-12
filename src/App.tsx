//react
import React, {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';

//css
import './App.css';

//pages
import {NotFound} from "./pages/NotFound/NotFound";

//components
import {routers} from "./routers/routers";
import {StyledloadingCircle} from "./components/StylesComponents";

function App() {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                {/*<Route element={<PrivateRoute/>}>*/}
                {/*    {privateRouters.map(({path, Element}) => (*/}
                {/*        <Route key={path} element={<Element/>} />*/}
                {/*    ))}*/}
                {/*</Route>*/}
                {routers.map(({path, Element, ...props}) => (
                    <Route key={path} path={path} element={<Element {...props} />}/>
                ))}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Suspense>
    );
}

function Loading() {
    return <StyledloadingCircle></StyledloadingCircle>;
}

export default App;
