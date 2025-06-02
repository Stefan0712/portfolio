import { fitnessAppImgs as img } from "./screenshots/fitnessAppImgs"


export const featuresList = [
    {
        name: 'Complete Workouts',
        description: 'Users can do their workouts while using the interactive Workout page where they can see all their exercises, each of them allowing the user to complete fields one by one and recording custom values if they want. New sets can be added, and they can be completed by either just checking the entire set, by checking each field until all are completed, or by incrementing each value until the set target is met. New exercises can also be added to the ongoing workout, without modifying the original one, as long as the exercise is already in library. If the user accidentally leaves that page, a snapshot is saved and the progress can be restores from the home page. On completion, the snapshot is deleted and a workout log is created with only essential data.',
        photos: [
            {title: 'Workout page', src: img.Workout},
            {title: 'Snapshot', src: img.Snapshots},
            {title: 'Add exercise', src: img.AddExercise},
            {title: 'Ways to complete sets', src: img.WaysToComplete},
        ]
    },
    {
        name: 'Complete Exercises',
        description: 'Same as workouts, the user can add new sets, complete each field and value individually, or at once. Snapshots are saved often and they can be restored if the exercise is interrupted unexpectedly.',
        photos: [
            {title: 'Exercise page', src: img.Exercise},
            {title: 'Snapshot', src: img.Snapshots},
        ]
    },
    {
        name: 'Manage Workouts',
        description: 'Users have the choice to specify every aspect of the workout, such as fields, sets, target muscles, etc, or just a minimum of name and sets. The workout is divided into phases, each of them holding its own list of exercises. Phases can be added or deleted. Users can view their workouts, edit them, and delete them. IndexedDB is used for storing workouts locally, but there is the option to get already created workouts from the API and save a copy locally.',
        photos: [
            {title: 'Create Workout', src: img.CreateWorkout},
            {title: 'View Workout', src: img.ViewWorkout},
            {title: 'Workout Phases', src: img.WorkoutPhases},
        ]
    },
    {
        name: 'Manage Exercises',
        description: 'The save as workouts, many details can be specified or omitted, depending on what the user wants. Exercises can also be edited, viewed, and deleted',
        photos: [
            {title: 'Create Exercise', src: img.CreateExercise},
            {title: 'View Exercise', src: img.ViewExercise},
            {title: 'Exercises Library', src: img.ExercisesLibrary},
        ]
    },
    {
        name: 'Food Logs',
        description: 'Found in the quick menu, Food Logs allows users to quickly log a food by entering a name, quantity, and unit, with optional fields such as time (which is set by default the time of recording the log), description, and macros. All food logs can be viewed and deleted.',
        photos: [
            {title: 'Log food', src: img.FoodLog},
            {title: 'Log History', src: img.FoodHistory},
        ]
    },
    {
        name: 'Activity Logs',
        description: 'Activity logs are either completed exercises, workouts, or added from the quick menu where the user can log custom activities by specifying the name, duration, values such as target and actual values, etc.',
        photos: [
            {title: 'Log Exercise', src: img.ActivityLog},
        ]
    },
    {
        name: 'Goals',
        description: 'The app provides a simple goal tracker where only a name, and a target value is required, with optinoal color and icon. When logging a goal, only the value is required, with name, description and time being optional',
        photos: [
            {title: 'Goals', src: img.Goals},
            {title: 'Log Goal', src: img.GoalLog},
            {title: 'Create Goal', src: img.CreateGoal},
            {title: 'Edit Goal', src: img.EditGoal},
        ]
    },
    {
        name: 'Dashboard',
        description: "Curretly the home page is also the dashboard, where user's goals are tracked, with an activity and nutritional tracker. The 'modules' can be reordered or removed.",
        photos: [
            {title: 'Dashboard', src: img.Dashboard},
            {title: 'Edit Dashboard', src: img.EditDashboard},
        ]
    },
    {
        name: 'Custom Items',
        description: "Items such as equipment, fields, tags, etc, can be created by the user. For now the best way to do that is inside the Create Workout and Create Exercise pages, where they can pick between the default ones and making custom ones.",
        photos: [
            {title: 'Custom Field', src: img.CustomFields},
            {title: 'Custom Tag', src: img.CustomTags},
            {title: 'Custom Equipment', src: img.CustomEquipment},
        ]
    },
]