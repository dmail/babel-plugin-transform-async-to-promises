_async((foo,until)=>{let count=0;return _continue(_for(()=>_call(foo,_foo=>_foo!==until),void 0,()=>{++count;}),()=>count);})