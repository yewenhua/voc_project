export function px2rem(){
    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth == 375){
                    docEl.style.fontSize = '100px';
                }
                else if(clientWidth < 450){
                    docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
                }
                else if(clientWidth < 800){
                    docEl.style.fontSize = 100 * 1.2 + 'px';
                }
                else if(clientWidth < 1200){
                    docEl.style.fontSize = 100 * 1.5 + 'px';
                }
                else if(clientWidth < 1600){
                    docEl.style.fontSize = 100 * 1.8 + 'px';
                }
                else{
                    docEl.style.fontSize = 100 * 2 + 'px';
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
}