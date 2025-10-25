"use client";

import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha"
import { useRef } from "react";

export default function Footer() {
  const captcha = useRef<ReCAPTCHA | null>(null);

  return (
    <section className="relative w-full bg-blue-950 py-20">
      <div className="flex justify-center items-center gap-10">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white text-sm font-semibold hover:text-blue-300 duration-300"
        >
          <FaWhatsapp className="w-10 h-10" />
        </a>
        <a
          href="https://www.facebook.com/cargomonterrey"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white text-sm font-semibold hover:text-blue-300 duration-300"
        >
          <FaFacebook className="w-10 h-10" />
        </a>
        <a
          href="https://www.instagram.com/cargomonterrey/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white text-sm font-semibold hover:text-blue-300 duration-300"
        >
          <FaInstagram className="w-10 h-10" />
        </a>

        <a
          href="https://www.tiktok.com/@cargomty"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white text-sm font-semibold hover:text-blue-300 duration-300"
        >
          <FaTiktok className="w-10 h-10" />
        </a>

      </div>
      <p className="flex items-center justify-center mt-10 text-white">Copyright © 2025. Cargo Monterrey.</p>
      <ReCAPTCHA
        ref={captcha}
        sitekey="6LfumfMrAAAAALIHxEE2b90vhHNebxCmKFS3wVIL"
        size="invisible"
      // onChange={hanleReCaptcha}
      // className={asesor ? "" : "hidden"}
      />
      <div className=" fixed
      top-[83%] md:top-[86%] lg:top-[80%]
      left-[85%] md:left-[92%] lg:left-[94%] xl:left-[95%]">
        <a href="https://wa.me/5218114123816">
          <div className="w-14 h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full bg-green-500 text-white flex items-center justify-center mt-7 lg:mt-5 ">
            <FaWhatsapp className="w-10 h-10"></FaWhatsapp>
          </div>
        </a>

      </div>
    </section>
  )
}