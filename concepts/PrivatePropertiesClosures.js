function Rectangle(_length, _breadth) {

  this.getDimensions = function () {
    return { length : _length, breadth : _breadth };
  };

  this.setDimensions = function (len,bred) {
    _length = len;
    _breadth = bred
  };

}

var rect = new Rectangle(4,2);
console.log('Dimensions:', rect.getDimensions());
rect.setDimensions(8,4);
console.log('Dimensions:', rect.getDimensions());
