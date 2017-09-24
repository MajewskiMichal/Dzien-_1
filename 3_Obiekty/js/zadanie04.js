var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
};

Robot.prototype.sayHi = function(toWho) {
  if(this.isFunctional === true) {
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + " is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + " changes name to " + newname);
  this.name = newname;
};

Robot.prototype.fixIt = function() {
  if(this.isFunctional !== true){
    this.isFunctional = !this.isFunctional;
    console.log("Robot " + this.name + " was fixed");

  }else {
    console.log('all good')
  }

};


var Robot1 = new Robot('robot1');
console.log(Robot1.name);

Robot1.sayHi('Michael');


Robot1.changeName('Cezar');

Robot1.sayHi('Katya');

Robot1.fixIt();