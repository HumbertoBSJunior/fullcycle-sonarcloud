const main = require('./main');

test('UpperCase hello world', () => {
    expect(main("hello world")).toBe("HELLO WORLD");
});
