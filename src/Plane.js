
// creates plane with status false
function Plane() {
  this._flying = false;
};
// checks status
Plane.prototype.isFlying = function() {
  return this._flying;
};

// change status on take off
Plane.prototype.takeOff = function() {
  this._flying = true;
};

// change status to land
Plane.prototype.land = function() {
  this._flying = false;
};

// throws error if plane already landed when landing
Plane.prototype.land = function() {
  if (!(this.isFlying === false)) {
    this._flying = false;
  } else {
  throw new Error("plane already landed");
  };
};

// Plane.prototype.takeOff = function() {
//   if (this._flying) {
//     throw new Error("plane already in the air");
//   } else {
//     this._
//   }
// }
