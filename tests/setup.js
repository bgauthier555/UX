const UX = require('../build/UX.js');

console.log('SETUP JEST');
console.log("------------------------------------------------------");

UX.initialize({
    activeLibrary : 'Bootstrap_4',
    missingFeature: UX.MISSING_FEATURE_IGNORE,
    debug: true,
});