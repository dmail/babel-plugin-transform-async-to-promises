function(...fns){return value=>new Promise((resolve,reject)=>{function _temp3(e){reject(e);}(function run([f,...fns],value){try{function _temp2(){if(f===undefined)resolve(value);else return _await(f(value),_temp);}function _temp(_f){run(fns,_f);}return _continueIgnored(_catch(function(){return _invokeIgnored(_temp2);},_temp3));}catch(e){Promise.reject(e);}})(fns,value);});}