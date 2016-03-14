function sum() {
  var arrayArgs = Array.prototype.slice.call(arguments);
  var total = 0;
  arrayArgs.forEach(function (num) {
    total += num;
  });
  return total;
}

Function.prototype.myBind = function () {
  var args = Array.prototype.slice.call(arguments);
  var newThis = this;
  return function() {
    var newArgs = Array.prototype.slice.call(arguments);
    if (args.length > 1) {
      return newThis.apply(args[0], args.slice(1).concat(newArgs));
    } else {
      return newThis.apply(args[0], newArgs);
    }
  };
};

function curriedSum(numArgs) {
  var numbers = [];
  var sum = 0;
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.curry = function (numArgs) {
  var args = [];
  var func = this;
  return function curriedFunction(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return func.apply(func, args);
    } else {
      return curriedFunction;
    }
  };
};
