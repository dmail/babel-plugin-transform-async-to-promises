function(a,b,c,d){try{const _a=a();return Promise.resolve(_a?Promise.resolve(_a?b():0).then(function(_b){const _c=_a||c();return _a||!_c?_a?_b:_c&&d():Promise.resolve(_a?_b:_c&&d());}):function(_b){const _c=_a||c();return _a||!_c?_a?_b:_c&&d():Promise.resolve(_a?_b:_c&&d());}(_a?b():0));}catch(e){return Promise.reject(e);}}