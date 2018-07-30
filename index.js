const name1 = prompt("Please enter name1");
const name2 = prompt("Please enter name2");
const name3 = prompt("Please enter name3");
const longerName = " has the longer name.";
const twoEqualNames = " tie for the longest name.";
const namesEqual = "All three names, "+ name1 + ", " + name2 +", and "+ name3 +", are the same length.";

if ((name1.length === name2.length) && (name1.length === name3.length)){
  console.log( namesEqual)
  } else if (name1.length === name2.length){
    console.log(name1 + " and " + name2 + twoEqualNames)
  } else if (name1.length === name3.length){
    console.log(name1 + " and " + name3 + twoEqualNames)
    } else if (name2.length === name3.length){
    console.log(name2 + " and " + name3 + twoEqualNames)
      }else if ((name1.length > name2.length) && (name1.length >name3.length))    {console.log(name1 + longerName);
          } else if ((name2.length > name1.length) && (name2.length >name3.length)) {
    console.log(name2 + longerName);
    } else if ((name3.length > name1.length) && (name3.length >name2.length)) {
      console.log(name3 + longerName);
    }