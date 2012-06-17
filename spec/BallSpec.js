describe("A Ball", function(){
    it("should have a default position", function(){
	var ball = new Ball();

	expect(ball).toBeAt({ x : 0, y : 0 });
    });
});