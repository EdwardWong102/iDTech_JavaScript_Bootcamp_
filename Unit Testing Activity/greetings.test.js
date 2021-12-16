import greet from './greetings.js'

describe('test greet()', function () {
    it('should be called', function () {
        expect(greet("Elizabeth")).toEqual("Hello, Elizabeth");
    });
    it('should be called', function () {
        expect(greet(null)).toEqual("Hello, there");
    });
    it('should be called', function () {
        expect(greet("JOSE")).toEqual("HELLO, JOSE");
    });
    it('should be called', function () {
        expect(greet(['Jose', 'Pep'])).toEqual("Hello, Jose, Pep");
    });
    it('should be called', function () {
        expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toEqual("Hello, Alex, Arsene, Jose, Zidane");
    });
}

);