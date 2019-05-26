import {Alert, Page} from "../src";
import { initialize } from "../src";

test('Bootstrap 4 - Test alert component HTML', () => {

    const $ = require('../demo/libs/jQuery');

    initialize({
        activeLibrary : 'Bootstrap_4',
        debug : true,
    });

    let item = new window.UX.Alert('test');
    item.setLabel("This is a test 123");


    let sHtml = item.render();
    window.UX.log(sHtml);

    let htmlElement = $(sHtml);

    expect($(htmlElement).hasClass('alert')).toBe(true);
    expect($(htmlElement).hasClass('alert-primary')).toBe(true);
    expect($(htmlElement).attr('role')).toBe('alert');
    expect($(htmlElement).attr('id')).toBe('test');
    expect($(htmlElement).attr('name')).toBe('test');
    expect($(htmlElement).html()).toBe('This is a test 123');

});


test('Bootstrap 4 - Test alert title', () => {

    const $ = require('../demo/libs/jQuery');

    initialize({
        activeLibrary : 'Bootstrap_4',
        debug : true,
    });

    let item = new Alert('test');
    item.setLabel("This is a test 123");
    item.setTitle("Title");


    let sHtml = item.render();
    window.UX.log(sHtml);

    let htmlElement = $(sHtml);

    expect($(htmlElement).find('h4.alert-heading').length).toBe(1);

});

test('Bootstrap 4 - Test alert dismissible', () => {

    const $ = require('../demo/libs/jQuery');

    initialize({
        activeLibrary : 'Bootstrap_4',
        debug : true,
    });

    console.log(Object.keys(window.UX.libraries['Bootstrap_4']));

    let item = new Alert('test');
    item.setIsDismissable(true);


    let sHtml = item.render();
    window.UX.log(sHtml);

    let htmlElement = $(sHtml);

    expect($(htmlElement).find('button.close').length).toBe(1);

});