export const userSchema = {
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdEvents: [{ type: 'mongoose.Schema.Types.ObjectId', ref: 'Event' }],
    joinedEvents: [{ type: 'mongoose.Schema.Types.ObjectId', ref: 'Event' }],
    friends: [{ type: 'mongoose.Schema.Types.ObjectId', ref: 'User' }],
    profilePictureUrl: {type: String},
    bio: {
        type: String,
        default: 'User has not set up a bio yet but we are sure he loves to have fun.'
    },
    assignedTasks: [{ type: 'mongoose.Schema.Types.ObjectId', ref: 'Task' }],
    savedEvents: [{ type: 'mongoose.Schema.Types.ObjectId', ref: 'Event' }],
    posts: [{type: 'mongoose.Schema.Types.ObjectId', ref: "Post"}],
    likedPosts: [{type: 'mongoose.Schema.Types.ObjectId', ref: "Post"}],
    dislikedPosts: [{type: 'mongoose.Schema.Types.ObjectId', ref: "Post"}],
    comments: [{type: 'mongoose.Schema.Types.ObjectId', ref: "Comment"}]
    

};

export const taskSchema = {
    name: {
      type: String,
      required: true
    },
    listId:{
      type: 'mongoose.Schema.Types.ObjectId',
      ref: 'List',
      required: true
    },
    description: {
      type: String
    },
    author: {
      type: 'mongoose.Schema.Types.ObjectId',
      ref: 'User'
    },
    assignedTo: {type: 'mongoose.Schema.Types.ObjectId', ref: 'User'},
    authorUsername: {type: String},
    createdAt: {
      type: Date,
      default: Date.now
    },
    deadline: {
      type: Date 
    },
    priority: {
      type: String,
      enum: ['low', 'standard', 'high', 'unset'],
      default: 'unset'
    },
    status: {
      type: String,
      enum: ['not-started', 'started', 'finished', 'dropped'],
      default: 'not-started'
    },
    isCompleted: {
      type: Boolean,
      default: false
    }
};

export const listSchema = {
    title: { type: String, required: true},
    author: {
        type: 'mongoose.Schema.Types.ObjectId',
        ref: 'User'
    },
    description: { type: String},
    event: { type: 'mongoose.Schema.Types.ObjectId', ref: 'Event'},
    eventCreator:{ type: 'mongoose.Schema.Types.ObjectId', ref: 'User'},
    tasks: [{type: 'mongoose.Schema.Types.ObjectId', ref: 'Task'}],
    suggestedTasks: ['mongoose.Schema.Types.ObjectId']
};
export const eventSchema = {
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String, default: "Unset"},
    duration: { type: String, default: "Unset"},
    location: { type: String, default: "Unset"},
    eventCountry: { type: String, default: ""},
    eventRegion:{ type: String, default: ""},
    eventCity:{ type: String, default: ""},
    minParticipants: { type: Number, default: 1, min: 1},
    maxParticipants: { type: Number, max: 100},
    participants: [{ type: 'mongoose.Schema.Types.ObjectId', ref: 'User', default: 1 }],
    requirements: {type: String, default: "None"},
    isPublic: {type: Boolean, default: false},
    isStarted: {type: Boolean, default: false},
    isOpen: {type: Boolean, default: true},
    lists: [{ type: 'mongoose.Schema.Types.ObjectId', ref: 'List' }],
    schedule: [{type: Object}],
    rules: [{type: Object}],
    author: {
      type: 'mongoose.Schema.Types.ObjectId',
      ref: 'User'
    }
  
  };

  export const postSchema = {
    author: { type: 'mongoose.Schema.Types.ObjectId', ref: 'User'},
    authorUsername: {type: String},
    text: { type: String},
    createdAt: { type: Date, default: Date.now },
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    comments: [{ type: 'mongoose.Schema.Types.ObjectId', ref: 'Comment'}]
};
export const commentSchema = {
    author: { type: 'mongoose.Schema.Types.ObjectId', ref: 'User'},
    post: { type: 'mongoose.Schema.Types.ObjectId', ref: 'Post'},
    authorUsername: {type: String},
    text: { type: String},
    createdAt: { type: Date, default: Date.now },
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
};