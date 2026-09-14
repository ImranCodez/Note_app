import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSpinner,
} from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import firebg from "./assets/firebg.jpg";

export default function Register() {
  const auth = getAuth();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isInvalid =
    !data.name || !data.email || !data.password || !data.confirmPassword;

  const handleRegister = async () => {
    if (isLoading) return;

    if (isInvalid) {
      setData((prev) => ({ ...prev, errors: "Please fill in all fields" }));
      return;
    }

    if (data.password !== data.confirmPassword) {
      setData((prev) => ({
        ...prev,
        errors: "Passwords do not match",
      }));
      return;
    }

    setIsLoading(true);
    setData((prev) => ({ ...prev, errors: "" }));

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      await updateProfile(userCredential.user, {
        displayName: data.name,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      });
      await sendEmailVerification(userCredential.user);

      toast.success("Signup successfull", { autoClose: 3000 });
      setData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        errors: "",
      });
    } catch (error) {
      const errorCode = error.code;
      setData((prev) => ({
        ...prev,
        errors:
          errorCode == "auth/email-already-in-use"
            ? "with this email user already exist"
            : "Registration failed. Please try again.",
      }));
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-5 py-10"
      style={{
        backgroundImage: `url(${firebg})`,
      }}
    >
      <div className="relative w-full max-w-md rounded-2xl z-10  transition-all duration-300 hover:z-50 hover:scale-110  border border-cyan-200/25 bg-[#0b102877] p-7 shadow-2xl shadow-black/60 sm:p-9">
        <div className="mb-7 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Cosmic notes
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-indigo-100/70">
            Save your ideas among the stars.
          </p>
        </div>

        {/* Error */}
        {data.errors && (
          <p className="mb-4 rounded-lg border border-red-500 bg-rose-950/50 px-3 py-2 text-center text-sm font-semibold text-rose-200">
            {data.errors}
          </p>
        )}

        {/* Name Field */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-indigo-100">
            Full Name
          </label>

          <div className="mt-1 flex items-center rounded-lg border border-indigo-200/20 bg-white/10 px-3 py-2.5 transition focus-within:border-cyan-300 focus-within:ring-4 focus-within:ring-cyan-300/15">
            <FaUser className="mr-3 text-cyan-300" />

            <input
              type="text"
              className="w-full bg-transparent text-white outline-none placeholder:text-indigo-100/45"
              placeholder="John Doe"
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  name: e.target.value,
                  errors: "",
                }))
              }
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-indigo-100">Email</label>

          <div className="mt-1 flex items-center rounded-lg border border-indigo-200/20 bg-white/10 px-3 py-2.5 transition focus-within:border-cyan-300 focus-within:ring-4 focus-within:ring-cyan-300/15">
            <FaEnvelope className="mr-3 text-cyan-300" />

            <input
              type="email"
              className="w-full  bg-[#33404400] text-white outline-none placeholder:text-indigo-100/45"
              placeholder="example@mail.com"
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  email: e.target.value,
                  errors: "",
                }))
              }
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-indigo-100">
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
              type={showPassword ? "text" : "password"}
              className="w-full bg-transparent text-white outline-none placeholder:text-indigo-100/45"
              placeholder="Enter your password"
              value={data.password}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  password: e.target.value,
                  errors: "",
                }))
              }
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-indigo-100">
            Confirm Password
          </label>

          <div className="mt-1 flex items-center rounded-lg border border-indigo-200/20 bg-white/10 px-3 py-2.5 transition focus-within:border-cyan-300 focus-within:ring-4 focus-within:ring-cyan-300/15">
            <button
              type="button"
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
              title={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
              onClick={() => setShowConfirmPassword((visible) => !visible)}
              className="mr-3 text-cyan-300"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaLock />}
            </button>

            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full bg-transparent text-white outline-none placeholder:text-indigo-100/45"
              placeholder="Confirm your password"
              value={data.confirmPassword}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                  errors: "",
                }))
              }
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleRegister}
          disabled={isInvalid || isLoading}
          className={`w-full rounded-lg py-3  font-semibold transition hover:bg-blue-300 ${
            isInvalid || isLoading
              ? "cursor-not-allowed bg-blue-700 text-balck"
              : "bg-blue-500 from-cyan-400 to-violet-500 text-white shadow-lg shadow-violet-950/40 hover:from-cyan-300 hover:to-violet-400"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <FaSpinner className="animate-spin" />
              Registering...
            </span>
          ) : (
            "Register"
          )}
        </button>
      </div>
    </div>
  );
}
