Array.prototype.bubbleSort = function(callback){  

  if (callback === undefined){
    callback = function(a,b){
    return a > b;
   };
  }
  
  let sorted = false;
  while(!sorted){
    sorted = true;
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], this[i + 1])){
        let helper = this[i];
        this[i] = this[i + 1];
        this[i + 1] = helper;
        sorted = false;
      }
    }
  }
  return this;
};

console.log(fred.bubbleSort());




