_async(function(){let _interrupt;function _temp3(){if(!_interrupt)result=2;}function _temp2(){return _await(null,_temp);}function _temp(){result=1;_interrupt=1;}let result=0;return _continue(_for(function(){return!_interrupt;},void 0,function(){return _continue(_catch(_temp2,_empty),_temp3);}),function(){return result;});})