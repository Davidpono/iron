import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DrawerDemo } from '../drawer';
import { any } from 'zod';
import { Button } from '../ui/button';

interface Day {
  date: string;
  day: string;
  sectionsections: any[]; // Assuming sectionsections is an array of sections
  mondayIndex: number; // Monday index
  tuesdayIndex: number; // Tuesday index
  wednesdayIndex: number; // Wednesday index
  thursdayIndex: number; // Thursday index
  fridayIndex: number; // Friday index
  saturdayIndex: number; // Saturday index
  sundayIndex: number; // Sunday index
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

  console.log(data.data)

  const filteredSections = Object.entries(data.data)
  .filter(([key, value]) => key.startsWith('sectionsection') && value && (value as any[]).length > 0)
  .reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {} as Record<string, any>);

  console.log("filtered",filteredSections[0]);


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

  for (let month = 0; month < 12; month++) {
    const firstDayOfMonth = new Date(currentYear, month, 1);
    const lastDayOfMonth = new Date(currentYear, month, getDaysInMonth(currentYear, month));

    let monthData: Month = {
      month: firstDayOfMonth.toLocaleString('default', { month: 'long' }),
      days: []
    };

    const startDayOfWeek = firstDayOfMonth.getDay();
    let mondayIndex = 0; // Initialize Monday index
    let tuesdayIndex = 0; // Initialize Tuesday index
    let wednesdayIndex = 0; // Initialize Wednesday index
    let thursdayIndex = 0; // Initialize Thursday index
    let fridayIndex = 0; // Initialize Friday index
    let saturdayIndex = 0; // Initialize Saturday index
    let sundayIndex = 0; // Initialize Sunday index
    for (let i = 0; i < startDayOfWeek; i++) {
      monthData.days.push({ 
        date: '', 
        day: '', 
        sectionsections: [], 
        mondayIndex: 0,
        tuesdayIndex: 0, 
        wednesdayIndex: 0,
        thursdayIndex: 0,
        fridayIndex: 0,
        saturdayIndex: 0,
        sundayIndex: 0,
      });
    }

    for (let d = new Date(firstDayOfMonth); d <= lastDayOfMonth; d.setDate(d.getDate() + 1)) {
      const day: Day = { date: formatDate(new Date(d)), day: getDayOfWeek(new Date(d)), sectionsections: [], mondayIndex: 0, tuesdayIndex: 0, wednesdayIndex: 0, thursdayIndex: 0, fridayIndex: 0, saturdayIndex: 0, sundayIndex: 0 };
    
      switch (day.day) {
        case 'Monday':
          mondayIndex++;
          day.mondayIndex = mondayIndex;
          break;
        case 'Tuesday':
          tuesdayIndex++;
          day.tuesdayIndex = tuesdayIndex;
          break;
        case 'Wednesday':
          wednesdayIndex++;
          day.wednesdayIndex = wednesdayIndex;
          break;
        case 'Thursday':
          thursdayIndex++;
          day.thursdayIndex = thursdayIndex;
          break;
        case 'Friday':
          fridayIndex++;
          day.fridayIndex = fridayIndex;
          break;
        case 'Saturday':
          saturdayIndex++;
          day.saturdayIndex = saturdayIndex;
          break;
        case 'Sunday':
          sundayIndex++;
          day.sundayIndex = sundayIndex;
          break;
        default:
          break;
      }
    
      monthData.days.push(day);
    }
    

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
    <div className='' style={{ maxWidth: '1000px', maxHeight: '600px', margin: '0 auto' }}>
      <div className='flex justify-between content-center' >
        <Button> update rest days </Button>
        <Button> update teh day your split starts </Button>

      </div>

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
                  <DrawerDemo 
                    data={day.date} 
                    data1={day.day} 
                    sectionsection={filteredSections}
                    index={
                      day.day === 'Monday' ? day.mondayIndex :
                      day.day === 'Tuesday' ? day.tuesdayIndex :
                      day.day === 'Wednesday' ? day.wednesdayIndex :
                      day.day === 'Thursday' ? day.thursdayIndex :
                      day.day === 'Friday' ? day.fridayIndex :
                      day.day === 'Saturday' ? day.saturdayIndex :
                      day.day === 'Sunday' ? day.sundayIndex : undefined
                    }
                    />
                  <div className='calsizeofboxes'>
                    {Object.keys(day).map((key, index) => {
                      if (key !== 'date' && key !== 'day' && key !== 'sectionsections' && key !== 'mondayIndex') {
                        if (typeof day[key] === 'object') {
                          // Render nested object as string
                          return (
                            <div key={index}>
                             {//{key}: {JSON.stringify(day[key])}
                        }
                            </div>
                          );
                        } else {
                          // Render other properties normally
                          return (
                            <div key={index}>
                              {//{key}: {day[key]}
                        }
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
