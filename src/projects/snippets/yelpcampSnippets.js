export const userController = `
    const User = require('../models/user')
const {catchAsync} = require('../utils/catchAsync')
module.exports.renderRegister = (req, res)=>{
    res.render('users/register')
}
module.exports.createUser = async (req, res)=>{
    //checks for errors
    try{
        //deconstruct email, user and pass from req.body
        const {email, username, password} = req.body
        //creates a new user with email and username and then adds in the password
        const user = new User({email, username})
        const registeredUser = await User.register(user, password)
        //log the user in after registering
        req.login(registeredUser, err =>{
            if(err) return next(err);
            //if successfull, redirect to campgrounds and how a message
            req.flash('success','Welcome to YelpCamp')
            res.redirect('./campgrounds')
        })
        
    } catch(e){
        //if there is an error, redirect to register again and show an error
        req.flash('error',e.message)
        res.redirect('/register')
        
    }
 
}
module.exports.renderLogin = (req, res)=>{
    res.render('users/login')
}
module.exports.login = (req, res)=>{
    req.flash('success','Welcome back')
    const redirectUrl = req.session.returnTo || '/campgrounds'
    delete req.session.returnTo;
    res.redirect(redirectUrl)
}

module.exports.logout = (req, res)=>{
    
    req.logout(catchAsync);
    req.flash("success", "Goodbye!");
    res.redirect("/campgrounds");
}

`;

export const campgroundsController = `const Campground = require('../models/campground');
const { cloudinary } = require("../cloudinary/index");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
console.log(mbxGeocoding)
const geocoder = mbxGeocoding({accessToken: mapBoxToken});





module.exports.index = async (req, res)=>{
    //finds all campgrounds in the database
    const campgrounds = await Campground.find({})
    //renders all the campgrounds using the view from the specified path
    res.render('campgrounds/index', {campgrounds})
}
module.exports.renderNewForm = (req, res)=>{
    //renders a form from which you can create  a new campground
    res.render('campgrounds/new')
}
module.exports.createCampground = async (req, res, next)=>{
    const geoData = await geocoder.forwardGeocode({
        query: req.body.location,
        limit: 1
    }).send()
    
    
    //creates a new campground using campground model and data from req.body
    const campground = new Campground(req.body)
    //saves the geodata 
    campground.geometry = geoData.body.features[0].geometry;
    //map over the uploaded images and then add the paths and filenames to the campground
    campground.images = req.files.map((f => ({url: f.path, filename: f.filename})))
    //set the author of the campground to the currently logged in user
    campground.author = req.user._id;
    //saves the campground to the database
    await campground.save();
    req.flash('success', 'Successfully made a new campground')
    //redirect to the newly created campground
    res.redirect(/campgrounds/{campground._id});

}

module.exports.showCampground = async (req, res)=>{
    //destruct the id from req.params
    const {id} = req.params
    //find the campground in the database and then populate it with  reviews
    //populate() is adding the reviews content to the campground
    //the path of reviews makes it so every review will be populated with author and the final
    //populate will populate the campground with the autor of the campground
    const campground = await Campground.findById(id).populate({path: 'reviews', populate: {path: 'author'}}).populate('author')
    //flash error if campground is not found
    if(!campground){
        req.flash('error','Cannot find that campground!')
        return res.redirect('/campgrounds')
    }
    //renders the specific campground page using the specified view
    res.render('campgrounds/show', {campground})
}
module.exports.renderEditForm = async (req, res)=>{
    //destruct the id from req.params
    const {id} = req.params
    //finds the campground in the database
    const campground = await Campground.findById(id)
    //renders the form to edit the campground, populating it with existing
    //flash error if campground is not found
    if(!campground){
        req.flash('error','Cannot find that campground!')
        return res.redirect('/campgrounds')
    }
  
    //campground data
    res.render('campgrounds/edit', {campground})
}

module.exports.updateCampground = async (req, res)=>{
    
    //destruct the id from req.params
    const {id} = req.params;
    const campground = await Campground.findById(id)
    if(!campground.author.equals(req.user._id)){
        req.flash('error','You do not have permission to do that')
        return res.redirect(/campgrounds/{id}) //This line is incorrect on purpose only in this example
    }
    //finds the campground in the database and then updates it with the req.body info
    const camp = await Campground.findByIdAndUpdate(id, {...req.body})
    const imgs = req.files.map(f => ({url: f.path, filename: f.filename}))
    camp.images.push(...imgs);
    await camp.save()
     if(req.body.deleteImages){
        for(let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename)
        }
        await campground.updateOne({$pull: {images:{filename: {$in: req.body.deleteImages}}}})
     }
    //set the flash msg and then showing it
    req.flash('success','Successfully updated the campground!')
    //redirects to that specific campground
    res.redirect('/campgrounds/{camp._id}') //This line is incorrect on purpose only in this example
}
module.exports.deleteCampground = async (req, res)=>{
    //destruct the id from req.params
    const {id} = req.params;
    //finds the campground and then deletes it
    await Campground.findByIdAndDelete(id)
    //delete flash msg
    req.flash('success','Successfully deleted the campground!')
    //redirect to all campgrounds
    res.redirect('/campgrounds')
}
`


