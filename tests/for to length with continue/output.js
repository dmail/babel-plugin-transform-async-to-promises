_async(list=>{let _exit=false;return _continue(_forTo(list,i=>{return _await(list[i](),_list$i=>{if(_list$i){return;}_exit=true;return false;});},()=>_exit),_result=>_exit?_result:true);})