import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HomepageSlider from './HomepageSlider';
// import profile from '../../images/profile.jpg';
import {
  BsPeopleFill,
  BsNewspaper,
  BsFileEarmarkRuled,
  BsPersonBoundingBox,
} from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { GoBook, GoLocation } from 'react-icons/go';
import { AiOutlineBook } from 'react-icons/ai';
import { SiGoogleclassroom } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { IoCashOutline } from 'react-icons/io5';
import { MdLocalPostOffice } from 'react-icons/md';
import { GiMoneyStack, GiHospitalCross } from 'react-icons/gi';
import { ImBooks } from 'react-icons/im';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Homepage" />
        </Helmet>
        {/* <div className="w-full bg-blue-900 ">
          <div className="flex py-10 px-3 justify-between md:justify-start items-center">
            <img src={profile} alt="" className="rounded-full h-12" />
            <div className="flex flex-col px-1.5 border-l border-white text-white">
              <p className="text-sm ">سلام، امیر زرافشانی عزیز</p>
              <p className="text-sm ">تلفن همراه: 09141234500</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-green-600	">تسویه</p>
              <p className="text-xs text-center text-white">بدهی عضویت سالانه</p>
            </div>
          </div>
        </div> */}
        <HomepageSlider size="6" />
        <div className="w-10/12 mx-auto mt-16 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 ">
          <a
            href="http://twtu.ir/ShowContent/27680"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <BsPeopleFill className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">اعضاء هیئت مدیره اتحادیه</p>
          </a>
          <a
            href="#"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <BsNewspaper className="text-6xl text-white p-3" />
            </span>

            <p className="pt-2 text-sm text-center">اخبار صنف و اتحادیه</p>
          </a>
          <a
            href="#"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <IoIosPeople className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">اعضاء تحت پوشش اتحادیه</p>
          </a>
          <a
            href="http://twtu.ir/UserFiles/Images/ghanon.pdf"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <BsFileEarmarkRuled className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">قوانین و مقررات صنفی</p>
          </a>

          <a
            href="http://twtu.ir/ShowContent/27682"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <GoBook className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">
              راهنمایی جهت دریافت جواز کسب
            </p>
          </a>
          <a
            href="https://iranianasnaf.ir/Forms/Public/RegisterLicense/default.aspx"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <AiOutlineBook className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">
              تمدید و ثبت نام پروانه کسب
            </p>
          </a>
          <a
            href="http://ecoat.otaghasnaftehran.ir/"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <SiGoogleclassroom className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">ثبت نام کلاس آموزش</p>
          </a>
          <a
            href="#"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <GoLocation className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">آدرس و تلفن اتحادیه</p>
          </a>
          <a
            href="http://twtu.ir/"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <CgWebsite className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">سایت اتحادیه</p>
          </a>
          <a
            href="https://www.cbi.ir/EstelamSayad/19689.aspx"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <IoCashOutline className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">استعلام چک</p>
          </a>
          <a
            href="https://epostcode.post.ir/user/certification"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <MdLocalPostOffice className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">دریافت تائیدیه کدپستی</p>
          </a>
          <Link to="/Login">
            <a
              href="#"
              className="flex flex-col justify-start items-center cursor-pointer"
            >
              <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
                <BsPersonBoundingBox className="text-6xl text-white p-3" />
              </span>
              <p className="pt-2 text-sm text-center">پروفایل اعضاء</p>
            </a>
          </Link>

          <a
            href="#"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <GiMoneyStack className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">پرداخت حق عضویت</p>
          </a>
          <a
            href="#"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <GiHospitalCross className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">ثبت نام بیمه تکمیلی</p>
          </a>
          <a
            href="#"
            className="flex flex-col justify-start items-center cursor-pointer"
          >
            <span className="bg-custom-blue border-4 border-white rounded-full custom-box-shadow">
              <ImBooks className="text-6xl text-white p-3" />
            </span>
            <p className="pt-2 text-sm text-center">مطالب آموزشی صنف</p>
          </a>
        </div>
      </article>
    );
  }
}
