const app = require('../app'); //'app' is global, '../app' is local
//with testing we are trying to make assertions
//npm i jest --save-dev
//on the package.json change test script to 'jest'
//npm test


describe('all of my tests in this test', () =>{
    test('should should show that num1 and num2 equal 8 when 5 and 3 are passed',
    () =>{
        //comment here
        expect(app.add(5, 3)).toBe(8)
    })
    test('myArray should contain Dean', () =>{
        // expect(app.myArray).not.toContain('Dea')
        expect(app.myArray).toContain("Dean");
        //a test should contain only one thing
    });
    test('userinput should equal 1234', () =>{
        app.userInput = 1234;
        expect(app.userInput).toBe(1234)
    });
    
})
test('should reduce the userBalance by the requested amount', () =>{
    expect(app.withdrawFunction(10)).toBe(990)
});
test('booleanValue should return true', () =>{
    expect(app.booleanValue).toBeTruthy();
    app.booleanValue = false;
    expect(app.booleanValue).toBeFalsy();
})
