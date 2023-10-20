import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "redux/auth/auth.thunk";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "Pages/HomePage/HomePage";
import { ContactsPage } from "Pages/ContactsPage/ContactsPage";
import { RestrictedRoute } from "Routes/RestrictedRoute";
import { PrivateRoute } from "Routes/PrivateRoute";
import { SharePage } from "Pages/SharePage/SharePage";
import { NotFound } from "Pages/NotFound/NotFound";
import { Flip, ToastContainer } from "react-toastify";
import { FaCircleInfo } from "react-icons/fa6";

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
      <ToastContainer
        autoClose={2500}
        position="bottom-right"
        transition={Flip}
        icon={FaCircleInfo}
      />
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
