'use client'
import Image from 'next/image';
import React from 'react';
import happy from '../../../public/header/happy.png';
import OfficeInfo from './OfficeInfo';
import DownloadButton from '../common/DownloadButton';

const Footer = () => {
  return (
    <div className="border py-12 text-center">
      <div className="flex flex-col items-center">
        <div>
          <Image src={happy} alt="Happy" width={50} height={50} />
        </div>
        <OfficeInfo/>
        <DownloadButton/>
      </div>
      <div className="m-8 ">
        &copy; 2022 Ahead app. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
