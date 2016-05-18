# weather-app
A basic ReactJS app that displays the weather for a given location. To view the compiled assets without running `gulp` go to the `dist` folder and open index.html 

### Development
**Running the app**
- Run `NODE_ENV=development gulp`
- Go to `localhost:8889` to display the app
* 
** Run tests in browser **
Go to `localhost:8889/testrunner.html` to see your tests

### Minify the code, ready for production
* Run `NODE_ENV=production gulp deploy`

### Known issues / design issues
* I realised the API actually displays the weather for 3 hour intervals towards the end. The app only displays the first 5 entries. I initially thought each entry represented the weather for 1 day so I'll have to fix up how I summarise this data.
* The JsonParser is doing too much and dirtying up the model with values that only the app cares about. This should be extracted to a utility module
