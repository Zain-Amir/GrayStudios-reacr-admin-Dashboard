import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Stacked, Pie, Button, SparkLine } from "../components";
import { FiCircle } from "react-icons/fi";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
const Ecommerce = () => {
  return (
    <div className="mt-20 ">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-50 rounded-xl w-70 lg:ml-20 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center duration-300  hover:shadow-lg hover:shadow-gray dark:hover:shadow-gray">
        <div className="flex justify-between items-center">
          <div>
            <p className="bg-white text-lg text-slate-900 rounded-full text-center  hover:bg-slate-700 hover:text-white  ">
              Earnings
            </p>
            <p className="mt-2 text-xl font-extrabold bg-green-300 text-slate-900 rounded-full pr-5 pl-5 text-center  hover:bg-slate-700 hover:text-white  ">
              $121999.012
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Button
            color="white"
            bgColor=" blue"
            text="Download"
            Size="md"
            borderRadius="10px"
          />
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="flex flex-wrap m-3 justify-center gap-1 items-center ">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 mr-2 ml-2 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl duration-300  hover:shadow-lg hover:shadow-gray dark:hover:shadow-gray "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-3 rounded-2xl md:w-100 duration-300  hover:shadow-lg hover:shadow-gray dark:hover:shadow-gray">
          <div className="flex justify-between">
            <p className="font-bold text-2xl">Revenue Updates</p>
            <div className="flex items-center gap-4 ">
              <p className="flex items-center text-gray-600 gap-2 ml-3 hover:drop-shadow-xl">
                <span>
                  <FiCircle />{" "}
                </span>
                <span>Expenses </span>
              </p>
              <p className="flex items-center text-green-400 gap-2 sm:ml-2 hover:drop-shadow-xl">
                <span>
                  <FiCircle />{" "}
                </span>
                <span>Budget </span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center ">
            <div className=" border-r-1 border-color m-4 pr-10 duration-300  hover:shadow-lg hover:shadow-gray dark:hover:shadow-gray">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
                <div className="mt-5 bg-light-gray"></div>
              </div>
              <div className="h-52 w-96 bg-hero-pattern">
               
               </div>
              <div className="mt-10 items-center">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="20px"
                />
              </div>
            </div>
            <div>
              <div className="duration-300  hover:shadow-lg hover:shadow-gray dark:hover:shadow-gray">
                <Stacked width="320px" height="360px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
