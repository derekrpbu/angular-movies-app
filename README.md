<div align="center" id="top"> 
  <img src="img/angular-logo.png" width="300" />

&#xa0;

</div>
<h1 align="center">Angular Workshop</h1>

<h2 align="center">MCMP Academy</h2>

## 🎯 Introduction

<div style="text-align: justify">
The objective of this workshop is to put into practice all the knowledge acquired in Angular during the classes.
The application consist in two modules, the first module is "Home" that contains an Header. The second module is “Movies Manager” that contains add-update movies, movie item, movies list and movie details component.
Each component is details at the following way:

- **Header**: this component has three options. First option is “Home”, the second option “Add Movie” and the last one “List Movies”. Note: Header component must be in the shared folder due to other components share it.
- **Home**: this component must contain a background image, a tittle in the middle of the page and a header in the top.
- **Filter**: it has only one input to filter movies
- **Add-update movies**: this component is a reactive form that contains the next fields:
  - Title
  - Language
  - Genre
  - Synopsis
  - Director
  - Image: URL
- **Movie item**: this component is a movie summary that contains only the image, title, synopsis, and button to open the movie details.
- **Movies list**: this component shows all the movies where each movie is the movie item component.
- **Movie details**: this component display all information about the movie and has two button (Edit and Delete movie)
</div>

## ✅ Requirements

For the development of the workshop you must have Node.js and Angular CLI installed on your computer.

- [Install Node.js](https://nodejs.org/es/download/)
- [Install Angular CLI](https://angular.io/cli)
- [Create a project with realtime database on Firebase](https://firebase.google.com/)

## 💻 Comands

Create project from scratch:

```bash
ng new <project-name>
```

Create a module and routing file:

```bash
ng generate module <routing-name> --routing
```

Create a component:

```bash
ng generate component --skip-tests=true <component-name>
```

Create a service:

```bash
ng generate service <service-name> --flat
```

Install NGRX:

```bash
ng add @ngrx/store@latest
```

Install Store-Devtools:

```bash
ng add @ngrx/store-devtools@latest
```

Install Effects:

```bash
ng add @ngrx/effects@latest
```

## 💻 Tasks

To complete this workshop you will need to complete the following items:

- Create a project from scratch.
- Change **strict** property located in tsconfig.json to false insted of true.
- Create the modules (Home and Movies Manager).
- Create the modules' components.
- Create filter component using standalone
  <br>
- Add the Header component to the components that require it.
- Add the Filter and Movie Item component to the Movie List component.
  <br>
- Design Header page.
  <br>
- Create lazy loading modules routes(home,movies-manager) and its children routes(movies-manager:add-movie,movies-list).
- Create Header router link access and test the routing.
  <br>
- Design Home Page.
- Design Add-update movies Page.
- Design movie item Page.
- Design movie filter page.
- Design movie details.
  <br>
- Create a service and add methods to create,update,list,getById and delete movie information (Api created on Firebase).
  - Example of api url: - Delete,update and get by id: https://{default firebase route} + {id} + {.json} - Create and list: https://{default firebase route} + {.json}
    <br>
- Apply Reactive Forms on Add-update Page (Form Groups, Form Control Name, Validators).
- Validate the sypnosis field with a minimum 40 characters.
- Enable save button only when the all field are completed.
  <br>
- Create two methods to get the movies genres and movies languages data.
  - Genres API: https://movies-api-9b85c-default-rtdb.firebaseio.com/genres.json
  - Languages API: https://movies-api-9b85c-default-rtdb.firebaseio.com/languages.json
- Load the select options with genres and languages data.
  <br>
- Create a interface with the movie attributes.
  <br>
- Save the movie form data in the firebase database.
- Create the error handling to show response message.
  <br>
- Use service to get movies list in the movie list component, and use these data to build the movie item(use @input to send the data inside the movie item).
  <br>
- Create a pipe in shared folder that shows 55 characters maximum and them show 3 points(...) and apply this pipe in the movie item sypnosis.
- Create a pipe in shared folder that filter the movies list by title and apply this pipe in the movies list to filter the movies items.
- Send the filter text field to the movies list component using @output and then use this value in the pipe to filter the movies by title.
  <br>
- Create the details child route in the movies-manager routing with the id item param.
- Create a button "details" in the movie item component with a link route to show the complete movie data(send the movie id in the route url created before).
  <br>
- In the details component get the movie data by the id and show it.
- Add a delete button that delete the item and return the movies list component.
- Create the edit child route in the movies-manager routing with the id item param.
- Add a edit button that redirect to the add-update component(send the movie id in the route url created before).
  <br>
- In the add-update component create a method to update the movie data(remember validate if it's a add or update a movie because this component has both functionalities). It will receive a movie id from details component to get data from getMovieById service and fill the form.
  <br>
- Apply NGRX to save the movies list into the **store**.
- Modify details component to get data from the **store** instead of load data from getMovieById service
- Modify add-update movies component to get data from the **store** instead of load data from getMovieById service.
- Add NGRX effects functionality to load the movies data from the service.
