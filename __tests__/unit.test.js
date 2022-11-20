// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Test correct phone number #1', () => {
    expect(functions.isPhoneNumber('(878)-123-8930')).toBe(true);
});

test('Test correct phone number #2', () => {
    expect(functions.isPhoneNumber('626-234-8960')).toBe(true);
});

test('Test incorrect phone number #1', () => {
    expect(functions.isPhoneNumber('1234')).toBe(false);
});

test('Test incorrect phone number #2', () => {
    expect(functions.isPhoneNumber('ab')).toBe(false);
});



test('Test correct email #1', () => {
    expect(functions.isEmail('nsusabda@ucsd.edu')).toBe(true);
});

test('Test correct email #2', () => {
    expect(functions.isEmail('elonmusk@gmail.com')).toBe(true);
});

test('Test incorrect email #1', () => {
    expect(functions.isEmail('kasey')).toBe(false);
});

test('Test incorrect email #2', () => {
    expect(functions.isEmail(')9fu:o0')).toBe(false);
});



test('Test correct password #1', () => {
    expect(functions.isStrongPassword('wakwaw_789')).toBe(true);
});

test('Test correct password #2', () => {
    expect(functions.isStrongPassword('mamamia_8394')).toBe(true);
});

test('Test incorrect password #1', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

test('Test incorrect password #2', () => {
    expect(functions.isStrongPassword('456')).toBe(false);
});



test('Test correct date #1', () => {
    expect(functions.isDate('28/07/2001')).toBe(true);
});

test('Test correct date #2', () => {
    expect(functions.isDate('12/07/2002')).toBe(true);
});

test('Test incorrect date #1', () => {
    expect(functions.isDate('98/2000/abc')).toBe(false);
});

test('Test incorrect date #2', () => {
    expect(functions.isDate('wiki')).toBe(false);
});



test('Test correct hex #1', () => {
    expect(functions.isHexColor('#FFCE30')).toBe(true);
});

test('Test correct hex #2', () => {
    expect(functions.isHexColor('#E83845')).toBe(true);
});

test('Test incorrect hex #1', () => {
    expect(functions.isHexColor('#wikwikwikwik')).toBe(false);
});

test('Test incorrect hex #2', () => {
    expect(functions.isHexColor('#-2-2-')).toBe(false);
});