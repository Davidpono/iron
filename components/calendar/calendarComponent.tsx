import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DrawerDemo } from '../drawer';

interface Day {
  date: string;
  day: string;
  sectionsections: any[]; // Assuming sectionsections is an array of sections
  [key: string]: any; // Allow for dynamic keys for sections
}

interface Month {
  month: string;
  days: Day[];
}

function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default function Calendar(data:any) {
  console.log("from cal", data.data);

  const sliderRef = useRef<Slider>(null);
  const currentYear = new Date().getFullYear();

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getDayOfWeek = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  let calendar: Month[] = [];
  let dayOfWeekIndex = 0;

  for (let month = 0; month < 12; month++) {
    const firstDayOfMonth = new Date(currentYear, month, 1);
    const lastDayOfMonth = new Date(currentYear, month, getDaysInMonth(currentYear, month));

    let monthData: Month = {
      month: firstDayOfMonth.toLocaleString('default', { month: 'long' }),
      days: []
    };

    const startDayOfWeek = firstDayOfMonth.getDay();

    for (let i = 0; i < startDayOfWeek; i++) {
      monthData.days.push({ date: '', day: '', sectionsections: [] });
      dayOfWeekIndex++;
    }

    for (let d = firstDayOfMonth; d <= lastDayOfMonth; d.setDate(d.getDate() + 1)) {
      const day: Day = { date: formatDate(new Date(d)), day: getDayOfWeek(new Date(d)), sectionsections: [] };
      monthData.days.push(day);

      // Distribute data into each day of the week
      for (let sectionKey in data.data) {
        if (sectionKey.startsWith('sectionsection')) {
          const sectionIndex = parseInt(sectionKey.substring(13));
          if (sectionIndex <= 7) {
            const sectionData = data.data[sectionKey];
            day.sectionsections.push(sectionData); // Push section data to sectionsections array
          }
        }
      }

      dayOfWeekIndex++;
    }

    dayOfWeekIndex = 0;
    calendar.push(monthData);
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const goToMonth = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div style={{ maxWidth: '1000px', maxHeight: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginTop: '10px' }}></div>

      <div className='bg-black  rounded-sm' style={{width:'94%',height:'60px', position: "relative",
        bottom: "-20px"}}>
        <h1 className='text-center text-white font-bold text-2xl'><br/> {currentYear}</h1>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {calendar.map((month, index) => (
          <div key={index} className="slide">
            <div className='bg-black mb--10 flex flex-col justify-center rounded-sm' style={{width:'94%', height:'60px', position: "relative",
              bottom: "-20px"}}>
              <h2 className='text-center  text-white'>{month.month}</h2>
              <div className='flex justify-center'>
                <select onChange={(e) => goToMonth(parseInt(e.target.value))} className='w-1/5 rounded-sm'>
                  {calendar.map((month, index) => (
                    <option key={index} value={index}>
                      {month.month}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='monthcontainer'>
              {month.days.map((day, dayIndex) => (
                <div key={dayIndex} className=''>
                  {/* Passing sectionsections data to DrawerDemo */}
                  <DrawerDemo data={day.date} data1={day.day} sectionData={day.sectionsections} />
                  <div className='calsizeofboxes'>
                    {Object.keys(day).map((key, index) => {
                      if (key !== 'date' && key !== 'day' && key !== 'sectionsections') {
                        if (typeof day[key] === 'object') {
                          // Render nested object as string
                          return (
                            <div key={index}>
                              {key}: {JSON.stringify(day[key])}
                            </div>
                          );
                        } else {
                          // Render other properties normally
                          return (
                            <div key={index}>
                              {key}: {day[key]}
                            </div>
                          );
                        }
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
