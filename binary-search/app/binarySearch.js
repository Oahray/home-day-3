
Array.prototype.toTwenty = function() {
  result = [];
  for (var i = 1; i <= 20; i++) {
    result.push(i);
    }
    return result;
   };
toTwenty = Array.prototype.toTwenty();

   
Array.prototype.toFourty = function() {
  result = [];
  for (var i = 2; i <= 40; i += 2) {
    result.push(i);
    }
    return result;
   };
toForty = Array.prototype.toFourty();

   
Array.prototype.toOneThousand = function() {
  result = [];
  for (var i = 10; i <= 1000; i += 10) {
    result.push(i);
    }
    return result;
   };
toOneThousand = Array.prototype.toOneThousand();
   
Array.prototype.search = function(n) {
  var found = false;
  var first = 0, end = this.length - 1;
  var count = 0, index = -1; 
  var length = this.length;
  while (first < end && !found) {
    var mid = Math.floor((first + end) / 2);
    if (n === this[first]) {
      index = first;
      found = true;
      break;
    } 
    else if (n === this[mid]) {
      index = mid;
      found = true;
      break;
    } 
    else if (n === this[end]) {
      index = end;
      found = true;
      break;
    } 
    else {
      if (n < this[mid]) {
        first = first + 1;
        end = mid - 1;
      }
      else {
        first = mid + 1;
        end = end - 1;
      }
    } 
    count++;
  }
  return {"count" : count, "index" : index, "length" : length};
};
var search = Array.prototype.search

module.exports = {
  toTwenty, 
  toForty, 
  toOneThousand,
  search
  }