import { addLogReducer, exerciseLogSnippet, foodLogSnippet, goalLogSnippet, userSliceSnippet, workoutLogSnippet, workoutSnippet } from './snippets/fitnessAppSnippets';
import { userSchema, taskSchema, listSchema, eventSchema, postSchema, commentSchema } from './snippets/eventManagementAppSnippets';
import { campgroundModel, campgroundRoutes, campgroundsController, middlewares, reviewModel, reviewsRoutes, schemas, userController, userModel, usersRoutes } from './snippets/yelpcampSnippets';

export const fitnessAppComponents = [
    { name: "Dashboard", param: "dashboard", imgs:[{caption: '', src: '/fitness-app/dashboard.png'}], 
        snippets: [{name: 'Initial state of my Redux Store', snippet: userSliceSnippet}], 
        features:['See your goals','See the progress of each goal','See exercises and workouts completed in the selected date'],
        description: 'This is the main screen, where the user can see all goals for the current day with the option to see past days and past progress. There is also a short history of activities and workouts.'
    },
    { name: "Library", param: "library", imgs:[{caption: '', src: '/fitness-app/library.png'}], 
        features:['See all workouts','See all exercises','Go to Create Workout page', 'Go to Create Exercise page'],
        description: 'Definetily the most simple page/component of my app. It just shows all exercises and workouts saved. I plan on adding filters soon. From that screen the user can go and create a new exercise or workout'
    },
    { name: "Activity", param: "activity", imgs:[{caption: '', src: '/fitness-app/activity.png'}, {caption: '', src: '/fitness-app/view-log.png'}], 
        snippets: [{name: 'Example of Workout Log data structure', snippet: workoutLogSnippet}], 
        features:[' See all activity separated by day','See details of each log','Delete a log'],
        description: "All logs can be found there, grouped by day. Only the past 7 days are shown. The user can see a detailed view of the log by click/tapping on a log. From the same menu, the log can be deleted. "
    },

    { name: "Profile", param: "profile", imgs:[{caption: '', src: '/fitness-app/profile.png'}, {caption: '', src: '/fitness-app/edit-profile.png'}], 
        features:['See profile info','See goal','Edit user info','Create goals','Pick icons for goals','Reset the store/app'],
        description: 'All user personal info can be seen here, together with any goals created by the user. On the Edit Profile screen, the user can create any custom goal it want, by speciying goal name, unit, and target value, and one of the pre-existing icons. The user can edit the target of a goal after creatoin.'
    },

    { name: "Workout", param: "workout", imgs:[{caption: '', src: '/fitness-app/workout.png'}, {caption: '', src: '/fitness-app/custom-workouts.png'}], 
        snippets: [{name: 'Object of a saved/created workout', snippet: workoutSnippet}], 
        features:['See all exercises from that workout','See a small stopwatch', 'See all fields of an exercise x the amount of sets','Give an independent input to each field','Complete the entire set with a single click'],
        description: 'Possibly the most important screen of this app. This page is quite straightforward and easy to use, with a stopwatch at the top, followed by the main container where the user sees the sets, reps, and any other fields for a certain exercise. At the bottom of the page is the list of exercises from that workout from which the user can change the fields shown at the top. There is also a set of buttons to the sides of the exercise title, allowing the user to go to the next or previous exercise as needed. The exercise itself can be completed by either manually entering values into the fields or by onyl pressing the checkmark button visibile on each set.'
    },

    { name: "Stopwatch", param: "stopwatch", imgs:[{caption: '', src: '/fitness-app/stopwatch.png'}, {caption: '', src: '/fitness-app/stopwatch-minimized.png'}, {caption: '', src: '/fitness-app/stopwatch-hidden.png'}], 
        features:['Access this stopwatch everywhere in the app','Minimize it at the top of the app','Hide it by showing only the time','Save laps','Start/stop the stopwatch and reset it'],
        description: 'This is a tool that is accessible from anywhere in the app. It will initially show a stopwatch component with start/stop. lap, and reset button, a container for laps, and the time passed since the start button has been pressed. It can be minimized to a smaller stopwatch that will stick to the top of the screen, which will show a minimal version of the stopwatch with the buttons still visible, and it can be further hidden by showing only the time at the stop of the screen. On just a press on that small component, the stopwatch is maximized.'
    },

    { name: "Quick Menu", param: "quick-menu", imgs:[{caption: '', src: '/fitness-app/quick-menu.png'}], 
        snippets: [{name: 'The reducer used to add logs', snippet: addLogReducer}], 
        features:['Quickly access the stopwatch','Quick access to logging Exercises and Food','Log your goals using dinamically rendered buttons for each log'],
        description: 'A menu accessible everywhere in the app. It will always contain the stopwatch under the Tools category, Exercise and Food goals, and buttons to show a screen for logging any goal created.'
    },
    { name: "Food Log", param: "food-log", imgs:[{caption: '', src: '/fitness-app/food-log2.png'}], 
        snippets: [{name: 'Example of a Food Log', snippet: foodLogSnippet}], 
        features:['Add custom food','Complete only what input you want (except the name)','Add notes'],
        description: 'Allows the user to quickly log any food, with only the name being required. Any other inputs are optional, so the user decides if it wants to describe the food in detail with each macro, or if they want to keep just a general idea of what they are eating.'
    },

    { name: "Exercise Log", param: "exercise-log", imgs:[{caption: '', src: '/fitness-app/exercise-log2.png'}], 
        snippets: [{name: 'Example of Exercise Log', snippet: exerciseLogSnippet}], 
        features: ['Add basic info about an exercise','Add custom fields, such as reps, sets, weight'],
        description: 'It only requires the name, everything else being optionally. It allows the user to create how many fields they want, such as reps, sets, distance, time, etc.'
    },

    { name: "Goal Log", param: "goal-log", imgs:[{caption: '', src: '/fitness-app/goal-log2.png'}], 
        snippets: [{name: 'Example of a Goal Log ', snippet: goalLogSnippet}], 
        features:['See all logs for that goal added today','Add a new goal','See progress of that goal compared to the target'], 
        description: "It is the most simple log type, only taking one value as input, which is added to other logs with the same type. It will compare the sum to the target and how the progress with the help of some sort of a donut graph."
    },

  ]

  export const eventManagementAppComponents = [
    { 
        name: "Dashboard", param: "dashboard", imgs:[{caption: '', src: '/event-management/dashboard.png'}], 
        snippets: [{name: 'User Schema used for MongoDB', snippet: userSchema}], 
        features:['See future events you joined','See past events','See all tasks assigned to you'],
        description: 'The Dashboard will show all joined events and assigned tasks, and allows the user to quickly navigato to those. From the same screen the user can also create a new event.'
    },
    { 
        name: "Event", param: "event", imgs:[{caption: '', src: '/event-management/event1.png'},{caption: '', src: '/event-management/event2.png'}], 
        snippets: [{name: 'Event Schema', snippet: eventSchema}], 
        features:['See event date','See a map with the location','See the author', 'See the schedule of the event'],
        description: 'This screen shown event info that all users can see. Based on the user\'s status, it will either show a Join Event, Manage Event, or Login button. For now, the images are just random placeholders. Users can also see location, duration, participants, status, schedule and the author, which will have a ranking to make it easier to avoid bad experiences (the ranking system is not working yet). You can also save the event for later.'
    },
    { 
        name: "Auth", param: "auth", imgs:[{caption: '', src: '/event-management/login.png'},{caption: '', src: '/event-management/register.png'}], 
        snippet: [{name: 'User Schema', snippet: userSchema}], 
        features:['Login/Register','Limit what you can see without logging in','Limit what you can do to events/tasks/posts you don\'t own'],
        description: 'All users are required to be logged in. Without being logged in, they cannot do anything inside the app, except see public events. It is a very barebone system using passport and mongodb, which offers basic login/register and logout functionality, with no password reset for now.'

    },
    { 
        name: "Manage Events", param: "manage", imgs:[{caption: '', src: '/event-management/manage1.png'},{caption: '', src: '/event-management/manage2.png'},{caption: '', src: '/event-management/manage3.png'}], 
        snippets: [{name: 'Event Schema', snippet: eventSchema}], 
        features:['Quickly create lists with tasks','Edit the event'],
        description: 'From that screen, the user can edit the event, create lists, or edit the schedule. Based on the role of the user, editing or removing items is limited.'
    },
    { 
        name: "Lists and Tasks", param: "lists", imgs:[{caption: '', src: '/event-management/view-list.png'}], 
        snippets:[{name: 'List Schema', snippet: listSchema}, {name: 'Task Schema', snippet: taskSchema}], 
        features:['Create, edit, or delete lists quickly','Create, edit, or delete tasks','Assign tasks to certain users','Only the author of the task or the person assigned can edit the task'],
        description: 'Users can create an unlimited (for now) number of lists, each of them with their own tasks. Each task can be assigned to any user that joined the event, and will appear in the dashboard of that user. Only the author and the user assigned to that task can delete or edit that task.'
    },
    { 
        name: "Social", param: "social", imgs:[{caption: '', src: '/event-management/social1.png'},{caption: '', src: '/event-management/social2.png'}], 
        snippets: [{name: 'Post Schema', snippet: postSchema}, {name: 'Comment Schema', snippet: commentSchema}], 
        features:['See and create posts','Comment on posts','Delete or edit the posts/comments you own'],
        description: 'This section allows any user to create posts that will be visible to all users, no matter if they joined the same event or not. All posts and comments are public to everyone. Only the author of a post or comment can delete or edit that post or comment'
    },
  ]
  export const yelpCamp = [
    { 
        name: "Auth", param: "auth", imgs:[{caption: 'Login form', src: '/yelpcamp/login.png'},{caption: 'Wrong credentials', src: '/yelpcamp/login2.png'},{caption: 'Register form', src: '/yelpcamp/register.png'},{caption: 'Wrong email format', src: '/yelpcamp/register2.png'}], 
        snippets: [{name: 'User Controller', snippet: userController},{name: 'User Routes ', snippet: usersRoutes},{name: 'User Model ', snippet: userModel}], 
        features:['Create user','Login','Logout'],
        description: 'This app has basic auth using passport and Mongoose. Some elements or pages are locked if the user it not logged in or authorized. Login and register fields are valitading all inputs and showing the user if the input is ok or not.'
    },
    { 
        name: "View Camp", param: "view", imgs:[{caption: 'View Camp Screen', src: '/yelpcamp/view-camp1.png'},{caption: 'View Camp reviews section', src: '/yelpcamp/view-camp2.png'}], 
        snippets: [{name: 'Camp Routes', snippet: campgroundRoutes}], 
        features:['See camp location on interactive map','See camp info','See the author', 'See reviews'],
        description: 'See all the info about a campground, and if you are the author, then you will also see a button to edit the campground and one to delete it.'
    },
    { 
        name: "Reviews", param: "reviews", imgs:[{caption: 'Review posted by the user', src: '/yelpcamp/view-camp3.png'},{caption: 'Review posted by another user', src: '/yelpcamp/view-camp4.png'}], 
        snippets: [{name: 'Reviews Routes', snippet: reviewsRoutes},{name: 'Reviews Model', snippet: reviewModel}], 
        features:['See the reviews of other users','Create a new review','Interactive rating system', 'Delete your review'],
        description: 'All camps have a rating system where every user can rate a camp with a rating from one to five starts and a comment. Only the author can delete its review.'
    },
    { 
        name: "Create/Edit Camp", param: "edit", imgs:[{caption: 'Create Camp form', src: '/yelpcamp/create-camp1.png'},{caption: 'Edit Camp form', src: '/yelpcamp/edit-camp.png'}], 
        snippets: [{name: 'Camp Model', snippet: campgroundModel},{name: 'Camp Controller', snippet: campgroundsController}], 
        features:['Create a new camp','Edit campground info','Add new images','Remove images'],
        description: 'The create camp and edit camp screens are basically the same, the only difference being the image selector. The user can select multiple images at once to delete. All images are hosted on cloudinary.'
    },
    { 
        name: "Browse Camps", param: "browse", imgs:[{caption: 'Interactive map', src: '/yelpcamp/browse-camp1.png'},{caption: 'See camp on map', src: '/yelpcamp/browse-camp2.png'},{caption: 'Example of camp', src: '/yelpcamp/browse-camp3.png'}], 
        snippets:[{name: 'Schemas', snippet: schemas},{name: 'Middleware', snippet: middlewares}], 
        features:['Go to Create Camp', 'See camps on interactive map', 'See a quick description and an image of the camp'],
        description: 'All camps can be seen here, together with an interactive map at the top and a Create Camp button.'
    },
   
  ]
