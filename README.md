# Express API Stories

User stories for practising Express APIs.


## Installation

Enter the commands below in your terminal to get started:

```shell
git clone https://github.com/[your-cohort]/boilerplate-knex
mv boilerplate-knex express-api
cd express-api
npm install
npm run knex migrate:latest
npm run knex seed:run
npm start
```

If you would like to push changes back to your own repository, you'll need to create an empty repository in your GitHub and [change](https://help.github.com/articles/changing-a-remote-s-url/) the `origin` remote to point to that repo:

```shell
git remote set-url origin https://github.com/YOUR-USERNAME/express-api
```


## Start with:

_As a consumer of the API, I would like to see a list of users in JSON format when I issue a GET request to `/users` so that I can use the list in my client code._
 - The API should return all user records from the database
 - The HTTP status code should be 200

_As a consumer of the API, I would like to see a single user in JSON format when I issue a GET request to `/user/:id` so that I can use the resource in my client code._
 - The API should only return one user if it exists at all
 - The HTTP status code should be 200 if the user exists, or 404 if the user does not exist

_As a consumer of the API, I would like to remove a single user when I issue a DELETE request to `/users/:id` so that I can remove users that are no longer needed._
 - The API should either return 200 if it sends a response body describing what happened, or 204 if no content has been sent back but the record has been deleted


## Try these next:

_As a consumer of the API, I would like to update a single record when I issue a PUT request to `/users/:id` so that I can keep my user records current._
 - The API should send status code 200 or 204 if no content is returned to the user

_As a consumer of the API, I would like to create a new record when I issue a POST request to `/users` so that I can add new users to the database._
 - The API should send status code 201 if the record was successfully created
 - Ideally, you should send back a response telling the API consumer where they can find the new resource (provide a link)

That's MVP!


## Stretch stories:

_As a consumer of the API, I would like to filter `/users` by name so that I can limit the results to just what I'm looking for._
 - You could implement this using a query string, for example `/users?search=wombat`
 - Consider using a `.where` in Knex that makes use of `like`:

 ```js
   .where('foo', 'like', '%someword%')
 ```

_As a consumer of the API, I'm bored! I would like results of ANOTHER API returned to me along with my users. I don't care which one... surprise me!_
 - You'll need to make the request to an API _from the server_, wait for its response, and then return selected values from it in your own response.
 - You'll obviously also need to wait for the results from your database query. Consider using `Promise.all`.
