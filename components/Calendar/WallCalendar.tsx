// // WallCalendar is the ROOT component
// // It is like the BRAIN of the entire calendar
// // It holds all the state and passes data down to child components
// // Think of it as the director of a movie - it tells everyone what to do

// "use client";
// // This is needed in Next.js because we use useState and useEffect
// // Without this, Next.js would try to render this on the server
// // But state and browser interactions only work on the client (browser)

// import { useState } from "react";
// // useState = lets us store and update data

// import HeroImage from "./HeroImage";
// import CalendarHeader from "./CalendarHeader";
// import CalendarGrid from "./CalendarGrid";
// import NotesPanel from "./NotesPanel";
// // We import all child components we built earlier
// // WallCalendar will arrange them all together

// export default function WallCalendar() {

//   // STATE 1: Which month are we currently showing?
//   const [currentDate, setCurrentDate] = useState(new Date());
//   // new Date() = today's date
//   // So by default we show the current month

//   // STATE 2: The start date user selected
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   // null means no date selected yet
//   // Date | null means it can be either a Date or null

//   // STATE 3: The end date user selected
//   const [endDate, setEndDate] = useState<Date | null>(null);

//   // Function to go to the PREVIOUS month
//   const handlePrevMonth = () => {
//     setCurrentDate((prev) => {
//       const d = new Date(prev);
//       d.setMonth(d.getMonth() - 1);
//       // getMonth() gives current month number
//       // setMonth() with -1 goes to previous month
//       // JavaScript automatically handles year change
//       // Example: January - 1 = December of previous year
//       return d;
//     });
//   };

//   // Function to go to the NEXT month
//   const handleNextMonth = () => {
//     setCurrentDate((prev) => {
//       const d = new Date(prev);
//       d.setMonth(d.getMonth() + 1);
//       // +1 goes to next month
//       return d;
//     });
//   };

//   // Function called when user clicks any day on the grid
//   const handleDayClick = (date: Date) => {
//     if (!startDate || (startDate && endDate)) {
//       // CASE 1: No start date yet OR both dates already selected
//       // → Set this as the new start date and clear end date
//       setStartDate(date);
//       setEndDate(null);
//     } else {
//       // CASE 2: Start date exists but no end date yet
//       if (date < startDate) {
//         // If user clicks a date BEFORE start date
//         // → Make this the new start date
//         setStartDate(date);
//       } else {
//         // If user clicks a date AFTER start date
//         // → Set this as the end date
//         setEndDate(date);
//       }
//     }
//   };

//   return (
//     // Outer wrapper - centers the calendar on the page
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">

//       {/* The actual calendar card */}
//       <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm md:max-w-4xl">
//         {/* rounded-2xl = nicely rounded corners */}
//         {/* shadow-2xl = deep shadow to look like physical calendar */}
//         {/* overflow-hidden = child elements don't spill outside rounded corners */}
//         {/* max-w-sm = on mobile, max width is small */}
//         {/* md:max-w-4xl = on desktop, max width is large */}

//         {/* DESKTOP LAYOUT: side by side */}
//         {/* MOBILE LAYOUT: stacked vertically */}
//         <div className="flex flex-col md:flex-row">
//           {/* flex-col = stacked on mobile */}
//           {/* md:flex-row = side by side on desktop */}

//           {/* LEFT PANEL: Hero Image */}
//           {/* On desktop this takes up 40% width */}
//           {/* On mobile it's full width at the top */}
//           <div className="w-full md:w-2/5">
//             <HeroImage month={currentDate.getMonth()} />
//             {/* getMonth() returns 0-11 */}
//             {/* We pass it to HeroImage so it shows the right photo */}
//           </div>

//           {/* RIGHT PANEL: Calendar controls + grid + notes */}
//           {/* On desktop this takes up 60% width */}
//           <div className="w-full md:w-3/5 flex flex-col">

//             {/* Calendar Header: month name + navigation arrows */}
//             <CalendarHeader
//               currentDate={currentDate}
//               onPrevMonth={handlePrevMonth}
//               onNextMonth={handleNextMonth}
//             />

//             {/* Calendar Grid: the actual date grid */}
//             <CalendarGrid
//               currentDate={currentDate}
//               startDate={startDate}
//               endDate={endDate}
//               onDayClick={handleDayClick}
//             />

//             {/* Notes Panel: write and save notes */}
//             <NotesPanel
//               startDate={startDate}
//               endDate={endDate}
//               currentMonth={currentDate}
//             />

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import HeroImage from "./HeroImage";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "./NotesPanel";

export default function WallCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const d = new Date(prev);
      d.setMonth(d.getMonth() - 1);
      return d;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const d = new Date(prev);
      d.setMonth(d.getMonth() + 1);
      return d;
    });
  };

  const handleDayClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) setStartDate(date);
      else setEndDate(date);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Realistic wall texture - warm off-white like a painted wall
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%),
          linear-gradient(160deg, #c8c8c8 0%, #b8b8b8 50%, #c0c0c0 100%)
        `,
        padding: "clamp(16px, 5vw, 60px)",
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "500px",
      }}>

        {/* Nail at top */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "-1px",
          zIndex: 20,
        }}>
          
          {/* Nail shaft */}
          <div style={{
            width: "3px",
            height: "12px",
            background: "linear-gradient(to bottom, #aaa, #555)",
            boxShadow: "1px 0 2px rgba(0,0,0,0.2)",
          }} />
        </div>

        {/* The calendar */}
        <div
          style={{
            background: "white",
            width: "100%",
            borderRadius: "3px",
            overflow: "hidden",
            // Deep realistic shadow - multiple layers
            boxShadow: `
            0 4px 8px rgba(0,0,0,0.3),
            0 12px 24px rgba(0,0,0,0.25),
            0 24px 48px rgba(0,0,0,0.2),
            8px 16px 32px rgba(0,0,0,0.15)
          `,
          }}
        >
          {/* Spiral rings - dark metallic */}
          <div style={{
            background: "linear-gradient(to bottom, #888, #666)",
            // Dark gray bar at top like real calendar binding
            padding: "6px 16px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}>
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "clamp(12px, 3vw, 18px)",
                  height: "clamp(12px, 3vw, 18px)",
                  borderRadius: "50%",
                  // Each ring looks like a real metal spiral ring
                  background: "radial-gradient(circle at 30% 25%, #e8e8e8, #444)",
                  border: "1.5px solid #333",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>

          {/* Hero image */}
          <HeroImage month={currentDate.getMonth()} />

          {/* Notes + Calendar row */}
          <div style={{ display: "flex", flexDirection: "row" }}>

            {/* LEFT: Notes panel - 35% */}
            <div style={{
              width: "35%",
              borderRight: "1px solid #eee",
              minWidth: 0,
            }}>
              <NotesPanel
                startDate={startDate}
                endDate={endDate}
                currentMonth={currentDate}
              />
            </div>

            {/* RIGHT: Calendar - 65% */}
            <div style={{ width: "65%", minWidth: 0 }}>
              <CalendarHeader
                currentDate={currentDate}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
              />
              <CalendarGrid
                currentDate={currentDate}
                startDate={startDate}
                endDate={endDate}
                onDayClick={handleDayClick}
              />
            </div>
          </div>
        </div>

        {/* Wall shadow below calendar */}
        <div style={{
          width: "85%",
          height: "30px",
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, transparent 70%)",
          marginTop: "2px",
          // This makes it look like the calendar is casting a shadow on the wall
        }} />
      </div>
    </div>
  );
}