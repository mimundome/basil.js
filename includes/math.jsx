
  // ----------------------------------------
  // Math
  
  var Vector = pub.Vector = function() {

    /**
     * A class to describe a two or three dimensional vector. This datatype stores two or three variables that are commonly used as a position, velocity, and/or acceleration. Technically, position is a point and velocity and acceleration are vectors, but this is often simplified to consider all three as vectors. For example, if you consider a rectangle moving across the screen, at any given instant it has a position (the object's location, expressed as a point.), a velocity (the rate at which the object's position changes per time unit, expressed as a vector), and acceleration (the rate at which the object's velocity changes per time unit, expressed as a vector). Since vectors represent groupings of values, we cannot simply use traditional addition/multiplication/etc. Instead, we'll need to do some "vector" math, which is made easy by the methods inside the Vector class.
     *
     * Constructor of Vector, can be two- or three-dimensional.
     * 
     * @constructor
     * @cat Data
     * @subcat Vector
     * @method Vector
     * @param {Number} x
     * @param {Number} y
     * @param {Number} [z]
     */
    function Vector(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    }
    /**
     * Static function. Calculates the Euclidean distance between two points (considering a point as a vector object).
     * Is meant to be called "static" i.e. Vector.dist(v1, v2);
     * @cat Data
     * @subcat Vector
     * @method Vector.dist
     * @static
     * @param {Vector} v1 The first vector
     * @param {Vector} v2 The second vector
     * @return {Number} The distance
     */
    Vector.dist = function(v1, v2) {
      return v1.dist(v2);
    };

    /**
     * Static function. Calculates the dot product of two vectors.
     * Is meant to be called "static" i.e. Vector.dot(v1, v2);
     * @method Vector.dot
     * @cat Data
     * @subcat Vector
     * @static
     * @param {Vector} v1 The first vector
     * @param {Vector} v2 The second vector
     * @return {Number} The dot product
     */
    Vector.dot = function(v1, v2) {
      return v1.dot(v2);
    };

    /**
     * Static function. Calculates the cross product of two vectors.
     * Is meant to be called "static" i.e. Vector.cross(v1, v2);
     * @method Vector.cross
     * @cat Data
     * @subcat Vector
     * @static
     * @param {Vector} v1 The first vector
     * @param {Vector} v2 The second vector
     * @return {Number} The cross product
     */
    Vector.cross = function(v1, v2) {
      return v1.cross(v2);
    };

    /**
     * Static function. Calculates the angle between two vectors.
     * Is meant to be called "static" i.e. Vector.angleBetween(v1, v2);
     * @method Vector.angleBetween
     * @cat Data
     * @subcat Vector
     * @static
     * @param {Vector} v1 The first vector
     * @param {Vector} v2 The second vector
     * @return {Number} The angle
     */
    Vector.angleBetween = function(v1, v2) {
      return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()));
    };

    Vector.prototype = {

      /**
       * Sets the x, y, and z component of the vector using three separate variables, the data from a Vector, or the values from a float array.
       * @method Vector.set
       * @cat Data
       * @subcat Vector
       * @param {Number|Array|Vector} v Either a vector, array or x component
       * @param {Number} [y] The y component
       * @param {Number} [z] The z component
       */
      set: function(v, y, z) {
        if (arguments.length === 1) this.set(v.x || v[0] || 0, v.y || v[1] || 0, v.z || v[2] || 0);
        else {
          this.x = v;
          this.y = y;
          this.z = z;
        }
      },
      /**
       * Gets a copy of the vector, returns a Vector object.
       * @method Vector.get
       * @cat Data
       * @subcat Vector
       * @return {Vector} A copy of the vector
       */
      get: function() {
        return new Vector(this.x, this.y, this.z);
      },
      /**
       * Calculates the magnitude (length) of the vector and returns the result as a float
       * @method Vector.mag
       * @cat Data
       * @subcat Vector
       * @return {Number} The length
       */
      mag: function() {
        var x = this.x,
          y = this.y,
          z = this.z;
        return Math.sqrt(x * x + y * y + z * z);
      },
      /**
       * Adds x, y, and z components to a vector, adds one vector to another.
       * @method Vector.add
       * @cat Data
       * @subcat Vector
       * @param {Vector|Number} v Either a full vector or an x component
       * @param {Number} [y] The y component
       * @param {Number} [z] The z component
       */
      add: function(v, y, z) {
        if (arguments.length === 1) {
          this.x += v.x;
          this.y += v.y;
          this.z += v.z;
        } else {
          this.x += v;
          this.y += y;
          this.z += z;
        }
      },
      /**
       * Substract x, y, and z components or a full vector from this vector
       * @method Vector.sub
       * @cat Data
       * @subcat Vector
       * @param {Vector|Number} v Either a full vector or an x component
       * @param {Number} [y] The y component
       * @param {Number} [z] The z component
       */
      sub: function(v, y, z) {
        if (arguments.length === 1) {
          this.x -= v.x;
          this.y -= v.y;
          this.z -= v.z;
        } else {
          this.x -= v;
          this.y -= y;
          this.z -= z;
        }
      },
      /**
       * Multiplies this vector with x, y, and z components or another vector.
       * @method Vector.mult
       * @cat Data
       * @subcat Vector
       * @param {Vector|Number} v Either a full vector or an x component
       * @param {Number} [y] The y component
       * @param {Number} [z] The z component
       */
      mult: function(v) {
        if (typeof v === "number") {
          this.x *= v;
          this.y *= v;
          this.z *= v;
        } else {
          this.x *= v.x;
          this.y *= v.y;
          this.z *= v.z;
        }
      },
      /**
       * Divides this vector through x, y, and z components or another vector.
       * @method Vector.div
       * @cat Data
       * @subcat Vector
       * @param {Vector|Number} v Either a full vector or an x component
       * @param {Number} [y] The y component
       * @param {Number} [z] The z component
       */
      div: function(v) {
        if (typeof v === "number") {
          this.x /= v;
          this.y /= v;
          this.z /= v;
        } else {
          this.x /= v.x;
          this.y /= v.y;
          this.z /= v.z;
        }
      },
      /**
       * Calculates the distance from this vector to another as x, y, and z components or full vector.
       * @method Vector.dist
       * @cat Data
       * @subcat Vector
       * @param {Vector|Number} v Either a full vector or an x component
       * @param {Number} [y] The y component
       * @param {Number} [z] The z component
       * @return {Number} The distance
       */
      dist: function(v) {
        var dx = this.x - v.x,
          dy = this.y - v.y,
          dz = this.z - v.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
      },
      /**
       * Calculates the dot product from this vector to another as x, y, and z components or full vector.
       * @method Vector.dot
       * @cat Data
       * @subcat Vector
       * @param {Vector|Number} v Either a full vector or an x component
       * @param {Number} [y] The y component
       * @param {Number} [z] The z component
       * @return {Number} The dot product
       */
      dot: function(v, y, z) {
        if (arguments.length === 1) return this.x * v.x + this.y * v.y + this.z * v.z;
        return this.x * v + this.y * y + this.z * z;
      },
      /**
       * Calculates the cross product from this vector to another as x, y, and z components or full vector.
       * @method Vector.cross
       * @cat Data
       * @subcat Vector
       * @param {Vector|Number} v Either a full vector or an x component
       * @param {Number} [y] The y component
       * @param {Number} [z] The z component
       * @return {Number} The cross product
       */
      cross: function(v) {
        var x = this.x,
          y = this.y,
          z = this.z;
        return new Vector(y * v.z - v.y * z, z * v.x - v.z * x, x * v.y - v.x * y);
      },
      /**
       * Normalizes the length of this vector to 1.
       * @cat Data
       * @subcat Vector
       * @method Vector.normalize
       */
      normalize: function() {
        var m = this.mag();
        if (m > 0) this.div(m);
      },
      /**
       * Normalizes the length of this vector to the given parameter.
       * @method Vector.limit
       * @cat Data
       * @subcat Vector
       * @param {Number} high The value to scale to.
       */
      limit: function(high) {
        if (this.mag() > high) {
          this.normalize();
          this.mult(high);
        }
      },
      /**
       * The 2D orientation (heading) of this vector in radian.
       * @method Vector.heading
       * @cat Data
       * @subcat Vector
       * @return {Number} A radian angle value
       */
      heading: function() {
        return -Math.atan2(-this.y, this.x);
      },
      /**
       * Returns data about this vector as a string.
       * @method Vector.toString
       * @cat Data
       * @subcat Vector
       * @return {String} The x, y and z components as a string.
       */
      toString: function() {
        return "[" + this.x + ", " + this.y + ", " + this.z + "]";
      },
      /** 
       * Returns this vector as an array [x,y,z].
       * @method Vector.array
       * @cat Data
       * @subcat Vector
       * @return {Array} [x,y,z]
       */
      array: function() {
        return [this.x, this.y, this.z];
      }
    };

    function createVectorMethod(method) {
      return function(v1, v2) {
        var v = v1.get();
        v[method](v2);
        return v;
      };
    }
    for (var method in Vector.prototype) if (Vector.prototype.hasOwnProperty(method) && !Vector.hasOwnProperty(method)) Vector[method] = createVectorMethod(method);
    return Vector;
  }();
  

  // -- Calculation --  
   
  /** 
   * Calculates the absolute value (magnitude) of a number. The absolute value of a number is always positive.
   *
   * @cat Math
   * @subcat Calculation
   * @method abs
   * @param {Number} val An arbitrary number
   * @return The absolute value of that number
   */
  pub.abs = Math.abs;

  /**
   * Calculates the closest int value that is greater than or equal to the value of the parameter. For example, ceil(9.03) returns the value 10.
   *
   * @cat Math
   * @subcat Calculation
   * @method ceil
   * @param {Number} val An arbitrary number
   * @return The next highest integer value
   */
  pub.ceil = Math.ceil;

  /**
   * Constrains a value to not exceed a maximum and minimum value.
   *
   * @cat Math
   * @subcat Calculation
   * @method constrain
   * @param {Number} aNumber the value to constrain
   * @param {Number} aMin minimum limit
   * @param {Number} aMax maximum limit
   * @return The constrained value
   */
  pub.constrain = function(aNumber, aMin, aMax) {
    if(arguments.length !== 3 ) error("b.constrain(), wrong argument count.");
    if(aNumber <= aMin) return aMin;
    if(aNumber >= aMax) return aMax;
    return aNumber;
  };

  /**
   * Calculates the distance between two points.
   *
   * @cat Math
   * @subcat Calculation
   * @method dist
   * @param {Number} x1 the x-coordinate of the first point
   * @param {Number} y1 the y-coordinate of the first point
   * @param {Number} x2 the x-coordinate of the second point
   * @param {Number} y2 the y-coordinate of the second point
   * @return {Number} The distance
   */
  pub.dist = function() {
    var dx, dy, dz;
    if (arguments.length === 4) {
      dx = arguments[0] - arguments[2];
      dy = arguments[1] - arguments[3];
      return Math.sqrt(dx * dx + dy * dy);
    } else {
      error("b.dist(), wrong argument count.");
    }
  };

  /**
   * Returns Euler's number e (2.71828...) raised to the power of the value parameter.
   * 
   * @cat Math
   * @subcat Calculation
   * @method exp
   * @param {Number} a value
   * @return {Number}
   */
  pub.exp = Math.exp;

  /**
   * Calculates the closest int value that is less than or equal to the value of the parameter.
   * 
   * @cat Math
   * @subcat Calculation
   * @method floor
   * @param {Number} a value
   * @return {Number}
   */
  pub.floor = Math.floor;

  /**
   * Calculates a number between two numbers at a specific increment. The amt parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc. The lerp function is convenient for creating motion along a straight path and for drawing dotted lines.
   *
   * @cat Math
   * @subcat Calculation
   * @method lerp
   * @param {Number} value1 first value
   * @param {Number} value2 second value
   * @param {Number} amt between 0.0 and 1.0
   * @return {Number} The mapped value
   */
  pub.lerp = function(value1, value2, amt) {
    if(arguments.length !== 3 ) error("b.lerp(), wrong argument count.");
    return (value2 - value1) * amt + value1;
  };

  /**
   * Calculates the natural logarithm (the base-e logarithm) of a number. This function expects the values greater than 0.0.
   * 
   * @cat Math
   * @subcat Calculation
   * @method log
   * @param {Number} number must be greater then 0.0
   * @return {Number}
   */
  pub.log = Math.log;

  /**
   * Calculates the magnitude (or length) of a vector. A vector is a direction in space commonly used in computer graphics and linear algebra. Because it has no "start" position, the magnitude of a vector can be thought of as the distance from coordinate (0,0) to its (x,y) value. Therefore, mag() is a shortcut for writing "dist(0, 0, x, y)".
   * 
   * @cat Math
   * @subcat Calculation
   * @method mag
   * @param {Number} a x-coordinate
   * @param {Number} b y-coordinate
   * @param {Number} [c] z-coordinate
   * @return {Number} the magnitude
   */
  pub.mag = function(a, b, c) {
    if( ! (arguments.length === 2 || arguments.length === 3 ) )  error("b.mag(), wrong argument count.");
    if (c) return Math.sqrt(a * a + b * b + c * c);
    return Math.sqrt(a * a + b * b);
  };

  /**
   * Re-maps a number from one range to another. In the example above, the number '25' is converted from a value in the range 0..100 into a value that ranges from the left edge (0) to the right edge (width) of the screen.
   * 
   * Numbers outside the range are not clamped to 0 and 1, because out-of-range values are often intentional and useful.
   * 
   * @cat Math
   * @subcat Calculation
   * @method map
   * @param {Number} value the value to be mapped
   * @param {Number} istart start of the input range
   * @param {Number} istop end of the input range
   * @param {Number} ostart start of the output range
   * @param {Number} ostop end of the output range
   * @return {Number} the mapped value
   */
  pub.map = function(value, istart, istop, ostart, ostop) {
    if(arguments.length !== 5 ) error("b.map(), wrong argument count. Use: map(value, istart, istop, ostart, ostop)");
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
  };

  /**
   * Determines the largest value in a sequence of numbers.
   * 
   * @cat Math
   * @subcat Calculation
   * @method max
   * @param {Number|Array} param1 Either the first value or an array of Numbers 
   * @param {Number} param2 Another value to be compared
   * @param {Number} param3 Another value to be compared
   * @return {Number} The highest value
   */ 
  pub.max = function() {
    if (arguments.length === 2) return arguments[0] < arguments[1] ? arguments[1] : arguments[0];
    var numbers = arguments.length === 1 ? arguments[0] : arguments;
    if (! ("length" in numbers && numbers.length > 0)) error("b.max(), non-empty array is expected");
    var max = numbers[0],
      count = numbers.length;
    for (var i = 1; i < count; ++i) if (max < numbers[i]) max = numbers[i];
    return max;
  };

  /**
   * Determines the smallest value in a sequence of numbers.
   * 
   * @cat Math
   * @subcat Calculation
   * @method min
   * @param {Number|Array} param1 Either the first value or an array of Numbers 
   * @param {Number} param2 Another value to be compared
   * @param {Number} param3 Another value to be compared
   * @return {Number} The lowest value
   */ 
  pub.min = function() {
    if (arguments.length === 2) return arguments[0] < arguments[1] ? arguments[0] : arguments[1];
    var numbers = arguments.length === 1 ? arguments[0] : arguments;
    if (! ("length" in numbers && numbers.length > 0)) error("b.min(), non-empty array is expected");
    var min = numbers[0],
      count = numbers.length;
    for (var i = 1; i < count; ++i) if (min > numbers[i]) min = numbers[i];
    return min;
  };

  /**
   * Normalizes a number from another range into a value between 0 and 1. 
   *
   * Identical to map(value, low, high, 0, 1); 
   *
   * Numbers outside the range are not clamped to 0 and 1, because out-of-range values are often intentional and useful.
   *
   * @cat Math
   * @subcat Calculation
   * @method norm
   * @param {Number} aNumber The value to be normed
   * @param {Number} low The lowest value to be expected
   * @param {Number} low The highest value to be expected
   * @return {Number} The normalized value
   */
  pub.norm = function(aNumber, low, high) {
    if(arguments.length !== 3 ) error("b.norm, wrong argument count.");
    return (aNumber - low) / (high - low);
  };

  /**
   * Facilitates exponential expressions. The pow() function is an efficient way of multiplying numbers by themselves (or their reciprocal) in large quantities. For example, pow(3, 5) is equivalent to the expression 3*3*3*3*3 and pow(3, -5) is equivalent to 1 / 3*3*3*3*3
   *
   * @cat Math
   * @subcat Calculation
   * @method pow
   * @param {Number} num base of the exponential expression
   * @param {Number} exponent power of which to raise the base
   * @return {Number} the result
   */
  pub.pow = Math.pow;

  /**
   * Calculates the integer closest to the value parameter. For example, round(9.2) returns the value 9.
   *
   * @cat Math
   * @subcat Calculation
   * @method round
   * @param {Number} value The value to be rounded
   * @return {Number} The rounded value
   */
  pub.round = Math.round;

  /**
   * Squares a number (multiplies a number by itself). The result is always a positive number, as multiplying two negative numbers always yields a positive result. For example, -1 * -1 = 1.
   *
   * @cat Math
   * @subcat Calculation
   * @method sq
   * @param {Number} aNumber The value to be squared
   * @return {Number} 
   */
  pub.sq = function(aNumber) {
    if(arguments.length !== 1 ) error("b.sq(), wrong argument count.");
    return aNumber * aNumber;
  };

  // -- Trigonometry --
  
  /**
   * Calculates the square root of a number. The square root of a number is always positive, even though there may be a valid negative root. The square root s of number a is such that s*s = a. It is the opposite of squaring.
   *
   * @cat Math
   * @subcat Trigonometry
   * @method sqrt
   * @param {Number} val The value to be calculated
   * @return {Number} 
   */
  pub.sqrt = Math.sqrt;

  /**
   * The inverse of cos(), returns the arc cosine of a value. This function expects the values in the range of -1 to 1 and values are returned in the range 0 to PI (3.1415927).
   * 
   * @cat Math
   * @subcat Trigonometry
   * @method acos
   * @param {Number} value the value whose arc cosine is to be returned
   * @return {Number} 
   */
  pub.acos = Math.acos;
  
  /**
   * The inverse of sin(), returns the arc sine of a value. This function expects the values in the range of -1 to 1 and values are returned in the range 0 to PI (3.1415927).
   * 
   * @cat Math
   * @subcat Trigonometry
   * @method asin
   * @param {Number} value the value whose arc sine is to be returned
   * @return {Number} 
   */  
  pub.asin = Math.asin;

  /**
   * The inverse of tan(), returns the arc tangent of a value. This function expects the values in the range of -1 to 1 and values are returned in the range 0 to PI (3.1415927).
   * 
   * @cat Math
   * @subcat Trigonometry
   * @method atan
   * @param {Number} value the value whose arc tangent is to be returned
   * @return {Number} 
   */
  pub.atan = Math.atan;

  /**
   * Calculates the angle (in radians) from a specified point to the coordinate origin as measured from the positive x-axis. Values are returned as a float in the range from PI to -PI. The atan2() function is most often used for orienting geometry to the position of the cursor. Note: The y-coordinate of the point is the first parameter and the x-coordinate is the second due the the structure of calculating the tangent.
   * 
   * @cat Math
   * @subcat Trigonometry
   * @method atan2
   * @param {Number} y the y coordinate
   * @param {Number} x the x coordinate
   * @return {Number} 
   */
  pub.atan2 = Math.atan2;

  /**
   * Calculates the cosine of an angle. This function expects the values of the angle parameter to be provided in radians (values from 0 to PI*2). Values are returned in the range -1 to 1.
   * 
   * @cat Math
   * @subcat Trigonometry
   * @method cos
   * @param {Number} rad a value in radians
   * @return {Number} 
   */
  pub.cos = Math.cos;
  
  /**
   * Converts a radian measurement to its corresponding value in degrees. Radians and degrees are two ways of measuring the same thing. There are 360 degrees in a circle and 2*PI radians in a circle. For example, 90° = PI/2 = 1.5707964. All trigonometric methods in Processing require their parameters to be specified in radians.
   * 
   * @cat Math
   * @subcat Trigonometry
   * @method degrees
   * @param {Number} aAngle an angle in radians
   * @return {Number} The given angle in degree
   */
  pub.degrees = function(aAngle) {
    return aAngle * 180 / Math.PI;
  };

  /**
   * Converts a degree measurement to its corresponding value in radians. Radians and degrees are two ways of measuring the same thing. There are 360 degrees in a circle and 2*PI radians in a circle. For example, 90° = PI/2 = 1.5707964. All trigonometric methods in Processing require their parameters to be specified in radians.
   * 
   * @cat Math
   * @subcat Trigonometry
   * @method radians
   * @param {Number} aAngle an angle in degree
   * @return {Number} The given angle in radians
   */
  pub.radians = function(aAngle) {
    return aAngle / 180 * Math.PI;
  };

  /**
   * Calculates the sine of an angle. This function expects the values of the angle parameter to be provided in radians (values from 0 to 6.28). Values are returned in the range -1 to 1.
   * 
   * @cat Math
   * @subcat Trigonometry
   * @method sin
   * @param {Number} rad a value in radians
   * @return {Number} 
   */
  pub.sin = Math.sin;

  /**
   * Calculates the ratio of the sine and cosine of an angle. This function expects the values of the angle parameter to be provided in radians (values from 0 to PI*2). Values are returned in the range infinity to -infinity.
   * 
   * @cat Math
   * @subcat Trigonometry
   * @method tan
   * @param {Number} rad a value in radians
   * @return {Number} 
   */
  pub.tan = Math.tan;

  // -- Random --
  
  var currentRandom = Math.random;
  
  /**
   * Generates random numbers. Each time the random() function is called, it returns an unexpected value within the specified range. If one parameter is passed to the function it will return a float between zero and the value of the high parameter. The function call random(5) returns values between 0 and 5. If two parameters are passed, it will return a float with a value between the the parameters. The function call random(-5, 10.2) returns values between -5 and 10.2.
   * 
   * One parameter sets the range from 0 to the given parameter, while with two parameters present you set the range from val1 - val2.
   *
   * @cat Math
   * @subcat Random
   * @method random
   * @param {Number} [low] The low border of the range
   * @param {Number} [high] The high border of the range
   * @return {Number} A random number
   */
  pub.random = function() {
    if (arguments.length === 0) return currentRandom();
    if (arguments.length === 1) return currentRandom() * arguments[0];
    var aMin = arguments[0],
      aMax = arguments[1];
    return currentRandom() * (aMax - aMin) + aMin;
  };

  function Marsaglia(i1, i2) {
    var z = i1 || 362436069,
      w = i2 || 521288629;
    var nextInt = function() {
      z = 36969 * (z & 65535) + (z >>> 16) & 4294967295;
      w = 18E3 * (w & 65535) + (w >>> 16) & 4294967295;
      return ((z & 65535) << 16 | w & 65535) & 4294967295;
    };
    this.nextDouble = function() {
      var i = nextInt() / 4294967296;
      return i < 0 ? 1 + i : i;
    };
    this.nextInt = nextInt;
  }
  Marsaglia.createRandomized = function() {
    var now = new Date();
    return new Marsaglia(now / 6E4 & 4294967295, now & 4294967295);
  };
  /* todo */
  pub.randomSeed = function(seed) {
    currentRandom = (new Marsaglia(seed)).nextDouble;
  };
  /* todo */
  pub.Random = function(seed) {
    var haveNextNextGaussian = false,
      nextNextGaussian, random;
    this.nextGaussian = function() {
      if (haveNextNextGaussian) {
        haveNextNextGaussian = false;
        return nextNextGaussian;
      }
      var v1, v2, s;
      do {
        v1 = 2 * random() - 1;
        v2 = 2 * random() - 1;
        s = v1 * v1 + v2 * v2;
      } while (s >= 1 || s === 0);
      var multiplier = Math.sqrt(-2 * Math.log(s) / s);
      nextNextGaussian = v2 * multiplier;
      haveNextNextGaussian = true;
      return v1 * multiplier;
    };
    random = seed === undef ? Math.random : (new Marsaglia(seed)).nextDouble;
  };

  /* todo */
  function PerlinNoise(seed) {
    var rnd = seed !== undef ? new Marsaglia(seed) : Marsaglia.createRandomized();
    var i, j;
    var perm = new Uint8Array(512);
    for (i = 0; i < 256; ++i) perm[i] = i;
    for (i = 0; i < 256; ++i) {
      var t = perm[j = rnd.nextInt() & 255];
      perm[j] = perm[i];
      perm[i] = t;
    }
    for (i = 0; i < 256; ++i) perm[i + 256] = perm[i];
    
    function grad3d(i, x, y, z) {
      var h = i & 15;
      var u = h < 8 ? x : y,
      v = h < 4 ? y : h === 12 || h === 14 ? x : z;
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }
    
    function grad2d(i, x, y) {
      var v = (i & 1) === 0 ? x : y;
      return (i & 2) === 0 ? -v : v;
    }
    
    function grad1d(i, x) {
      return (i & 1) === 0 ? -x : x;
    }
    function lerp(t, a, b) {
      return a + t * (b - a);
    }
    
    this.noise3d = function(x, y, z) {
      var X = Math.floor(x) & 255,
        Y = Math.floor(y) & 255,
        Z = Math.floor(z) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      z -= Math.floor(z);
      var fx = (3 - 2 * x) * x * x,
        fy = (3 - 2 * y) * y * y,
        fz = (3 - 2 * z) * z * z;
      var p0 = perm[X] + Y,
        p00 = perm[p0] + Z,
        p01 = perm[p0 + 1] + Z,
        p1 = perm[X + 1] + Y,
        p10 = perm[p1] + Z,
        p11 = perm[p1 + 1] + Z;
      return lerp(fz, lerp(fy, lerp(fx, grad3d(perm[p00], x, y, z), grad3d(perm[p10], x - 1, y, z)), lerp(fx, grad3d(perm[p01], x, y - 1, z), grad3d(perm[p11], x - 1, y - 1, z))), lerp(fy, lerp(fx, grad3d(perm[p00 + 1], x, y, z - 1), grad3d(perm[p10 + 1], x - 1, y, z - 1)), lerp(fx, grad3d(perm[p01 + 1], x, y - 1, z - 1), grad3d(perm[p11 + 1], x - 1, y - 1, z - 1))));
    };
    
    this.noise2d = function(x, y) {
      var X = Math.floor(x) & 255,
        Y = Math.floor(y) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      var fx = (3 - 2 * x) * x * x,
        fy = (3 - 2 * y) * y * y;
      var p0 = perm[X] + Y,
        p1 = perm[X + 1] + Y;
      return lerp(fy, lerp(fx, grad2d(perm[p0], x, y), grad2d(perm[p1], x - 1, y)), lerp(fx, grad2d(perm[p0 + 1], x, y - 1), grad2d(perm[p1 + 1], x - 1, y - 1)));
    };
    
    this.noise1d = function(x) {
      var X = Math.floor(x) & 255;
      x -= Math.floor(x);
      var fx = (3 - 2 * x) * x * x;
      return lerp(fx, grad1d(perm[X], x), grad1d(perm[X + 1], x - 1));
    };
  }
  var noiseProfile = {
    generator: undef,
    octaves: 4,
    fallout: 0.5,
    seed: undef
  };

  /**
   * Returns the Perlin noise value at specified coordinates. Perlin noise is a random sequence generator producing a more natural ordered, harmonic succession of numbers compared to the standard random() function. It was invented by Ken Perlin in the 1980s and been used since in graphical applications to produce procedural textures, natural motion, shapes, terrains etc.
   *
   * The main difference to the random() function is that Perlin noise is defined in an infinite n-dimensional space where each pair of coordinates corresponds to a fixed semi-random value (fixed only for the lifespan of the program). The resulting value will always be between 0.0 and 1.0. basil.js can compute 1D, 2D and 3D noise, depending on the number of coordinates given. The noise value can be animated by moving through the noise space. The 2nd and 3rd dimension can also be interpreted as time.
   *
   * The actual noise is structured similar to an audio signal, in respect to the function's use of frequencies. Similar to the concept of harmonics in physics, perlin noise is computed over several octaves which are added together for the final result. 
   *
   * Another way to adjust the character of the resulting sequence is the scale of the input coordinates. As the function works within an infinite space the value of the coordinates doesn't matter as such, only the distance between successive coordinates does (eg. when using noise() within a loop). As a general rule the smaller the difference between coordinates, the smoother the resulting noise sequence will be. Steps of 0.005-0.03 work best for most applications, but this will differ depending on use.
   *
   * @cat Math
   * @subcat Random
   * @method noise
   * @param {Number} x Coordinate in x space
   * @param {Number} [y] Coordinate in y space
   * @param {Number} [z] Coordinate in z space
   * @return {Number} the noise value
   */
  pub.noise = function(x, y, z) {
    if (noiseProfile.generator === undef) noiseProfile.generator = new PerlinNoise(noiseProfile.seed);
    var generator = noiseProfile.generator;
    var effect = 1,
      k = 1,
      sum = 0;
    for (var i = 0; i < noiseProfile.octaves; ++i) {
      effect *= noiseProfile.fallout;
      switch (arguments.length) {
      case 1:
        sum += effect * (1 + generator.noise1d(k * x)) / 2;
        break;
      case 2:
        sum += effect * (1 + generator.noise2d(k * x, k * y)) / 2;
        break;
      case 3:
        sum += effect * (1 + generator.noise3d(k * x, k * y, k * z)) / 2;
        break;
      }
      k *= 2;
    }
    return sum;
  };
  
  /**
   * Adjusts the character and level of detail produced by the Perlin noise function. Similar to harmonics in physics, noise is computed over several octaves. Lower octaves contribute more to the output signal and as such define the overal intensity of the noise, whereas higher octaves create finer grained details in the noise sequence. By default, noise is computed over 4 octaves with each octave contributing exactly half than its predecessor, starting at 50% strength for the 1st octave. This falloff amount can be changed by adding an additional function parameter. Eg. a falloff factor of 0.75 means each octave will now have 75% impact (25% less) of the previous lower octave. Any value between 0.0 and 1.0 is valid, however note that values greater than 0.5 might result in greater than 1.0 values returned by noise().
   *
   * By changing these parameters, the signal created by the noise() function can be adapted to fit very specific needs and characteristics.
   * 
   * @cat Math
   * @subcat Random
   * @method noiseDetail
   * @param {Number} octaves number of octaves to be used by the noise() function
   * @param {Number} fallout falloff factor for each octave
   */
  pub.noiseDetail = function(octaves, fallout) {
    noiseProfile.octaves = octaves;
    if (fallout !== undef) noiseProfile.fallout = fallout;
  };
  
  /** 
   * Sets the seed value for noise(). By default, noise() produces different results each time the program is run. Set the value parameter to a constant to return the same pseudo-random numbers each time the software is run.
   * 
   * @cat Math
   * @subcat Random
   * @method noiseSeed
   * @param {Number} seed 
   */
  pub.noiseSeed = function(seed) {
    noiseProfile.seed = seed;
    noiseProfile.generator = undef;
  };


  // ----------------------------------------
  // Date
  
  /**
   * The year() function returns the current year as an integer (2012, 2013 etc).
   * 
   * @cat Environment
   * @subcat Date
   * @method year
   * @return {Number}
   */
  pub.year = function() {
    return (new Date()).getFullYear()();
  };

  /**
   * The month() function returns the current month as a value from 1 - 12.
   * 
   * @cat Environment
   * @subcat Date
   * @method month
   * @return {Number}
   */
  pub.month = function() {
    return (new Date()).getMonth() + 1;
  };

  /**
   * The day() function returns the current day as a value from 1 - 31.
   * 
   * @cat Environment
   * @subcat Date
   * @method day
   * @return {Number}
   */
  pub.day = function() {
    return (new Date()).getDate();
  };
  
  /**
   * The hour() function returns the current hour as a value from 0 - 23.
   * 
   * @cat Environment
   * @subcat Date
   * @method hour
   * @return {Number}
   */
  pub.hour = function() {
    return (new Date()).getHours();
  };

  /**
   * The minute() function returns the current minute as a value from 0 - 59.
   * 
   * @cat Environment
   * @subcat Date
   * @method minute
   * @return {Number}
   */
  pub.minute = function() {
    return (new Date()).getMinutes();
  };
  
  /**
   * The second() function returns the current second as a value from 0 - 59.
   * 
   * @cat Environment
   * @subcat Date
   * @method second
   * @return {Number}
   */
  pub.second = function() {
    return (new Date()).getSeconds();
  };
  
  /**
   * Returns the number of milliseconds (thousandths of a second) since starting an applet. This information is often used for timing animation sequences.
   * 
   * @cat Environment
   * @subcat Date
   * @method millis
   * @return {Number}
   */
  pub.millis = function() {
    return Date.now() - startTime;
  };

  /**
   * Executes a shell command and returns the result, currently Mac only.
   * 
   * BE CAREFUL!
   * 
   * @cat Data
   * @subcat Input
   * @method shellExecute
   * @param  {String} cmd The shell command to execute
   * @return {String}
   */
  pub.shellExecute = function(cmd) {
    if (Folder.fs === "Macintosh") {
      try {
        return app.doScript("return do shell script item 1 of arguments", ScriptLanguage.applescriptLanguage, [cmd]);
      } catch (e) {
        error("b.shellExecute(): "+e);
      }
    } else {
      error("b.shellExecute() is a Mac only feature at the moment. Sorry!")
    }
  };

  /**
   * Reads the contents of a file or loads an URL into a String.
   * If the file is specified by name as String, it must be located in the document's data directory.
   *
   * @cat Data
   * @subcat Input
   * @method loadString
   * @param  {String|File} fileOrString The text file name in the document's data directory or a File instance or an URL
   * @return {String}  String file or URL content.
   */
  pub.loadString = function(fileOrString) {
    if (isURL(fileOrString)) {
      return getURL(fileOrString);
    } else {
      var inputFile = initDataFile(fileOrString, true),
      data = null;
      inputFile.open('r');
      data = inputFile.read();
      inputFile.close();
      return data;
    }
  };

  var getURL = function(url) {
    if (isURL(url)) {
      if (Folder.fs === "Macintosh") {
        return pub.shellExecute("curl -L '"+url+"'");
      } else {
        error("Loading of strings via an URL is a Mac only feature at the moment. Sorry!")
      }
    } else {
      error("The url "+url+" is not a valid one. Please double check!")
    }
  };

  /**
   * Reads the contents of a file or loads an URL and creates a String array of its individual lines.
   * If the file is specified by name as String, it must be located in the document's data directory.
   *
   * @cat Data
   * @subcat Input
   * @method loadStrings
   * @param  {String|File} file The text file name in the document's data directory or a File instance or an URL
   * @return {String[]}  Array of the individual lines in the given File or URL
   */
  pub.loadStrings = function(file) {
    if (isURL(file)) {
      var result = getURL(file);
      return result.match(/[^\r\n]+/g);
    } else {
      var inputFile = initDataFile(file, true),
      result = [];
      inputFile.open('r');
      while (!inputFile.eof) {
        result.push(inputFile.readln());
      }
      inputFile.close();
      return result;
    }
  };


  // ----------------------------------------
  // Output
  
  /**
   * Prints a message line to the console output in the ExtendScript editor. 
   * 
   * @cat Output
   * @method println
   * @param {String} msg The message to print
   */
  var println = pub.println = function(msg) {
    $.writeln(msg);
    if (progressPanel)
      progressPanel.writeMessage(msg + "\n");
  };

  /**
   * Prints a message to the console output in the ExtendScript editor, but unlike b.println() it doesn't return the carriage to a new line at the end.
   * 
   * @cat Output
   * @method print
   * @param {String} msg The message to print
   */
  pub.print = function(msg) {
    $.write(msg);
    if (progressPanel)
      progressPanel.writeMessage(msg);
  };

  /**
   * Print numerous information about the current environment to the console
   * 
   * @cat Output
   * @method printInfo
   */
  pub.printInfo = function() {

    pub.println("###");
    pub.println("OS: " + $.os);
    pub.println("ExtendScript Build: " + $.build);
    pub.println("ExtendScript Version:" + $.version);                    
    pub.println("Engine: " + $.engineName);         
    pub.println("memCache: " + $.memCache + " bytes");            
    pub.println("###");

  };

  /**
   * Writes an array of strings to a file, one line per string.
   * If the given file exists it gets overridden.
   *
   * @cat Output
   * @method saveStrings
   * @param  {String|File} file The file name or a File instance
   * @param  {String[]} strings The string array to be written
   */
  pub.saveStrings = function(file, strings) {
    var outputFile = initExportFile(file);
    outputFile.open('w');
    forEach(strings, function(s) {
      outputFile.writeln(s);
    });
    outputFile.close();
  };

  /**
   * Writes a string to a file.
   * If the given file exists it gets overridden.
   *
   * @cat Output
   * @method saveString
   * @param  {String|File} file The file name or a File instance
   * @param  {String} string The string to be written
   */
  pub.saveString = function(file, string) {
    var outputFile = initExportFile(file);
    outputFile.open('w');
    outputFile.write(string);
    outputFile.close();
  };

  // TODO: make savePDF and savePNG D.R.Y.
  /**
   * Exports the current document as PDF to the documents folder. Please note, that export options default to the last used export settings.
   *
   * @cat Output
   * @method savePDF
   * @param {String|File} file The file name or a File instance
   * @param {Boolean} [showOptions] Whether to show the export dialog
   */
  pub.savePDF = function(file, showOptions){
    var outputFile = initExportFile(file);
    if (typeof showOptions !== "boolean") showOptions = false;
    currentDoc().exportFile(ExportFormat.PDF_TYPE, outputFile, showOptions);
  };

  /**
   * Exports the current document as PNG (or sequence of PNG files) to the documents folder. Please note, that export options default to the last used export settings.
   *
   * @cat Output
   * @method savePNG
   * @param {String|File} file The file name or a File instance
   * @param {Boolean} [showOptions] Whether to show the export dialog
   */
  pub.savePNG = function(file, showOptions){
    var outputFile = initExportFile(file);
    if (typeof showOptions !== "boolean") showOptions = false;
    currentDoc().exportFile(ExportFormat.PNG_FORMAT, outputFile, showOptions);
  };

  /**
   * Downloads an URL to a file, currently Mac only.
   *
   * @cat Output
   * @method download
   * @param {String} url The download url
   * @param {String|File} [file] A relative file path in the project folder or a File instance
   */
  pub.download = function(url, file){
    var projPath = projectPath().fsName.replace(" ","\\ ");
    var scriptPath = "~/Documents/basiljs/bundle/lib/download.sh";

    if (isURL(url)) {
      var cmd = null;

      if (file) {
        if (file instanceof File) {
          var downloadFolder = file.parent.fsName;
          var fileName = file.displayName;
          downloadFolder = downloadFolder.replace(" ","\\ ");
          fileName = fileName.replace(" ","\\ ");
          cmd = ["sh",scriptPath,downloadFolder,url,fileName].join(" ");

        } else { 
          var downloadFolder = file.substr(0,file.lastIndexOf("/"));
          var fileName = file.substr(file.lastIndexOf("/")+1);

          // get rif of some special cases
          if(startsWith(downloadFolder,"./")) downloadFolder.substr(2);
          if(startsWith(downloadFolder,"/")) downloadFolder.substr(1);

          downloadFolder = downloadFolder.replace(" ","\\ ");
          fileName = fileName.replace(" ","\\ ");
          downloadFolder = projPath + "/"+ downloadFolder;  
          cmd = ["sh",scriptPath,downloadFolder,url,fileName].join(" ");
          
        }

      } else {
        var downloadFolder = projPath + "/data/download";
        var cmd = ["sh",scriptPath,downloadFolder,url].join(" ");
      }

      println(cmd);
      pub.shellExecute(cmd);

    } else {
      error("The url "+url+" is not a valid one. Please double check!")
    }
  };
  
  /**
   * Prints out all properties and values off an object in a recursive manner to the console. Useful for inspecting (or debugging) nested variable. the default value for the recursion is maxlevel = 2.
   *
   * @cat Output
   * @method inspect
   * @param  {Object} obj : the Object to inspect
   * @param  {Number} maxlevel Optional: recursion limit, default maxlevel = 2
   */
  pub.inspect = function(obj, maxlevel, level, propname) {
    if (!level) level = 0;
    if (!maxlevel) maxlevel = 2;
    if (level > maxlevel) return;

    var constructorName = obj.constructor.name;

    var indent = "";
    for (var i = 0; i < level; i++) indent = indent + "\t";

    if (level === 0) {
      println(obj);
    } else {
      if (constructorName === "Boolean" ||
          constructorName === "Number" ||
          constructorName === "String") {
        println(indent+propname+": "+obj);
      }
      else if (constructorName === "Array") {
        println(indent+propname+": "+constructorName+"("+obj.length+")");
      }
      else if (constructorName === "Color") {
        println(indent+propname+": ["+obj.colorValue+"] "+constructorName);
      } 
      else {
        println(indent+propname+": "+constructorName);
      }
    }

    if ( constructorName === 'Array' ) {
      for (var i = 0, len = obj.length; i < len; i++) {
        pub.inspect(obj[i], maxlevel, level+1, i);
      };
    } else if (typeof obj === 'object') {
      try {
        for (var i in obj){
          if (obj.hasOwnProperty(i)) {
            pub.inspect(obj[i], maxlevel, level+1, i);
          }
        }
      }
      catch(e) {
        println(indent+"--> "+propname+" "+e);
      }
    }
  }; 

  // ----------------------------------------
  // Transform
  // geometricBounds hint: [y1, x1, y2, x2]

  var precision = function(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
  };

