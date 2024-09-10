
// const person={}
// const person = new opject(
//     person.fname = "arwa"
//     person.lname = "alqhtani"
//     person.age = 24
//     console.log(person['fname']);

// )
/*
const person = {
    fname: "arwa",
    lname: "alqhtani",
    age: 24,
    fullname: function () {
        return this.fname + " " + this.lname
    },
    childern: ["ali", "demah"],
    job: {
        tweaq: {
            tital: "help",
            id: 1
        },
        stc: {
            tital: 'instuctor',
            id: 2
        }
    }
}
person.age = "26"
console.log(person.job.tweaq.tital + " " + person.job.stc.tital);
*/


//lab 1
const user = {
    name: "Arwa",
    email: "arwaalqhtani2@gmail.com",
    id: 1108688647,
    Available: false,
    address: {
        Abha: {
            name: "Abha",
            street: "5555",
            location: "Mansk"
        },
        ryadh: {
            name: "ryadh",
            street: "5555",
            location: "nerjes"
        }
    },
    skills: ["JavaScript", "Cybersecurity", "sql"],
    check: function () {
        return this.Available ? "user is available for work " : "user is not available for work ";
    }
};
console.log(user);
console.log(user.name);
user.id = 1108688647;
console.log(user.id);
delete user.email;
console.log(user);
user.Available = true;
console.log(user.check());
console.log(user.address);
console.log(user.address.ryadh.name);
console.log(user.skills[2]);
console.log(user.skills.join(" , "));

//lab 2

const characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];
  

  let blue = characters.find(character => character.eye_color === "blue")?.name;
  const first50 = characters.find(character => character.mass > 50)?.gender;
  
  const height200 = characters.filter(character => character.height < 200);
  
  const allmale = characters.filter(character => character.gender === "male");
  const allnames = characters.map(character => character.name);
  const allheights = characters.map(character => character.height);
  
  const sortedmass = [characters].sort((a, b) => a.mass - b.mass);
  const sortedheight = [characters].sort((a, b) => b.height - a.height);
  
 
  const mass40 = characters.every(character => character.mass > 40);
  
  const shorter200 = characters.every(character => character.height < 200);

  const blueeyes = characters.some(character => character.eye_color === "blue");
  //12-Is there at least one character taller than 210?
  const taller210 = characters.some(character => character.height > 210);
  
 
  console.log("first name that has blue eyes:", blue);
  console.log("first gender that is his mass is over 50:", first50);
  console.log("characters with height less than 200:", height200);
  console.log("all male characters:", allmale);
  console.log("all names:", allnames);
  
  console.log("all heights:", allheights);
  console.log("Sort by mass (low to high):", sortedmass);
  console.log("Sort by height (high to low):", sortedheight);
  console.log("every character have mass more than 40:", mass40);
  console.log("every character shorter than 200:", shorter200);
  console.log("at least one character with blue eyes:", blueeyes);
  console.log("at least one character taller than 210:", taller210);