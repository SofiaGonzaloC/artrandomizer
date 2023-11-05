require('colors');
const randomElement = require('./helpers/randomElement'); // Import randomElement
const { readDatabase } = require('./helpers/database');

const main = async () => {
  // Read the database to get the themes and their details
  const themes = readDatabase('./db/themes.json');

  if (!themes) {
    console.log('Database not found or empty.'.red);
    return;
  }

  // Choose a random theme
  const randomTheme = randomElement(themes);

  console.log(`Random Theme: ${randomTheme.title}`.green);

  // If the random theme has subthemes, choose a random subtheme
  if (randomTheme.subthemes && randomTheme.subthemes.length > 0) {
    const randomSubtheme = randomElement(randomTheme.subthemes);
    console.log(`Random Subtheme: ${randomSubtheme}`.cyan);
  }

  // Display all resources for the chosen theme
  console.log('Resources:'.yellow);
  randomTheme.resources.forEach((resource, index) => {
    console.log(`${index + 1}. ${resource.title}`);
    console.log(`   URL: ${resource.url}`);
  });
};

main();