/**
   * The function calculates the geometric bounds of any given object. Use b.itemX(), b.itemY(), b.itemPosition(), b.itemWidth(), b.itemHeight() and b.itemSize() to modify PageItems.
   * In case the object is any kind of text, then additional typographic information baseline and xHeight are calculated
   *
   * @cat Document
   * @subcat Transformation
   * @method bounds
   * @param  {Text|Object} obj The object to calculate the geometric bounds
   * @return {Object} Geometric bounds object with these properties: width, height, left, right, top, bottom and for text: baseline, xHeight
   */
  pub.bounds = function (obj) {
    var x1,y1,x2,y2,w,h;

    if (isText(obj)) {
      var baseline = obj.baseline;
      var ascent = obj.ascent;
      var descent = obj.descent;

      x1 = obj.horizontalOffset;
      y1 = baseline - ascent;
      x2 = obj.endHorizontalOffset;
      y2 = baseline + descent;
      w = x2-x1;
      h = y2-y1;

      if (w < 0 || h <0) {
        warning("b.bounds(), not possible to get correct bounds, possible line break within textObj");
      }

      // TODO: not sure if this 100% correct, check
      // http://en.wikipedia.org/wiki/File:Typography_Line_Terms.svg
      var xHeight = y1+descent;

      return {'width':w,
              'height':h,
              'left':x1,
              'right':x2,
              'top':y1,
              'bottom':y2,
              'baseline':baseline,
              'xHeight':xHeight };
    } else {
      // is it a pageItem?
      if (obj.hasOwnProperty("geometricBounds")) {
        var geometricBounds = obj.geometricBounds; //[y1, x1, y2, x2]
        x1 = geometricBounds[1];
        y1 = geometricBounds[0];
        x2 = geometricBounds[3];
        y2 = geometricBounds[2];
        w = x2-x1;
        h = y2-y1;
        return {'width':w, 'height':h, 'left':x1, 'right':x2, 'top':y1, 'bottom':y2};
      }
      // everything else e.g. page, spread
      else if (obj.hasOwnProperty("bounds")) {
        var bounds = obj.bounds; //[y1, x1, y2, x2]
        x1 = bounds[1];
        y1 = bounds[0];
        x2 = bounds[3];
        y2 = bounds[2];
        w = x2-x1;
        h = y2-y1;
        return {'width':w, 'height':h, 'left':x1, 'right':x2, 'top':y1, 'bottom':y2};
      }
      // no idea what that might be, give up
      else {
        error("b.bounds(), invalide type of parameter! Can't get bounds for this object.");
      }
    }
  };  

  /**
   * Positions a PageItem at the designated spot on the x axis. If no x argument is given the current x position is returned.
   * 
   * @cat Document
   * @subcat Transformation
   * @method itemX
   * @param {PageItem} pItem The PageItem to alter
   * @param {Number} [x] The new x position
   * @returns {Number} The current x position
   */
  pub.itemX = function(pItem, x) {
    var off = 0;
    if(currRectMode !== b.CORNER) pub.warning("b.itemX(), please note that only b.CORNER positioning is fully supported. Use with care.");
    if( typeof pItem !== 'undef' && pItem.hasOwnProperty("geometricBounds")) {
      if( typeof x === 'number' ){
        var width = pItem.geometricBounds[3] - pItem.geometricBounds[1];
        var height = pItem.geometricBounds[2] - pItem.geometricBounds[0];
//        if(currRectMode === b.CENTER) off = ( pItem.geometricBounds[2] - pItem.geometricBounds[0] ) / 2;
        pItem.geometricBounds = [ pItem.geometricBounds[0] - off, x - off, pItem.geometricBounds[0] + height - off, x - off + width ];
      } else {
//        if(currRectMode === b.CENTER) off = ( pItem.geometricBounds[3] - pItem.geometricBounds[1] ) / 2;
        return precision(pItem.geometricBounds[1], 5) + off; // CS6 sets geometricBounds to initially slightly off values... terrible workaround
      }
    } else {
      error("b.itemX(), pItem has to be a valid PageItem");
    }
  };

  /**
   * Positions a PageItem at the designated spot on the y axis. If no y argument is given the current y position is returned.
   *
   * @cat Document
   * @subcat Transformation
   * @method itemY
   * @param {PageItem} pItem The PageItem to alter
   * @param {Number} [y] The new y position
   * @returns {Number} The current y position
   */
  pub.itemY = function(pItem, y) {
    var off = 0;
    if(currRectMode !== b.CORNER) pub.warning("b.itemY(), please note that only b.CORNER positioning is fully supported. Use with care.");
    if( typeof pItem !== 'undef' && pItem.hasOwnProperty("geometricBounds")) {
      if( typeof y === 'number' ) {
        var width = pItem.geometricBounds[3] - pItem.geometricBounds[1];
        var height = pItem.geometricBounds[2] - pItem.geometricBounds[0];
//        if(currRectMode === b.CENTER) off = ( pItem.geometricBounds[3] - pItem.geometricBounds[1] ) / 2;
        b.itemPosition(pItem, pItem.geometricBounds[1] - off, y);
        pItem.geometricBounds = [ y, pItem.geometricBounds[1] - off, y + height, pItem.geometricBounds[1] + width - off ];
      } else {
//        if(currRectMode === b.CENTER) off = ( pItem.geometricBounds[2] - pItem.geometricBounds[0] ) / 2;
        return precision(pItem.geometricBounds[0], 5) + off;
      }
    } else {
      error("b.itemY(), pItem has to be a valid PageItem");
    }
  };
  
  /**
   * Scales the given PageItem to the given width. If width is not given as argument the current width is returned.
   *
   * @cat Document
   * @subcat Transformation
   * @method itemWidth
   * @param {PageItem} pItem The PageItem to alter
   * @param {Number} [width] The new width
   * @returns {Number} The current width
   */
  pub.itemWidth = function(pItem, width) {
    if(currRectMode !== b.CORNER) pub.warning("b.itemWidth(), please note that only b.CORNER positioning is fully supported. Use with care.");
    if( typeof pItem !== 'undef' && pItem.hasOwnProperty("geometricBounds")) {
      if( typeof width === 'number' ){
        b.itemSize( pItem, width, Math.abs(pItem.geometricBounds[2] - pItem.geometricBounds[0]) );
      } else {
        return Math.abs(pItem.geometricBounds[3] - pItem.geometricBounds[1]);
      }
    } else {
      error("b.itemWidth(), pItem has to be a valid PageItem");
    }
  };

  /**
   * Scales the given PageItem to the given height. If height is not given as argument the current height is returned.
   *
   * @cat Document
   * @subcat Transformation
   * @method itemHeight
   * @param {PageItem} pItem The PageItem to alter
   * @param {Number} [height] The new height
   * @returns {Number} The current height
   */
  pub.itemHeight = function(pItem, height) {
    if(currRectMode !== b.CORNER) pub.warning("b.itemHeight(), please note that only b.CORNER positioning is fully supported. Use with care.");
    if( typeof pItem !== 'undef' && pItem.hasOwnProperty("geometricBounds")) {
      if( typeof height === 'number' ){
        b.itemSize( pItem, Math.abs(pItem.geometricBounds[3] - pItem.geometricBounds[1]), height );
      } else {
        return Math.abs(pItem.geometricBounds[2] - pItem.geometricBounds[0]);
      }
    } else {
      error("b.itemHeight(), pItem has to be a valid PageItem");
    }
  };

  /**
   * Moves the given PageItem to the given position. If x or y is not given as argument the current position is returned.
   *
   * @cat Document
   * @subcat Transformation
   * @method itemPosition
   * @param {PageItem} pItem The PageItem to alter
   * @param {Number} [x] The new x coordinate
   * @param {Number} [y] The new y coordinate
   * @returns {Object} Returns an object with the fields x and y
   */
  pub.itemPosition = function(pItem, x, y) {

    if(currRectMode !== b.CORNER) pub.warning("b.itemPosition(), please note that only b.CORNER positioning is fully supported. Use with care.");

    if ( typeof pItem !== 'undef' && pItem.hasOwnProperty("geometricBounds")) {
    
      if( typeof x === 'number' && typeof y === 'number') {
        var width = pItem.geometricBounds[3] - pItem.geometricBounds[1];
        var height = pItem.geometricBounds[2] - pItem.geometricBounds[0];
        var offX = 0;
        var offY = 0;
        // if(currRectMode === b.CENTER) {
        //   offX = width / 2;
        //   offY = height / 2;
        // }
        pItem.geometricBounds = [ y + offY, x + offX, y + height + offY, x + width + offX];
        
      } else {
        return { x: precision(pItem.geometricBounds[1], 5), y: precision(pItem.geometricBounds[0], 5) };
      }
      
    } else {
      error("b.itemPosition(), works only with child classes of PageItem.");
    }
  };

  /**
   * Scales the given PageItem to the given size. If width or height is not given as argument the current size is returned.
   *
   * @cat Document
   * @subcat Transformation
   * @method itemSize
   * @param {PageItem} pItem The PageItem to alter
   * @param {Number} [width] The new width
   * @param {Number} [height] The new height
   * @returns {Object} Returns an object with the fields width and height
   */
  pub.itemSize = function(pItem, width, height) {
    if(currRectMode !== b.CORNER) pub.warning("b.itemSize(), please note that only b.CORNER positioning is fully supported. Use with care.");
    if (pItem !== null && pItem.hasOwnProperty("geometricBounds")) {
    
      var x = pItem.geometricBounds[1];
      var y = pItem.geometricBounds[0];

      if( typeof width === 'number'  && typeof height === 'number' ) {
        // if(currRectMode === b.CENTER) {
        //   // current center, calc old width and height
        //   x = x + (pItem.geometricBounds[3] - pItem.geometricBounds[1]) / 2;
        //   y = y + (pItem.geometricBounds[2] - pItem.geometricBounds[0]) / 2;
        //   pItem.geometricBounds = [ y - height / 2, x - width / 2, y + height / 2, x + width / 2];
        // } else {
          pItem.geometricBounds = [ y, x, y + height, x + width];
        // }
        
      } else {
        return { width: pItem.geometricBounds[3] - pItem.geometricBounds[1] , height: pItem.geometricBounds[2] - pItem.geometricBounds[0] };
      }
      
    } else {
      error("b.itemSize(), works only with child classes of PageItem.");
    }
  };


  /**
   * Duplicates the given page after the current page or the given pageitem to the current page and layer. Use b.rectMode() to set center point.
   *
   * @cat Document
   * @subcat Transformation
   * @method duplicate
   * @param {PageItem|Page} item The item to duplicate
   * @returns {Object} Returns the new item
   */
  pub.duplicate = function(item){

    if( !(item instanceof Page) && typeof(item) !== "undefined" && item.hasOwnProperty("duplicate") ) {

      var newItem = item.duplicate(currentPage());
      newItem.move(currentLayer());
      
      if (currRectMode === pub.CENTER) {
        newItem.transform(CoordinateSpaces.PASTEBOARD_COORDINATES,
                         AnchorPoint.CENTER_ANCHOR,
                         currMatrix.adobeMatrix() );
      } else {
        newItem.transform(CoordinateSpaces.PASTEBOARD_COORDINATES,
                       AnchorPoint.TOP_LEFT_ANCHOR,
                       currMatrix.adobeMatrix() );
      }

      return newItem;

    } else if(item instanceof Page) {

      var newPage = item.duplicate(LocationOptions.AFTER, pub.page());
      return newPage;

    } else {
      error("Please provide a valid Page or PageItem as parameter for duplicate().");
    }

  }
  