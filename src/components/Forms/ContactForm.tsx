import React from "react";

function ContactForm() {
  return (
    <div className="xl:w-[550px] w-[350px] h-[450px] lg:h-[380px] xl:h-[560px] font-onest border-[#003295] border-[4px] rounded-[12px] border-dashed flex items-center justify-center">
      <form action="" className="flex flex-col gap-8 lg:gap-4">
        <input
          type="text"
          className="xl:w-[500px] w-[310px] xl:h-[45px] border-[2px] rounded-[8px] flex items-center placeholder-black justify-center pl-[20px] border-[#9999998C] border-opacity-55"
          placeholder="First Name"
        />
        <input
          type="text"
          className="xl:w-[500px] w-[310px] xl:h-[45px] border-[2px] rounded-[8px] flex items-center placeholder-black justify-center pl-[20px] border-[#9999998C] border-opacity-55"
          placeholder="Last Name"
        />
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label>Check In</label>
            <input
              type="date"
              className="xl:w-[220px] w-[140px] text-[14px] xl:h-[45px] border-[2px] rounded-[8px] flex items-center placeholder-black justify-center xl:pl-[20px] border-[#9999998C] border-opacity-55"
            />
          </div>

          <div className="flex flex-col">
            <label>Check Out</label>
            <input
              type="date"
              className="xl:w-[220px] w-[140px] text-[14px] xl:h-[45px] border-[2px] rounded-[8px] flex items-center placeholder-black justify-center xl:pl-[20px] border-[#9999998C] border-opacity-55"
            />
          </div>
        </div>

        <textarea
          rows={5}
          className="xl:w-[500px] xl:h-[100px] border-[2px] rounded-[8px] flex items-center placeholder-black justify-center pl-[20px] border-[#9999998C] border-opacity-55"
          placeholder="Comments"
        />
        <button type="submit" className="w-[196px] h-[44px] bg-[#003295] rounded-[8px] text-white text-[18px] font-[700]">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
