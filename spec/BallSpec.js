describe("A Ball", function(){
    it("should have a default position", function(){
	var ball = new Ball();

	expect(ball.get("position").x).toBe(0);
	expect(ball.get("position").y).toBe(0);
    });
});