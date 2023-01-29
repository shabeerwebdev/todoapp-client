import React from "react";

import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/actions/authActions";

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/signin");
  };

  return (
    <>
      <div className="root">
        <nav className="nav" style={{}}>
          <div className="items">
            <p variant="h4" className="title">
              <Link className="linkStyle" to="/">
                MyTodo
              </Link>
            </p>
            {user._id ? (
              <>
                <p className="title">Logged in as {user.name}</p>
                <button
                  edge="end"
                  color="inherit"
                  className="authButton"
                  onClick={() => handleSignOut()}
                >
                  <Link className="linkStyle" to="/">
                    SignOut
                  </Link>
                </button>
              </>
            ) : (
              <>
                <button edge="end" color="inherit" className="authButton">
                  <Link className="linkStyle" to="/signin">
                    SignIn
                  </Link>
                </button>
                <button edge="end" color="inherit" className="authButton">
                  <Link className="linkStyle" to="/signup">
                    SignUp
                  </Link>
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
