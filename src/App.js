import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./componets/Screens/HomeScreen";
import LoginScreen from "./componets/Screens/LoginScreen";
import ProfileScrreen from "./componets/Screens/ProfileScrreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("logged in" + authUser.toJSON().toString());
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout);
        console.log("no auth user");
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Router>
        {user == null ? (
          <LoginScreen></LoginScreen>
        ) : (
          <Routes>
            <Route
              key={45436644224}
              exact
              path="/"
              element={<HomeScreen></HomeScreen>}
            />
            <Route exact path="/profile" element={<ProfileScrreen/>} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
