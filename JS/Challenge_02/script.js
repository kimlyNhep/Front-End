var JohnMatch1 = 89,
  JohnMatch2 = 120,
  JohnMatch3 = 103;
var MikeMatch1 = 116,
  MikeMatch2 = 94,
  MikeMatch3 = 123;
var MaryMatch1 = 97,
  MaryMatch2 = 134,
  MaryMatch3 = 105;

var JohnTeam = (JohnMatch1 + JohnMatch2 + JohnMatch3) / 3;
var MikeTeam = (MikeMatch1 + MikeMatch2 + MikeMatch3) / 3;
var MaryTeam = (MaryMatch1 + MaryMatch2 + MaryMatch3) / 3;
if (JohnTeam > MikeTeam && JohnTeam > MaryTeam) {
  console.log("The winner is John's Team with " + JohnTeam + " scores");
} else if (MikeTeam > JohnTeam && MikeTeam > MaryTeam)
  console.log("The winner is Mike's Team with " + MikeTeam + " scores");
else if (MaryTeam > JohnTeam && MaryTeam > MikeTeam)
  console.log("The winner is Mike's Team with " + MikeTeam + " scores");
else console.log("Draw");
