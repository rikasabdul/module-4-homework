var score = 0;
      
      function startQuiz() {
        var question1 = prompt("What is the capital of France?");
        if (question1.toLowerCase() === "paris") {
          score++;
        }

        var question2 = prompt("What is the largest planet in our solar system?");
        if (question2.toLowerCase() === "jupiter") {
          score++;
        }

        var question3 = prompt("What is the smallest continent by area?");
        if (question3.toLowerCase() === "australia") {
          score++;
        }

        alert("You got " + score + "/3 correct!");
      }