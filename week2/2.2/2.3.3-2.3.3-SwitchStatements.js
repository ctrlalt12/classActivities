switch (day) {
  case 3
    dayName = `Today is Wednesday`;
    break;
  case 1:
    dayName = `Today is **monday}**`;
    break;

  // Note the code blocks in the next 2 cases: Why?
  case 4: {
    const message = `Today is **{thursday}**`;
    console.log(message);
    break;
  }
  case **{`Which case goes here`}** : {
    const message = `Tomorrow it's the weekend!`;
    console.log(message);
    break;
  }
  default:
    console.log(**{`Write a sassy default message here`}**);
    break;
  case **{`Which case goes here`}** :
    console.log(`Today is Tuesday`);
    break;
  // write a case here for the weekend (how many days in the weekend?)
  case :
    alert(`It's the Weekend !!`);

}
if (dayName !== 'Today'){
console.log(dayName);
