
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
