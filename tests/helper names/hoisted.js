function _await2(value,then,direct){if(direct){return then?then(value):value;}if(!value||!value.then){value=Promise.resolve(value);}return then?value.then(then):value;}function _async3(f){return function(){for(var args=[],i=0;i<arguments.length;i++){args[i]=arguments[i];}try{return Promise.resolve(f.apply(this,args));}catch(e){return Promise.reject(e);}};}return _async3(function(_async,_await){return _await2(_async(0),function(_async2){return _async2&&_await();});})