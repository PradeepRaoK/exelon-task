import React from "react";
import Google from "../images/google.png"
const Form = () => {
    return (
        <div className="flex flex-col w-10/12 md:w-2/5 mt-10 justify-center ml-6 md:mt-20 md:ml-12">
            <div className="flex flex-col text-2xl font-semibold">
                <h1 className="">Welcome to Panorama,</h1>
                <h1 className="">Sign In to Continue.</h1>
            </div>
            <div className="flex flex-col mt-4 font-normal">
                <p>Don't have an account? <span className="underline font-semibold">Create a account</span></p>
                <p>It takes less than a minute.</p>
            </div>
            <div className="flex flex-col mt-10">
                <label className="text-sm mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="w-full py-2 px-3 text-gray-700 focus:outline-black"
                    id="email"
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-sm mb-2" htmlFor="email">
                    Password
                </label>
                <input
                    className="w-full py-2 px-3 text-gray-700 focus:outline-black bg-slate-200"
                    id="password"
                    type="password"
                    placeholder="*******"
                />
            </div>
            <div className="flex flex-col mt-1 underline text-center">
                Forgot Password?
            </div>
            <div className="flex flex-col mt-4 text-center">
                <button className="mt-8 bg-black text-white py-2 font-normal" type="button">   
                    Sign In
                </button>
            </div>
            <div className="flex flex-col justify-center text-center">
                <button
                    className="flex flex-row mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-slate-200 justify-center"
                    type="button"
                >
                    <img src={Google} className="w-6 h-6 mr-1" alt='google' />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Form;