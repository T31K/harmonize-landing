import React, { useState, useRef, useEffect } from 'react';
import { GiHelp } from 'react-icons/gi';
import '../css/faq.css';
import { faq } from '../utils/faq.js';

function FAQ() {
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <GiHelp className="text-7xl hover:text-green-300 inline-block text-center mb-3" />
            <div className="flex items-center justify-center">
              <h1 className="h2 mb-4 mt-2">FAQ</h1>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full">
              <br />
              <div className="faqcontent">
                {faq.map((item, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={`question${index + 1}`}
                        name="q"
                        className="questions"
                      />
                      <div className="plus">+</div>
                      <label
                        htmlFor={`question${index + 1}`}
                        className="question font-semibold"
                      >
                        {item.question}
                      </label>
                      <div className="answers flex flex-col gap-3">
                        {item.answer.map((subAnswer, subIndex) => (
                          <div key={subIndex}>{subAnswer}</div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
