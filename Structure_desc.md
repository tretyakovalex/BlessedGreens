# Project's structure description:

## Backend:

Files:
 - ```app.js``` the main file handling the backend.
 - ```/config/config.json``` contains the information to connect to database;
 - ```/routes/auth.js``` contains the routes to `/login`, `/signup`, and `/logout`
 - ```/controllers/authController.js``` contains the bulk of the code responsible for the authentication of signup and login, as well as, the session initialization for the logged in user and destruction of the session stored inside the `exports.logout()` function

```app.js``` connects to ```/routes/auth.js``` via the following function: ```app.use('/auth', authRoutes);```
For example: the path to login would be ```localhost://8080/auth/login```
