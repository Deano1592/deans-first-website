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

function isUserValid(user, pass) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === user && database[i].password === pass) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and/or password");
  }
}

const userNamePrompt = prompt("What's your usename?");
const passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
