

import React, { useState } from 'react';
import cv from "../../../../assets/CV/Taissir Hammouda CV.pdf"
const Resumer = () => {
    return (
    <div id="resumer">
    <iframe src={cv} className='w-[100%] h-[500px]' />
    </div>
    );
   };

export default Resumer
