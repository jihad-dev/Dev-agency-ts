import React from 'react';
import { ArrowRight, Code, Laptop, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950 dark:via-gray-900 dark:to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              We Build Digital Experiences That 
              <span className="text-indigo-600 dark:text-indigo-400"> Inspire</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your vision into reality with our expert team of developers and designers.
              We create stunning, high-performance digital solutions that drive results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all flex items-center gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all">
                View Our Work
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                  <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">Web Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">Custom solutions for your unique needs</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl mt-8">
                  <Smartphone className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">Mobile Apps</h3>
                  <p className="text-gray-600 dark:text-gray-300">Native and cross-platform development</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                  <Laptop className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">UI/UX Design</h3>
                  <p className="text-gray-600 dark:text-gray-300">Beautiful, intuitive interfaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}