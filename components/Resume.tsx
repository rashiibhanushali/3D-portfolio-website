import React from 'react';
import MagicButton from './ui/MagicButton';
import { PiReadCvLogo } from 'react-icons/pi';
import { navItems, socialMedia } from '@/data';
import { FaLocationArrow } from 'react-icons/fa6';
import Image from 'next/image';

const Resume = () => {
    const resumeItem = navItems.find(item => item.name === "Resume");

    return (
        <div className="flex flex-col items-center relative my-20 z-10 mt-0">
            <div className="flex justify-between w-full max-w-md gap-8"> {/* Added gap-8 for space between buttons */}
                {resumeItem && (
                    <a href={resumeItem.link} target={resumeItem.target} rel={resumeItem.rel}>
                        <MagicButton
                            title="Here&apos;s my Resume"
                            icon={<PiReadCvLogo />}
                            position='right'
                        />
                    </a>
                )}
                <a href="mailto:rashibhanushali45@gmail.com">
                    <MagicButton
                        title="Contact me!"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            
            <footer className="w-full mt-20">
                <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                    <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Rashi</p>
                    <div className='flex items-center md:gap-3 gap-6'>
                        {socialMedia.map((profile) => (
                            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-200'>
                                <Image src={profile.img} alt={profile.id} width="20" height="20" />
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Resume;
