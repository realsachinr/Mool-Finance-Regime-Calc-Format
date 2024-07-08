import React, { useState } from "react";

function FormPage() {
  const [openTab, setOpenTab] = useState("salaryinformation");

  function tabHandler(tab) {
    setOpenTab(tab);
  }

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="w-full h-56 bg-gradient-to-r from-[#ECFAF7] via-white to-[#F0F2FB]">
        <div className="w-[70rem] py-11 mx-auto">
          <p className="text-[30px] leading-[38px] font-medium md:text-[48px] md:leading-[60px] px-4 md:p-0">
            Old vs New Regime Comparison
          </p>
          <p className="text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] max-w-[811px] mt-4 px-4 md:p-0">
            Not sure which tax regime can save you tax? Compare and find out.
          </p>
        </div>
      </div>
      {/* FormPage */}
      <div className="w-full flex justify-center h-full">
        <div className="w-[70rem] flex h-screen gap-[5rem]">
          {/* Tabs */}
          <div className="font-[time-new-roman]  pt-12 text-[18px] flex flex-col gap-[3rem]">
            {[
              "Salary Information",
              "Personal Information",
              "Housing",
              "Income Configuration",
              "Allowances",
              "Declaration",
            ].map((item, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    tabHandler(item.toLowerCase().replace(/ /g, ""))
                  }
                  className={`w-[250px] border-b-2    flex   border-gray-400 text-black rounded-md py-2 px-4 transition-all duration-300 hover:border-gray-700 hover:text-gray-900 ${
                    openTab === item.toLowerCase().replace(/ /g, "")
                      ? " font-semibold shadow-xl "
                      : "bg-white font-normal"
                  }`}
                >
                  <div className="flex leading-tight  gap-4 items-center">
                    <div
                      className={`text-white w-7 h-7 flex justify-center items-center rounded-full ${
                        openTab === item.toLowerCase().replace(/ /g, "")
                          ? "bg-blue-500 font-semibold"
                          : "bg-gray-400"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="text-[#667085]  uppercase font-[time-new-roman] text-[12px]">
                        Step {index + 1}
                      </div>{" "}
                      <div className="w-9">{item}</div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="pt-[5rem]">
            <div>
              {openTab === "salaryinformation" && (
                <div>
                  {/* Heading */}
                  <div>
                    <p className="text-3xl pb-8 font-semibold">
                      Salary Information
                    </p>
                  </div>
                  {/* Input box */}
                  <div className="flex flex-col text-[#344054]  gap-14">
                    <div className="flex  gap-10 ">
                      {/* input 1 */}
                      <div className="flex  flex-col">
                        <label htmlFor="" className="text-[20px]">
                          Cost To Company (CTC Per Annum)
                        </label>
                        <input
                          type="text"
                          placeholder="Eg: 600000"
                          className="border py-2 px-4 w-[22rem] rounded-md"
                        />
                      </div>
                      <div className="flex flex-col">
                        {/* input 2 */}
                        <label htmlFor="" className="text-[20px]">
                          CTC Monthly
                        </label>
                        <input
                          type="text"
                          placeholder="0"
                          className="border  w-[22rem]  py-2 px-4 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex  gap-10 ">
                      {/* input 1 */}
                      <div className="flex flex-col">
                        <label className=" text-[20px]" htmlFor="">
                          Basic Salary (per month)
                        </label>
                        <input
                          type="text"
                          placeholder="Eg: 15800"
                          className="border py-2 px-4  w-[22rem]  rounded-md"
                        />
                      </div>
                      <div className="flex flex-col">
                        {/* input 2 */}
                        <label className=" text-[20px]" htmlFor="">
                          HRA (per month)
                        </label>
                        <input
                          type="text"
                          placeholder="Eg: 6300"
                          className="border py-2 px-4  w-[22rem]  rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Next Button */}
                  <div className="pt-16">
                    <button className="py-2 text-[18px] px-5 rounded-lg flex items-center justify-center bg-[#405CD2] text-white   hover:shadow-lg">
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {openTab === "personalinformation" && (
                <div>
                  {/* Heading */}
                  <div>
                    <p className="text-3xl pb-8 font-semibold">
                      Personal Information
                    </p>
                  </div>
                  {/* Input Details  */}
                  <div className=" space-y-6 text-[#344054]">
                    <div className="flex gap-8">
                      <div className="flex gap-1 flex-col ">
                        <label htmlFor="" className=" text-[20px]">
                          First Name{" "}
                          <span className="text-red-500 text-2xl">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your First Name"
                          className="border py-2 px-4  w-[15rem]  rounded-md"
                        />
                      </div>
                      <div className="flex gap-1 flex-col ">
                        <label htmlFor="" className=" text-[20px]">
                          Last Name{" "}
                          <span className="text-red-500 text-2xl">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your Last Name"
                          className="border py-2 px-4  w-[15rem]  rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex gap-8 ">
                      <div className="flex gap-1 flex-col ">
                        <label htmlFor="" className=" text-[20px]">
                          Email <span className="text-red-500 text-2xl">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your Email"
                          className="border py-2 px-4  w-[15rem]  rounded-md"
                        />
                      </div>
                      <div className="flex gap-1 flex-col ">
                        <label htmlFor="" className=" text-[20px]">
                          Contact{" "}
                          <span className="text-red-500 text-2xl">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your Contact"
                          className="border py-2 px-4  w-[15rem]  rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                      <label htmlFor="" className=" text-[20px]">
                        Age Group{" "}
                        <span className="text-red-500 text-2xl">*</span>{" "}
                      </label>
                      <select
                        name=""
                        id=""
                        className="border py-2 px-4  w-[15rem]  rounded-md"
                      >
                        <option value="">Select Age Group</option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36-45">36-45</option>
                        <option value="46-55">46-55</option>
                        <option value="Above 55">Above 55</option>
                      </select>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-16 space-x-4 flex ">
                    {["Prev", "Next"].map((item, index) => {
                      return (
                        <div className="">
                          <button
                            key={index}
                            className={`py-2 text-[18px]  px-5 rounded-lg flex items-center justify-center ${
                              index === 0
                                ? "bg-[#d7dfff]  text-[#405CD2]  hover:shadow-lg"
                                : "bg-[#405CD2]   hover:bg-[#405CD2] text-white  hover:shadow-lg"
                            }`}
                          >
                            {item}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div>
              {openTab === "housing" && (
                <div>
                  {/* Heading */}
                  <div>
                    <p className="text-3xl pb-8 font-semibold">
                      Housing Information
                    </p>
                  </div>
                  {/* Radio Select Content */}
                  <div className=" text-[#344054] text-[20px] flex gap-10">
                    <div>
                      <p>Do you live in a rented house/PG?</p>
                      <div>
                        <div className="space-x-2  flex items-center">
                          <input
                            className="w-4 h-4 cursor-pointer  "
                            type="radio"
                            id="yes"
                            name="housing"
                          />
                          <label htmlFor="yes" className="cursor-pointer">
                            Yes
                          </label>
                        </div>
                        <div className="space-x-2 flex items-center">
                          <input
                            className="w-4 h-4 cursor-pointer"
                            type="radio"
                            id="no"
                            name="housing"
                          />
                          <label htmlFor="no" className="cursor-pointer">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Do you live in a rented house/PG?</p>
                      <div>
                        <div className="space-x-2 flex items-center">
                          <input
                            type="radio"
                            id="rentyes"
                            className="w-4 h-4 cursor-pointer"
                            name="metro"
                          />
                          <label htmlFor="rentyes" className="cursor-pointer">
                            Yes
                          </label>
                        </div>
                        <div className="space-x-2 flex items-center">
                          <input
                            type="radio"
                            id="rentno"
                            className="w-4 h-4 cursor-pointer"
                            name="metro"
                          />
                          <label htmlFor="rentno" className="cursor-pointer">
                            No
                          </label>
                        </div>
                        <div className="pt-16 text-gray-400 text-[15px]">
                          <p className="w-[20rem]">
                            <span className="font-bold">Note:</span> Only
                            Mumbai, Delhi, Chennai, Kolkata are considered as
                            metro.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Rent Paid */}
                  <div>
                    <div className="flex flex-col pt-9">
                      <label className=" text-[20px]" htmlFor="">
                        Rent Paid (per month)
                      </label>
                      <input
                        type="text"
                        placeholder="Eg: 60000"
                        className="border py-2 px-4  w-[15rem]  rounded-md"
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-16 space-x-4 flex ">
                    {["Prev", "Next"].map((item, index) => {
                      return (
                        <div className="">
                          <button
                            key={index}
                            className={`py-2 text-[18px]  px-5 rounded-lg flex items-center justify-center ${
                              index === 0
                                ? "bg-[#d7dfff]  text-[#405CD2]  hover:shadow-lg"
                                : "bg-[#405CD2]   hover:bg-[#405CD2] text-white  hover:shadow-lg"
                            }`}
                          >
                            {item}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div>
              {openTab === "incomeconfiguration" && (
                <div>
                  {/* Heading */}
                  <div>
                    <p className="text-3xl text-[#344054] pb-8 font-semibold">
                      Income Configuration
                    </p>
                  </div>
                  {/* Radio Input */}
                  <div className="text-[20px] flex items-start  gap-[20rem]">
                    <div>
                      <p className="pb-2">PF Configuration</p>
                      <div className="flex text-[#344054] gap-3 items-center">
                        <input
                          type="radio"
                          id="12"
                          className="w-4 h-4 cursor-pointer"
                          name="pf"
                        />
                        <label htmlFor="12" className="cursor-pointer">
                          12% of Basic
                        </label>
                      </div>
                      <div className="flex gap-3 text-[#344054]  items-center">
                        <input
                          type="radio"
                          id="1800"
                          className="w-4 h-4 cursor-pointer"
                          name="pf"
                        />
                        <label htmlFor="1800" className="cursor-pointer">
                          1800 INR
                        </label>
                      </div>
                      <div className="flex gap-3 text-[#344054] items-center">
                        <input
                          type="radio"
                          id="nopf"
                          className="w-4 h-4 cursor-pointer"
                          name="pf"
                        />
                        <label htmlFor="nopf" className="cursor-pointer">
                          No PF
                        </label>
                      </div>
                    </div>

                    <div className="text-[#344054]">
                      <div className="flex  flex-col ">
                        <label className=" text-[20px]" htmlFor="">
                          Provident Fund (PF)
                        </label>
                        <input
                          type="text"
                          placeholder="Eg: 60000"
                          className="border py-2 px-4  w-[15rem]  rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-[#344054]">
                    <div className="text-[20px] flex items-start pt-16  gap-[14rem]">
                      {/* 1st Row */}
                      <div className="flex flex-col ">
                        <label className=" text-[20px]" htmlFor="">
                          Professional Tax (per month)
                        </label>
                        <input
                          type="text"
                          placeholder="Eg: 60000"
                          className="border py-2 px-4  w-[15rem]  rounded-md"
                        />
                      </div>
                      {/* 2nd Row */}
                      <div>
                        <p>Gratuity Enabled</p>
                        <div>
                          <div className="space-x-3 flex items-center">
                            <input
                              type="radio"
                              id="gratutiyYes"
                              name="Gratuity "
                              className="w-4 h-4 cursor-pointer"
                            />
                            <label htmlFor="gratutiyYes">Yes</label>
                          </div>
                          <div className="space-x-3 flex items-center">
                            <input
                              type="radio"
                              id="gratutiyNo"
                              name="Gratuity "
                              className="w-4 h-4 cursor-pointer"
                            />
                            <label htmlFor="gratutiyNo">No</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Button */}
                  <div className="pt-16 space-x-4 flex ">
                    {["Prev", "Next"].map((item, index) => {
                      return (
                        <div className="">
                          <button
                            key={index}
                            className={`py-2 text-[18px]  px-5 rounded-lg flex items-center justify-center ${
                              index === 0
                                ? "bg-[#d7dfff]  text-[#405CD2]  hover:shadow-lg"
                                : "bg-[#405CD2]   hover:bg-[#405CD2] text-white  hover:shadow-lg"
                            }`}
                          >
                            {item}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div>
              {openTab === "allowances" && (
                <div className="space-y-8  text-[#344054] text-[20px] ">
                  {/* Heading */}
                  <div>
                    <p className="text-3xl text-black  font-semibold">
                      Allowances Declarations (per month)
                    </p>
                  </div>
                  {/* Note  */}
                  <div>
                    <p className="w-[22rem] leading-6 text-[18px] ">
                      <span className="font-bold">Note: </span>Note: The
                      allowances that are listed in the list are taxable if you
                      don’t find the allowance that you get in your company
                      leave them.
                    </p>
                  </div>
                  <div>
                    <p className="pb-5">Type</p>
                    <div className="flex gap-16 items-center">
                      <select
                        name=""
                        id=""
                        className="border h-12  border-gray-400 rounded-md "
                      >
                        <option value=""></option>
                        <option value="">
                          Tiffin/Lunch/Dinner/Refreshment Allowance
                        </option>
                        <option value="">Mobile Reimbursement</option>
                        <option value="">Leave Travel Allowance (LTA)</option>
                        <option value="">Children's Education Allowance</option>
                        <option value="">Hostel Expenditure allowance</option>
                      </select>
                      <div>
                        <input
                          type="text"
                          className="border px-4 border-gray-400 h-12 rounded-md "
                          placeholder="Ex: 60000"
                        />
                      </div>
                      <div>
                        <button className="bg-slate-100  rounded-md py-2 px-5">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Button */}
                  <div className="pt-16 space-x-4 flex ">
                    {["Prev", "Next"].map((item, index) => {
                      return (
                        <div className="">
                          <button
                            key={index}
                            className={`py-2 text-[18px]  px-5 rounded-lg flex items-center justify-center ${
                              index === 0
                                ? "bg-[#d7dfff]  text-[#405CD2]  hover:shadow-lg"
                                : "bg-[#405CD2]   hover:bg-[#405CD2] text-white  hover:shadow-lg"
                            }`}
                          >
                            {item}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div>
              {openTab === "declaration" && (
                <div>
                  <div className="w-full h-full overflow-y-scroll border border-gray-300 p-4 mx-auto shadow-none bg-transparent border-none shadow-lg bg-gray-50">
                    <div className="space-y-8  text-[#344054] text-[20px] ">
                      {/* Heading */}
                      <div>
                        <p className="text-3xl text-black  font-semibold">
                          Chapter VI- A Declarations (per annum)
                        </p>
                      </div>
                      {/* Radio Content */}
                      <div className="space-y-3">
                        <p className="w-[22rem] leading-6 text-[18px] ">
                          Chapter VI- A Configuration
                        </p>
                        <div className="space-x-3">
                          <input
                            type="radio"
                            className="w-4 h-4 cursor-pointer"
                            id="maxdec"
                            name="perannum"
                          />
                          <label htmlFor="maxdec">Max Declaration</label>
                        </div>
                        <div className="space-x-3">
                          <input
                            type="radio"
                            className="w-4 h-4 cursor-pointer"
                            id="noextrapayment"
                            name="perannum"
                          />
                          <label htmlFor="noextrapayment">
                            No Extra Payment
                          </label>
                        </div>
                      </div>
                      <div>
                        <p className="pb-5">Type</p>
                        <div className="flex w-[60rem] gap-16 items-center">
                          <select
                            name=""
                            id=""
                            className="border h-12  border-gray-400 rounded-md "
                          >
                            <option value=""></option>
                            <option value="">
                              Tiffin/Lunch/Dinner/Refreshment Allowance
                            </option>
                            <option value="">Mobile Reimbursement</option>
                            <option value="">
                              Leave Travel Allowance (LTA)
                            </option>
                            <option value="">
                              Children's Education Allowance
                            </option>
                            <option value="">
                              Hostel Expenditure allowance
                            </option>
                          </select>
                          <div>
                            <input
                              type="text"
                              className="border px-4 border-gray-400 h-12 rounded-md "
                              placeholder="Ex: 60000"
                            />
                          </div>
                          <div>
                            <button className="bg-slate-100  rounded-md py-2 px-5">
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="pt-16 space-x-4 flex ">
                        {["Prev", "Confirm"].map((item, index) => {
                          return (
                            <div className="">
                              <button
                                key={index}
                                className={`py-2 text-[18px]  px-5 rounded-lg flex items-center justify-center ${
                                  index === 0
                                    ? "bg-[#d7dfff]  text-[#405CD2]  hover:shadow-lg"
                                    : "bg-[#405CD2]   hover:bg-[#405CD2] text-white  hover:shadow-lg"
                                }`}
                              >
                                {item}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
