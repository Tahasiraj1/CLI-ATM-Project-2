import inquirer from 'inquirer'

type anstype = {
    userID: string,
    userPIN: number,
    accountype: string,
    transactiontype: string,
    Amount: number
}

const answers = await inquirer.prompt([
    {
        type: 'input',
        name: 'userID',
        message: 'Kindly enter you ID:'
    },
    {
        type: 'input',
        name: 'userPIN',
        message: 'Kindly enter you PIN:'
    },
    {
        type: 'list',
        name: 'accountype',
        choices: ['Current', 'Saving'],
        message: 'Select your AccountType: '
    },
    {
        type: 'list',
        name: 'transactiontype',
        choices: ['Fast Cash', 'Withdraw'],
        message: 'Select your TransactionType: ',
        when(answers){
            return answers.accountype
        }
    },
    {
        type: 'list',
        name: 'Amount',
        choices: ['1000', '2000', '5000', '10000'],
        message: 'Select your Amount: ',
        when(answers){
            return answers.transactiontype == 'Fast Cash'
        }
    },
    {
        type: 'number',
        name: 'Amount',
        message: 'Enter your amount: ',
        when(answers){
            return answers.transactiontype == 'Withdraw'
        }
    }
]);

if (answers.userID && answers.userPIN){
    const balance = Math.floor(Math.random() * 100000000)
    console.log(balance)
    const EnteredAmount = answers.Amount;
    if(balance >= EnteredAmount){
        const Remaining = balance - EnteredAmount;
        console.log('Your remaining balance is: ', Remaining)
    } else {
        console.log('Insufficient Balance')
    }
};