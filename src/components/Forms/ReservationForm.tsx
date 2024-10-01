import React from "react";
import { FaAt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function ReservationForm() {
  return (
    <div className="w-[320px] lg:w-[450px] xl:w-[633px] lg:m-10 h-[601px] font-onest border-[#003295] border-[4px] rounded-[12px] gap-5 border-dashed flex flex-col items-center justify-center">
      <p className="text-center text-[28px] font-[700] text-[#001946]">
        Reservations
      </p>

      <div className="flex gap-5 items-center text-[14px] text-[#001946]">
        <FiPhoneCall className="text-[20px] " />
        <p>+94 652 053682 / +94 777 670333</p>
      </div>
      <div className="flex gap-5 items-center text-[14px] text-[#001946]">
        <FaAt className="text-[20px] " />
        <p>info@pasikudahpalmsort.com</p>
      </div>

      <form
        action=""
        className="flex flex-col w-[270px] lg:w-[350px] xl:w-[500px] gap-3 text-[13px]"
      >
        {/* First name and last name */}
        <div className="flex  justify-between">
          <div className="flex flex-col">
            <input
              type="text"
              className="lg:w-[170px] xl:w-[220px] lg:text-[16px] w-[130px] h-[45px] border-[2px] rounded-[8px] flex items-center  justify-center pl-[20px] border-[#9999998C] border-opacity-55"
              placeholder="First Name"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              className="lg:w-[170px] xl:w-[220px] w-[130px] h-[45px] border-[2px] rounded-[8px] flex items-center  justify-center pl-[20px] border-[#9999998C] border-opacity-55"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* checkIn checkout */}
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label>Check In</label>
            <input
              type="date"
              className="lg:w-[170px] xl:w-[220px] w-[130px]  h-[45px] border-[2px] rounded-[8px] flex items-center  justify-center lg:pl-[20px] pl-[10px] border-[#9999998C] border-opacity-55"
            />
          </div>

          <div className="flex flex-col">
            <label>Check Out</label>
            <input
              type="date"
              className="lg:w-[170px] xl:w-[220px] w-[130px] h-[45px] border-[2px] rounded-[8px] flex items-center  justify-center lg:pl-[20px] pl-[10px] border-[#9999998C] border-opacity-55"
            />
          </div>
        </div>

        {/*Adults Childrens Rooms*/}
        <div className="flex justify-between">
          <div className="flex flex-col">
            <input
              type="email"
              className="lg:w-[110px] xl:w-[150px] w-[70px] h-[45px] border-[2px] rounded-[8px] flex items-center  justify-center lg:pl-[20px] pl-[10px] border-[#9999998C] border-opacity-55"
              placeholder="Adults"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              className="lg:w-[110px] xl:w-[150px] w-[70px] h-[45px] border-[2px] rounded-[8px] flex items-center  justify-center lg:pl-[20px] pl-[10px] border-[#9999998C] border-opacity-55"
              placeholder="Children"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              className="lg:w-[110px] xl:w-[150px] w-[70px] h-[45px] border-[2px] rounded-[8px] flex items-center  justify-center lg:pl-[20px] pl-[10px] border-[#9999998C] border-opacity-55"
              placeholder="Rooms"
            />
          </div>
        </div>

        {/*Email Phone*/}
        <div className="flex justify-between">
          <div className="flex flex-col">
            <input
              type="email"
              className="lg:w-[170px] xl:w-[220px] w-[130px] h-[45px] border-[2px] rounded-[8px] flex items-center  justify-center pl-[20px] border-[#9999998C] border-opacity-55"
              placeholder="E-mail"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              className="lg:w-[170px] xl:w-[220px] w-[130px] h-[45px] border-[2px] rounded-[8px] flex items-center  justify-center pl-[20px] border-[#9999998C] border-opacity-55"
              placeholder="Phone"
            />
          </div>
        </div>

        {/* Comments */}
        <textarea
          rows={5}
          className="lg:w-[350px] xl:w-[500px] h-[100px] border-[2px] rounded-[8px] flex items-center  justify-center pl-[20px] border-[#9999998C] border-opacity-55"
          placeholder="Comments"
        />
        <button
          type="submit"
          className="lg:w-[196px]  h-[44px] bg-[#003295] rounded-[8px] text-white text-[18px] font-[700]"
        >
          Make A reservation
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
