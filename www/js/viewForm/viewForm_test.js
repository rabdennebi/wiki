describe('App.viewMain', function(){

	beforeEach(function(){
		angular.mock.module('App.viewMain')
		angular.mock.inject(function(_balance_){
			balance = _balance_
		})
	})
	describe('viewMain factory', function () {
		describe('Sucess', function () {
				it('should return 1', function(){
					var arr = [2,1,1,1,1,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('The heaviest ball is number 1. This result was found in 3 iterations.');
				})
				it('should return 2', function(){
				var arr = [1,2,1,1,1,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('The heaviest ball is number 2. This result was found in 3 iterations.');
				})
				it('should return 3', function(){
					var arr = [1,1,2,1,1,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('The heaviest ball is number 3. This result was found in 3 iterations.');
				})
				it('should return 4', function(){
					var arr = [1,1,1,2,1,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('The heaviest ball is number 4. This result was found in 3 iterations.');
				})
				it('should return 5', function(){
					var arr = [1,1,1,1,2,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('The heaviest ball is number 5. This result was found in 3 iterations.');
				})
				it('should return 6', function(){
					var arr = [1,1,1,1,1,2,1,1];
					expect(balance.testBoule(arr)).to.be.eql('The heaviest ball is number 6. This result was found in 3 iterations.');
				})
				it('should return 7', function(){
					var arr = [1,1,1,1,1,1,2,1];
					expect(balance.testBoule(arr)).to.be.eql('The heaviest ball is number 7. This result was found in 3 iterations.');
				})
				it('should return 8', function(){
					var arr = [1,1,1,1,1,1,1,2];
					expect(balance.testBoule(arr)).to.be.eql('The heaviest ball is number 8. This result was found in 3 iterations.');
				})
		});
		describe('Error', function () {

				it('should return 0', function(){
					var arr = [1,1,1,1,1,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('There is no heavy ball. This result was found in 1 iterations.');
				})
				it('should return more ball', function(){
					var arr = [1,1,1,1,1,1,1,2,1];
					expect(balance.testBoule(arr)).to.be.eql('There is too much or not enough ball.');
				})
		});
	});
	describe('viewMain controller', function () {

	});
});
