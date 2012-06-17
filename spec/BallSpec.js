describe("A Ball", function(){
    var ball;

    beforeEach(function(){
	ball = new Ball();
    });
    
    it("should have a default position", function(){
	expect(ball).toBeAt({ x : 0, y : 0 });
    });

    it("should have a default velocity", function(){
	expect(ball.get("velocity").vx).toBe(1);
	expect(ball.get("velocity").vy).toBe(1);
    });
});