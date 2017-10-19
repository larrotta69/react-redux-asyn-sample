# React Redux Async Sample
## Overview
Welcome to this sample of ToDo list using modern tecnologies.
Always thinking on scaling projects, here is the first version of an example of how I set a SPA project based on those Features:

* Composition of a webpage
* Managing state of UI
* Component (isolated) styles
* Responsive design - avoiding SASS
* Asynchronous API calls - CRUD
* Keeping same UI state and server data
* Routing
* Error handling

### Stack

* [Create react app](https://github.com/facebookincubator/create-react-app)
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/reactjs/redux/)
* [Redux-sagas](https://github.com/redux-saga/redux-saga)
* [React-router](https://github.com/ReactTraining/react-router)
* [Styled components](https://github.com/styled-components/styled-components)
* [Axios](https://github.com/axios/axios)

## Getting Started

### Install

```yarn install```

Make sure you are running the API at ```8080``` port otherwise a ```404``` will be shown. Take a look the repo [here](https://github.com/larrotta69/todo-list-backend). 

```yarn start```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

## Walking through
### Folder structure
```
react-redux-asyn-sample/
└── src/
	├── api/
	│	├── Todo/
	│  	│	└── TodosAPI.js
	│	├── ...
	├── components/
	│	├── List/
	│	│	└── ListItem.js
	│	├── ...
	├── containers/
	│	├── Todo/
	│	│	└── Form.js
	│	│	└── List.js
	│	│	└── TodoFeatures.js
	│	│	└── TodoSagas.js
	│	├── ...
	├── pages/
	│	├── App/
	│	│	└── App.js
	│	├── Error/
	│	│	└── Error404.js
	│	├── Layout/
	│	│	└── Layout.js
	├── styles/
	│	└── mixins.js
	│	└── variables.js
   	└── index.js
   	└── store.js
```
Each file is inside of its Feature folder.

#### ```api/ ```

API calls should be here, all methods must return a Promise in order to be resolved by ```redux-saga```, this is why I'm using ```Axios```. 


#### ```components/ ```

Only rendering components here, none of them should be conected to store nor dispatch actions to replace state. They must recieve ```props``` and then return JSX content. Action dispatchers must be passed in as a ```props``` as well.

#### ```containers/ ```

All components should be conected to ```store``` and get props and actions dispatchers form there. They are calling render components and passing them props. Here you must create files with the Sagas and Redux features such as reducers and actions

###### Sagas
File with the postfix ```Sagas``` -> ```TodoSagas.js```

Here you define the Generators methods to call async methods and then update the state to the UI.

###### Features
File with the postfix ```Features``` -> ```TodoFeatures.js```

All Redux stuff, you must export actions names, actions creators, default state and the reducer as default.

#### ```pages/ ```

Each global component will be rendered by ```Router```, usually must have store connection to get global states such as ```isLoading``` some request to server.


### Future features

Still working on:

* Theming
* Grids
* Animations
* User Session states