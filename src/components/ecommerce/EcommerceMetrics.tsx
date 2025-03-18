"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import Button from "../ui/button/Button";
import { BoxIcon } from "@/icons";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";

export const EcommerceMetrics = () => {
  return (
    <div>
     <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-6">
      
      <div className="rounded-2xl md:mt-7  p-5 dark:border-gray-800 mb-2  md:p-4">
        

        
          <div className="flex gap-x-2 items-center  ">
        
            <h4 className=" text-gray-600 text-title-sm lg:text-title-md dark:text-white/80">
              Welcome, John
            </h4>
<div>
            <Badge color="error">
            Not Verified
            
          </Badge>
          </div>
        
          
        </div>
      </div>

      
 
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-6">
      
      <div className="rounded-2xl grid grid-cols-1 lg:grid-cols-2  p-5 dark:border-gray-800 mb-2  md:p-4">
        

        <div className="flex items-end justify-between lg:mt-6">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
              Balance <ArrowUpIcon />
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-xl lg:text-title-2xl dark:text-white/90">
              $3,782,450
            </h4>

          </div>
          
        </div>
        <div className="flex  lg:justify-end items-end space-x-2.5 mt-4">
        <Button size="sm" variant="outline" startIcon={<BoxIcon />}>
              Deposit
            </Button>

            <Button size="sm" variant="outline" startIcon={<BoxIcon />}>
              Withdraw
            </Button>
          
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    
      <div className="lg:border-r border-gray-300 bg-transparent p-5 dark:border-gray-700 dark:bg-transparent md:p-4">
      <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Deposits
            </span>
            </div>

        <div className="flex items-end justify-between mt-3">
          <div>
           
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              $3,782
            </h4>
          </div>
          <Badge color="success">
            USD
          </Badge>
        </div>
      </div>

      <div className="lg:border-r border-gray-300 bg-transparent p-5 dark:border-gray-700 dark:bg-transparent md:p-4">
      <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Withdrawals
            </span>
            </div>

        <div className="flex items-end justify-between mt-3">
          <div>
           
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              $3,782
            </h4>
          </div>
          <Badge color="success">
            USD
          </Badge>
        </div>
      </div>

      <div className=" border-gray-200 bg-transparent p-5 dark:border-gray-800 dark:bg-transparent md:p-4">
      <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Invested
            </span>
            </div>

        <div className="flex items-end justify-between mt-3">
          <div>
           
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              $3,782
            </h4>
          </div>
          <Badge color="success">
            USD
          </Badge>
        </div>
      </div>

      
      </div>
 
    </div>
    </div>
  );
};
