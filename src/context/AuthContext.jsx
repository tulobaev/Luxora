import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { Alert } from "@mui/material";

const authProduct = createContext();
export const useAuth = () => useContext(authProduct);

const initialState = {
  user: null,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return { ...state, user: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
const AuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [state, dispatch] = useReducer(reducer, initialState);

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  }

  function getUserData() {
    return onAuthStateChanged(auth, (user) => {
      try {
        dispatch({
          type: "GET_USER_DATA",
          payload: user,
        });
      } catch (error) {
        dispatch({
          type: "ERROR",
          payload: error.message,
        });
      }
    });
  }

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  async function logOut() {
    signOut(auth)
      .then(() => {
        return <Alert severity="success">Sign-out successful.</Alert>;
      })
      .catch((error) => {
        return <Alert severity="error">An error happened.</Alert>;
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  const values = {
    signInWithGoogle,
    user: state.user,
    register,
    logOut,
    error: state.error,
  };
  return <authProduct.Provider value={values}>{children}</authProduct.Provider>;
};

export default AuthContext;
