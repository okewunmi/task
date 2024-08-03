// src/mockData.js

const apartments = [
  {
    name: "Victoria Student Apartments",
    amount: 800,
    image: "./public/images/img1.jpg",
    duration: {
      walk: "10 mins",
      train: "5 mins",
      bus: "7 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Study Room",
      "Laundry",
      "24/7 Security",
    ],
    description:
      "This modern student residence is located in the heart of London, offering comfortable living spaces and a vibrant community atmosphere. With top-notch facilities including a gym, library, and study room, it provides everything you need for a productive and enjoyable university experience.",
  },
  {
    name: "King's Cross Student Residence",
    amount: 850,
    image: "public/images/img1.jpg",
    duration: {
      walk: "15 mins",
      train: "10 mins",
      bus: "8 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Cinema Room",
      "Laundry",
      "24/7 Security",
      "Common Room",
    ],
    description:
      "Located near King's Cross, this residence offers a blend of convenience and comfort. With easy access to public transport and a range of amenities including a cinema room and common areas, it's an ideal choice for students looking to balance study and leisure.",
  },
  {
    name: "Camden Student Apartments",
    amount: 780,
    image: "/images/img1.jpg",
    duration: {
      walk: "12 mins",
      train: "6 mins",
      bus: "9 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Study Room",
    ],
    description:
      "Situated in the lively Camden area, these student apartments offer a dynamic living environment. The residence features a well-equipped gym, a serene library, and secure facilities to ensure a comfortable and safe stay for all students.",
  },
  {
    name: "Bloomsbury Student Living",
    amount: 900,
    image: "https://example.com/image4.jpg",
    duration: {
      walk: "8 mins",
      train: "4 mins",
      bus: "5 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Study Room",
      "Laundry",
      "24/7 Security",
      "Common Room",
    ],
    description:
      "This premium student accommodation in Bloomsbury offers luxury living with quick access to the university. The facility includes spacious study rooms, a state-of-the-art gym, and a common room for socializing, making it perfect for focused study and relaxation.",
  },
  {
    name: "Islington Student Housing",
    amount: 820,
    image: "https://example.com/image5.jpg",
    duration: {
      walk: "14 mins",
      train: "9 mins",
      bus: "6 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Cinema Room",
    ],
    description:
      "Located in Islington, this student housing provides a comfortable and secure environment. With amenities like a cinema room, gym, and library, it offers a balanced lifestyle for students who want to study hard and relax in comfort.",
  },
  {
    name: "Holborn Student Apartments",
    amount: 880,
    image: "https://example.com/image6.jpg",
    duration: {
      walk: "10 mins",
      train: "6 mins",
      bus: "7 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Common Room",
    ],
    description:
      "Situated in the vibrant area of Holborn, these student apartments provide a lively and supportive environment. With excellent transport links and a range of facilities including a common room and study areas, students can thrive both academically and socially.",
  },
  {
    name: "Shoreditch Student Housing",
    amount: 750,
    image: "https://example.com/image7.jpg",
    duration: {
      walk: "18 mins",
      train: "12 mins",
      bus: "10 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Study Room",
      "Laundry",
      "24/7 Security",
      "Common Room",
    ],
    description:
      "Located in the trendy Shoreditch area, this student housing offers a unique living experience. The residence features a modern gym, dedicated study rooms, and a common room for social activities, providing a perfect balance of work and play.",
  },
  {
    name: "Greenwich Student Apartments",
    amount: 770,
    image: "https://example.com/image8.jpg",
    duration: {
      walk: "20 mins",
      train: "10 mins",
      bus: "12 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Study Room",
    ],
    description:
      "These student apartments in Greenwich offer a peaceful and scenic environment. With well-maintained facilities including a gym and library, students can enjoy a conducive atmosphere for both studying and unwinding.",
  },
  {
    name: "Westminster Student Living",
    amount: 850,
    image: "https://example.com/image9.jpg",
    duration: {
      walk: "15 mins",
      train: "7 mins",
      bus: "9 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Cinema Room",
      "Laundry",
      "24/7 Security",
      "Common Room",
    ],
    description:
      "Located near Westminster, this student living facility offers a blend of luxury and convenience. With amenities like a cinema room and common areas, it provides a dynamic and engaging environment for students to thrive.",
  },
  {
    name: "Chelsea Student Residence",
    amount: 870,
    image: "https://example.com/image10.jpg",
    duration: {
      walk: "17 mins",
      train: "8 mins",
      bus: "11 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Study Room",
    ],
    description:
      "This stylish student residence in Chelsea offers a premium living experience. With top-tier facilities including a gym, library, and study rooms, students can enjoy a comfortable and productive stay.",
  },
  {
    name: "Paddington Student Housing",
    amount: 800,
    image: "https://example.com/image11.jpg",
    duration: {
      walk: "12 mins",
      train: "6 mins",
      bus: "8 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Study Room",
      "Laundry",
      "24/7 Security",
      "Common Room",
    ],
    description:
      "Located in the bustling Paddington area, this student housing provides a convenient and lively living environment. With easy access to public transport and a range of amenities, it offers everything students need for a balanced lifestyle.",
  },
  {
    name: "Hammersmith Student Apartments",
    amount: 760,
    image: "https://example.com/image12.jpg",
    duration: {
      walk: "15 mins",
      train: "8 mins",
      bus: "10 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Study Room",
    ],
    description:
      "These student apartments in Hammersmith offer a comfortable and secure living environment. With amenities like a gym, library, and 24/7 security, students can focus on their studies while enjoying a supportive community.",
  },
  {
    name: "Kensington Student Residence",
    amount: 900,
    image: "https://example.com/image13.jpg",
    duration: {
      walk: "10 mins",
      train: "5 mins",
      bus: "7 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Study Room",
      "Laundry",
      "24/7 Security",
      "Common Room",
    ],
    description:
      "This luxurious student residence in Kensington offers high-end living with excellent amenities. The facility includes spacious study rooms, a modern gym, and a common room for socializing, making it perfect for both academic success and relaxation.",
  },
  {
    name: "Brixton Student Housing",
    amount: 780,
    image: "https://example.com/image14.jpg",
    duration: {
      walk: "18 mins",
      train: "10 mins",
      bus: "12 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Cinema Room",
    ],
    description:
      "Located in the vibrant area of Brixton, this student housing offers a lively and engaging environment. With a range of amenities including a cinema room and gym, students can enjoy a dynamic lifestyle while focusing on their studies.",
  },
  {
    name: "Clapham Student Apartments",
    amount: 810,
    image: "https://example.com/image15.jpg",
    duration: {
      walk: "14 mins",
      train: "8 mins",
      bus: "10 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Study Room",
      "Laundry",
      "24/7 Security",
      "Common Room",
    ],
    description:
      "These student apartments in Clapham provide a comfortable and secure living space. With amenities like a gym, study rooms, and a common room, students can balance their academic and social lives effectively.",
  },
  {
    name: "Fulham Student Living",
    amount: 820,
    image: "https://example.com/image16.jpg",
    duration: {
      walk: "16 mins",
      train: "9 mins",
      bus: "11 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Study Room",
    ],
    description:
      "This student living facility in Fulham offers a blend of comfort and convenience. With well-maintained facilities including a library and gym, students can enjoy a productive and enjoyable university experience.",
  },
  {
    name: "Southwark Student Apartments",
    amount: 790,
    image: "https://example.com/image17.jpg",
    duration: {
      walk: "12 mins",
      train: "7 mins",
      bus: "9 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Study Room",
      "Laundry",
      "24/7 Security",
      "Common Room",
    ],
    description:
      "Located in Southwark, these student apartments offer a convenient and supportive living environment. With easy access to public transport and a range of amenities, students can focus on their studies while enjoying a balanced lifestyle.",
  },
  {
    name: "Battersea Student Residence",
    amount: 850,
    image: "https://example.com/image18.jpg",
    duration: {
      walk: "17 mins",
      train: "9 mins",
      bus: "10 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Cinema Room",
    ],
    description:
      "This student residence in Battersea offers a vibrant and comfortable living space. With top-notch facilities including a gym, library, and cinema room, it provides everything students need for a successful university experience.",
  },
  {
    name: "Whitechapel Student Apartments",
    amount: 820,
    image: "https://example.com/image19.jpg",
    duration: {
      walk: "14 mins",
      train: "8 mins",
      bus: "11 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Study Room",
    ],
    description:
      "Situated in the dynamic Whitechapel area, these student apartments offer a lively and engaging environment. With well-maintained facilities including a gym and study rooms, students can enjoy a balanced and productive lifestyle.",
  },
  {
    name: "Hackney Student Housing",
    amount: 760,
    image: "https://example.com/image20.jpg",
    duration: {
      walk: "18 mins",
      train: "10 mins",
      bus: "12 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Study Room",
      "Laundry",
      "24/7 Security",
      "Common Room",
    ],
    description:
      "Located in the vibrant Hackney area, this student housing provides a comfortable and secure living environment. With a range of amenities including a gym and study rooms, students can enjoy a balanced and engaging lifestyle.",
  },
  {
    name: "Victoria Student Apartments",
    amount: 850,
    image: "https://example.com/image21.jpg",
    duration: {
      walk: "12 mins",
      train: "6 mins",
      bus: "8 mins",
    },
    facilities: [
      "WiFi",
      "Gym",
      "Library",
      "Laundry",
      "24/7 Security",
      "Study Room",
    ],
    description:
      "These student apartments in Victoria offer a premium living experience. With top-tier facilities including a gym and library, students can enjoy a comfortable and productive stay while being close to university and public transport.",
  },
];

export default apartments;
