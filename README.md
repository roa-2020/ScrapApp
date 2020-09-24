# ScrapApp

## Week 8 Large group project

ScrapApp, it's for you and me.

ScrapApp provides a second home for your unwanted scrap. Furniture, clothes, food and other wears can be given another chance. ScrapApp utilises a map API to pin the location of discarded goods for users to pick up.

## The Tech

* [Mapbox](https://www.mapbox.com/)
* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [Bulma (CSS framework)](https://bulma.io/documentation/)
* [Authenticare] (https://github.com/don-smith/authenticare/tree/master/docs)

## User Stories

### MVP

#### As an unregistered User
  * I want to register for the app under my name and password
  * I want a preview of some available scraps as an unregistered user
#### As a registered User
  * I want to view the details and location of scrap items in my area as a registered user
  * I want to add/remove a scrap item as a registered user  
  * I want to be able to click the scrap marker and see more details about the scrap item
  * I want to be able to view the interface on a mobile device with ease
  * I want to be able to see my location on the map

### Stretch
  * I want to filter by type of scrap with colour coded markers
  * I want to rate the users profile on the service provided
  * I want to comment on the scrap item's marker
  * I want to be able to alter the proximity of the search area with a slider 
  * I want to be able to get directions to the scrap location
  * I want to be able to tick 'collected' when I have picked up the item
  * I want a way to contact the scrapper from within the app
  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | ScrApp | View for user to see the current scrap in the area (home-page) |
  | Add | View for the user to add a scrap item |
  | ItemDetails | View for the user to see details about the scrap item (modal)
  | ProfileView | View to display the users profile



## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | scraps | Store current scraps |
  | addForm | Store information about the scrap item |
  | toggleItemDetails | Toggles between item details and map |

 ## Actions

 ### scraps

 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_SCRAP | scraps | Retreive scraps from the db and store in redux |
 | DELETE_SCRAP | scrap | Delete a single scrap item |
 

 ### addForm
 | type | data | purpose |
 | --- | --- | --- |
 | ADD_SCRAP | scrap | Add a single scrap item to the map after it is created |

 ### toggleItemDetails
  | type | data | purpose |
| --- | --- | --- |
| TOGGLE | null | toggle between map and marker depending on the state |




## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /login | Yes | Log In a User | The Users JWT Token |
| Post | /register | Yes | Register a User | The Users JWT Token |
| Get | /scraps | Yes | Get all scraps | An Array of Scraps |
| Post | /scraps/add | Yes | Add a new scrap | The scrap item that has been saved in db read format |
| Get | /user/:id | Yes | Get the user profile | A users jwt token |

## DB (Server Side)


### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | username | String |
  | name | String |
  | hash | text |
  | user_rating | Integer |

### Scrap 
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | scrap_name | String |
  | category | String |
  | description | String |
  | scrap_image | String |
  | address | String??? |
  | collected | Boolean |
  | user_id | Integer |

 ---

## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
cp .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```

