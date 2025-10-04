"use client";

import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
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
              href="https://www.youtube.com/channel/UCj43332fzcWnMBmZfTHjx3g"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-sm font-semibold hover:text-blue-300 duration-300"
            >
              <FaYoutube className="w-10 h-10" />
            </a>
            
            </div>
        <p className="flex items-center justify-center mt-10 text-white">Copyright © 2025. Cargo Monterrey.</p>
        </section>
    )
}