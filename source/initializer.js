import * as MDGetter from './getMarkdown';

/**
 * Initialize and run PUMD script
 */
export function init() {
    //MarkdownGetter
    let getter = new MDGetter.MarkdownGetter();

    //Get all PUMD area
    let areas = $('div.pumd');
    areas.each(function (idx) {
        let url = $(this).attr('url');
        let from = $(this).attr('from');
        if (url !== false && typeof url !== typeof undefined) {
            //if 'url' attribute is existd, load from url attr.
            getter.getMarkdown(url, new MDGetter.mdResultCallback($(this)));

        } else {
            //if 'url' attr is not existed, load from each
            let user = $(this).attr('username');
            let prj = $(this).attr('project');
            let branch = $(this).attr('branch');
            let path = $(this).attr('path');

            //If path's first letter is slush('/'), remove it to combine path and others
            if (path.charAt(0) == '/') {
                path = path.substring(1, path.length);
            }
            switch (from) {
                case 'github':
                    getter.getFromGitHub(user, prj, branch, path, new MDGetter.mdResultCallback($(this)));
                    break;
            }
        }

    });
}
