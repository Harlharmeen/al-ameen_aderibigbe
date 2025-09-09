const questions = [
    {
      question: "Q1: Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: "Mars"
    },
    {
      question: "Q2: Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
      answer: "Harper Lee"
    },
    {
      question: "Q3: What is the capital of Nigeria?",
      options: ["Lagos", "Abuja", "Kano", "Ibadan"],
      answer: "Abuja"
    },
    {
      question: "Q4: HTML stands for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Type Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Q5: What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "Q6: Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Leo Tolstoy", "George Orwell", "Jane Austen"],
      answer: "William Shakespeare"
    },
    {
      question: "Q7: What is the capital of Japan?",
      options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      answer: "Tokyo"
    },
    {
      question: "Q8: How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Q9: Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
      answer: "Carbon Dioxide"
    },
    {
      question: "Q10: What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      answer: "Diamond"
    },
    {
      question: "Q11: Who was the first man to walk on the moon?",
      options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
      answer: "Neil Armstrong"
    },
    {
      question: "Q12: Which country is known as the Land of the Rising Sun?",
      options: ["India", "Japan", "China", "South Korea"],
      answer: "Japan"
    },
    {
      question: "Q13: What is the main language spoken in Brazil?",
      options: ["Spanish", "Portuguese", "French", "English"],
      answer: "Portuguese"
    },
    {
      question: "Q14: Which animal is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale"
    },
    {
      question: "Q15: In what year did World War II end?",
      options: ["1940", "1942", "1945", "1948"],
      answer: "1945"
    },
    {
      question: "Q16: What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O"
    },
    {
      question: "Q17: Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Michelangelo", "Pablo Picasso", "Leonardo da Vinci"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "Q18: What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2"
    },
    {
      question: "Q19: Which organ pumps blood throughout the body?",
      options: ["Liver", "Brain", "Heart", "Lungs"],
      answer: "Heart"
    },
    {
      question: "Q20: Which country has the most people?",
      options: ["USA", "India", "Russia", "China"],
      answer: "China"
    },
    {
      question: "Q21: What does the 'www' stand for in a website address?",
      options: ["World Web Window", "World Wide Web", "Web World Wide", "Wired World Web"],
      answer: "World Wide Web"
    },
    {
      question: "Q22: What is the freezing point of water in Celsius?",
      options: ["0°C", "32°C", "100°C", "-32°C"],
      answer: "0°C"
    },
    {
      question: "Q23: Which famous scientist developed the theory of relativity?",
      options: ["Isaac Newton", "Galileo Galilei", "Marie Curie", "Albert Einstein"],
      answer: "Albert Einstein"
    },
    {
      question: "Q24: Which bird is known for mimicking sounds, including human speech?",
      options: ["Owl", "Crow", "Parrot", "Sparrow"],
      answer: "Parrot"
    },
    {
      question: "Q25: Which part of the plant conducts photosynthesis?",
      options: ["Root", "Stem", "Leaf", "Flower"],
      answer: "Leaf"
    },
    {
      question: "Q26: Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile"
    },
    {
      question: "Q27: What do bees collect and use to make honey?",
      options: ["Dust", "Nectar", "Pollen", "Leaves"],
      answer: "Nectar"
    },
    {
      question: "Q28: What type of animal is a Komodo dragon?",
      options: ["Mammal", "Bird", "Reptile", "Fish"],
      answer: "Reptile"
    },
    {
      question: "Q29: How many degrees are in a circle?",
      options: ["180", "270", "360", "90"],
      answer: "360"
    },
    {
      question: "Q30: What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kilimanjaro", "Denali"],
      answer: "Mount Everest"
    }

  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const scoreEl = document.getElementById("score");
  const nextBtn = document.getElementById("nextBtn");
  
  function showQuestion() {
    nextBtn.disabled = true;
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option, btn);
      optionsEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected, btn) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
      score++;
      btn.style.backgroundColor = "#28a745"; // green
    } else {
      btn.style.backgroundColor = "#dc3545"; // red
      // highlight the correct one
      Array.from(optionsEl.children).forEach(button => {
        if (button.textContent === correct) {
          button.style.backgroundColor = "#28a745";
        }
      });
    }
  
    Array.from(optionsEl.children).forEach(button => button.disabled = true);
    scoreEl.textContent = `Score: ${score}/30`;
    nextBtn.disabled = false;
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionEl.textContent = "Quiz Finished!";
      optionsEl.innerHTML = "";
      nextBtn.style.display = "none";
    }
  });
  
  showQuestion();
  