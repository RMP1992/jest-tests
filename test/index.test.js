const index = require('../index');


describe('testing all increase functions and doing what they are meant to', () =>{
    test('should see pace increase by 1 after function call', () =>{
        expect(index.abrar.pace).toBe(97)
        index.abrar.increasePace();//called the function..
        //changes Abrar's pace from 97 to 98
        expect(index.abrar.pace).toBe(98); //now 98
        index.abrar.pace = 97;
    });
    test('should see passing increase by 1 after function call', () =>{
        expect(index.abrar.passing).toBe(4)
        index.abrar.increasePassing();//called the function..
        //changes Abrar's pace from 97 to 98
        expect(index.abrar.passing).toBe(5); //now 98
        index.abrar.passing = 4;
    });
    test('should see shooting increase by 1 after function call', () =>{
        expect(index.abrar.shooting).toBe(95)
        index.abrar.increaseShooting();//called the function..
        //changes Abrar's pace from 97 to 98
        expect(index.abrar.shooting).toBe(96); //now 98
        index.abrar.shooting = 95;
    });
});
describe('testing all decrease functions and doing what they are meant to', () =>{
    test('should see pace decrease by 1 after function call', () =>{
        index.abrar.decreasePace();
        expect(index.abrar.pace).toBe(96);
    });
    test('should see passing decrease by 1 after function call', () =>{
        index.abrar.decreasePassing();
        expect(index.abrar.passing).toBe(3);
    });
    test('should see shooting decrease by 1 after function call', () =>{
        index.abrar.decreaseShooting();
        expect(index.abrar.shooting).toBe(94);
    });
});
