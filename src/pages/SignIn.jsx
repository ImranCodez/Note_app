import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import firebg from "../assets/firebg.jpg";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    errors: "",
  });

  const hanldlesubmit = (e) => {
    e.preventDefault();

    if (isLoading) return;
    if (!formdata.email)
      return setformdata((prev) => ({ ...prev, errors: "enter your email" }));
    if (!formdata.password)
      return setformdata((prev) => ({
        ...prev,
        errors: "enter your password",
      }));
    setIsLoading(true);
    setformdata((prev) => ({ ...prev, errors: "" }));
    setformdata({
      email: "",
      password: "",
      errors: "",
    });
    const auth = getAuth();
    signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-email") {
          setformdata((prev) => ({
            ...prev,
            errors: "Please enter a valid email address",
          }));
        } else if (errorCode === "auth/user-not-found") {
          setformdata((prev) => ({
            ...prev,
            errors: "No user found with this email address",
          }));
        } else if (errorCode === "auth/wrong-password") {
          setformdata((prev) => ({ ...prev, errors: "Incorrect password" }));
        } else {
          setformdata((prev) => ({
            ...prev,
            errors: "An error occurred. Please try again.",
          }));
        }

        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };
  console.log(formdata);
  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-5 py-10"
      style={{
        backgroundImage: `url(${firebg})`,
      }}
    >
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-cyan-200/25 bg-[#0b102877] p-7 shadow-2xl shadow-black/60 transition-all duration-300 hover:scale-105 sm:p-9">
        <div className="mb-7 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Cosmic notes
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-indigo-100/70">
            Sign in to continue your journey.
          </p>
        </div>
        {formdata.errors && (
          <p
            key={formdata.errors}
            className="error-message rounded-lg border border-red-500 bg-rose-950/50 px-2 py-2 text-center text-sm font-semibold text-rose-200"
            role="alert"
          >
            {formdata.errors}
          </p>
        )}
        <form onSubmit={hanldlesubmit}>
          <div className="mb-4">
            <label
              className="text-sm font-semibold text-indigo-100"
              htmlFor="email"
            >
              Email
            </label>
            <div className="mt-1 flex items-center rounded-lg border border-indigo-200/20 bg-white/10 px-3 py-2.5 transition focus-within:border-cyan-300 focus-within:ring-4 focus-within:ring-cyan-300/15">
              <FaEnvelope className="mr-3 text-cyan-300" />
              <input
                id="email"
                type="email"
                className="w-full bg-transparent text-white outline-none placeholder:text-indigo-100/45"
                placeholder="example@mail.com"
                value={formdata.email}
                onChange={(e) =>
                  setformdata({ ...formdata, email: e.target.value,  errors: "", })
                }
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="text-sm font-semibold text-indigo-100"
              htmlFor="password"
            >
              Password
            </label>
            <div className="mt-1 flex items-center rounded-lg border border-indigo-200/20 bg-white/10 px-3 py-2.5 transition focus-within:border-cyan-300 focus-within:ring-4 focus-within:ring-cyan-300/15">
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                title={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((visible) => !visible)}
                className="mr-3 text-cyan-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaLock />}
              </button>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full bg-transparent text-white outline-none placeholder:text-indigo-100/45"
                placeholder="Enter your password"
                value={formdata.password}
                onChange={(e) =>
                  setformdata({ ...formdata, password: e.target.value, errors: "" })
                }
              />
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between gap-4 text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-indigo-100/75">
              <input type="checkbox" className="h-4 w-4 accent-cyan-400" />
              Remember me
            </label>
            <button
              type="button"
              className="font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-lg py-3  font-semibold transition hover:bg-blue-300  ${
              isLoading
                ? "cursor-not-allowed bg-blue-700 text-black"
                : "bg-blue-500 from-cyan-400 to-violet-500 text-white shadow-lg shadow-violet-950/40 hover:from-cyan-300 hover:to-violet-400"
            }`}
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-indigo-100/70">
          Don&apos;t have an account?{" "}
          <Link className="text-cyan-400" to="/register">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
