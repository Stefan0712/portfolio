export const workoutLogSnippet = `{
    timestamp: '2024-11-08T14:04:20.947Z',
    data: {
      duration: '00:00:30',
      finishedAt: '16:04:20',
      workoutData: {
        id: '12e66889-7281-4935-bb8c-3e90e6d859c2',
        type: 'created',
        author: '',
        name: 'TRX Back Workout',
        description: 'A quick back workout you can do at home with just a TRX',
        reference: 'Not Required',
        targetGroup: 'upper-body',
        difficulty: 'intermediate',
        exercises: [
          {
            id: '3aa0e1a6-59b9-4e47-af3b-1863255a5ae5',
            type: 'Not set',
            name: 'TRX Face Pulls',
            visibility: 'private',
            author: '',
            description: 'Not set',
            reference: 'Not set',
            targetGroup: 'Not set',
            difficulty: 'Not set',
            sets: 3,
            fields: [{ name: 'Reps', unit: 'reps', target: 12, value: '' }],
            fieldSets: {
              '0': { isCompleted: true, fields: [{ name: 'Reps', unit: 'reps', target: 12, value: '12' }] },
              '1': { isCompleted: true, fields: [{ name: 'Reps', unit: 'reps', target: 12, value: '12' }] },
              '2': { isCompleted: true, fields: [{ name: 'Reps', unit: 'reps', target: 12, value: '10' }] }
            }
          },
          {
            id: '3aa0e1a6-59b9-4e47-af3b-1866125ae5',
            type: 'Not set',
            name: 'TRX Ys',
            visibility: 'private',
            author: '',
            description: 'Not set',
            reference: 'Not set',
            targetGroup: 'Not set',
            difficulty: 'Not set',
            sets: 3,
            fields: [{ name: 'Reps', unit: 'reps', target: 12, value: '' }],
            fieldSets: {
              '0': { isCompleted: true, fields: [{ name: 'Reps', unit: 'reps', target: 12, value: '15' }] },
              '1': { isCompleted: true, fields: [{ name: 'Reps', unit: 'reps', target: 12, value: '15' }] },
              '2': { isCompleted: true, fields: [{ name: 'Reps', unit: 'reps', target: 12, value: '15' }] }
            }
          },
          {
            id: '3aa618a6-59b9-4e47-af3b-1866125ae5',
            type: 'Not set',
            name: 'Test Exercise',
            visibility: 'private',
            author: '',
            description: 'Not set',
            reference: 'Not set',
            targetGroup: 'Not set',
            difficulty: 'Not set',
            sets: 3,
            fields: [
              { name: 'Reps', unit: 'reps', target: 12, value: '' },
              { name: 'Distance', unit: 'km', target: 6, value: '' },
              { name: 'Time', unit: 'minutes', target: 30, value: '' }
            ],
            fieldSets: {
              '0': { isCompleted: true, fields: [
                { name: 'Reps', unit: 'reps', target: 12, value: '151' },
                { name: 'Distance', unit: 'km', target: 6, value: '2' },
                { name: 'Time', unit: 'minutes', target: 30, value: '15' }
              ] },
              '1': { isCompleted: true, fields: [
                { name: 'Reps', unit: 'reps', target: 12, value: '5' },
                { name: 'Distance', unit: 'km', target: 6, value: '2' },
                { name: 'Time', unit: 'minutes', target: 30, value: '15' }
              ] },
              '2': { isCompleted: true, fields: [
                { name: 'Reps', unit: 'reps', target: 12, value: '15' },
                { name: 'Distance', unit: 'km', target: 6, value: '3' },
                { name: 'Time', unit: 'minutes', target: 30, value: '10' }
              ] }
            }
          }
        ],
        createdAt: '2024-10-30T18:29:29.131Z',
        duration: '15'
      }
    },
    icon: '/icons/workout.svg',
    type: 'workout'
  }`




  export const foodLogSnippet = `{
    timestamp: '2024-11-05T17:30:33.750Z',
    type: 'food',
    name: 'Food Log',
    data: {
      name: 'Fried Rice',
      qty: '500',
      unit: 'g',
      protein: '12',
      carbs: '',
      fats: '65',
      sugar: '23',
      calories: '566',
      sodium: '',
      time: '23:34',
      type: 'dinner',
      note: 'Random values lol'
    },
    icon: '/icons/food.svg'
  }`

  export const goalLogSnippet = `{
    name: 'Calories',
    unit: 'kcal',
    target: '1400',
    icon: '/icons/calories.svg'
  }`

  export const exerciseLogSnippet = `{
    timestamp: '2024-11-05T18:35:17.896Z',
    name: 'Exercise',
    type: 'activity',
    data: {
      name: 'Push Ups',
      time: '23:37',
      targetGroup: 'chest',
      duration: '15',
      fields: [
        {
          name: 'Reps',
          unit: 'reps',
          value: '12'
        },
        {
          name: 'Sets',
          unit: 'sets',
          value: '3'
        }
      ]
    },
    icon: '/icons/exercise.svg'
  }`

  export const exerciseSnippet =  `{
    id: '21407df4-6e45-4276-babf-aaaddc1415fc',
    type: 'cardio',
    author: '',
    name: 'Biceps Curls',
    description: 'Not Set',
    reference: 'None',
    targetGroup: 'arms',
    difficulty: 'begginer',
    sets: '3',
    duration: '5',
    visibility: 'private',
    fields: [
      {
        id: '5e360142-15af-436b-a697-71ff05290f75',
        name: 'Reps',
        unit: 'reps',
        target: '12',
        type: '',
        value: ''
      },
      {
        id: 'ae892a8d-cd3c-410a-b338-be20871cf9b3',
        name: 'Weight',
        unit: 'kg',
        target: '10',
        type: '',
        value: ''
      }
    ],
    createdAt: '2024-10-30T18:30:43.057Z'
  }`


  export const workoutSnippet = `{
    id: '12e66889-7281-4935-bb8c-3e90e6d859c2',
    type: 'created',
    author: '',
    name: 'TRX Back Workout',
    description: 'A quick back workout you can do at home with just a TRX',
    reference: 'Not Required',
    targetGroup: 'upper-body',
    difficulty: 'intermediate',
    exercises: ['3aa0e1a6-59b9-4e47-af3b-1863255a5ae5', '3aa0e1a6-59b9-4e47-af3b-1866125ae5','3aa618a6-59b9-4e47-af3b-1866125ae5' ],
    createdAt: '2024-10-30T18:29:29.131Z',
    duration: '15'
  }`

  export const userGoalSnippet = `{
    name: 'Steps',
    unit: 'steps',
    target: '6000',
    icon: '/icons/steps.svg'
  }`

  export const userSliceSnippet = `{
    userId: "uuidv4() generated id",
    userData: {
      goals: [],
      name: 'Stefan',
      username: 'Stefan01',
      age: 25,
      gender: 'Male',
      height: 180,
      weight: 80,
      bio: 'I swear I am real',
    },
    activity: {},
    preferences: {
      darkMode: true,
      language: 'en',
      unitSystem: 'metric',
    },
    exercises: [],
    workouts: [],
    
    message: null
  }`


  export const addLogReducer = `{
    const timestamp = new Date().toISOString();
    const log = action.payload;
    const date = getCurrentDay();
     

    if (!state.activity[date]) {
      state.activity[date] = { logs: [], goals: state.userData.goals };
    }
    
    state.activity[date].logs.push({
      timestamp,
      name: log.name,
      data: log.data,
      icon: log.icon,
      type: log.type
    });
  }`


  