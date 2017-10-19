# React Redux Async Sample
## Overview
Welcome to this sample of ToDo list using modern tecnologies.
Here is the first version of an example of how I set a SPA project based on those features:

* Composition of a webpage
* Managing state of UI
* Component (isolated) styles
* Responsive design - avoiding SASS
* Asynchronous API calls - CRUD
* Keeping same UI state and server data
* Routing
* Error handling

### Stack

* Create react app
* React
* Redux
* Redux-sagas
* React-router
* Styled components
* Axios

## Getting Started

### Install

```yarn install```

Make sure you are running the API at ```8080``` port otherwise a ```404``` will be shown. Take a look the repo [here](). 

```yarn start```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

## Walking through
### Folder structure
```
react-redux-asyn-sample
└── src
	├── api
	    └── TodosAPI.js
	├── components
		├── List
			└── ListItem.js
		├── ...
	├── containers
		├── Todo
			└── Form.js
			└── List.js
			└── TodoFeatures.js
			└── TodoSagas.js
		├── ...
	├── pages
		├── App
			└── App.js
		├── Error
			└── Error404.js
		├── Layout
			└── Layout.js
	├── styles
		└── mixins.js
    └── index.js
    └── store.js
```

### Future features

Still working on that:

* Theming
* Grids
* Animations
* Session states