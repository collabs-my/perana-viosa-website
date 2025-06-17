"use client";

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  image?: string;
  description?: string;
  linkedin?: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group relative w-[280px] h-[280px] bg-white rounded-[32px] p-[3px] shadow-[#604b4a30_0px_70px_30px_-50px] transition-all duration-500 ease-in-out hover:rounded-tl-[55px]">
      {/* Mail Button */}
      <button 
        className="absolute right-8 top-6 bg-transparent border-none z-20"
        onClick={() => window.open(`mailto:${member.email}`, '_blank')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="stroke-[#fbb9b6] hover:stroke-[#f55d56] transition-colors">
          <rect width={20} height={16} x={2} y={4} rx={2} />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </button>

      {/* Profile Picture */}
      <div className="absolute w-[calc(100%-6px)] h-[calc(100%-6px)] top-[3px] left-[3px] rounded-[29px] z-10 border-0 border-[#fbb9b6] overflow-hidden transition-all duration-500 ease-in-out delay-200 group-hover:w-[100px] group-hover:h-[100px] group-hover:aspect-square group-hover:top-[10px] group-hover:left-[10px] group-hover:rounded-full group-hover:z-30 group-hover:border-[7px] group-hover:border-[#fbb9b6] group-hover:shadow-[rgba(96,75,74,0.1882352941)_0px_5px_5px_0px] group-hover:delay-100">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-[2.5] group-hover:delay-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#fbb9b6] to-[#f55d56] flex items-center justify-center">
            <span className="text-white text-4xl font-bold">
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-[3px] left-[3px] right-[3px] bg-[#fbb9b6] top-[80%] rounded-[29px] z-20 shadow-[rgba(96,75,74,0.1882352941)_0px_5px_5px_0px_inset] overflow-hidden transition-all duration-500 cubic-bezier(0.645,0.045,0.355,1) group-hover:top-[20%] group-hover:rounded-[80px_29px_29px_29px] group-hover:delay-200">
        <div className="absolute bottom-0 left-6 right-6 h-40">
          <span className="block text-xl text-white font-bold">{member.name}</span>
          <span className="block text-sm text-white mt-2 font-semibold">{member.role}</span>
          <span className="block text-xs text-white mt-2 opacity-90 line-clamp-3 opacity-0 group-hover:opacity-90 transition-opacity duration-300">{member.description}</span>
        </div>
        
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
          <div className="flex gap-4">
            {/* LinkedIn - First position */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-5 fill-white hover:fill-[#f55d56] hover:scale-110 transition-all cursor-pointer"
              onClick={() => window.open(member.linkedin, '_blank')}
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
            {/* Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height="15.999" viewBox="0 0 16 15.999" className="h-5 fill-white hover:fill-[#f55d56] hover:scale-110 transition-all cursor-pointer">
              <path d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" transform="translate(6 598)" />
            </svg>
            {/* Twitter/X */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 fill-white hover:fill-[#f55d56] hover:scale-110 transition-all cursor-pointer">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </div>
          
          <button 
            className="bg-white text-[#fbb9b6] border-none rounded-[20px] text-xs px-3 py-2 shadow-[rgba(165,132,130,0.1333333333)_0px_5px_5px_0px] hover:bg-[#f55d56] hover:text-white transition-all"
            onClick={() => window.open(`mailto:${member.email}`, '_blank')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

// Team data
const teamMembers: TeamMember[] = [
  {
    name: "Prenessa Nalliah",
    role: "Founder",
    email: "prenessa@company.com",
    image: "/Prenessa Nalliah.webp",
    description: "An experienced entrepreneur who has founded multiple brands and coached hundreds of entrepreneurs to success.",
    linkedin: "https://www.linkedin.com/in/prenessanalliah/"
  },
  {
    name: "Prenessa Nalliah",
    role: "Founder",
    email: "prenessa@company.com",
    image: "/Prenessa Nalliah.webp",
    description: "An experienced entrepreneur who has founded multiple brands and coached hundreds of entrepreneurs to success.",
    linkedin: "https://www.linkedin.com/in/prenessanalliah/"
  },
  {
    name: "Prenessa Nalliah",
    role: "Founder",
    email: "prenessa@company.com",
    image: "/Prenessa Nalliah.webp",
    description: "An experienced entrepreneur who has founded multiple brands and coached hundreds of entrepreneurs to success.",
    linkedin: "https://www.linkedin.com/in/prenessanalliah/"
  }
];

// Main Team Section Component
const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the talented individuals behind our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
