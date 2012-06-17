describe("A Ball", function(){
    it("should have a default position", function(){
	var ball = new Ball();

	expect(ball).toBeAt({ x : 0, y : 0 });
    });

    it("should have a default velocity", function(){
	var ball = new Ball();
	
	expect(ball.get("velocity").vx).toBe(1);
	expect(ball.get("velocity").vy).toBe(1);
    });
});