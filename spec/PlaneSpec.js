describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should return false on initialise", function() {
    expect(plane.isFlying()).toEqual(false);
  });

  it("should change the status of the plane to true on takeoff", function() {
    plane.takeOff();
    expect(plane.isFlying()).toEqual(true);
  });

  it("should change the status of the plane to false on land", function() {
    plane.land();
    expect(plane.isFlying()).toEqual(false);
  });

  it("should raise an error if plane already landed", function() {
    expect(function() {
      plane.land();
      plane.land();
    }).toThrowError("plane already landed")
  });

  it("should raise an error if plane already in the air", function() {
    expect(function() {
      this.is_flying = true
      plane.takeOff();
    }).toThrowError("plane already taken off")
  });
});
