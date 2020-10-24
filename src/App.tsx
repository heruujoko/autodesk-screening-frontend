import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";

const Signin = lazy(() => import("./pages/Signin/Signin"));
function App() {
    return (
        <div className="main-container">
            <Router>
                <Suspense fallback={<div></div>}>
                    <Switch>
                        <Route path="/">
                            <AuthLayout>
                                <Signin />
                            </AuthLayout>
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
