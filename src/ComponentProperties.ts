/**
 *
 */
class ComponentProperties {

    [key: string]: any;

    /**
     * Abbr custom properties and events
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
     */
    static Abbr : any = {
        properties : {},
        events : {},
    };

    /**
     *
     */
    static Address : any = {
        properties : {

        },
        events : {

        }
    };

    /**
     * Bootstrap alert custom properties and events
     */
    static Alert : any = {
        properties : {
            icon : {
                label : 'Icon',
                description : 'Alert icon',
                type : 'string',
                accessor : 'Icon',
                render : [
                    {
                        type: 'expression',
                        eval: 'UX.Icon.make(\'{icon}\')',
                    }
                ],
            },
            text : {
                label : 'Text',
                description : 'Alert text or content',
                type : 'string',
                accessor : 'Text',
            },
            isDismissible: {
                label: 'Is dismissible',
                description: 'Indicates if we can dismiss an alert message',
                type: 'boolean',
                accessor: 'IsDismissible',
            },
            alertTitle: {
                label: 'Alert title',
                description: 'Title of alert message',
                type: 'string',
                accessor: 'AlertTitle',
            },
            alertStyle : {
                label: 'Alert style',
                description: 'Style of alert message',
                type: 'enumAlertStyle',
                accessor: 'AlertStyle',
            }
        },
        events : {
            onalertclose : {
                label: 'onAlertClose',
                description: 'This event fires immediately when the close instance method is called.',
                accessor : 'onAlertClose',
                help : 'https://getbootstrap.com/docs/4.0/components/alerts/',
            },
            onalertclosed : {
                label: 'onAlertClosed',
                description: 'This event is fired when the alert has been closed (will wait for CSS transitions to complete).',
                accessor : 'onAlertClosed',
                help : 'https://getbootstrap.com/docs/4.0/components/alerts/',
            },
        }
    };

    /**
     *
     */
    static Anchor : any = {
        properties : {

        },
        events : {

        }
    };

    /**
     * Area properties and events
     */
    static Area : any = {
        properties : {
            shape : {
                label : 'Shape',
                description : 'The shape of the associated hot spot.',
                type : 'string',
                accessor : 'Shape',
            },
            coords : {
                label : 'Coordonates',
                description : 'A set of values specifying the coordinates of the hot-spot region.',
                type : 'string',
                accessor : 'Coordonates',
            },
            alt : {
                label : 'Alt',
                description : 'A text string alternative to display on browsers that do not display images.',
                type : 'string',
                accessor : 'Alt',
            },
        },
        events : {},
    };

    /**
     *
     */
    static Article : any = {
        properties : {

        },
        events : {

        }
    };

    /**
     *
     */
    static ASide : any = {
        properties : {

        },
        events : {

        }
    };

    /**
     *
     */
    static Audio : any = {
        properties : {

        },
        events : {

        }
    };

    /**
     *
     */
    static B : any = {
        properties : {

        },
        events : {

        }
    };

    /**
     *
     */
    static BDI : any = {
        properties : {

        },
        events : {

        }
    };

