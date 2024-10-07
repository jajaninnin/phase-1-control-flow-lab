function scuberGreetingForFeet(ride){
  let greeting
  if (ride <= 400) {
    return greeting = "This one is on me!";
  } else if (ride <= 2000 && ride > 400) {
    return greeting = "That will be twenty bucks.";
  } else if (ride > 2000 && ride < 2500) {
    return greeting = "I will gladly take your thirty bucks."
  } else if (ride >= 2500) {
    return greeting = "No can do."
  }
};

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  let message;
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
