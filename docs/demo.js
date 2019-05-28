function runDemo() {

    window.UX.log('==== START OF DEMO CODE ====');

    renderAvailabilityTable('layout', 'layoutAvailabilityTable');
    renderClassDocumentation('layout', 'layoutClassDocs');

    renderAvailabilityTable('content', 'contentAvailabilityTable');
    renderClassDocumentation('content', 'contentClassDocs');

    renderAvailabilityTable('component', 'componentAvailabilityTable');
    renderClassDocumentation('component', 'componentClassDocs');


    UX.Page.init();

}


function renderAvailabilityTable(category, container) {

    let s = '<table class="table table-bordered table-sm">';

    s = s + '<tr>';
    s = s + '   <th>Class</th>';
    s = s + '   <th>Description</th>';
    for(let lib in UX.libraries) {
        s = s + '   <th>' + lib + '</th>';
    }
    s = s + '</th>';

    for(let x in UX.components) {
        if (UX.components[x].getMetaData().category == category) {
            s = s + '<tr>';
            s = s + '   <td>' + UX.components[x].getMetaData().name + '</td>';
            s = s + '   <td>' + UX.components[x].getMetaData().description + '</td>';
            for(let lib in UX.libraries) {
                if (UX.components[x].getMetaData().libraries[lib] != undefined) {
                    s = s + '   <td>' + (UX.components[x].getMetaData().libraries[lib].supported ? 'Yes' : 'No') + '</td>';
                } else {
                    s = s + '   <td>No</td>';
                }
            }
            s = s + '</tr>';
        }
    }

    s = s + '</table>';

    $('#' + container).html(s);

}

function renderClassDocumentation(category, container) {

    let s = '';
    for(let x in UX.components) {

        let metaData = UX.components[x].getMetaData();

        if (UX.components[x].getMetaData().category == category) {
            s = s + '<h3>' + UX.components[x].getMetaData().name + '</h3>';
            s = s + '<p>' + UX.components[x].getMetaData().description + '</p>';
            if (UX.components[x].getMetaData().example) {
                s = s + '<h5>Example</h5>';
                s = s + '<pre><code>' + UX.components[x].getMetaData().example + '</code></pre>';
            }

            if (metaData.codepen != undefined) {
                if (metaData.codepen.length > 0) {
                    s = s + '<h5>Codepen</h5>';
                }
                window.UX.log('We have code pen information');
                for(let cp in metaData.codepen) {

                    let height = metaData.codepen[cp].height;
                    if (height == undefined) {
                        height = 265;
                    }

                    s = s + '<p class="codepen" data-height="' + metaData.codepen[cp].height + '" data-theme-id="0" data-default-tab="js,result" data-user="' + metaData.codepen[cp].user + '" data-slug-hash="' + metaData.codepen[cp].slug + '" style="padding-bottom:50px;height: ' + metaData.codepen[cp].height + 'px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="' + metaData.codepen[cp].title + '">\n' +
                        '  <span>See the Pen <a href="https://codepen.io/' + metaData.codepen[cp].user + '/pen/' + metaData.codepen[cp].slug + '/">\n' +
                        '  Alert component example</a> by Benoit Gauthier (<a href="https://codepen.io/' + metaData.codepen[cp].user + '">@' + metaData.codepen[cp].user + '</a>)\n' +
                        '  on <a href="https://codepen.io">CodePen</a>.</span>\n' +
                        '</p>';


                }
            }

        }
    }


    $('#' + container).html(s);

}