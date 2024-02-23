import clsx from "clsx";
import React from "react";

const Textbox = React.forwardRef(
  ({ type, placeholder, className, register, name}) => {
    return (
      <div className='w-full mt-6 flex flex-col gap-1'>
        
        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            {...register}
            className={clsx(
              "bg-transparent w-inherit px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300",
              className
            )}
          />
        </div>

        {/* {label && (
          <label htmlFor={name} className='text-slate-800'>
            {label}
          </label>
        )} */}

      </div>
    );
  }
);
export default Textbox;