// pages/sports/index.tsx
// import SportPage from '@/components/SportPage'; 

const sportsData = [
  {
    sport: 'Football',
    season: 'Fall 2025',
    term: 'Fall Term',
    events: [
      {
        name: '5v5 Flag Football League',
        link: '/register/football-5v5',
        dateRange: 'Sept 15 - Oct 30',
        joinDeadline: 'Sept 10',
        status: 'Open',
      },
    ],
  },
  {
    sport: 'Basketball',
    season: 'Fall 2025',
    term: 'Fall Term',
    events: [
      {
        name: 'Co-Rec Basketball',
        link: '/register/basketball-corec',
        dateRange: 'Oct 1 - Nov 15',
        joinDeadline: 'Sept 25',
        status: 'Open',
      },
    ],
  },
  {
    sport: 'Soccer',
    season: 'Fall 2025',
    term: 'Fall Term',
    events: [
      {
        name: '7v7 Soccer League',
        link: '/register/soccer-7v7',
        dateRange: 'Sept 20 - Nov 1',
        joinDeadline: 'Sept 14',
        status: 'Open',
      },
    ],
  },
  {
    sport: 'Tennis',
    season: 'Fall 2025',
    term: 'Fall Term',
    events: [
      {
        name: 'Singles Tennis Tournament',
        link: '/register/tennis-singles',
        dateRange: 'Oct 5 - Oct 28',
        joinDeadline: 'Sept 30',
        status: 'Open',
      },
    ],
  },
];

export default sportsData
