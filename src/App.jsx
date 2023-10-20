import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "redux/auth/auth.thunk";
import { Routes, Route } from "react-router-dom";
// import { SharedLayout } from './components/SharedLayout/SharedLayout';
// import { HomeScreen } from './components/HomeScreen/HomeScreen';
// // import { RestrictedRoute } from './components/Routes/RestrictedRoute';
// import { PrivateRoute } from './components/Routes/PrivateRoute';
import { HomePage } from "Pages/HomePage/HomePage";
import { ContactsPage } from "Pages/ContactsPage/ContactsPage";
import { RestrictedRoute } from "Routes/RestrictedRoute";
import { PrivateRoute } from "Routes/PrivateRoute";
import { SharePage } from "Pages/SharePage/SharePage";
import { NotFound } from "Pages/NotFound/NotFound";

// const ContactsPage = lazy(() => import('./Pages/ContactsPage/ContactsPage'));

// const RegPage = lazy(() => import('./Pages/RegPage/RegPage'));
// const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(refreshThunk());
    }
  }, [dispatch, token]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute
              component={HomePage}
              redirectTo={"/contacts"}
            />
          }
        />
        {/* <Route index element={<HomeScreen />} /> */}
        {/* <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo={'/contacts'} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegPage} redirectTo={'/contacts'} />
            }
          /> */}
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              component={ContactsPage}
              redirectTo={"/"}
            />
          }
        />
        <Route path="/share/:shareLink">
          <Route
            path=":id"
            element={<SharePage />}
          ></Route>
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};
