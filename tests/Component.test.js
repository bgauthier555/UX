console.log('Component.test.js')
console.log('============================================');

var expect = chai.expect;
var assert = chai.assert;

describe("UX", () => {

    for(var c in UX.components) {

        console.log(c.toString() + ' component');

        var componentClass = UX.components[c.toString()];

        describe('Component => ' + c.toString(), () => {

            it ('Instance should be of class ' + c.toString(), () => {

                console.log(componentClass);
                var instanceTest = new componentClass('test');

                expect(Object.getPrototypeOf(instanceTest).constructor.name.toString()).to.be.eq(c.toString());

            });

            /**
             * Merge events from common and selected component
             */
            var allEvents = null;

            if (UX.ComponentProperties[c.toString()] != undefined && UX.ComponentProperties[c.toString()].events != undefined) {

                allEvents = {
                    ...UX.ComponentProperties.CommonEvents,
                    ...UX.ComponentProperties[c.toString()].events
                };

            } else {
                allEvents = UX.ComponentProperties.CommonEvents;
            }

            

            for (var e in allEvents) {

                var ev = allEvents[e];

                describe(c.toString() + ' Event => ' + ev.label, (ev) => {


                    var _event = ev.accessor;

                    it(_event.toString() + ' trigger should fire the event', () => {

                        var instanceEvent = new componentClass('test');
                        window._eventTriggered = false;

                        instanceEvent.on(_event, function() {
                            window._eventTriggered = true;
                        });

                        // Trigger the event
                        instanceEvent.trigger(_event);

                        expect(window._eventTriggered).to.be.eq(true);


                    });

                });

            }
            // End event tests

            var allProperties = null;

            if (UX.ComponentProperties[c.toString()] != undefined && UX.ComponentProperties[c.toString()].properties != undefined) {

                allProperties = {
                    ...UX.ComponentProperties.Common,
                    ...UX.ComponentProperties[c.toString()].properties
                };

            } else {
                allProperties = UX.ComponentProperties.Common;
            }


            // Start attribute tests
            for (var p in allProperties) {

                var prop = allProperties[p];

                describe(c.toString() + ' Attribute => ' + prop.label, () => {

                    var _get = 'get' + prop.accessor;
                    var _set = 'set' + prop.accessor;
                    var _type =  prop.type;
                    var _isMap = (prop.isMap == undefined ? false : prop.isMap);
                    var _attributeValue = (prop.attributeValue == undefined ? true : prop.attributeValue);
                    var instance = new UX.components[c]('test');
                    var testValue;

                    it(_get + ' should be defined', () => {
                        expect(instance[_get]).to.not.be.undefined;
                    });

                    it(_set + ' should be defined', () => {
                        expect(instance[_set]).to.not.be.undefined;
                    });

                    it(prop.label + ' set value should set property value', () => {

                        var expectedResult = null;
                        if (_type == 'boolean') {
                            testValue = true;
                            expectedResult = testValue.toString();
                        } else  if (_type == 'array') {
                            testValue = {
                                'val1' : 'val1',
                                'val2' : 'val2'
                            };
                            expectedResult = testValue;
                            //expectedResult = Object.keys(testValue).join(',');
                        } else {
                            testValue = '__testValue__';
                            expectedResult = testValue.toString();
                        }

                        instance[_set](testValue);

                        if (_type == 'boolean') {
                            expect(instance[_get]().toString()).to.be.eq(expectedResult);
                        } else  if (_type == 'array') {
                            expect(instance[_get]()).to.be.eq(expectedResult);
                        } else {
                            expect(instance[_get]().toString()).to.be.eq(expectedResult);
                        }



                    });

                    var attributeName = p.toString();

                    it (prop.label + ' should render attribute ' + attributeName + ' in html', () => {

                        var expectedResult = null;

                        instance = new UX[c]('test');
                        if (_type == 'boolean') {
                            testValue = true;
                            expectedResult = testValue.toString();
                        } else  if (_type == 'array') {
                            testValue = {
                                'val1' : 'val1',
                                'val2' : 'val2'
                            };
                            if (_isMap) {
                                expectedResult = 'val1:val1;val2:val2;';
                            } else {
                                expectedResult = Object.keys(testValue).join(' ');
                            }
                        } else {
                            testValue = '__testValue__';
                            expectedResult = testValue.toString();
                        }

                        instance[_set](testValue);

                        var sHtml = instance.render();
                        var sAttributeValue = $(sHtml).attr(attributeName).toString();
                        var bHasAttribute = ($(sHtml).attr(attributeName) !== undefined);

                        if (_type == 'boolean') {
                            if (!_attributeValue) {
                                // Attribute does not have a value, cehck if attribute exists
                                assert(bHasAttribute, 'Attribute value is not rendered [' + sHtml + '] [Has Attribute = ' + bHasAttribute.toString() + ']');
                            } else {
                                assert(sAttributeValue == expectedResult, 'Attribute value is not rendered [' + sHtml + '] [' + testValue + '] != [' + sAttributeValue + ']');
                            }

                        } else  if (_type == 'array') {
                            expect(sAttributeValue).to.include(expectedResult);
                        } else {
                            assert(sAttributeValue == expectedResult, 'Attribute value is not rendered [' + sHtml + '] [' + testValue + '] != [' + sAttributeValue + ']');
                        }


                    });

                });

            }

        });


    }

});


