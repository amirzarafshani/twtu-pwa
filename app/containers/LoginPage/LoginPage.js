import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [idCode, setIdCode] = useState('');
  const [nationalId, setNationalId] = useState('');
  const handleLoginClick = () => {
    if (idCode && nationalId) {
      setLoading(true);

      let obj = {
        idCode: idCode,
        nationalId: nationalId,
      };

      axios
        .post('http://core.twtu.ir/api/Member/Authentication', obj)
        .then((res) => {
          console.log(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          toast.error('مشخصات وارد شده در سیستم یافت نشد');
        });
    } else {
      toast.warn('لطفا مشخصات خود را وارد نمایید');
    }
  };

  return (
    <div className="flex justify-center items-center lg:w-8/12 w-full mx-auto my-24 ">
      <div className="mycontainer flex flex-col justify-between items-center sm:w-3/5 w-11/12 border-2 border-gray-300 rounded-xl bg-white py-7">
        <div className="logo flex flex-row justify-center items-center">
          <Link to="/" className="px-4 py-2">
            <img src={logo} alt="" className="h-12" />
          </Link>
        </div>
        <form className="flex justify-center flex-col w-10/12">
          <div className="flex flex-col">
            <label
              for="InputEmail"
              className="text-sm font-medium text-gray-700 mb-2 text-right"
            >
              کد عضویت
            </label>
            <input
              className="bg-gray-50 border border-gray-300 rounded-md h-8 px-3
                                 text-gray-700 mb-3 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none shadow-sm"
              id="InputEmail"
              type="text"
              onChange={(elemnt) => setIdCode(elemnt.target.value)}
              value={idCode}
            />
          </div>
          <div className="flex flex-col">
            <label
              for="InputPassword"
              className="text-sm font-medium text-gray-700 mb-2 text-right"
            >
              کد ملی
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 rounded-md h-8 px-3
                                 text-gray-700 mb-3 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none shadow-sm"
              id="InputPassword"
              onChange={(e) => setNationalId(e.target.value)}
              value={nationalId}
            />
          </div>

          <a
            onClick={() => handleLoginClick()}
            className="mt-4 text-white flex items-center justify-center text-center rounded w-full bg-custom-blue text-sm shadow-none py-2 px-0 transition-all duration-500 hover:bg-blue-500 focus:outline-none"
          >
            {loading ? (
              <svg
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              'ورود به سامانه'
            )}
          </a>

          <a className="mt-2 text-sm text-blue-400 cursor-pointer text-center">
            یادآوری کلمه عبور
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
