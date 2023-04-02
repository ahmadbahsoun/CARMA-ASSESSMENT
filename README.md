## Installation and configuration

1. update the .env.example to .env and update the the data base schema 
2. create a database in the pgAdmin and give it a name
3. Install necessary dependencies:
    - **Via node `npm` package manager** - Run `npm install` on the project root
    - **Via `yarn` package manager** - Run `yarn install` on the project root
4. run the database migrations and seeds(optional) in our case) using the following commands:
    - **npx knex migrate:latest --knexfile=./database/knexfile.js**
    - **npx knex seed:run --knexfile database/knexfile.js** -> optional
5. cd to the project root and run ndoe app.js to run your application
6. you can test your application by adding the specified data or the following:
  - name: test
  - Card Number: 4485275742308327 accordng to luhn algorithm
  - Expiration (mm/yy): 03/24 should not be less current
  - CVV: 9944 accordng to luhn algorithm


## Luhn Algorithm

The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, and Canadian Social Insurance Numbers. The algorithm is named after its creator, Hans Peter Luhn, who first described it in 1954.

Here's how the Luhn algorithm works:

Starting from the rightmost digit, double the value of every second digit. If the result is greater than 9, subtract 9 from it.
Add up all the resulting digits, including the unchanged digits.
If the total sum is divisible by 10, the number is valid according to the Luhn algorithm.
For example, let's take the credit card number 79927398713. Here's how we can apply the Luhn algorithm:

Starting from the rightmost digit, double the value of every second digit: 1 6 7 18 9 6 7 18 9 7 7 18
If the result is greater than 9, subtract 9 from it: 1 6 7 9 9 6 7 9 9 7 7 9
Add up all the resulting digits, including the unchanged digits: 1 + 6 + 7 + 9 + 9 + 6 + 7 + 9 + 9 + 7 + 7 + 9 = 87
Check if the total sum is divisible by 10: 87 % 10 = 7. Since 7 is not divisible by 10, the credit card number is invalid according to the Luhn algorithm.
The Luhn algorithm is a quick and easy way to catch common errors in identification numbers, such as mistyped digits or swapped digits. However, it is not foolproof and can be circumvented by determined attackers.

## Encryption Technique
bcrypt is a hashing function library, it generates salt (a random value used to make the hash unique) and hash it accordingly
