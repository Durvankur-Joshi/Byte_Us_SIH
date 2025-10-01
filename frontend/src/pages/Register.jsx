// src/pages/Register.jsx
import { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";

function Register() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState("");

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {},
      },
      auth
    );
  };

  const handleSendOtp = async () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      setMessage("OTP sent successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Failed to send OTP. Try again!");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      setMessage("Phone number verified successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Invalid OTP. Try again!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Register / Login</h2>

      <div className="mb-4">
        <label className="block mb-1">Phone Number</label>
        <input
          type="tel"
          placeholder="+91 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <button
          onClick={handleSendOtp}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send OTP
        </button>
      </div>

      {confirmationResult && (
        <>
          <div className="mb-4">
            <label className="block mb-1">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            onClick={handleVerifyOtp}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Verify OTP
          </button>
        </>
      )}

      <div id="recaptcha-container" />
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
}

export default Register;
