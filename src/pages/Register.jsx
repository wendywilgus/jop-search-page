import { Link } from "react-router-dom";
import { FormRow, Logo } from '../components';
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

const Register = () => {
    return <Wrapper>
        <form className="form">
            <Logo />
            <h4>Register</h4>
            <FormRow type='text' name='Name' labelText='First Name' />
            <FormRow type='text' name='LastName' labelText='Last Name' />
            <FormRow type='text' name='location' labelText='State' />
            <FormRow type='email' name='Email' />
            <FormRow type='password' name='Password' />
            <button type="submit" className="btn btn-block">
                Submit
            </button>
            <p>Already a member?<Link to='/login' className="member-btn">Login</Link></p>
        </form>
    </Wrapper>
};

export default Register;