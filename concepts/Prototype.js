function Rectangle(x, y) {
  this._length = x;
  this._breadth = y;
}

Rectangle.prototype.getDimensions = function () {
  return { length : this._length, breadth : this._breadth };
};

Rectangle.prototype.setDimensions = function (len, bred) {
  this._length = len;
  this._breadth = bred;
};

var rect = new Rectangle(4,2);
console.log(rect.getDimensions());
console.log(rect.setDimensions(20,40));
console.log(rect.getDimensions());