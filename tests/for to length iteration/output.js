_async(list=>{var result=0;return _continue(_forTo(list,i=>{return _await(list[i](),_list$i=>{result+=_list$i;});}),()=>result);})