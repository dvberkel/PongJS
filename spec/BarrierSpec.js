describe("A Wall", function(){
    it("should bounce back balls from the left", function(){
	var ball = new Pong.Ball({ position : { x : 0, y : 0}, velocity : { vx : 1, vy : 0 } });
	var wall = new Pong.Wall({ x : 2 });
	wall.observe(ball);

	ball.update();
	ball.update();

	expect(ball).toHaveVelocity({ vx : -1, vy : 0 });
    });

    it("should bounce back balls from the right", function(){
	var ball = new Pong.Ball({ position : { x : 2, y : 0}, velocity : { vx : -1, vy : 0 } });
	var wall = new Pong.Wall({ x : 0 });
	wall.observe(ball);

	ball.update();
	ball.update();

	expect(ball).toHaveVelocity({ vx : 1, vy : 0 });
    });

    it("should bounce back high velocity balls from the left", function(){
	var ball = new Pong.Ball({ position : { x : 0, y : 0}, velocity : { vx : 3, vy : 0 } });
	var wall = new Pong.Wall({ x : 4 });
	wall.observe(ball);
	
	ball.update();

	expect(ball).toHaveVelocity({ vx : -3, vy : 0 });
    });

    it("should bounce back high velocity balls from the right", function(){
	var ball = new Pong.Ball({ position : { x : 4, y : 0}, velocity : { vx : -3, vy : 0 } });
	var wall = new Pong.Wall({ x : 0 });
	wall.observe(ball);
	
	ball.update();

	expect(ball).toHaveVelocity({ vx : 3, vy : 0 });
    });
});

describe("A Ceiling", function(){
    it("should bounce back balls from below", function(){
	var ball = new Pong.Ball({ position : { x : 0, y : 0}, velocity : { vx : 0, vy : 1 } });
	var ceiling = new Pong.Ceiling({ y : 2 });
	ceiling.observe(ball);

	ball.update();
	ball.update();

	expect(ball).toHaveVelocity({ vx : 0, vy : -1 });
    });

    it("should bounce back balls from above", function(){
	var ball = new Pong.Ball({ position : { x : 0, y : 2}, velocity : { vx : 0, vy : -1 } });
	var ceiling = new Pong.Ceiling({ y : 0 });
	ceiling.observe(ball);

	ball.update();
	ball.update();

	expect(ball).toHaveVelocity({ vx : 0, vy : 1 });
    });

    it("should bounce back high velocity balls from below", function(){
	var ball = new Pong.Ball({ position : { x : 0, y : 0}, velocity : { vx : 0, vy : 3 } });
	var ceiling = new Pong.Ceiling({ y : 4 });
	ceiling.observe(ball);

	ball.update();

	expect(ball).toHaveVelocity({ vx : 0, vy : -3 });
    });


    it("should bounce back high velocity balls from above", function(){
	var ball = new Pong.Ball({ position : { x : 0, y : 4}, velocity : { vx : 0, vy : -3 } });
	var ceiling = new Pong.Ceiling({ y : 0 });
	ceiling.observe(ball);

	ball.update();

	expect(ball).toHaveVelocity({ vx : 0, vy : 3 });
    });
});