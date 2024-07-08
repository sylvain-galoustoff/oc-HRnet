const employees = [
  {
    id: "1",
    firstname: "John",
    lastname: "Doe",
    birthdate: "1990-05-15",
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipcode: "12345",
    startdate: "2020-01-15",
    department: "IT",
  },
  {
    id: "2",
    firstname: "Jane",
    lastname: "Smith",
    birthdate: "1985-08-22",
    street: "456 Oak Ave",
    city: "Smallville",
    state: "NY",
    zipcode: "54321",
    startdate: "2018-03-10",
    department: "HR",
  },
  {
    id: "3",
    firstname: "Alice",
    lastname: "Johnson",
    birthdate: "1978-11-02",
    street: "789 Pine Rd",
    city: "Middletown",
    state: "TX",
    zipcode: "67890",
    startdate: "2015-07-20",
    department: "Finance",
  },
  {
    id: "4",
    firstname: "Robert",
    lastname: "Williams",
    birthdate: "1983-03-12",
    street: "321 Birch Blvd",
    city: "Oldtown",
    state: "FL",
    zipcode: "98765",
    startdate: "2019-02-15",
    department: "Sales",
  },
  {
    id: "5",
    firstname: "Mary",
    lastname: "Brown",
    birthdate: "1992-10-05",
    street: "654 Maple St",
    city: "Newcity",
    state: "WA",
    zipcode: "34567",
    startdate: "2021-06-25",
    department: "Marketing",
  },
  {
    id: "6",
    firstname: "James",
    lastname: "Jones",
    birthdate: "1988-07-19",
    street: "987 Elm St",
    city: "Lakeview",
    state: "OR",
    zipcode: "45678",
    startdate: "2017-09-10",
    department: "Engineering",
  },
  {
    id: "7",
    firstname: "Patricia",
    lastname: "Garcia",
    birthdate: "1995-01-24",
    street: "159 Willow St",
    city: "Hometown",
    state: "NV",
    zipcode: "56789",
    startdate: "2022-04-05",
    department: "Product",
  },
  {
    id: "8",
    firstname: "Michael",
    lastname: "Martinez",
    birthdate: "1980-12-15",
    street: "753 Cedar St",
    city: "Cityville",
    state: "AZ",
    zipcode: "67891",
    startdate: "2016-11-01",
    department: "Support",
  },
  {
    id: "9",
    firstname: "Linda",
    lastname: "Rodriguez",
    birthdate: "1975-08-30",
    street: "951 Spruce St",
    city: "Townsville",
    state: "CO",
    zipcode: "78912",
    startdate: "2014-05-18",
    department: "Legal",
  },
  {
    id: "10",
    firstname: "David",
    lastname: "Hernandez",
    birthdate: "1998-04-21",
    street: "753 Oakwood St",
    city: "Village",
    state: "NM",
    zipcode: "89012",
    startdate: "2023-03-12",
    department: "Admin",
  },
  {
    id: "11",
    firstname: "Christopher",
    lastname: "Lopez",
    birthdate: "1987-06-05",
    street: "258 Chestnut St",
    city: "Springfield",
    state: "IL",
    zipcode: "23456",
    startdate: "2013-08-07",
    department: "Design",
  },
  {
    id: "12",
    firstname: "Karen",
    lastname: "Gonzalez",
    birthdate: "1979-09-12",
    street: "147 Cypress St",
    city: "Riverside",
    state: "VA",
    zipcode: "34568",
    startdate: "2011-12-04",
    department: "Operations",
  },
  {
    id: "13",
    firstname: "Brian",
    lastname: "Wilson",
    birthdate: "1984-02-15",
    street: "369 Hemlock St",
    city: "Hilltown",
    state: "KY",
    zipcode: "45679",
    startdate: "2012-03-22",
    department: "Quality",
  },
  {
    id: "14",
    firstname: "Nancy",
    lastname: "Anderson",
    birthdate: "1991-11-09",
    street: "753 Dogwood St",
    city: "Forest",
    state: "MT",
    zipcode: "56780",
    startdate: "2015-10-13",
    department: "Compliance",
  },
  {
    id: "15",
    firstname: "Mark",
    lastname: "Thomas",
    birthdate: "1993-03-25",
    street: "951 Aspen St",
    city: "River",
    state: "MO",
    zipcode: "67892",
    startdate: "2016-01-30",
    department: "Research",
  },
  {
    id: "16",
    firstname: "Laura",
    lastname: "Taylor",
    birthdate: "1981-10-12",
    street: "147 Pineapple St",
    city: "Hillview",
    state: "UT",
    zipcode: "78923",
    startdate: "2018-06-19",
    department: "Development",
  },
  {
    id: "17",
    firstname: "Kevin",
    lastname: "Lee",
    birthdate: "1986-05-08",
    street: "258 Redwood St",
    city: "Meadow",
    state: "SD",
    zipcode: "89023",
    startdate: "2017-07-24",
    department: "Strategy",
  },
  {
    id: "18",
    firstname: "Barbara",
    lastname: "White",
    birthdate: "1994-12-17",
    street: "369 Poplar St",
    city: "Valley",
    state: "OK",
    zipcode: "90123",
    startdate: "2019-09-14",
    department: "Innovation",
  },
  {
    id: "19",
    firstname: "Richard",
    lastname: "Harris",
    birthdate: "1982-04-22",
    street: "753 Cottonwood St",
    city: "Mountain",
    state: "AR",
    zipcode: "12345",
    startdate: "2012-04-03",
    department: "Technology",
  },
  {
    id: "20",
    firstname: "Susan",
    lastname: "Clark",
    birthdate: "1977-01-26",
    street: "951 Holly St",
    city: "Brook",
    state: "NC",
    zipcode: "23456",
    startdate: "2014-08-23",
    department: "Security",
  },
  {
    id: "21",
    firstname: "Steven",
    lastname: "Robinson",
    birthdate: "1997-09-14",
    street: "258 Olive St",
    city: "Cliff",
    state: "MS",
    zipcode: "34567",
    startdate: "2020-02-29",
    department: "Analytics",
  },
  {
    id: "22",
    firstname: "Jessica",
    lastname: "King",
    birthdate: "1989-08-07",
    street: "369 Juniper St",
    city: "Field",
    state: "NE",
    zipcode: "45678",
    startdate: "2016-04-11",
    department: "Logistics",
  },
  {
    id: "23",
    firstname: "Charles",
    lastname: "Wright",
    birthdate: "1983-06-18",
    street: "753 Cypress St",
    city: "Bridge",
    state: "TN",
    zipcode: "56789",
    startdate: "2017-05-25",
    department: "Supply Chain",
  },
  {
    id: "24",
    firstname: "Lisa",
    lastname: "Lopez",
    birthdate: "1992-11-25",
    street: "951 Sycamore St",
    city: "Bay",
    state: "SC",
    zipcode: "67890",
    startdate: "2018-07-17",
    department: "Customer Success",
  },
  {
    id: "25",
    firstname: "Kenneth",
    lastname: "Hill",
    birthdate: "1976-12-05",
    street: "258 Oak St",
    city: "Wood",
    state: "AL",
    zipcode: "78901",
    startdate: "2011-09-06",
    department: "Procurement",
  },
  {
    id: "26",
    firstname: "Sandra",
    lastname: "Scott",
    birthdate: "1988-02-23",
    street: "369 Cedarwood St",
    city: "Bluff",
    state: "WY",
    zipcode: "89012",
    startdate: "2021-03-15",
    department: "Legal",
  },
  {
    id: "27",
    firstname: "Paul",
    lastname: "Green",
    birthdate: "1991-07-30",
    street: "753 Walnut St",
    city: "Rock",
    state: "LA",
    zipcode: "90123",
    startdate: "2019-06-09",
    department: "Finance",
  },
  {
    id: "28",
    firstname: "Donna",
    lastname: "Adams",
    birthdate: "1985-03-03",
    street: "951 Hickory St",
    city: "Hill",
    state: "IN",
    zipcode: "12345",
    startdate: "2013-11-22",
    department: "Admin",
  },
  {
    id: "29",
    firstname: "Joseph",
    lastname: "Baker",
    birthdate: "1979-12-27",
    street: "258 Sequoia St",
    city: "Flat",
    state: "GA",
    zipcode: "23456",
    startdate: "2012-07-02",
    department: "HR",
  },
  {
    id: "30",
    firstname: "Sarah",
    lastname: "Nelson",
    birthdate: "1990-10-20",
    street: "369 Pine St",
    city: "River",
    state: "IA",
    zipcode: "34567",
    startdate: "2018-10-29",
    department: "Product",
  },
  {
    id: "31",
    firstname: "George",
    lastname: "Carter",
    birthdate: "1974-09-01",
    street: "753 Oak St",
    city: "Hillview",
    state: "MN",
    zipcode: "45678",
    startdate: "2014-06-30",
    department: "Operations",
  },
  {
    id: "32",
    firstname: "Michelle",
    lastname: "Mitchell",
    birthdate: "1986-05-14",
    street: "951 Ash St",
    city: "Creek",
    state: "OH",
    zipcode: "56789",
    startdate: "2015-01-27",
    department: "Development",
  },
  {
    id: "33",
    firstname: "Edward",
    lastname: "Perez",
    birthdate: "1983-01-08",
    street: "258 Maplewood St",
    city: "Forest",
    state: "KS",
    zipcode: "67890",
    startdate: "2016-03-23",
    department: "Sales",
  },
  {
    id: "34",
    firstname: "Emily",
    lastname: "Roberts",
    birthdate: "1995-11-17",
    street: "369 Ashwood St",
    city: "Valley",
    state: "WI",
    zipcode: "78901",
    startdate: "2021-08-04",
    department: "Marketing",
  },
  {
    id: "35",
    firstname: "Joshua",
    lastname: "Turner",
    birthdate: "1981-02-11",
    street: "753 Dogwood St",
    city: "Hilltown",
    state: "ID",
    zipcode: "89012",
    startdate: "2013-10-18",
    department: "Support",
  },
  {
    id: "36",
    firstname: "Patricia",
    lastname: "Phillips",
    birthdate: "1987-07-09",
    street: "951 Cedar St",
    city: "Cliff",
    state: "OK",
    zipcode: "90123",
    startdate: "2012-01-05",
    department: "Engineering",
  },
  {
    id: "37",
    firstname: "Matthew",
    lastname: "Campbell",
    birthdate: "1992-03-06",
    street: "258 Willow St",
    city: "Lake",
    state: "WY",
    zipcode: "12345",
    startdate: "2017-12-14",
    department: "IT",
  },
  {
    id: "38",
    firstname: "Nancy",
    lastname: "Parker",
    birthdate: "1984-11-13",
    street: "369 Oakwood St",
    city: "Mountain",
    state: "MT",
    zipcode: "23456",
    startdate: "2016-02-12",
    department: "Research",
  },
  {
    id: "39",
    firstname: "Jessica",
    lastname: "Evans",
    birthdate: "1991-08-29",
    street: "753 Pine St",
    city: "Wood",
    state: "AZ",
    zipcode: "34567",
    startdate: "2018-05-19",
    department: "Design",
  },
  {
    id: "40",
    firstname: "Thomas",
    lastname: "Collins",
    birthdate: "1989-04-23",
    street: "951 Oak St",
    city: "Cliff",
    state: "NM",
    zipcode: "45678",
    startdate: "2015-04-14",
    department: "Operations",
  },
  {
    id: "41",
    firstname: "Susan",
    lastname: "Stewart",
    birthdate: "1982-09-19",
    street: "258 Cedar St",
    city: "River",
    state: "NV",
    zipcode: "56789",
    startdate: "2017-11-27",
    department: "Compliance",
  },
  {
    id: "42",
    firstname: "Donald",
    lastname: "Sanchez",
    birthdate: "1993-02-28",
    street: "369 Redwood St",
    city: "Forest",
    state: "CA",
    zipcode: "67890",
    startdate: "2020-12-05",
    department: "Technology",
  },
  {
    id: "43",
    firstname: "Linda",
    lastname: "Morris",
    birthdate: "1978-04-11",
    street: "753 Sequoia St",
    city: "Hill",
    state: "TX",
    zipcode: "78901",
    startdate: "2012-08-20",
    department: "Security",
  },
  {
    id: "44",
    firstname: "Paul",
    lastname: "Rogers",
    birthdate: "1985-11-04",
    street: "951 Juniper St",
    city: "Field",
    state: "WA",
    zipcode: "89012",
    startdate: "2019-07-16",
    department: "Strategy",
  },
  {
    id: "45",
    firstname: "Sarah",
    lastname: "Reed",
    birthdate: "1990-06-17",
    street: "258 Cedarwood St",
    city: "Meadow",
    state: "CO",
    zipcode: "90123",
    startdate: "2013-02-03",
    department: "Legal",
  },
  {
    id: "46",
    firstname: "Mark",
    lastname: "Cook",
    birthdate: "1983-10-02",
    street: "369 Redwood St",
    city: "Creek",
    state: "OR",
    zipcode: "12345",
    startdate: "2014-03-18",
    department: "HR",
  },
  {
    id: "47",
    firstname: "Jessica",
    lastname: "Morgan",
    birthdate: "1989-12-21",
    street: "753 Pinewood St",
    city: "Hilltown",
    state: "FL",
    zipcode: "23456",
    startdate: "2015-05-21",
    department: "Product",
  },
  {
    id: "48",
    firstname: "Steven",
    lastname: "Bell",
    birthdate: "1992-11-14",
    street: "951 Redwood St",
    city: "River",
    state: "NY",
    zipcode: "34567",
    startdate: "2018-08-30",
    department: "Innovation",
  },
  {
    id: "49",
    firstname: "Laura",
    lastname: "Murphy",
    birthdate: "1984-03-09",
    street: "258 Willow St",
    city: "Mountain",
    state: "NV",
    zipcode: "45678",
    startdate: "2016-04-23",
    department: "Analytics",
  },
  {
    id: "50",
    firstname: "Kevin",
    lastname: "Bailey",
    birthdate: "1979-05-27",
    street: "369 Oakwood St",
    city: "Wood",
    state: "KY",
    zipcode: "56789",
    startdate: "2012-09-12",
    department: "Logistics",
  },
];

export default employees;
