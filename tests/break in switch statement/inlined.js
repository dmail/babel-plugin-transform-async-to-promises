function(){try{return Promise.resolve(sleep(1000)).then(function(){const errorCode=2;let message='Something wrong';switch(errorCode){case 2:message="Error 2";break;}for(;;){break;}alert(message);});}catch(e){return Promise.reject(e);}}