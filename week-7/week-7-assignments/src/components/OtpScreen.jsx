import React, { useRef, useState } from "react";

const OtpScreen = () => {
  const [step, setStep] = useState(1);
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const otpHandler = () => {
    if (mobileNo.length === 10) {
      setStep(2);
    } else {
      alert("Enter 10 digit number");
    }
  };

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value[0] || "";

    setOtp(newOtp);
    if (value && index < 3) {
      otpInputRefs[index + 1].current.focus();
    } else if (!value && index > 0) {
      otpInputRefs[index - 1].current.focus();
    }
  };

  console.log("oo", otp);

  const loginHandler = () => {
    alert("Welcome!");
    setStep(1);
    setMobileNo("");
    setOtp(["", "", "", ""]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {step === 1 && (
        <div className="bg-black h-96 w-96 flex flex-col gap-5 justify-center items-center">
          <h1 className="text-2xl text-white">Login via OTP</h1>
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            className="pl-4 h-12 w-2/3 text-white bg-black border-2 white rounded-xl"
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <button
            className="py-2 px-4 text-white bg-black border-2 rounded-lg"
            onClick={otpHandler}
          >
            Send Otp
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="bg-black h-96 w-96 flex flex-col gap-5 justify-center items-center">
          <h1 className="text-2xl text-white">Enter OTP</h1>
          <div className="flex gap-4">
            {otp.map((_, index) => (
              <input
                key={index}
                type="text"
                className="pl-4 h-12 w-14 text-white bg-black border-2 white rounded-xl"
                onChange={(e) => handleOtpChange(e.target.value, index)}
                value={otp[index]}
                maxLength={1}
                ref={otpInputRefs[index]}
              />
            ))}
          </div>
          <button
            className="py-2 px-4 text-white bg-black border-2 rounded-lg"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default OtpScreen;
