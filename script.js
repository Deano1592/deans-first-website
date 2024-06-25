const database = [
  {
    username: "Deano",
    password: "1592",
  },
  {
    username: "Dillon",
    password: "1234",
  },
  {
    username: "Darren",
    password: "9999",
  },
];

const newsFeed = [
  {
    user: "Bob",
    timeline: "I hate work",
  },
  {
    user: "Bill",
    timeline: "Work is so boring",
  },
  {
    user: "Ben",
    timeline: "Need a new job",
  },
];

const userNamePrompt = prompt("What's your usename?");
const passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database[i].username && pass === database[i].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, I don't know you");
  }
}

signIn(userNamePrompt, passwordPrompt);
