/**
 * A simple hello world function
 * @param {string} name - The name to greet
 * @returns {string} Greeting message
 */
function helloWorld(name = 'World') {
  return `Hello, ${name}!`;
}

// Example usage
console.log(helloWorld());
console.log(helloWorld('GitHub Copilot'));

module.exports = helloWorld;
