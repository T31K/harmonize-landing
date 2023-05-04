import { useState, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import { RiMentalHealthFill } from 'react-icons/ri';
import { AiFillTwitterCircle, AiFillMail } from 'react-icons/ai';
function Contact() {
  const emailRef = useRef(null);

  const handleSubmit = async () => {
    const message = 'Harmonize early access';
    const email = emailRef.current.value;
    const data = { email, message };

    try {
      if (email) {
        const response = await axios.post('https://formspree.io/f/mqkoldzq', data);
        const { status } = response;
        if (status === 200) {
          toast.success("We'll notify you when we launch!");
        }
      } else {
        toast.error('Email required');
      }
    } catch (error) {
      toast.error('Oh no, something went wrong');
    }
  };

  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-8">
            <RiMentalHealthFill className="text-7xl hover:text-green-300 inline-block text-center mb-3" />
            <div className="flex justify-center">
              <h1 className="h2 mb-4">Contact</h1>
            </div>
            <div>
              <h4 className="text-xl">We're happy to help, with any issues you're encountering.</h4>

              <div className="flex justify-center flex-col items-center">
                <div className="flex justify-center items-center py-3 px-4 gap-2 mt-5  rounded-xl text-2xl  ">
                  <AiFillMail className="text-4xl" />
                  <div className="w-[400px] bg-green-100 py-2 px-3 rounded-xl font-semibold">
                    contact@getharmonize.app
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2 mt-5  rounded-xl text-2xl  ">
                  <AiFillTwitterCircle className="text-4xl flex" />
                  <div className="w-[400px] bg-green-100 py-2 px-3 rounded-xl font-semibold">@t31k__</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
