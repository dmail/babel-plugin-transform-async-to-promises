function(value){const add=_async(function(l,r){const _l=l();return _await(r,function(_r){return _l+_r;});});return function(foo){return add(()=>1,foo);};}