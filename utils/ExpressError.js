
//error me hum status code or kya dikana he vo dikha sakate he
class ExpressError extends Error{
    constructor(statusCode,message)
    {
        super();
        this.statusCode=statusCode;
        this.message=message;
    };
};
module.exports=ExpressError;