# Angular 8 Application with Github API

Here you can find how the application work.

- Once the app is launched, the **Search** component is displayed in UI.
- User can enters a random String value into to the 'Login User' field and on 'Submit' button.
- Once you hit submit button app sends a http request to 'https://api.github.com/search/users?q={login} in:login', where {login} is the String value entered by the user
- The app then parses the response from the server. If data is returned, the **Results** component should display the fetched values. If there is an issue with the request, then an error message should be displayed.
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
