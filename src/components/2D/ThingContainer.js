import React from 'react'
import ThingCard from './ThingCard';

export default function ThingsContainer() {
  return (
    <div className='my-20'>
      <div className='flex justify-between mx-3'>
          <h1 className='text-2xl'>Things</h1>
          <p className='text-xl'>more</p>
      </div>

      {/* Find out why this doesn't scroll horizontally */}
      <div className='flex overflow-x-auto scrollbar-hide'>
          <ThingCard title="Test" description="Description" video={true} textBlack={true} mediaSource="https://res.cloudinary.com/dvwbpgk6p/video/upload/v1723048735/New%20Garrett.cool/Modern%20Player/Screen_Recording_2024-08-06_at_2.59.23_PM_gusedu.mov" />
          <ThingCard title="Test" description="Description" video={false} textBlack={false} mediaSource="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1722213801/New%20Garrett.cool/Modern%20Player/losleo_wrza3i.jpg" />
          <ThingCard title="Test" description="Description" video={true} textBlack={false} mediaSource="https://res.cloudinary.com/dvwbpgk6p/video/upload/v1723071280/New%20Garrett.cool/Modern%20Player/Test_x5obxw.mp4" />
      </div>
    </div>
  );
}
