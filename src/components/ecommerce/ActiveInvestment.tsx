"use client";
import React from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Image from "next/image";


export default function ActiveInvestment() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <>
 <div className="rounded-2xl  border-gray-200  px-5 pb-5 pt-5 dark:border-gray-800  sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Active Plans (2)
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Target you’ve set for each month
          </p>
        </div>
      
      </div>

     
      <div className="mb-4 p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:py-3">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-16 h-16 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              <Image
                width={70}
                height={70}
                src="/images/user/owner.jpg"
                alt="user"
              />
            </div>
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                Premium - 40% for 1 Week
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Invested - <span className="text-success-500"> 1,157.5 </span> USD
                </p>
               
              </div>
            </div>

            <div className="flex items-center justify-end gap-5 px-6 py-3.5 sm:gap-8 sm:py-5 order-2 grow xl:order-3 ">
        <div>
         
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            26 Feb, 2025 11:37 PM
            
          </p>
          <p className="mb-1  text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Start Date
          </p>
        </div>
        <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>
        <div>
         
         <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
           26 Feb, 2025 11:37 PM
           
         </p>
         <p className="mb-1  text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
           End Date
         </p>
       </div>

       <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

       <div>
         
         <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
          <span className="text-success-500"> 1,157.5 </span> USD
           
         </p>
         <p className="mb-1  text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
           Total Return
         </p>
       </div>



      
      </div>
      
          </div>
     
        </div>
      </div>
      <div className="mb-4 p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:py-3">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-16 h-16 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              <Image
                width={70}
                height={70}
                src="/images/user/owner.jpg"
                alt="user"
              />
            </div>
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                Premium - 40% for 1 Week
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Invested - <span className="text-success-500"> 1,157.5 </span> USD
                </p>
               
              </div>
            </div>

            <div className="flex items-center justify-end gap-5 px-6 py-3.5 sm:gap-8 sm:py-5 order-2 grow xl:order-3 ">
        <div>
         
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            26 Feb, 2025 11:37 PM
            
          </p>
          <p className="mb-1  text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Start Date
          </p>
        </div>
        <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>
        <div>
         
         <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
           26 Feb, 2025 11:37 PM
           
         </p>
         <p className="mb-1  text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
           End Date
         </p>
       </div>

       <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

       <div>
         
         <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
          <span className="text-success-500"> 1,157.5 </span> USD
           
         </p>
         <p className="mb-1  text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
           Total Return
         </p>
       </div>



      
      </div>
      
          </div>
     
        </div>
      </div>
      
      
      
      </div>
    </>
  );
}
