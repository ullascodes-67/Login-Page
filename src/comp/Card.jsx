import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className={`${props.c_style} w-full lg:w-75 lg:h-145  sm:w-72 h-96`}>
        <div className="flex flex-col justify-between h-full">
          <div className="num h-8 w-8 bg-green-700 text-white rounded-full">
            <h1 className="flex justify-center text-xl">{props.c_num}</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="para  w-full   text-white text-shadow-lg">
              <p>{props.c_para}</p>
            </div>
            <div className="num w-full ">
              <div className="flex justify-between items-center bg-green-700 rounded-full w-full px-3 py-1 text-[18px] text-gray-50">
                {props.c_btn}

                <button className="bg-gray-200 rounded-full px-2 py-0   text-green-700 ">
                  <i class="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
