
importScripts('script1.js', 'script2.js');

self.onmessage = function(event) {
    self.postMessage('Hello, ' + event.data + '!');
}