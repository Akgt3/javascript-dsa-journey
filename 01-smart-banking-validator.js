/*
=========================================================
DSA CHALLENGE #01: SMART BANKING TRANSACTION VALIDATOR
=========================================================

Difficulty: Hard
Category: JavaScript Logic Building & Functions
Concepts: Variables, Operators, Conditional Statements,
Functions, Return Statement, Arrow Functions.

QUESTION:

Develop a Smart Banking Transaction Validator using JavaScript.

The system must validate a customer's bank transaction
based on their account status, available balance, daily
transaction limit, transaction type and customer category.

INPUT VARIABLES:

let amount = 10000;
let balance = 50000;
let dailyUsed = 20000;

let isAccountActive = true;
let isInternational = false;
let isPremium = true;


REQUIREMENTS:

1. Create a function named validateTransaction().

2. Validate the following conditions:

   - If amount is less than or equal to 0,
     return "INVALID_AMOUNT".

   - If the account is inactive,
     return "ACCOUNT_INACTIVE".

   - If amount is not a multiple of 100,
     return "INVALID_AMOUNT".

   - If dailyUsed + amount exceeds 50000,
     return "DAILY_LIMIT_EXCEEDED".

   - If amount exceeds the available balance,
     return "INSUFFICIENT_BALANCE".

3. Calculate the transaction fee:

   - Domestic transaction: 0.5% of amount.
   - International transaction: 3% of amount.
   - Premium customers receive a 50% fee discount.

4. Calculate:

   - Transaction Fee
   - Total Debit (amount + fee)
   - Remaining Balance (balance - total debit)

5. Return the transaction result.

6. Create a separate ARROW FUNCTION to calculate
   the transaction fee.

7. Use a SHORT ARROW FUNCTION for a simple
   mathematical calculation.

EXPECTED OUTPUT:

TRANSACTION APPROVED

Transaction Amount: ₹10000
Transaction Fee: ₹25
Total Debit: ₹10025
Remaining Balance: ₹39975


RESTRICTIONS:

- Do not use arrays.
- Do not use objects.
- Do not use loops.
- Do not use classes.
- Do not use external libraries.
- Use only the JavaScript concepts studied so far.

IMPORTANT:

- Use return statements instead of printing results
  directly inside the main function.
- Use appropriate arithmetic, comparison and logical
  operators.
- Test your function with different input values.
- Handle validation conditions in the correct order.

=========================================================
YOUR SOLUTION STARTS BELOW
=========================================================
*/

let amount = 30000;
let balance = 5000;
let dailyUsed = 20000;

let isAccountActive = true;
let isInternational = false;
let isPremium = true;



function validateTransaction(amount, balance, dailyUsed, isAccountActive, isInternational, isPremium) {
  // Validation 1: Check transaction amount
  if (amount <= 0) {
    return "INVALID_AMOUNT";
  }
  // Validation 2: Check account status
  if (isAccountActive === false) {
    return "ACCOUNT_INACTIVE";
  }
  // Validation 3: Check multiple of 100
  if (amount % 100 !== 0) {
    return "INVALID_AMOUNT";
  }
  // Validation 4: Check daily limit
  if (dailyUsed + amount > 50000) {
    return "DAILY_LIMIT_EXCEEDED";
  }
  // Validation 5: Check available balance    
  if (amount > balance) {
    return "INSUFFICIENT_BALANCE";
  }
  return "TRANSACTION APPROVED";
}
let validationResult = validateTransaction(
  amount,
  balance,
  dailyUsed,
  isAccountActive,
  isInternational,
  isPremium
);


// Function to calculate transaction fee
const calculatePercentage = (amount, percentage) => (amount * percentage / 100);//----------------------|10,000*0.5/100=50
//                                                                                                      |
// Arrow function to calculate transaction fee//                                                        |
const calculateTransactionFee = (amount, isInternational) => {//    10,000,false also return 50         |
  if (isInternational === true) {//                                                                     |
    return calculatePercentage(amount, 3);// pass to calculatePercentage function - percentage          |
  } else {//                                                                                            |
    return calculatePercentage(amount, 0.5);// pass to calculatePercentage function - percentage -------|10,000 , 50 returns 50
  }
};

if (validationResult === "TRANSACTION APPROVED") {
  //store the returned transaction fee
  let Fee = calculateTransactionFee(amount, isInternational);

  // premium customer Discount.
  const applyPremiumDiscount = (Fee, isPremium) => {
    if (isPremium === true) {
      return Fee * 0.5;//25
    } else {
      return Fee;
    }
  }

  // Transaction Amount
  console.log(`Transaction Amount: ₹${amount}`);

  // Transaction Fee
  let finalFee = applyPremiumDiscount(Fee, isPremium);
  console.log(`Transaction Fee: ₹${finalFee}`);

  // Calculate Total Debit
  let totalDebit = amount + finalFee;
  console.log(`Total Debit: ₹${totalDebit}`);

  // Calculate Remaining Balance
  let remainingBalance = balance - totalDebit;
  console.log(`Remaining Balance: ₹${remainingBalance}`);

} else {
  console.log(validationResult);
}
