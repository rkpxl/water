"use client"
import NewsLatterBox from '@/components/Contact/NewsLatterBox';
import React, { useEffect, useState } from 'react';
import { db } from '../../util/firebase';
import { collection, addDoc } from 'firebase/firestore';

const EmailPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Set a timeout to show the popup after 5 seconds
    var timer;
    if(!localStorage.getItem('userInfo')) {
      timer = setTimeout(() => {
        setShowPopup(true);
      }, 10000);
    }

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const onClose = () => {
    setShowPopup(false)
  }

  if (!showPopup) {
    return null;
  }

  return (
    <div className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-5">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 flex flex-col ">
        <button
          onClick={onClose}
          className="mb-[-36px] z-50 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white right-5"
          aria-label="close"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 7.707a1 1 0 011.414-1.414L10 8.586l1.293-1.293a1 1 0 111.414 1.414L11.414 10l1.293 1.293a1 1 0 01-1.414 1.414L10 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 10 7.293 8.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <NewsLatterBox onClose={onClose}/>
      </div>
    </div>
  );
};

export default EmailPopup;
