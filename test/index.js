var assert = require('assert'),
    testHelpers = require('../index.js');

describe('helpers', function() {
    describe('assertPresenceOfFields', function() {
        var a = [{testField: 1}, {testField: 2}];
        it('should not fail when fields are present', function() {
            testHelpers.assertPresenceOfFields(['testField'], a);
        });
        it('should fail when fields are not present', function() {
            try {
                testHelpers.assertPresenceOfFields(['asdf'], a);
            } catch (err) {
                return;
            }
            throw new Exception("Did not fail");
        });
    });

    describe('assertTypesOfFields', function() {
        var a = [{testField: 1}, {testField: 2}];
        it('should not fail when fields are present', function() {
            testHelpers.assertTypesOfFields({'testField': Number}, a);
        });
        it('should fail when fields are not present', function() {
            try {
                testHelpers.assertTypesOfFields({'asdf': Number}, a);
            } catch (err) {
                return;
            }
            throw new Exception("Did not fail");
        });
        it('should fail when fields are of the wrong type', function() {
            try {
                testHelpers.assertTypesOfFields({'testField': String}, a);
            } catch (err) {
                return;
            }
            throw new Exception("Did not fail");
        });
    });
});