    /**
     * Input properties and events
     */
    static Input : any = {
        properties : {
            placeholder: {
                label: 'Placeholder',
                description: 'Input place holder text',
                type: 'string',
                accessor: 'Placeholder',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            label : {
                label : 'Label',
                description : 'Component label or content',
                type : 'string',
                accessor : 'Label',
            },
        },
        events : {},
    };














    /**
     * Common properties for all components
     */
    static Common : any = {

            accesskey : {
                label : 'Access key',
                description : 'Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.',
                type : 'string',
                accessor : 'AccessKey',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            autocapitalize : {
                label : 'Auto capitalize',
                description: 'Controls whether and how text input is automatically capitalized as it is entered/edited by the user.',
                type : 'enumAutoCapitalize',
                accessor : 'AutoCapitalize',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            class : {
                label : 'Classes',
                description: 'A space-separated list of the classes of the element.',
                type : 'array',
                accessor : 'Classes',
                render : [
                    {
                        type: 'attribute',
                        attributeName : 'class',
                        attributeValue : 'getClassList',
                    }
                ],
            },
            contenteditable : {
                label : 'Content editable',
                description : 'An enumerated attribute indicating if the element should be editable by the user.',
                type : 'boolean',
                accessor : 'ContentEditable',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            contextmenu : {
                label : 'Context menu',
                description : 'The id of a <menu> to use as the contextual menu for this element.',
                type : 'string',
                accessor : 'ContextMenu',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            dir : {
                label : 'Directionality (Dir)',
                description : 'An enumerated attribute indicating the directionality of the element\'s text.',
                type : 'enumDir',
                accessor : 'Dir',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            draggable : {
                label : 'Draggable',
                description: 'An enumerated attribute indicating whether the element can be dragged',
                type : 'boolean',
                accessor : 'Draggable',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            id : {
                label : 'ID',
                description : 'Defines a unique identifier (ID) which must be unique in the whole document.',
                type : 'string',
                accessor : 'Id',
                render : [
                    {
                        type: 'attribute',
                        attributeName : 'id',
                        attributeValue : 'getId',
                    }
                ]
            },
            name : {
                label : 'Name',
                description : 'Defines a name for the element.',
                type : 'string',
                accessor : 'Name',
                render : [
                    {
                        type: 'attribute',
                    }
                ]
            },
            inputmode : {
                label : 'Input mode',
                description : 'Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents.',
                type: 'enumInputMode',
                accessor : 'InputMode',
                render : [
                    {
                        type: 'attribute',
                    }
                ]
            },
            is : {
                label : 'Is',
                description : 'Allows you to specify that a standard HTML element should behave like a registered custom built-in element',
                type: 'string',
                accessor : 'Is',
                render : [
                    {
                        type: 'attribute',
                    }
                ]
            },
            itemid : {
                label : 'Item Id',
                description : 'The unique, global identifier of an item.',
                type: 'string',
                accessor : 'ItemId',
                render : [
                    {
                        type: 'attribute',
                    }
                ]
            },
            itemprop : {
                label : 'Item prop',
                description : 'Used to add properties to an item. Every HTML element may have an itemprop attribute specified, where an itemprop consists of a name and value pair.',
                type: 'string',
                accessor : 'ItemProp',
                render : [
                    {
                        type: 'attribute',
                    }
                ]
            },
            itemref : {
                label : 'Item ref',
                description : 'Properties that are not descendants of an element with the itemscope attribute can be associated with the item using an itemref. It provides a list of element ids (not itemids) with additional properties elsewhere in the document.',
                type: 'string',
                accessor : 'ItemRef',
                render : [
                    {
                        type: 'attribute',
                    }
                ]
            },
            itemscope : {
                label : 'Item scope',
                description : 'itemscope (usually) works along with itemtype to specify that the HTML contained in a block is about a particular item. itemscope creates the Item and defines the scope of the itemtype associated with it. itemtype is a valid URL of a vocabulary',
                type: 'boolean',
                attributeValue: false,
                accessor : 'ItemScope',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            itemtype : {
                label : 'Item type',
                description : 'Specifies the URL of the vocabulary that will be used to define itemprops',
                type: 'string',
                accessor : 'ItemType',
                render : [
                    {
                        type: 'attribute',
                    }
                ]
            },
            lang : {
                label : 'Language',
                description : 'Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user.',
                type: 'string',
                accessor : 'Lang',
                render : [
                    {
                        type: 'attribute',
                    }
                ]
            },
            slot : {
                label : 'Slot',
                description : 'Assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the slot element whose name attribute\'s value matches that slot attribute\'s value.',
                type: 'string',
                accessor : 'Slot',
                render : [
                    {
                        type: 'attribute',
                    }
                ]
            },
            spellcheck : {
                label : 'Spellcheck',
                description : 'An enumerated attribute defines whether the element may be checked for spelling errors.',
                type: 'boolean',
                accessor : 'Spellcheck',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            style : {
                label : 'Style',
                description : 'Contains CSS styling declarations to be applied to the element. ',
                type: 'array',
                isMap : true,
                accessor : 'Style',
                render : [
                    {
                        type: 'attribute',
                        attributeValue : 'getStyleList',
                    }
                ]
            },
            tabindex : {
                label : 'Tab Index',
                description : 'An integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation, and if so, at what position.',
                type: 'number',
                accessor : 'TabIndex',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            title : {
                label : 'Title',
                description : 'Contains a text representing advisory information related to the element it belongs to.',
                type: 'string',
                accessor : 'Title',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            },
            translate : {
                label : 'Translate',
                description : 'An enumerated attribute that is used to specify whether an element\'s attribute values and the values of its Text node children are to be translated when the page is localized',
                type: 'enumTranslate',
                accessor : 'Translate',
                render : [
                    {
                        type: 'attribute',
                    }
                ],
            }
    };

    /**
     * Common events
     */
    static CommonEvents : any =  {
        onabort : {
            label: 'onAbort',
            description: 'The onabort property of the GlobalEventHandlers mixin is the EventHandler for processing abort events sent to the window.',
            accessor : 'onAbort',
            help : 'https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort',
        },
        onautocomplete : {
            label: 'onAutoComplete',
            description: '',
            accessor : 'onAutoComplete',
            help : '',
        },
        onautocompleteerror : {
            label: 'onAutoCompleteError',
            description: '',
            accessor : 'onAutoCompleteError',
            help : '',
        },
        onblur : {
            label: 'onBlur',
            description: 'The blur event is raised when an element loses focus.',
            accessor : 'onBlur',
            help : 'https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur',
        },
        oncancel : {
            label: 'onCancel',
            description: '',
            accessor : 'onCancel',
            help : '',
        },
        oncanplay : {
            label: 'onCanPlay',
            description: '',
            accessor: 'onCanPlay',
            help : '',

        },
        oncanplaythrough : {
            label: 'onCanPlayThrough',
            description: '',
            accessor : 'onCanPlayThrough',
            help : '',
        },
        onchange : {
            label: 'onChange',
            description: '',
            accessor : 'onChange',
            help : '',
        },
        onclick : {
            label: 'onClick',
            description: '',
            accessor : 'onClick',
            help : '',
        },
        onclose : {
            label: 'onClose',
            description: '',
            accessor : 'onClose',
            help : '',
        },
        oncontextmenu : {
            label: 'onContextMenu',
            description: '',
            accessor : 'onContextMenu',
            help : '',
        },
        oncuechange : {
            label: 'onCueChange',
            description: '',
            accessor : 'onCueChange',
            help : '',
        },
        ondblclick : {
            label: 'onDblClick',
            description: '',
            accessor : 'onDblClick',
            help : '',
        },
        ondrag : {
            label: 'onDrag',
            description: '',
            accessor : 'onDrag',
            help : '',
        },
        ondragend : {
            label: 'onDragEnd',
            description: '',
            accessor : 'onDragEnd',
            help : '',
        },
        ondragenter : {
            label: 'onDragEnter',
            description: '',
            accessor : 'onDragEnter',
            help : '',
        },
        ondragexit : {
            label: 'onDragExit',
            description: '',
            accessor : 'onDragExit',
            help : '',
        },
        ondragleave : {
            label: 'onDragLeave',
            description: '',
            accessor : 'onDragLeave',
            help : '',
        },
        ondragover : {
            label: 'onDragOver',
            description: '',
            accessor : 'onDragOver',
            help : '',
        },
        ondragstart : {
            label: 'onDragStart',
            description: '',
            accessor : 'onDragStart',
            help : '',
        },
        ondrop : {
            label: 'onDrop',
            description: '',
            accessor : 'onDrop',
            help : '',
        },
        ondurationchange : {
            label: 'onDurationChange',
            description: '',
            accessor : 'onDurationChange',
            help : '',
        },
        onemptied : {
            label: 'onEmptied',
            description: '',
            accessor : 'onEmptied',
            help : '',
        },
        onended : {
            label: 'onEnded',
            description: '',
            accessor : 'onEnded',
            help : '',
        },
        onerror : {
            label: 'onError',
            description: '',
            accessor : 'onError',
            help : '',
        },
        onfocus : {
            label: 'onFocus',
            description: '',
            accessor : 'onFocus',
            help : '',
        },
        oninput : {
            label: 'onInput',
            description: '',
            accessor : 'onInput',
            help : '',
        },
        oninvalid : {
            label: 'onInvalid',
            description: '',
            accessor : 'onInvalid',
            help : '',
        },
        onkeydown : {
            label: 'onKeyDown',
            description: '',
            accessor : 'onKeyDown',
            help : '',
        },
        onkeypress : {
            label: 'onKeyPress',
            description: '',
            accessor : 'onKeyPress',
            help : '',
        },
        onkeyup : {
            label: 'onKeyUp',
            description: '',
            accessor : 'onKeyUp',
            help : '',
        },
        onload : {
            label: 'onLoad',
            description: '',
            accessor : 'onLoad',
            help : '',
        },
        onloadeddata : {
            label: 'onLoadedData',
            description: '',
            accessor : 'onLoadedData',
            help : '',
        },
        onloadedmetadata : {
            label: 'onLoadedMetadata',
            description: '',
            accessor : 'onLoadedMetadata',
            help : '',
        },
        onloadstart : {
            label: 'onLoadStart',
            description: '',
            accessor : 'onLoadStart',
            help : '',
        },
        onmousedown : {
            label: 'onMouseDown',
            description: '',
            accessor : 'onMouseDown',
            help : '',
        },
        onmouseenter : {
            label: 'onMouseEnter',
            description: '',
            accessor : 'onMouseEnter',
            help : '',
        },
        onmouseleave : {
            label: 'onMouseLeave',
            description: '',
            accessor : 'onMouseLeave',
            help : '',
        },
        onmousemove : {
            label: 'onMouseMove',
            description: '',
            accessor : 'onMouseMove',
            help : '',
        },
        onmouseout : {
            label: 'onMouseOut',
            description: '',
            accessor : 'onMouseOut',
            help : '',
        },
        onmouseover : {
            label: 'onMouseOver',
            description: '',
            accessor : 'onMouseOver',
            help : '',
        },
        onmouseup : {
            label: 'onMouseUp',
            description: '',
            accessor : 'onMouseUp',
            help : '',
        },
        onmousewheel : {
            label: 'onMouseWheel',
            description: '',
            accessor : 'onMouseWheel',
            help : '',
        },
        onpause : {
            label: 'onPlay',
            description: '',
            accessor : 'onPlay',
            help : '',
        },
        onplay : {
            label: 'onPlay',
            description: '',
            accessor : 'onPlay',
            help : '',
        },
        onplaying : {
            label: 'onPlaying',
            description: '',
            accessor : 'onPlaying',
            help : '',
        },
        onprogress : {
            label: 'onProgress',
            description: '',
            accessor : 'onProgress',
            help : '',
        },
        onratechange : {
            label: 'onRateChange',
            description: '',
            accessor : 'onRateChange',
            help : '',
        },
        onreset : {
            label: 'onReset',
            description: '',
            accessor : 'onReset',
            help : '',
        },
        onresize : {
            label: 'onResize',
            description: '',
            accessor : 'onResize',
            help : '',
        },
        onscroll : {
            label: 'onScroll',
            description: '',
            accessor : 'onScroll',
            help : '',
        },
        onseeked : {
            label: 'onSeeked',
            description: '',
            accessor : 'onSeeked',
            help : '',
        },
        onseeking : {
            label: 'onSeeking',
            description: '',
            accessor : 'onSeeking',
            help : '',
        },
        onselect : {
            label: 'onSelect',
            description: '',
            accessor : 'onSelect',
            help : '',
        },
        onshow : {
            label: 'onShow',
            description: '',
            accessor : 'onShow',
            help : '',
        },
        onsort : {
            label: 'onSort',
            description: '',
            accessor : 'onSort',
            help : '',
        },
        onstalled : {
            label: 'onStalled',
            description: '',
            accessor : 'onStalled',
            help : '',
        },
        onsubmit : {
            label: 'onSubmit',
            description: '',
            accessor : 'onSubmit',
            help : '',
        },
        onsuspend : {
            label: 'onSuspend',
            description: '',
            accessor : 'onSuspend',
            help : '',
        },
        ontimeupdate : {
            label: 'onTimeUpdate',
            description: '',
            accessor : 'onTimeUpdate',
            help : '',
        },
        ontoggle : {
            label: 'onToggle',
            description: '',
            accessor : 'onToggle',
            help : '',
        },
        onvolumechange : {
            label: 'onVolumeChange',
            description: '',
            accessor : 'onVolumeChange',
            help : '',
        },
        onwaiting : {
            label: 'onWaiting',
            description: '',
            accessor : 'onWaiting',
            help : 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/waiting_event',
        }
    }
}

export { ComponentProperties }