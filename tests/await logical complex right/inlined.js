function(left,right){try{const _left=left();return Promise.resolve(_left?Promise.resolve(_left&&right()).then(function(_right){return _left&&1+_right;}):function(_right){return _left&&1+_right;}(_left&&right()));}catch(e){return Promise.reject(e);}}