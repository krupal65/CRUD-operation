
//fun pass and return function for error handling then use expresserror
//try or catch likana hame syntex accha nahi tha is liye
module.exports=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    };
};