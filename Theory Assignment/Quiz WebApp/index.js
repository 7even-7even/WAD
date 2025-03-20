function submitQuiz() {
    const answers = {
      q1: "A", // Paris
      q2: "B", // Jupiter
      q3: "B", // William Shakespeare
      q4: "A", // H2O
      q5: "B"  // Albert Einstein
    };
  
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
    let feedback = "<h2>Your Score: ";
  
    for (let key in answers) {
      const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
      if (selectedOption) {
        if (selectedOption.value === answers[key]) {
          score++;
          feedback += `<p>Question ${key.slice(1)}: Correct ✅</p>`;
        } else {
          feedback += `<p>Question ${key.slice(1)}: Incorrect ❌ (Correct Answer: ${answers[key]})</p>`;
        }
      } else {
        feedback += `<p>Question ${key.slice(1)}: Not Attempted ⚠️ (Correct Answer: ${answers[key]})</p>`;
      }
    }
  
    feedback = `<h2>Your Score: ${score} / ${totalQuestions}</h2>` + feedback;
    document.getElementById("result").innerHTML = feedback;
  }