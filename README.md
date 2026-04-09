# Interactive Wall Calendar

A responsive wall calendar component built with Next.js and React. 
Designed to look and feel like a physical wall calendar hanging on a wall.

## Features

- Wall calendar aesthetic with hero image for each month
- Date range selection with visual start, end, and in-between states
- Integrated notes section — save notes per date range or month
- Notes persist in localStorage even after page refresh
- Fully responsive — works on mobile, tablet, and desktop
- Month navigation with smooth transitions
- Highlights today's date, weekends, and selected ranges

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- date-fns
- lucide-react

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Harshita2456/interactive-calendar.git
cd interactive-calendar
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

- Click any date to set it as the **start date**
- Click another date to set it as the **end date**
- The range between them will be highlighted
- Use the **Notes** section to write and save notes for your selected range
- Navigate between months using the **arrow buttons**
- Notes are automatically saved in your browser

## Project Structure

```
components/
└── Calendar/
    ├── WallCalendar.tsx    # Root component, holds all state
    ├── CalendarHeader.tsx  # Month name and navigation arrows
    ├── CalendarGrid.tsx    # Date grid with 7-column layout
    ├── DayCell.tsx         # Individual day box with visual states
    ├── HeroImage.tsx       # Monthly hero image with blue wave design
    └── NotesPanel.tsx      # Notes area with localStorage persistence
```
