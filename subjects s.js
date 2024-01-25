var subject=prompt("Enter the subject you want to search?","Biology,Physics,etc");
switch(subject){
  case "Biology":
  case "biology":
  case "BIOLOGY":
  case "bio":
  case "BIO":
      document.getElementById("biology");
  break;
  case "Physics":
  case "physics":
  case "PHYSICS":
  case "phy":
  case "PHY":
    document.getElementById("physics");
  break;
default:
  document.write("Invalid");
}