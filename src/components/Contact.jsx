import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div name="Contact" className="min-h-screen w-full bg-gradient-to-b from-white to-blue-500">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold inline-block border-b-4 border-black pb-2">
            Contact Me
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="https://getform.io/f/pbqgnkkb"
              method="POST"
              className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 space-y-6 transform transition-all duration-300 hover:shadow-3xl"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Your Message</h2>
                <p className="text-gray-600 text-sm">
                  I'll get back to you at <strong>adityathakur.offical@gmail.com</strong>
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 ease-in-out"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1 absolute -bottom-5">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 ease-in-out"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1 absolute -bottom-5">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 ease-in-out resize-none"
                      placeholder="Enter your message"
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs mt-1 absolute -bottom-5">
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
