import {initialize, Input, Page} from "../src";


test('add one item to Page', () => {

    initialize({
        activeLibrary : 'Bootstrap_4',
        debug : true,
    });

    let item = new Input('test');

    expect(Object.keys(window.UX.Page.items).length).toBe(1);

});

test('remove item from page', () => {

    window.UX = {};
    window.UX.Page = new Page();
    window.UX.activeLibrary = 'Bootstrap_4';

    let item = new Input('test');

    window.UX.Page.removeItem('test');

    expect(Object.keys(window.UX.Page.items).length).toBe(0);

});

test('find page item', () => {

    initialize({
        activeLibrary : 'Bootstrap_4',
        debug : true,
    });

    let item = new Input('test');

    expect(UX.Page.findItem('test')).toBe(item);

});

test('setLibrary / getLibrary', () => {

    initialize({
        activeLibrary : 'Bootstrap_4',
        debug : true,
    });

    expect(UX.Page.getLibrary()).toBe('Bootstrap_4');

});

test('prevent double page init', () => {

    window.UX = {};
    window.UX.Page = new PageItem();
    window.UX.Page.setLibrary('Bootstrap_4');

    expect(window.UX.Page.init()).toBe(true);
    expect(window.UX.Page.init()).toBe(false);

});