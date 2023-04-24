import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaApple, FaLinux } from 'react-icons/fa';

function Downloads() {
  const [version, setVersion] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLatestVersion();
  }, []);

  const getLatestVersion = async () => {
    try {
      const response = await axios.get(`https://api.github.com/repos/t31k/harmonize/releases/latest`);
      const latestRelease = response.data;
      const latestVersion = latestRelease.tag_name;
      setVersion(latestVersion);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10 mt-24">
            <div className=" items-center justify-center">
              <h1 className="h2 mb-4 pr-5 text-5xl">Downloads</h1>
            </div>
            <p className="text-xl text-gray-600"></p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 lg:pr-4">
              <div className="h-[250px] custom-container my-3">
                <FaApple className="fa-icon"></FaApple>
                <div className="text-lg  font-semibold ml-1">Version {version} (beta)</div>
                <div className="flex">
                  <a
                    href={
                      isLoading
                        ? '#'
                        : `https://github.com/T31K/harmonize/releases/download/${version}/harmonize_${version}_universal.dmg`
                    }
                    className="group relative inline-flex items-center mt-5 overflow-hidden rounded-2xl  py-4 px-6 text-lg font-bold outline-none transition duration-300 focus:ring-[0.1875rem] focus:ring-purple-400 bg-stone-800 text-orange-50 shadow-2xl shadow-stone-800/30"
                  >
                    <div className="ease absolute left-5 translate-x-0 opacity-100 transition duration-300 "></div>
                    <div className="ease translate-x-0 transition duration-300">Download for Mac</div>
                    <div className="ease absolute right-5 translate-x-full opacity-0 transition duration-300"></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 lg:pr-4">
              <div className="h-[250px] custom-container my-3 opacity-70">
                <FaLinux className="fa-icon"></FaLinux>

                <div className="text-lg font-semibold ml-1">Work In Progress</div>
                <p className="ml-1 mt-4">Working hard to get it cross platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Downloads;
