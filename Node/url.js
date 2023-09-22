const url=require('url');

const href=url.parse('https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=610644601173&hvpos=&hvnetw=g&hvrand=18109230514291977048&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061750&hvtargid=kwd-10573980&hydadcr=14453_2316415');

// console.log(href);
console.log(href.port);
console.log(href.protocol);
console.log(href.host);


// protocols | auth(userName & Password) | host | path 