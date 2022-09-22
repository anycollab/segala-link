class ErrorHandler extends Error {
  constructor(res = null,message = 'Please try again',statusCode = 400){
    return res.status(stateCode).json({
     hasError: true,
     message,
    });
  }
}