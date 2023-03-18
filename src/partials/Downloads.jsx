import React, { useState, , useEffect } from 'react';
import axios from 'axios'
import { FaApple, FaLinux } from 'react-icons/fa';


function Downloads() {
  const [version, setVersion] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    getLatestVersion();
  }, [])
  
  const getLatestVersion = async () => {
    try {
      const response = await axios.get(`https://api.github.com/repos/t31k/harmonize/releases/latest`);
      const latestRelease = response.data;
      const latestVersion = latestRelease.tag_name;
      setVersion(latestVersion)
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10 mt-24">
            <div className=" items-center justify-center">
              <h1 className="h2 mb-4 pr-5">Downloads</h1>
            </div>
            <p className="text-xl text-gray-600"></p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 lg:pr-4">
              <div className="h-[250px] custom-container my-3">
                <FaApple className="fa-icon"></FaApple>
                <div className="text-lg font-semibold ml-1">Version {version}</div>
                <a
                  className="ml-1 mt-4 p-4 border-2 w-[150px] flex justify-center rounded-lg bg-gray-200 font-bold hover:cursor-pointer hover:bg-gray-300"
                  href={isLoading ? '#' : `https://github.com/T31K/harmonize/releases/download/${version}/harmonize_1.0.5_x64.dmg`}
                  >
                  Download
                </a>
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
