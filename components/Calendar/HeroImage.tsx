// // HeroImage is the big beautiful image at the top of the calendar
// // Each month has a different image - just like a real wall calendar
// // The image changes with a smooth fade when you switch months

// type HeroImageProps = {
//   month: number; // 0 = January, 1 = February ... 11 = December
// };

// // This is our image map - each month gets a unique Unsplash image
// // Unsplash gives free high quality photos - no API key needed for direct URLs
// const monthImages: Record<number, { url: string; label: string }> = {
//   0: {
//     url: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=800&q=80",
//     label: "January - Winter Snow",
//   },
//   1: {
//     url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
//     label: "February - Valentine Blooms",
//   },
//   2: {
//     url: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80",
//     label: "March - Spring Flowers",
//   },
//   3: {
//     url: "https://images.unsplash.com/photo-1490750967868-88df5691cc8a?w=800&q=80",
//     label: "April - Cherry Blossoms",
//   },
//   4: {
//     url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
//     label: "May - Green Fields",
//   },
//   5: {
//     url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
//     label: "June - Summer Beach",
//   },
//   6: {
//     url: "https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=800&q=80",
//     label: "July - Mountain Adventure",
//   },
//   7: {
//     url: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
//     label: "August - Golden Sunset",
//   },
//   8: {
//     url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
//     label: "September - Autumn Leaves",
//   },
//   9: {
//     url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
//     label: "October - Fall Colors",
//   },
//   10: {
//     url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
//     label: "November - Misty Mountains",
//   },
//   11: {
//     url: "https://images.unsplash.com/photo-1482003297000-b7663a1673f1?w=800&q=80",
//     label: "December - Christmas Snow",
//   },
// };

// export default function HeroImage({ month }: HeroImageProps) {
//   // Get the image data for the current month
//   const image = monthImages[month];

//   return (
//     <div className="relative w-full h-48 md:h-64 overflow-hidden">
//       {/* overflow-hidden makes sure image doesn't spill outside the box */}

//       {/* The actual image */}
//       <img
//         src={image.url}
//         alt={image.label}
//         className="w-full h-full object-cover transition-all duration-700"
//         // object-cover = fills the box without stretching the image
//         // transition + duration-700 = smooth 700ms fade when image changes
//       />

//       {/* Dark overlay at the bottom so month name is readable */}
//       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
//       {/* absolute = sits on top of the image */}
//       {/* bg-gradient-to-t = gradient going from bottom (dark) to top (transparent) */}
//       {/* from-black/60 = 60% opacity black at the bottom */}

//       {/* Month label shown on top of the image at bottom left */}
//       <div className="absolute bottom-3 right-4 text-right">
//         <p className="text-white/70 text-xs uppercase tracking-widest">
//           {new Date().getFullYear()}
//           {/* Shows current year */}
//         </p>
//         <p className="text-white text-lg font-bold uppercase tracking-wide">
//           {image.label.split(" - ")[1]}
//           {/* Splits "January - Winter Snow" and shows only "Winter Snow" */}
//         </p>
//       </div>

//       {/* Spiral binding decoration at the top - like a real wall calendar! */}
//       <div className="absolute top-0 left-0 right-0 flex justify-around px-4 py-1 bg-white/10">
//         {/* We render 16 small circles to simulate the spiral rings */}
//         {Array.from({ length: 16 }).map((_, i) => (
//           <div
//             key={i}
//             className="w-3 h-3 rounded-full border-2 border-gray-400 bg-gray-200"
//             // Each circle = one spiral ring of the wall calendar
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

type HeroImageProps = {
  month: number;
};

const monthImages: Record<number, { url: string; monthName: string; year: number }> = {
  0: { url: "https://picsum.photos/seed/january/800/400", monthName: "JANUARY", year: 2026 },
  1: { url: "https://picsum.photos/seed/february/800/400", monthName: "FEBRUARY", year: 2026 },
  2: { url: "https://picsum.photos/seed/march/800/400", monthName: "MARCH", year: 2026 },
  3: { url: "https://picsum.photos/seed/april/800/400", monthName: "APRIL", year: 2026 },
  4: { url: "https://picsum.photos/seed/may/800/400", monthName: "MAY", year: 2026 },
  5: { url: "https://picsum.photos/seed/june/800/400", monthName: "JUNE", year: 2026 },
  6: { url: "https://picsum.photos/seed/july/800/400", monthName: "JULY", year: 2026 },
  7: { url: "https://picsum.photos/seed/august/800/400", monthName: "AUGUST", year: 2026 },
  8: { url: "https://picsum.photos/seed/september/800/400", monthName: "SEPTEMBER", year: 2026 },
  9: { url: "https://picsum.photos/seed/october/800/400", monthName: "OCTOBER", year: 2026 },
  10: { url: "https://picsum.photos/seed/november/800/400", monthName: "NOVEMBER", year: 2026 },
  11: { url: "https://picsum.photos/seed/december/800/400", monthName: "DECEMBER", year: 2026 },
};

export default function HeroImage({ month }: HeroImageProps) {
  const image = monthImages[month];

  return (
    <div className="relative w-full">

      {/* Hero image */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={image.url}
          alt={image.monthName}
          className="w-full h-full object-cover"
        />

        {/* Blue zigzag wave shape at the bottom of image */}
        {/* This is the most iconic part of the reference design */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 400 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            {/* Left blue triangle/wave */}
            <polygon
              points="0,60 0,20 180,60"
              fill="#1da1e8"
            />
            {/* Right blue triangle/wave */}
            <polygon
              points="160,60 400,20 400,60"
              fill="#1da1e8"
            />
            {/* White triangle in the middle creating the zigzag */}
            <polygon
              points="150,60 250,15 350,60"
              fill="white"
            />
          </svg>

          {/* Year and Month name over the blue wave - right side */}
    <div style={{
      position: "absolute",
      bottom: "8px",
      right: "12px",
      textAlign: "right",
      zIndex: 10,
    }}>
      <p style={{
        color: "white",
        fontSize: "12px",
        fontWeight: "300",
        letterSpacing: "3px",
        lineHeight: "1",
        marginBottom: "2px",
        textShadow: "0 1px 4px rgba(0,0,0,0.3)",
      }}>
        {image.year}
      </p>
      <p style={{
        color: "white",
        fontSize: "clamp(16px, 4vw, 26px)",
        // clamp makes font size responsive
        // minimum 16px, scales with viewport, maximum 26px
        fontWeight: "900",
        letterSpacing: "2px",
        lineHeight: "1",
        textShadow: "0 2px 8px rgba(0,0,0,0.4)",
        // Shadow makes text readable on any image
      }}>
        {image.monthName}
      </p>
</div>
        </div>
      </div>
    </div>
  );
}