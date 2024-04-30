
let request = require("request");
let url = 'http://localhost:3000/api/coins';
let coin = {path:'',title:''}

import('chai').then(chai => {
    const expect = chai.expect;
    describe('GET /api/coins', function() {
    
        it('should return an array of coins', function(done) {        
            request.get(url, function(error, response, body) {            
                console.log(arguments);            
                expect(response.statusCode).to.equal(200)            
                let responseObject = JSON.parse(body);
                expect(responseObject.data).to.be.a('array');
                done();
            });
        });
    });

    describe('POST /api/coins', function() {    
        it('should insert a new coin', function(done){        
            request.post({ url, form: coin }, function(error, response, body) {            
                console.log(arguments);             
                expect(response.statusCode).to.equal(201);             
                done();        
            });    
        });
    });
});
