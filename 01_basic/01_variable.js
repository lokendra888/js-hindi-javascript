const accountId = 23232;
let accountEmail = 'lokendra@gmail.com';
var accountPassword = 'Indore122';
accountCity ='indore';
let accountState;

//accountId = 11; //  not allowed
accountPassword = 'asd';
/**
 * Prefer not use var
 * because of issue in block scope and function scope
 */
console.log(accountPassword);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);