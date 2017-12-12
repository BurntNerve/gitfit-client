# GitFit

**_GitFit is an online platform dedicated to helping people begin their fitness
journeys._** It began with the understanding that version control and fitness
serve very similar purposes in almost the same way. They both are their
respective system's ways of processing change. With programming, we commit new
code we've written, push it to our repository, and then pull those changes down
when we need them. With fitness, we digest the food we've eaten, exercise in
order to put those nutrients to work in our body, and rest in order to reap the
effects of that exercise.

## Core Functionality

### Personal Account

GitFit affords it's users the ability to create their own accounts on the site
in order to keep a persistent log of their workouts. Each "dashboard" page is
comprised of five tiles in addition to a separate log. Each tile serves a
different piece of the overall core functionality.

* The Date tile presents users with current date as well as the last time they
  logged a workout.

* The Weight tile provides users with two important stats in the form of
  percentages: How much weight they've changed since their initial account
  creation, as well as how far along towards their goal weight they are.

* The Statistics tile provides users with 3 statistics related to their logged
  workouts: Total Weight Moved, Strongest Lifts, Total Workouts Logged.

* The Workout tile provides users an interface with which they can log their
  workout data from the current day. GitFit assumes the usage of a routine
  entitled StrongLifts 5 x 5 about which literature is provided in the Resources
  page.

* The Log tile is serves as a 'call-to-action' button for users to view the
  Workout Log page.

![alt text](https://screenshots.firefoxusercontent.com/images/85b5868a-173d-420d-9c67-282bea48f05c.png)

### Workout Log

The Workout Log page is composed of a timeline along which each entry of data is
marked with the exercises attempted that day, the status of completion for each
exercise, and the weight attempted for each exercise. Below each data entry is
an 'Edit' button with which users can click to see a modal appear within which
they can either change their earlier workout entry if a mistake was made, or
delete it if the entry was made in error.

![alt text](https://screenshots.firefoxusercontent.com/images/695fd96a-10e0-4d6b-9ba1-16758df58495.png)
![alt text](https://screenshots.firefoxusercontent.com/images/aa49cc8a-6fe0-4dbb-8028-aa103b0fc147.png)

### Responsive

GitFit is fully responsive, meaning it will adapt to whatever device you choose
to view it on regardless of browser window or screen size. This allows users to
retain a comfortable and aesthetically pleasing experience on mobile if they
prefer to log their workouts while away from their primary computer.

## Technologies, Languages, and Libraries (Oh My!)

* HTML5
* CSS3
* JavaScript
* Node
* Express
* create-react-app
* React
* React Router
* Redux
* Redux Form
* MongoDB
* Mongoose
* Heroku
* Netlify
* TravisCI
