const database = [
  {
    username: "Deano",
    password: "1592",
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
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, I don't know you");
  }
}

signIn(userNamePrompt, passwordPrompt);
