import { useState, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import axios from 'axios';

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
    <div>
      <input
        id="email"
        ref={emailRef}
        type="email"
        className="form-input font-semibold rounded-xl border-gray-400 sm:mr-2 mt-2 w-[300px] text-gray-800 "
        placeholder="Email address"
        required
      />
      <button
        onClick={handleSubmit}
        className="btn text-white border-2 bg-[#2cbe8b] w-[300px] mt-2 !capitalize hover:border-[#5cbc8b] font-semibold mb-4 sm:w-auto sm:mb-0 rounded-xl"
      >
        Notify Me
      </button>
    </div>
  );
}

export default Contact;
