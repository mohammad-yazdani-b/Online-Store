import { Link } from "react-router-dom";
import Loginform from "../components/Loginform";

const Login = () => {
  return (
    <div className="login-page">
      <div class="login-container">
        <div class="form-div">
          <h3 class="project-title">welcom</h3>
          <div class="loginForm">
            <Loginform />
            <div class="link-wrapper">
              <Link to="/signIn">creat new account</Link>
            </div>
          </div>
        </div>
        <div class="img-div">
          <img src="/images/2.png" class="img-responsive" alt="" />
        </div>
      </div>
      <div class="circle"></div>
    </div>
  );
};

export default Login;
