import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <div className="max-w-[1800px] py-7 md:px-20 ">
      <div className="  rounded py-10 bg-sky-50">
        <h3 className="text-center  text-sky-500 text-bolder mb-7 text-3xl">
          Contact Us
        </h3>
        <div className="flex md:justify-between  md:flex-row flex-col items-center ">
          <div className="md:w-[45%] w-[85%]  ">
            <div className="w-auto flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.81342371011!2d67.08640489999999!3d24.916621199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f31bc222ad5%3A0xaaa165b02713f08e!2sGulshan-e-Iqbal%20Block%2013%20D%201%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1693738032980!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0 , borderRadius:"5px"}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className=" md:w-[45%] h-min-[60vh] rounded   w-[85%] " >
            <div className="flex flex-col items-center gap-y-5 bg-sky-300/20 m-auto border border-sky-200 mt-8 py-20 overflow-hidden " style={{borderRadius:"5px"}}>
              <div className="flex justify-center flex-wrap gap-5">
                <Input
                  type="text"
                  placeholder="Frist Name"
                  className=" outline-none w-60 md:w-52 h-12    p-4 rounded focus:border-sky-400"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className=" outline-none w-60 md:w-52 h-12   p-4 rounded focus:border-sky-400 "
                />
              </div>
              <Input
                type="text"
                placeholder="Email"
                className=" outline-none w-60 md:w-[430px] md:h-12    p-4 rounded focus:border-sky-400 "
              />
              <Textarea
                placeholder="Massage...."
                className=" outline-none w-60 md:w-[430px] md:h-30   text-start rounded focus:border-sky-400 "
              />

              <Button className=" outline-none bg-sky-300 rounded px-20 py-5  text-white h-[30px] w-[120px] hover:bg-white hover:text-black hover:border border-black text-lg">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;