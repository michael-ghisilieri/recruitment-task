# Installation:

1.  Install Node.js depending on the operating system that you use.
2.  Download front-end repository from https://github.com/adriantoczydlowski/recruitment-task

* go to the repository folder and install dependencies `npm install` (terminal).

3.  Download back-end repository from https://github.com/adriantoczydlowski/json-server

* install `json-server` using `npm install -g json-server` (terminal).

# Running scripts:

front-end (recruitment-task folder) - run `npm start` (terminal)
back-end (json-server folder) - run `json-server db.json --routes routes.json` (terminal)

Description:   
The main page displays posts that are downloaded from the back-end using `getPosts`, which is defined in the `api.service.ts` file.  
The title of each post can be clicked on to expand the post which will display downloaded comments using `getComments`.  
An edit button is available when expanded allowing the user to enter a new title and author. This will call `updatePost` to issue a PUT request updating the post with the matching id.  
At the bottom of the page, new posts can be created which will call `createPost` and issue a POST request through the `apiService`.

# Tasks:

## Basic:

1.  Create a component `PostComponent`.
2.  Use a created component to displays posts.
3.  Use input decorator to transmit post data.
4.  Display the post information (id, title, author) and create CSS styles.
5.  Handle post selection (click event) by using output decorator.
6.  Create Comment interface with fields id, body and postId.
7.  When a user selects a post, download the comments associated with it from the backend ('/api/comments?postId=x', where 'x' is post id).
8.  Create a component `CommentComponent` .
9.  Use a created component to display comments under the post they belong to.

## Advanced:

1.  Create a form (reactive) for creating posts.
2.  Create a new route to modify existing posts, use already created form component to modify post information.
3.  Add form validation - title should be required and not be longer than 50 characters.
4.  Create a unit tests for a form component.
5.  Visualize data using d3.js library.
