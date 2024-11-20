import React from 'react';
import { Code2, Smartphone, Palette, ShoppingCart, Gauge, Wrench } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging and intuitive digital experiences.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Scalable online stores with secure payment processing and inventory management.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Optimization services to ensure your applications run at peak efficiency.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Ongoing support and updates to keep your applications running smoothly.',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services to help your business thrive in the modern world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all hover:shadow-lg group bg-white dark:bg-gray-800">
                <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}