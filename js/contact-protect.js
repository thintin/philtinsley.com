// Contact info protection - assembles contact details at runtime
// so they don't appear as plain text in the HTML source
(function() {
    var u = 'me';
    var d = 'philtinsley';
    var t = 'com';
    var em = u + '\x40' + d + '.' + t;
    var p1 = '07771';
    var p2 = '934642';
    var ph = p1 + ' ' + p2;
    var ti = '+44' + '7771' + '934642';

    // Replace all elements with data-ct attribute
    var els = document.querySelectorAll('[data-ct]');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        var type = el.getAttribute('data-ct');
        if (type === 'em') {
            el.href = 'mai' + 'lto:' + em;
            if (el.getAttribute('data-show') !== 'false') {
                el.textContent = em;
            }
        } else if (type === 'ph') {
            el.href = 'te' + 'l:' + ti;
            if (el.getAttribute('data-show') !== 'false') {
                el.textContent = ph;
            }
        } else if (type === 'em-btn') {
            el.href = 'mai' + 'lto:' + em;
        } else if (type === 'ph-btn') {
            el.href = 'te' + 'l:' + ti;
            el.textContent = 'Call ' + ph;
        }
    }
})();
