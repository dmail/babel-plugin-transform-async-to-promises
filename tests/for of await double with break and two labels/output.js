_async(matrix=>{let _outerInterrupt=false;var result=0;return _continue(_forOf(matrix,row=>{let _innerInterrupt=false;return _continueIgnored(_forOf(row,value=>{return _await(value,_value=>{result+=_value;if(result>10){_outerInterrupt=_innerInterrupt=true;return;}if(result<0){_innerInterrupt=true;}});},()=>_innerInterrupt||_outerInterrupt));},()=>_outerInterrupt),()=>result);})