import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer class="bg-gray-100 border-t-1 border-[#696969]">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a
                  href="#"
                  target="_blank"
                  class=" hover:text-green-500"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a
                  href="#"
                  target="_blank"
                  class="hover:text-green-500"
                >
                  FAQ
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="https://twitter.com/T31K__"
                  target="_blank"
                  class="hover:text-green-500"
                >
                  Twitter
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="mailto:contact@getharmonize.app"
                  class="hover:text-green-500"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <Link
                  to="/privacy"
                  class="hover:text-green-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li class="mb-4">
                <Link
                  to="/refund"
                  class="hover:text-green-500"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Partners</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <Link
                  to="https://calorieasy.app"
                  target="_blank"
                  class="hover:text-green-500"
                >
                  Calorieasy
                </Link>
              </li>{' '}
              <li class="mb-4">
                <Link
                  to="https://t31k.com/"
                  class="hover:text-green-500"
                >
                  T31K
                </Link>
              </li>
              <li class="mb-4">
                <Link
                  to="https://earthinterior.sg/"
                  class="hover:text-green-500"
                >
                  Earth Interior Design
                </Link>
              </li>
              <li class="mb-4">
                <Link
                  to="https://hackapura.com/"
                  class="hover:text-green-500"
                >
                  Hackapura
                </Link>
              </li>
                <li class="mb-4">
                <Link
                  to="https://hackalumpur.com/"
                  class="hover:text-green-500"
                >
                  Hackalumpur
                </Link>
              </li>
              <li class="mb-4">
                <Link
                  to="https://taroternity.com/"
                  class="hover:text-green-500"
                >
                  Taroternity
                </Link>
              </li>
              <li class="mb-4">
                <Link
                  to="https://clemanteemusic.com/"
                  class="hover:text-green-500"
                >
                  Clemantee Music
                </Link>
              </li>
              <li class="mb-4">
                <Link
                  to="https://mirabelledecoupage.com/"
                  class="hover:text-green-500"
                >
                  Mirabellé Decoupage
                </Link>
              </li>
              <li class="mb-4">
                <Link
                  to="https://fixitjerry.com/"
                  class="hover:text-green-500"
                >
                  Fix It Jerry
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            {new Date().getFullYear()} Harmonize. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a
              href="https://twitter.com/T31K__"
              target="_blank"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
            <a
              href="https://github.com/T31K"
              target="_blank"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
