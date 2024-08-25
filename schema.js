//mongoosa ka schema nahi he server side schema hoga
//model schema valid
//server side data valid yani ki hamane form se to kar liya client side se par hum hotspoch se data bheje to jayega kam hoga to bhi
const Joi=require('joi');
module.exports.listingSchema=Joi.object({
    listing:Joi.object({//object hona hi chiye =or object me kya hona chahiye

        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
          price:Joi.string().required().min(0),
         image:Joi.string().allow("",null),
          
    }).required(),
});