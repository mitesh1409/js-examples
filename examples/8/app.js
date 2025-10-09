/**
 * Default Parameter Values
 * 
 * You can specify default value for a parameter.
 */

function showMessage(message, from = 'Anonymous') {
    console.log('message', message);
    console.log('from', from);
}

showMessage('Hello :)', 'Mitesh');
showMessage('Hello :)');
