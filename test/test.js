const Range = require('../src/range.js');
const assert = require('assert');
describe('Range', () => {
    describe('Constructor', () => {
        it('should create number range', () => {
            let min = 1;
            let max = 10;
            let range = new Range(min, max);
            assert.equal(min, range.min);
            assert.equal(max, range.max);
            assert.equal(typeof min, typeof range.min);
            assert.equal(typeof max, typeof range.max);
        });

        it('should create char range', () => {
            let min = 'A';
            let max = 'Z';
            let range = new Range(min, max);
            assert.equal(min, range.min);
            assert.equal(max, range.max);
            assert.equal(typeof min, typeof range.min);
            assert.equal(typeof max, typeof range.max);
        });

        it('should throw an error', () => {
            let min = 'Z';
            let max = 'A';
            try {
                let range = new Range(min, max);
                assert.ok(false);
            } catch (e) {
                assert.ok(true);
            }
        });

        it('should throw an error', () => {
            let min = 10;
            let max = 1;
            try {
                let range = new Range(min, max);
                assert.ok(false);
            } catch (e) {
                assert.ok(true);
            }
        });

        it('should throw an error', () => {
            let min = 1;
            let max = 'A';
            try {
                let range = new Range(min, max);
                assert.ok(false);
            } catch (e) {
                assert.ok(true);
            }
        });
        it('should throw an error', () => {
            let min = 1;
            try {
                let range = new Range(min);
                assert.ok(false);
            } catch (e) {
                assert.ok(true);
            }
        });
    });

    describe('#isEqual(other)', () => {
        it('should be equal', () => {
            let range1 = new Range(-10, 10);
            let range2 = new Range(-10, 10);
            assert.ok(range1.isEqual(range2));
        })
        it('should not be equal', () => {
            let range1 = new Range(-10, 10);
            let range2 = new Range(0, 10);
            assert.ok(!range1.isEqual(range2));
        })
    });

    describe('#includes(value)', () => {
        it('should include value', () => {
            let range1 = new Range(1, 10);
            let range2 = new Range(-100, 100);
            let range3 = new Range('A', 'Z');
            let range4 = new Range('e', 'h');

            assert.ok(range1.includes(5));
            assert.ok(range1.includes(10));
            assert.ok(range1.includes(1));
            assert.ok(!range1.includes(0));
            assert.ok(!range1.includes(11));
            assert.ok(range2.includes(0));
            assert.ok(range3.includes('H'));
            assert.ok(!range3.includes('h'));
            assert.ok(range4.includes('f'));
            assert.ok(!range4.includes(5));
            assert.ok(!range4.includes('F'));
            assert.ok(!range4.includes('a'));
            assert.ok(!range4.includes('z'));
        });
    });

    describe('#toString()', () => {
        it('should return string', () => {
            let range1 = new Range(1, 10);
            let range2 = new Range('a', 'z');
            assert.equal(typeof range1.toString(), 'string');
            assert.equal(typeof range2.toString(), 'string');
            assert.equal(range1.toString(), '[1..10]');
            assert.equal(range2.toString(), '[a..z]');
        })
    })

    describe('#toArray()', () => {
        it('should return array', () => {
            let range1 = new Range(0, 10);
            let range2 = new Range('A', 'Z');
            let array1 = range1.toArray();
            let array2 = range2.toArray();
            assert.ok(typeof array1 === 'object' && typeof array2 === 'object');
            assert.ok(array1.length === 11 && array2.length === 26);
            assert.ok(array1[0] === range1.min && array1[array1.length - 1] === range1.max);
            assert.ok(array2[0] === range2.min && array2[array2.length - 1] === range2.max);
        });
    });

    describe('#forEach', () => {
        it('should work', () => {
            let range = new Range(0, 10);
            let array = range.toArray();
            let returnValue = range.forEach((value, index, self) => {
                assert.equal(typeof index, 'number');
                assert.equal(typeof value, typeof range.min);
                assert.equal(value, array[index]);
                assert.ok(self.isEqual(range));
            });
            assert.ok(returnValue.isEqual(range));
        });
    });

    describe('#size()', () => {
        it('should return range size', () => {
            let range1 = new Range(0, 10);
            let range2 = new Range('A', 'Z');
            let range3 = new Range('h', 'n');
            assert.equal(range1.size(), 11);
            assert.equal(range2.size(), 26);
            assert.equal(range3.size(), 7);
        });
    });

    describe('#getClass()', () => {
        it('should return class name', () => {
            let range = new Range(0, 5);
            assert.equal(range.getClass(), 'Range');
        })
    })
});