()=>{function _promise(){return!!promise;}const test=_async(function(){function _temp(){promise=null;promiseResolve();messages.push("stop "+num);}let promiseResolve;let num=++index;messages.push("start "+num);// place of interest
// place of interest
return _continue(_for(_promise,void 0,function(){messages.push("wait "+num);return _awaitIgnored(promise);}),function(){promise=new Promise(r=>{promiseResolve=r;});return _call(wait,_temp);});});let index=0;let promise=null;let messages=[];function wait(){return Promise.resolve();}return Promise.all([test(),test(),test()]).then(()=>messages);}