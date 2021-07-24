How to run:

Execute the `start` script with either `npm` or `yarn`.
Follow this link to [install yarn](https://classic.yarnpkg.com/en/docs/install/)

To install all the necessary dependencies run `yarn` (or `npm install`)
- `yarn start` (or `npm start`) executes the 2 scripts together using `concurrently`:
   - `react-scripts start` to run the app
   - `json-server -p 3001 --watch src/api/db.json` to simulate api responses

Runs the app in the development mode with `yarn start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The fake database created by `json-server` stays on [http://localhost:3001/books](http://localhost:3001/books)
