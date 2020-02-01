module.exports = (textConverter) => {
    const TEXT_NODE = 3;
    const ALL_NODES_IN_HTML_SELECTOR = 'blockquote,summary,b,th,code,ul,li,button,pre,em,div,p,td,a,h1,h2,h3,h4,h5,h6,cite,nobr,span';

    document
        .querySelectorAll(ALL_NODES_IN_HTML_SELECTOR)
        .forEach(el => {
            if (el.childElementCount === 0) {
                if (el.innerText) el.innerText = textConverter(el.innerText);
            } else {
                el.childNodes.forEach(child => {
                    if (child.nodeType === TEXT_NODE) {
                        child.textContent = textConverter(child.textContent);
                    }
                })
            }
        });
};
