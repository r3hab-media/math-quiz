let n1 = Math.floor(Math.random() * 10 + 1);
let n2 = Math.floor(Math.random() * 10 + 1);

document.getElementById('v1').value = n1;
document.getElementById('v2').value = n2;

let ans = n1 + n2; //add
// console.log(ans)

const jsGame = () => {
  var usera = document.getElementById('answer').value;

  // if (usera == ans) {
  //   return correct.textContent = `Correct!`;
  //   } else {
  //     return inCorrect.textContent = `Nope! Answer was ${ans}`;
  //   // alert(`Sorry. The correct answer was ${ans}.`)
  //  }

  if (usera == ans) {
    alert('Correct!');
  } else {
    alert(`Wrong. The correct answer was ${ans}.`)
  }

   document.getElementById('answer').value = "";
   n1 = Math.floor(Math.random() * 10 + 1);
   n2 = Math.floor(Math.random() * 10 + 1);
   
   document.getElementById('v1').value = n1;
   document.getElementById('v2').value = n2;
   
   ans = n1 + n2;   
}