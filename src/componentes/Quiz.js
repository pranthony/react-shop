class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      playerScore: 0,
      questions: [
        {
          question: "What animal barks?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "What animal is more closely related to a tiger?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        },
        {
          question: "What animal is more closely related to a wolf?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "What animal is best known for playing fetch?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        }
      ]
    }
  }
  displayCuestion(index){
    const question= this.state.questions[index];
    return(
      <div className="question-display">
        <p className="question">
          {question.question}
        </p>
        <br/>
        {question.possibleAnswers.map((e, j)=> {
          return (<button key={j} onClick={()=> this.answerQuestion(index, e)}> {e}</button>)
        })}
        <br/>

        <p className="result-correct">
        Your answer is correct!
        </p>
        <p className="result-incorrect">
        Your answer is incorrect!
        </p>
      </div>
    ) 
  }
  answerQuestion(index, choice) {
    const answeredQuestion = this.state.questions[index];
    answeredQuestion.playerChoice = choice;
    const allQuestions = this.state.questions;
    allQuestions[index] = answeredQuestion;
    this.setState({
      questions: allQuestions
      }, () => {
        this.updatePlayerScore();
      }
    );
  }
  
  updatePlayerScore() {
    const playerScore = this.state.questions.filter(q => q.rightAnswer
    ===
    q.playerChoice).length;
    this.setState({ playerScore });
    console.log("New player score:", playerScore);
  }
  render(){
    return(
      <div>
        <h1>Questions</h1>
        <hr/>
        {this.displayCuestion(0)}
        {this.displayCuestion(1)}
        {this.displayCuestion(2)}
      </div>
    )
  }
}