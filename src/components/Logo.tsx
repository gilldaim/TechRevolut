import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  lightText?: boolean;
}

export default function Logo({ className = "h-8 w-8", showText = true, lightText = false }: LogoProps) {
  return (
    <div className="flex items-center space-x-2.5">
      <div className={`${className} flex-shrink-0 relative`}>
        <svg
          className="w-full h-full drop-shadow-md"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield background - pure red */}
          <path
            d="M256 64C355 64 395 90 395 240C395 365 301 430 256 460C211 430 117 365 117 240C117 90 157 64 256 64Z"
            fill="#E11D48"
          />
          
          {/* Three white rising bar columns with rounded tops */}
          <rect x="195" y="275" width="28" height="60" rx="8" fill="white" />
          <rect x="242" y="225" width="28" height="110" rx="8" fill="white" />
          <rect x="289" y="175" width="28" height="160" rx="8" fill="white" />
          
          {/* Rising trend diagonal arrow line on top */}
          <path
            d="M145 255 L211 190 L250 225 L345 130"
            stroke="white"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Arrowhead pointing up-right */}
          <path
            d="M295 130 H345 V180"
            stroke="white"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col select-none">
          <span className={`font-display font-extrabold text-base sm:text-lg tracking-tight leading-none ${lightText ? 'text-white' : 'text-slate-900'}`}>
            Tech<span className="text-red-brand">Revolut</span>
          </span>
          <span className={`text-[7.5px] font-bold tracking-[0.16em] uppercase mt-0.5 leading-none ${lightText ? 'text-slate-400' : 'text-slate-500'}`}>
            Smarter Routing. Stronger Networks.
          </span>
        </div>
      )}
    </div>
  );
}
