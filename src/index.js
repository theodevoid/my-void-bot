const { Chat, ChatEvents } = require("twitch-js")
const dotenv = require("dotenv");

const { parsed: dotenvResult } = dotenv.config({ path: ".env"})

const username = dotenvResult.USER;
const token = dotenvResult.TOKEN;
const channel = "voidfnc";

const run = async () => {
  const chat = new Chat({
    username,
    token,
  })

  await chat.connect();
  await chat.join(channel);

  await chat.say(channel, "Kappa")

  chat.on("PRIVMSG", (privMsg) => {
    // console.log("USERNAME:", privMsg.username)
    // console.log("MESSAGE:", privMsg.message)

    if (privMsg.message.includes("!voidbot addDeed bukain orang pintu")) {
      chat.say(channel, "Apa lu")
    }
  })
}


run();

// App mobile or PWA
// Register / Login
// Remind atau notify user dengan sebuah challenge
// Challenge -> A simple good deed