export const campgroundModel = `const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Review = require('./review')


const ImageSchema = new Schema({
    url: String,
    filename: String
})
ImageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload','/upload/w_200')
})
const opts = {toJSON: { virtuals: true}}
const CampgroundSchema = new Schema({
    title: String,
    images: [ImageSchema],
    geometry: {
        type:{
            type: String,
            enum: ['Point'],
            required: true
        }, 
        coordinates: {
            type: [Number],
            required: true
        }
    },
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    
},opts);
CampgroundSchema.virtual('properties.popUpMarkup').get(function(){
    return <strong><a href="/campgrounds/{this._id}">{this.title}</a></strong>
    <p>{this.description.substring(0,50)}...</p>
})


CampgroundSchema.post('findOneAndDelete', async function(doc){
    if(doc){
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})


module.exports = mongoose.model('Campground', CampgroundSchema)
`

export const reviewModel = `const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    body: String,
    rating: Number,
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});
module.exports = mongoose.model("Review", reviewSchema)`


export const userModel = `const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    }
})

UserSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', UserSchema)`



export const campgroundRoutes = `const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const {isLoggedIn, isAuthor, validateCampground} = require('../middleware')
const campgrounds = require('../controllers/campgrounds');
//imports for image uploading packages
const multer = require('multer')
const {storage} = require('../cloudinary/index')
const upload = multer({storage})


router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground))
   
router.get('/new', isLoggedIn, campgrounds.renderNewForm)
router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn ,isAuthor, catchAsync(campgrounds.deleteCampground))



//route used to edit a specific campground
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))




module.exports = router;`

export const reviewsRoutes = `const express = require('express');

//the arguemeit is used if the param is set in the prefix set in the app.js
//instead of the router.get. Otherwise the param will be empty
const router = express.Router({mergeParams: true});

//utils for error handling
const catchAsync = require('../utils/catchAsync')

//import the middleware from the middlewares file
const {validateReview, isLoggedIn, isReviewAuthor} = require('../middleware')


//models
const Review = require('../models/review')
const Campground = require('../models/campground')

const reviews = require('../controllers/reviews')



//path for creating a new review
router.post('/',isLoggedIn,validateReview, catchAsync(reviews.createReview))
//path for deleting a review
router.delete('/:reviewId',isLoggedIn,isReviewAuthor ,catchAsync(reviews.deleteReview))





//export the router so you can use in the app.js
module.exports = router;`


export const usersRoutes = `const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/user')
const catchAsync = require('../utils/catchAsync')
const users = require('../controllers/users')



//route for logging out
router.get('/logout',users.logout)
//router.route helps to clean things up. It is used when we have more verbs for the same route.
router.route('/register')
    //renders the form
    .get(users.renderRegister)
    //route for submitting the new user
    .post(catchAsync(users.createUser))
router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), users.login)


module.exports = router`;

export const middlewares = `//JOI schema for errors
const {campgroundSchema, reviewSchema} = require('./schemas.js')
const ExpressError = require('./utils/ExpressError')
const Campground = require('./models/campground')
const Review = require('./models/review')
module.exports.isLoggedIn = (req, res, next)=>{

    //checks if the user is authenticated
    if(!req.isAuthenticated()){
        //saves the url before login screen to it can redirect the user
        //to where he originaly tried to go
        req.session.returnTo = req.originalUrl
        req.flash('error','You must be signed in!');
        return res.redirect('/login');
    }
    next();
}


 module.exports.isAuthor = async (req, res, next)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id)
  //checks if you have the right to see the edit form
  if(!campground.author.equals(req.user._id)){
    req.flash('error','You do not have permission to do that')
    return res.redirect(/campgrounds/{id})
}
next();
}
module.exports.validateCampground = (req, res, next)=>{
    
    const {error} = campgroundSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(",")
        throw new ExpressError(msg, 400)
    }else{
       next();
    }
}

module.exports.validateReview = (req, res, next)=>{
    //destruct the err from req.body
    const {error} = reviewSchema.validate(req.body);
    //if there is any error, then throw a new error with the err msg
    if(error){
        const msg = error.details.map(el => el.message).join(",")
        throw new ExpressError(msg, 400)
    }else{
        //if there is no error, then call next and show nothing
       next();
    }
}


module.exports.isReviewAuthor = async (req, res, next)=>{
    const {reviewId, id} = req.params;
    const review = await Review.findById(reviewId)
  //checks if you have the right to see the edit form
  if(!review.author.equals(req.user._id)){
    req.flash('error','You do not have permission to do that')
    return res.redirect(/campgrounds/{id})
}
next();
}`;


export const schemas = `const BaseJoi = require('joi')
//used for validating input

const sanitizeHtml = require('sanitize-html')

const extension = (joi) =>({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML:{
            validate(value, helpers){
                const clean = sanitizeHtml(value,{
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if(clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
 })

const Joi = BaseJoi.extend(extension)


module.exports.campgroundSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string().required(),
    location: Joi.string().required(),
    deleteImages: Joi.array(),
 })

 module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required().escapeHTML()
    }).required()
 })
`;