import * as React from 'react';

class InsuranceForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex justify-center">
        <form action="#" method="POST" className="w-10/12 mx-auto">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 h-full">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    کد پرسنلی
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    نام
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    نام خانوادگی
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    نام پدر
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    تاریخ تولد
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    شماره شناسنامه
                  </label>
                  <input
                    type="text"
                    name="email_address"
                    id="email_address"
                    autoComplete="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    کد ملی
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    تاریخ استخدام
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    جنسیت
                  </label>
                  <select className="mt-1 block w-full h-8 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                    <option className="text-sm">نامشخص</option>
                    <option className="text-sm">مرد</option>
                    <option className="text-sm">زن</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    وضعیت تاهل
                  </label>
                  <select className="mt-1 block w-full h-8 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                    <option className="text-sm">نامشخص</option>
                    <option className="text-sm">مجرد</option>
                    <option className="text-sm">متاهل</option>
                    <option className="text-sm">مطلقه</option>
                    <option className="text-sm">معیل</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    زیرگروه
                  </label>
                  <select
                    name="sex"
                    className="mt-1 block w-full h-8 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  >
                    <option className="text-sm">نامشخص</option>
                    <option className="text-sm">شاغلین</option>
                    <option className="text-sm">بازنشستگان</option>
                    <option className="text-sm">مستمری بگیران</option>
                    <option className="text-sm">وظیفه بگیران</option>
                    <option className="text-sm">زائرین</option>
                    <option className="text-sm">عوامل ستادي و اجرائي حج</option>
                    <option className="text-sm">
                      روحانيون و عوامل اجرايي حج
                    </option>
                    <option className="text-sm">پدرومادرغیرتحت تکفل</option>
                    <option className="text-sm">فوت</option>
                    <option className="text-sm">شهید</option>
                    <option className="text-sm">خانواده شهید</option>
                    <option className="text-sm">خانواده جانباز</option>
                    <option className="text-sm">کارکنان اناث</option>
                    <option className="text-sm">خانواده فوت</option>
                    <option className="text-sm">همسر غیر تحت تکفل</option>
                    <option className="text-sm">جانباز</option>
                    <option className="text-sm">اتباع خارجی</option>
                    <option className="text-sm">فوت</option>
                    <option className="text-sm">فوت</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    نوع بیمه پایه
                  </label>
                  <select className="mt-1 block w-full h-8 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                    <option className="text-sm">نامشخص</option>
                    <option className="text-sm">تامین اجتماعی</option>
                    <option className="text-sm">بیمه ایران</option>
                    <option className="text-sm">خدمات درمانی</option>
                    <option className="text-sm">وظیفه بگیران</option>
                    <option className="text-sm">شرکت ملی نفتکش</option>
                    <option className="text-sm">نیروهای مسلح</option>
                    <option className="text-sm">سایر</option>
                    <option className="text-sm">بيمه دانا</option>
                    <option className="text-sm">بيمه البرز</option>
                    <option className="text-sm">بيمه راضی</option>
                    <option className="text-sm">بيمه حافظ</option>
                    <option className="text-sm">بيمه توسعه</option>
                    <option className="text-sm">بيمه پارسیان</option>
                    <option className="text-sm">بيمه کارآفرین</option>
                    <option className="text-sm">بيمه سینا</option>
                    <option className="text-sm">فولاد</option>
                    <option className="text-sm">بانک ها</option>
                    <option className="text-sm">سندیکا بیمه</option>
                    <option className="text-sm">بیمه دی</option>
                    <option className="text-sm">فاقد بیمه نامه</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    شماره دفترچه بیمه پایه
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    بانک
                  </label>
                  <select className="mt-1 block w-full h-8 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                    <option className="text-sm">نامشخص</option>
                    <option className="text-sm">ملی</option>
                    <option className="text-sm">صادرات</option>
                    <option className="text-sm">سپه</option>
                    <option className="text-sm">ملت</option>
                    <option className="text-sm">تجارت</option>
                    <option className="text-sm">مسکن</option>
                    <option className="text-sm">کشاورزی</option>
                    <option className="text-sm">رفاه</option>
                    <option className="text-sm">پارسیان</option>
                    <option className="text-sm">سامان</option>
                    <option className="text-sm">کارآفرین</option>
                    <option className="text-sm">اقتصاد نوین</option>
                    <option className="text-sm">سینا</option>
                    <option className="text-sm">بانک صنعت و معدن</option>
                    <option className="text-sm">بانک پاسارگاد</option>
                    <option className="text-sm">سرمایه</option>
                    <option className="text-sm">آینده</option>
                    <option className="text-sm">پست بانک</option>
                    <option className="text-sm">دی</option>
                    <option className="text-sm">بانک انصار</option>
                    <option className="text-sm">بانک شهر</option>
                    <option className="text-sm">توسعه تعاون</option>
                    <option className="text-sm">مالی اعتباری بنیاد</option>
                    <option className="text-sm">بانک رسالت</option>
                    <option className="text-sm">قرض الحسنه مهر ایران</option>
                    <option className="text-sm">بانک حکمت ایرانیان</option>
                    <option className="text-sm">بانک گردشگری</option>
                    <option className="text-sm">بانک ایران زمین</option>
                    <option className="text-sm">قوامین</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    شماره حساب شتاب / کارت
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    تلفن ثابت
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    موبایل
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    شماره شبا
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 md:col-span-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    تاریخ انقضای قرارداد
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white text-left sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white 
                bg-blue-900 hover:bg-blue-700 focus:outline-none"
              >
                ذخیره
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InsuranceForm;
