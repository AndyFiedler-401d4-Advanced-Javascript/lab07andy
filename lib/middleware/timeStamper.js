module.exports = (req, res, next) => {
    let timeStamp = new TimeStamp();
    console.log(`${req.method} ${req.path}`);
  
    req.requestTime = startDate;
  
    next();
  
    let endDate = new Date();
  };