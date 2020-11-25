# Task
The goal of this assignment is to implement a To-Do web app, it has a Nodejs backend you are
free to use any library (express.js, NestJS, feathers.js, etc ) that will be responsible for
managing and storing in database simple tasks (CRUD), for the frontend you should use
Angular (Angular Material, Ant design, etc) Keep the UI simple doesn’t matter a lot.
1. The server accepts HTTP calls for creating, reading, updating, and deleting tasks.
2. The task contains the following fields:
a. Title - string (required) 72 chars
b. Content - string (required) max length 250 chars
3. The server should validate the fields are filled and return appropriate HTTP status with a
message in case of success/fail
4. The app should include login/register, so the authorization and authentication aspect
should be considered, use JWT for this task (side note the tasks are shared between all
users, so no need assign the task to a user)
5. User contains the following fields:
a. Username - string (required) alphanumeric ([0-9][a-z]) minimum 8 characters max
32 chars
b. Password - string (required) at least 1 number and one capital letter.
6. For the frontend should have:
a. Login (if not already logged in)
b. Register (if not already logged in)
c. List of tasks (only if logged in)
7. User can create, delete, and update the tasks
8. Use NgRx w/ Effects (facade pattern is plus)
9. Use git with any platform you want (GitHub, bitbucket, etc)
10. Bonus tasks:
a. Writing unit/integration tests
b. A great UI will be a plus
c. Using a mobile-first approach when writing CSS
d. Use docker
