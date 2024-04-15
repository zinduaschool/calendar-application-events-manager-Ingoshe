//Create an array of objects, each representing an event. Each event object should have the following properties:

/*title (string)
date (Date object)
location (string)
attendees (Set)
*/

const events = [
  {
    Title: "Sunset GT",
    Date: new Date("2024-10-11"),
    Location: "Garden City Mall",
    Attendees: new Set(["George", "Joseph"]),
  },

  {
    Title: "Sunset Corsa",
    Date: new Date("2024-10-14"),
    Location: "Nyahururu Airstrip",
    Attendees: new Set(["Salim", "Harry"]),
  },

  {
    Title: "Tuner fest",
    Date: new Date("2024-10-17"),
    Location: "Village Market",
    Attendees: new Set(["Michael", "Lina"]),
  },

  {
    Title: "Masinga TT",
    Date: new Date("2024-10-20"),
    Location: "Masinga",
    Attendees: new Set(["Paul", "Dom"]),
  },

  {
    Title: "WRC",
    Date: new Date("2024-10-24"),
    Location: "Naivasha",
    Attendees: new Set(["Barrack", "Abdalla"]),
  },

  {
    Title: "One Life Rally",
    Date: new Date("2024-10-27"),
    Location: "Malindi",
    Attendees: new Set(["Pinero", "Nella"]),
  },

  {
    Title: "Classics Show",
    Date: new Date("2024-10-31"),
    Location: "Namanga",
    Attendees7: new Set(["Ralph", "Adeola"]),
    
  },
  // Date() ?? intializing date
];

//Use the Array methods .filter() and .map() to display all events that are happening in the next 7 days.

const titles = events.map((event) => {
  return events
});
console.log(titles);

const eventTitles = events.filter((events) => events.Title);
console.log(eventTitles);

// Create a WeakMap to store the event's organizer, with the event's title as the key and the organizer's name as the value.

const organizersWeakMap = new WeakMap();

let SunsetGT = {
  Title: "Sunset GT",
};
organizersWeakMap.set(SunsetGT, "John Chiwai");
console.log(organizersWeakMap.get(SunsetGT));

let SunsetCorsa = {
  Title: "Sunset Corsa",
};
organizersWeakMap.set(SunsetCorsa, "John Odhiambo");
console.log(organizersWeakMap.get(SunsetCorsa));

let TunerFest = {
  Title: "Tuner Fest",
};
organizersWeakMap.set(TunerFest, "John Owiro");
console.log(organizersWeakMap.get(TunerFest));

let MasingaTT = {
  Title: "Masinga TT",
};
organizersWeakMap.set(MasingaTT, "John Okumu");
console.log(organizersWeakMap.get(MasingaTT));

let WRC = {
  Title: "WRC",
};
organizersWeakMap.set(WRC, "John Omondi");
console.log(organizersWeakMap.get(WRC));

let OneLifeRally = {
  Title: "One Life Rally",
};
organizersWeakMap.set(OneLifeRally, "John Onyango");
console.log(organizersWeakMap.get(OneLifeRally));

let ClassicsShow = {
  Title: "Classics Show",
};
organizersWeakMap.set(ClassicsShow, "John Otieno");
console.log(organizersWeakMap.get(ClassicsShow));

// Use destructuring assignment to extract the title, date, and location properties from each event object and display them in a table format.

for (let { Title, Date, Location } of events) {
  console.log(`${Title},${Date},${Location}`);
}

/*const {Title,Date,Location} = events

console.log(Title,Date,Location);
*/

//Create a function that adds a new attendee to an event. This function should take in the event title and the attendee's name as arguments. Use the .add() method of the Set to add the attendee to the event's attendees property.*
//??


const mySet = new Set();
mySet.add("attendee 1");
mySet.add("attendee 2");
mySet.add("attendee 3");
mySet.add("attendee 4");

console.log(mySet);




// Create a function that converts the event array to a JSON string using the .stringify() method. Use the .toJSON() method to add a custom property "formattedDate" to each event object that displays the date in the format "MM/DD/YYYY".

const myJSON = JSON.stringify(events);
console.log(myJSON);

// Use the Object.keys(), Object.values(), and Object.entries() methods to display the properties and values of the first event object in the array.

console.log(Object.keys(events[0]));

console.log(Object.values(events[0]));

console.log(Object.entries(events[0]));

//Use the .forEach() method to iterate over the events array and console.log the title and date of each event.

const copyEvents = []
events.forEach((event) => {
  copyEvents.push(events);
});  
console.log(copyEvents);


/*console.log(SunsetGT,"2024-10-11");
console.log(SunsetCorsa,"2024-10-14");
console.log(TunerFest,"2024-10-17");
console.log(MasingaTT,"2024-10-20");
console.log(WRC,"2024-10-24");
console.log(OneLifeRally,"2024-10-27");
console.log(ClassicsShow,"2024-10-31");
*/

//events with the most attendees

const maxAttendeesEvent = events.reduce((maxEvent, event) => {
  if (event.Attendees.size > maxEvent.Attendees.size) {
    return event;
  }
  return maxEvent;
});

console.log("Event with the most attendees:");
console.log(`Title: ${maxAttendeesEvent.Title}, Attendees: ${maxAttendeesEvent.Attendees.size}`);


