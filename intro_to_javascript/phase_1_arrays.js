Array.prototype.uniq = function(){
  const result = [];
  for (let i = 0; i < this.length; i++) {
    
    if (!result.includes(this[i])){
      result.push(this[i]);
    }
  }
  return result;
};

const items = [1,4,6,3,4,5,8,5, -3, -4];
console.log(items.uniq());

Array.prototype.twoSum = function(){
  const result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if ( i < j && this[i] + this[j] === 0) {
        result.push([i, j]);
    
      }
    }
  }
  return result;
};

console.log(items.twoSum());

Array.prototype.transpose = function(){
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push([]);
    result[i].length = this.length;
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
        result[j][i] = this[i][j];
      
    }
  }
  return result;
};

const transposeThis = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(transposeThis.transpose());

Array.prototype.myEach = function(callback){
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

const fred = [1,4,6,3,4,5,8,5, -3, -4];
fred.myEach(function(el) {
  //return console.log(el);
});

Array.prototype.myMap = function(callback){
  const result = [];
  
  const mapCallBack = function(el){
    result.push(callback(el));
  };
  
  this.myEach(mapCallBack);
    
  // for (let i = 0; i < this.length; i++) {
  //   result.push(callback(this[i]));
  // }
  return result;
};

console.log(fred.myMap(function(el) {
  return el * 2;
}));

Array.prototype.myReduce = function(callback, acc) {
  
  let new_this = [];
    this.myEach(function(el) { 
      new_this.push(el);
    });
    
  if (acc === undefined) {
    acc = new_this[0];
    new_this = new_this.slice(1, (new_this.length));
  }
  console.log(new_this);
  acc_callback = function(acc, el){
      console.log("I GOT HERE");
     acc = callback(acc, el);  
     return acc;
  };
  
  new_this.myEach(acc_callback);
  return acc;
};

console.log([1,2,3].myReduce(function(acc, el) {
  return (acc + el);
}, 25));

console.log([1,2,3].myReduce(function(acc, el) {
  return (acc + el);
}));



// console.warn("----------------------------");
// // console.log(animal);
// let animal;
// console.log(animal);
// animal = 4;
// console.log(animal);

