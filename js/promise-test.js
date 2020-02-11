/*let a = userReg();

setInterval(() => {
    console.log(a);
}, 500);*/

userReg().then(resolve => {
        console.log(resolve);
        return userAuth();
    }).then(resolve => {
        console.log(resolve);
        return userGetData();
    }).then(resolve => {
        console.log(resolve);
    }).catch(error => {
        console.log(error);
    });

function userReg() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           if(Math.random() > 0.2) {
               resolve('+ registration');
           } else {
               reject("- registration");
           }
       }, 1000);
    });
}

function userAuth() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.2) {
                resolve('+ auth');
            } else {
                reject("- auth");
            }
        }, 1000);
    });
}

function userGetData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.2) {
                resolve('+ data');
            } else {
                reject("- data");
            }
        }, 1000);
    });
}

/*function userAuth(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(Math.random() > 0.2){
                resolve("+ auth");
            }
            else{
                reject("- auth");
            }
        }, 500);
    });
}

function getData(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(Math.random() > 0.2){
                resolve("+ getData");
            }
            else{
                reject("- getData");
            }
        }, 500);
    });
}*/