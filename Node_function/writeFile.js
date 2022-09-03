const fs = require("fs").promises;

fs.writeFile("whritefile.md", '안녕하세요 !! ')
  .then(() => {
      return fs.readFile('README.md');
  })
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
