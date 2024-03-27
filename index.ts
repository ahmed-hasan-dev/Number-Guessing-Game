import inquirer from 'inquirer'
type answertype = {
    userGuess: number;
}
const systemGeneratedNo = Math.floor(Math.random()*10);
// console.log(systemGeneratedNo)

const answers : answertype = await inquirer.prompt([{
    type: "number",
    name: "userGuess",
    message: "Write your Guess: "
}])
// console.log(answers.userGuess)
const {userGuess}= answers;

    console.log(userGuess, "userguess", systemGeneratedNo,'SYs')
if(userGuess === systemGeneratedNo){
    console.log("Yeah Your answer is Correct \n you Win")
}else{
    console.log("Please try again")
}



