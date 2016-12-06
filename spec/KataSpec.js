describe('Kata', function() {    

    beforeEach(function() {        
    });

    it('should be able to test', function() {
      expect(true).toBeTruthy();
    });

    describe ('sum', function(){
        it('of 3 and 0 should return 3', function() {
            expect(sum('3','0')).toEqual('3','sum(3,0) should return 3.');
        });

        it('of 0 and 3 should return 3', function() {
            expect(sum('0','3')).toEqual('3','sum(0,3) should return 3.');
        });

        it('of 2 and 3  should return 5', function() {
            expect(sum('2','3')).toEqual('5','sum(2,3) should return 5.');
        });

        it('of 20 and 3 should return 23', function() {
            expect(sum('20','3')).toEqual('23','sum(20,3) should return 23.');
        });

        it('of 20 and 310 should return 330', function() {
            expect(sum('20','310')).toEqual('330','sum(20,310) should return 330.');
        });

        it('of 36543 and 692 should return 37235', function() {
            expect(sum('36543','692')).toEqual('37235','sum(36543,693) should return 37235.');
        });
    });

    describe ('mult', function(){          
        it('of 0 and 3 should return 0', function() {
          expect(mult('0','3')).toEqual('0','mult(0,3) should return 0.');
        });

        it('of 2 and 0 should return 0', function() {
          expect(mult('2','0')).toEqual('0','mult(2,0) should return 0.');
        });

        it('of 2 and 3 should return 6', function() {
          expect(mult('2','3')).toEqual('6','mult(2,3) should return 6.');
        });        

        it('of 3 and 12 should return 36', function() {
          expect(mult('3','12')).toEqual('36','mult(3,12) should return 36.');
        });

        it('of 3 and 19 should return 57', function() {
          expect(mult('3','19')).toEqual('57','mult(3,19) should return 57.');
        });

        it('of 3 and 890 should return 2670', function() {
          expect(mult('3','890')).toEqual('2670','mult(3,890) should return 2670.');
        });

        it('of 3 and 9999 should return 29997', function() {
          expect(mult('3','9999')).toEqual('29997','mult(3,9999) should return 29997.');
        });

        it('of 12 and 3 should return 36', function() {
          expect(mult('12','3')).toEqual('36','mult(12,3) should return 36.');
        });

        it('of 12 and 3 should return 36', function() {
          expect(mult('12','3')).toEqual('36','mult(12,3) should return 36.');
        });

        it('of 25 and 15511210043330985984000000 should return 15511210043330985984000000', function() {
          expect(mult('25','15511210043330985984000000')).toEqual('15511210043330985984000000',
              'mult(25,15511210043330985984000000) should return 15511210043330985984000000.');
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

        it('11 should be 39916800', function() {
          expect(factorial(11)).toEqual('39916800','11! should be 39916800.');
        });

        it('15 should be 1307674368000', function() {
          expect(factorial(15)).toEqual('1307674368000','15! should be 1307674368000.');
        });

        it('15 should be 1307674368000', function() {
          expect(factorial(15)).toEqual('1307674368000','15! should be 1307674368000.');
        });

        it('20 should be 2432902008176640000', function() {
          expect(factorial(20)).toEqual('2432902008176640000','20! should be 2432902008176640000.');
        });

        it('25 should be 15511210043330985984000000', function() {
          expect(factorial(25)).toEqual('15511210043330985984000000','25! should be 15511210043330985984000000.');
        });

        

    });
});