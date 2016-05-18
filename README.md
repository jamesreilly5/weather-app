# weather-app
A basic ReactJS app that displays the weather for a given location for a technical test. Details of the test can be found [here](https://github.com/jamesreilly5/weather-app/blob/master/PROBLEM.md). To view the compiled assets without running `gulp` go to the `dist` folder and open index.html 

![Alt text](/screenshot.png?raw=true "Weather App")

### Dependencies
* Node/npm
* Gulp

### Development
**Running the app**

- Run `NODE_ENV=development gulp`
- Go to `localhost:8889` to display the app

**Run tests in browser**

Go to `localhost:8889/testrunner.html` to see your tests

**Minify the code, ready for production**

Run `NODE_ENV=production gulp deploy`

### Known issues / design issues
* I realised the API actually displays the weather for 3 hour intervals towards the end. The app only displays the first 5 entries. I initially thought each entry represented the weather for 1 day so I'll have to fix up how I summarise this data.
* The index.html isn't being overwritten correctly running `gulp deploy` in the dist folder so font awesome and bootstrap didn't get copied correctly. I hard coded in the value for now due to time constraints (in case the assessor doesn't have npm/gulp set up correctly).
