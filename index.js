import inquirer from 'inquirer';
const systemGeneratedNo = Math.floor(Math.random() * 10);
// console.log(systemGeneratedNo)
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Write your Guess: "
    }]);
// console.log(answers.userGuess)
const { userGuess } = answers;
console.log(userGuess, "userguess", systemGeneratedNo, 'SYs');
if (userGuess === systemGeneratedNo) {
    console.log("Yeah Your answer is Correct \n you Win");
}
else {
    console.log("Please try again later");
}
// // Ensure you have inquirer installed and your environment is set up for TypeScript
// import inquirer from 'inquirer';
// // Correct the type definition to match what inquirer will return
// type AnswerType = {
//     userGuess: number;
// };
// async function guessNumberGame() {
//     // Generate a random number between 0 and 9
//     const systemGeneratedNo = Math.floor(Math.random() * 10);
//     // Prompt the user for a guess
//     const answers: AnswerType = await inquirer.prompt([{
//         type: "number",
//         name: "userGuess", // This should match the property name in the AnswerType
//         message: "Write your Guess: "
//     }]);
//     // Extract the userGuess from the answers
//     const { userGuess } = answers;
//     console.log(userGuess, "user guess", systemGeneratedNo, 'system generated number');
//     // Compare the user's guess to the system generated number
//     if (userGuess === systemGeneratedNo) {
//         console.log("Yeah! Your answer is correct. You win!");
//     } else {
//         console.log("Not quite right. Please try again later.");
//     }
// }
// // Call the function
// guessNumberGame();
