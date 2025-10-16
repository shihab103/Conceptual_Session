import { Link } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const {name, email, password,confirmPassword } = data;
    console.log(name,email, password,confirmPassword);

    // password check
    if(password !== confirmPassword){
      console.log("Your password and confirm password not same.");
      return;
    }

    // register ser kaj

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error)=>{
      console.log(error);
    });
    

    
  };
  return (
    <div className="mx-auto mt-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Full Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <label className="label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="input"
            placeholder="Confirm Password"
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link className="text-blue-500 underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;