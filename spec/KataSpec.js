describe('Kata', function() {    

    beforeEach(function() {        
    });

    it('should be able to test', function() {
      expect(true).toBeTruthy();
    });

    describe ('sum', function(){
        it('sum(3,0) should return 3', function() {
            expect(sum(3,0)).toEqual('3','sum(3,0) should return 3.');
        });

        it('sum(0,3) should return 3', function() {
            expect(sum(0,3)).toEqual('3','sum(0,3) should return 3.');
        });
    });

    describe ('mult', function(){          
        it('mult(0,3) should return 0', function() {
          expect(mult(0,3)).toEqual('0','mult(0,3) should return 0.');
        });

        it('mult(2,0) should return 0', function() {
          expect(mult(2,0)).toEqual('0','mult(2,0) should return 0.');
        });

        it('mult(2,3) should return 6', function() {
          expect(mult(2,3)).toEqual('6','mult(2,3) should return 6.');
        });        

        it('mult(3,12) should return 36', function() {
          expect(mult(3,12)).toEqual('36','mult(3,12) should return 36.');
        });

        it('mult(3,19) should return 57', function() {
          expect(mult(3,19)).toEqual('57','mult(3,19) should return 57.');
        });

        it('mult(3,890) should return 2670', function() {
          expect(mult(3,890)).toEqual('2670','mult(3,890) should return 2670.');
        });

        it('mult(3,9999) should return 29997', function() {
          expect(mult(3,9999)).toEqual('29997','mult(3,9999) should return 29997.');
        });

        it('mult(12,3) should return 36', function() {
          expect(mult(12,3)).toEqual('36','mult(12,3) should return 36.');
        });
    });

    describe ('factorial of', function(){
        it('non integer values should be null', function() {
          expect(factorial('a')).toEqual(null,'Non integer factorials should be null.');
        });

        it('-1 should be null', function() {
          expect(factorial(-1)).toEqual(null,'-1! should be null.');
        });

        it('0 should be 1', function() {
          expect(factorial(0)).toEqual('1','0! should be 1.');
        });

        it('1 should be 1', function() {
          expect(factorial(1)).toEqual('1','1! should be 1.');
        });

        it('2 should be 2', function() {
          expect(factorial(2)).toEqual('2','2! should be 2.');
        });

        it('5 should be 120', function() {
          expect(factorial(5)).toEqual('120','5! should be 120.');
        }); 

        it('9 should be 362880', function() {
          expect(factorial(9)).toEqual('362880','9! should be 362880.');
        });

        it('11 should be 3991680', function() {
          expect(factorial(11)).toEqual('3991680','11! should be 3991680.');
        });
    });
});