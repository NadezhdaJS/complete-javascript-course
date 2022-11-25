//Challenge 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let promt1 = Number(
      prompt(
        `What is your favourite programming language? Type a number. 0: JavaScript, 1: Python, 2: Rust, 3: C++`,
        ''
      )
    );

    if (promt1 === 0) {
      poll.answers[0] = 1;
    } else if (promt1 === 1) {
      poll.answers[1] = 1;
    } else if (promt1 === 2) {
      poll.answers[2] = 1;
    } else if (promt1 === 3) {
      poll.answers[3] = 1;
    } else {
      alert('Not a correct number');
    }
  },
  displayResults(results) {
    if (Array.isArray(results)) {
      console.log(results);
    } else if (typeof results === 'string') {
      console.log(`Poll results are ${results}`);
    }
  },
};

console.log(poll.answers);

const btn = document.querySelector('.poll');
btn.addEventListener('click', poll.registerNewAnswer);
poll.displayResults([5, 2, 3]);
poll.displayResults(`5, 2, 3`);
