import "./App.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import initialAuth from "./Firebase/firebase.intiial";
import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

initialAuth();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const gitProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const handleGoogleSign = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      const logInUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(logInUser);
      console.log(result.user);
    });
  };

  const handleFacebookSign = () => {
    signInWithPopup(auth, facebookProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      const logInUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(logInUser);
      console.log(result.user);
    });
  };

  const handleGitSign = () => {
    signInWithPopup(auth, gitProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      const logInUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(logInUser);
      console.log(result.user);
    });
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };

  return (
    <div className="App">
      <Container>
        <div className="contaoner-text">
          <h1> Welcome back</h1>
        </div>
        <Row>
          {!user.name ? (
            <div className="button-div">
              <Button
                className="button-style"
                variant="primary"
                onClick={handleGoogleSign}
              >
                {" "}
                Sign in with Google
              </Button>
              <Button
                className="button-style"
                variant="success"
                onClick={handleFacebookSign}
              >
                {" "}
                Sign in with Facebook
              </Button>
              <Button
                className="button-style"
                variant="danger"
                onClick={handleGitSign}
              >
                {" "}
                Sign in with GitHub
              </Button>
            </div>
          ) : (
            <div>
              <Button
                className="button-style"
                variant="danger"
                onClick={handleSignout}
              >
                {" "}
                Sign Out
              </Button>
            </div>
          )}
          <div>
            {user.name && (
              <div className="details-text">
                <h1>Name: {user.name}</h1>
                <h3> User mail: {user.email}</h3>
                <img src={user.photo} alt="" />
              </div>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
