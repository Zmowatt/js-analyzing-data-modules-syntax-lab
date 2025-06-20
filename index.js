function combineUsers(...args){
  let combinedObject = {
  
    users: []
  
  };

  for (let i = 0; i < args.length; i++) {
    combinedObject.users.push(...args[i])
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy")

    return combinedObject    
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};