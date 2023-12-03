# Front-end test application
This project was generated with Angular CLI version 15.2.10.

# Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

Note: Before starting the application, ensure that the JSON server is running. Use the command npm run server to start the JSON server.
# Project structure 
/frontend-test-app
│
├── src
│   ├── app
│   │   ├── data
│   │   │   ├── services
│   │   │   │   ├── auth-service
│   │   │   │   │   ├── auth.service.ts
│   │   │   │   │   └── ...
│   │   │   │   ├── service2
│   │   │   │   │   ├── service2.service.ts
│   │   │   │   │   └── ...
│   │   │   │   └── ...
│   │   │   ├── interfaces
│   │   │   │   ├── product.interface.ts
│   │   │   │   ├── user.interface.ts
│   │   │   │   └── ...
│   │   │   ├── store
│   │   │   │   ├── pie-chart-option.ts
│   │   │   │   ├── stacked-bar-chart-option.ts
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── layout
│   │   │   ├── header
│   │   │   │   ├── header.component.ts
│   │   │   │   └── ...
│   │   │   ├── side-navbar
│   │   │   │   ├── side-navbar.component.ts
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── pages
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   └── ...
│   │   │   ├── sig-in
│   │   │   │   ├── sig-in.component.ts
│   │   │   │   └── ...
│   │   │   └── ...
│   │   └── ...
│   ├── assets
│   │   └── ...
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   └── ...
|
├── server
│   └── server.ts
│   └── db.json
├── dist
│   └── ...
├── node_modules
│   └── ...
├── .angular.json
├── package.json
├── README.md
└── ...



# Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

# Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory.

# Running unit tests
Run ng test to execute the unit tests via Karma.

# Running end-to-end tests
Run ng e2e to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Further help
To get more help on the Angular CLI, use ng help or go check out the Angular CLI Overview and Command Reference page.
