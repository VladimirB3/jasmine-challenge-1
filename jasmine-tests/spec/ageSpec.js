describe("whatCanIDrink", function() {

    describe("Age input", function(){
        it("should return >0", function() {
            expect(whatCanIDrink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});