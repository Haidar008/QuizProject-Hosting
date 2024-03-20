import React from "react"
import Loader from "../components/Loader";
import {useSelector} from "react-redux";
import ContactDetails from "../components/ContactDetails"
import ContactUsForm from "../components/ContactForm"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUsPage = () => {

  const loading=useSelector((state)=>state.auth.authLoading);

  return (
    <div>
      <Navbar/>
      <div>
      {
        loading?
        <Loader text="Sending Message"/>
        :
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-20">
      <div className="mx-auto  flex w-11/12 max-w-maxContent  flex-col lg:pt-0 pt-[100px] gap-10 text-white lg:flex-row lg:items-center justify-center">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactUsForm />
        </div>
      </div>
    </div>
      }
    </div>
    <Footer/>
  </div>
  )
}

export default ContactUsPage;
