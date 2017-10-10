import Clipboard from 'clipboard';
import tocbot from 'tocbot';
import './doc.less';

tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.doc-container .content',
    headingSelector: 'h1, h2, h3, h4, h5, h6',
    collapseDepth: 4
});

const BTN_COPY_ID = 'btn-copy';
const BTN_COPY_SELECTOR = `#${BTN_COPY_ID}`;

$('pre').hover(
    e => { // handle in
        let $target = $(e.target);
        if ($target.prop('tagName') !== 'PRE') {
            $target = $target.closest('pre');
        }
        $target.append(`<button id="${BTN_COPY_ID}">Copy</button>`);
    },
    () => { // handle out
        $(BTN_COPY_SELECTOR).remove();
    }
);

const clipboard = new Clipboard(BTN_COPY_SELECTOR, {
    target: () => $(BTN_COPY_SELECTOR).parent().find('.highlight')[0],
});
let timer;
clipboard.on('success', e => {
    e.clearSelection();
    $(BTN_COPY_SELECTOR).text('Succeed!');
    clearTimeout(timer);
    timer = setTimeout(() => {
        $(BTN_COPY_SELECTOR).text('Copy');
    }, 2000);
});
clipboard.on('error', e => {
    e.clearSelection();
    $(BTN_COPY_SELECTOR).text('Failed!');
    clearTimeout(timer);
    timer = setTimeout(() => {
        $(BTN_COPY_SELECTOR).text('Copy');
    }, 2000);
});
