import React from 'react';

export const SocialIcon = ({ href, icon, bgColor, textColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition duration-200 delay-100 hover:-translate-y-2 duration-500 inline-flex items-center justify-center w-8 h-8 rounded-full ${bgColor} ${textColor} transition-colors duration-300 hover:opacity-75`}
    >
      <i className={`${icon} text-lg`} />
    </a>
  );
};
