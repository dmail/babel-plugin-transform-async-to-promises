function _asyncIterator(iterable){var method;if(typeof Symbol!=="undefined"){if(Symbol.asyncIterator){method=iterable[Symbol.asyncIterator];if(method!=null)return method.call(iterable);}if(Symbol.iterator){method=iterable[Symbol.iterator];if(method!=null)return method.call(iterable);}}throw new TypeError("Object is not async iterable");}const foo=function(){try{let _exit=false;var _iterator,_step,_value;const out=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError;const _temp5=_finallyRethrows(function(){return _catch(function(){_iterator=_asyncIterator([1,2]);const _temp=_for(function(){return!!Promise.resolve(_iterator.next()).then(function(_iterator$next){const _iteratorNormalComple=_iteratorNormalCompletion=_step.done,_step2=_step=_iterator$next;return Promise.resolve(_step.value).then(function(_step$value){return _value=_step$value,!_iteratorNormalCompletion;});});},function(){return!!(_iteratorNormalCompletion=true);},function(){const item=_value;out.push(item);});if(_temp&&_temp.then)return _temp.then(function(){});},function(err){_didIteratorError=true;_iteratorError=err;});},function(_wasThrown,_result){function _temp4(_result2){if(_exit)return _result2;if(_wasThrown)throw _result;return _result;}const _temp3=_finallyRethrows(function(){const _temp2=function(){if(!_iteratorNormalCompletion&&_iterator.return!=null){return Promise.resolve(_iterator.return()).then(function(){});}}();if(_temp2&&_temp2.then)return _temp2.then(function(){});},function(_wasThrown2,_result2){if(_didIteratorError){throw _iteratorError;}if(_wasThrown2)throw _result2;return _result2;});return _temp3&&_temp3.then?_temp3.then(_temp4):_temp4(_temp3);});return Promise.resolve(_temp5&&_temp5.then?_temp5.then(function(_result){return _exit?_result:out;}):_exit?_temp5:out);}catch(e){return Promise.reject(e);}};export default foo;foo().then(console.log);