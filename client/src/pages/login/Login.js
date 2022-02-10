import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Social Media</h3>
          <span className='loginDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            consectetur deserunt architecto saepe eius doloremque distinctio
            accusamus commodi a maiores!
          </span>
        </div>

        <div className='loginRight'>
          <div className='loginBox'>
            <input type='email' placeholder='Email' className='loginInput' />
            <input
              type='password'
              placeholder='Password'
              className='loginInput'
            />
            <button className='loginButton'>Log In</button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
