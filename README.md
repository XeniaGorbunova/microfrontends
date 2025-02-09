# Angular Native Federation Demo App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run in the root folder:

```bash
ng build state
ng serve shell
ng serve users
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## Project description

Here we use Native Federation, standalone components, routing in the remote application and signals. The counter value ia passed through state library to shell and users application and updates automatically sinse it is a signal const.
If you make some changes in the StateService you need to call ng build state in the root folder to update the state library.

## How it was created

```bash
ng new microfrontends no-create-application
ng generate application shell
ng generate application users
npm i @angular-architects/native-federation
ng g @angular-architects/native-federation:init --project users --port 4201 --type remote
ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
```

To use routing in the remote app:

add this line to the exposes in the users/federation.config.ts

```bash
'./routes': '././projects/users/src/app/app.routes.ts'
```
and use loadChildren in the shell app.routes.ts

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
