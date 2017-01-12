/* 本地存储类 */
(function($, global){
    "use strict";  
    /* 本地存储类 */
    var StorageModel = function(){
        /* 浏览器寸处对象 */
        this.storage = null;    
    };  
    /*本地存储类原型对象*/    
    StorageModel.prototype = {
        /*初始化 */
        init:function(){
            function getLocalStorage(){
                var result = false;
                if(typeof global.localStorage === 'object'){
                    result = localStorage;
                }else if(typeof global.globalStorage === 'object'){
                    result = global.globalStorage;
                }              
                return result;
            }           
            this.storage = getLocalStorage();
        },
         /*获取本地存储对象*/
        getStorage:function(){
            return this.storage;
        },      
        /* 存储对象*/
        save:function(key, value){
            var
                storage = this.storage,
                list = false;
            if(storage !== false){
                list = storage.setItem(key, value);
            }
            return list;
        },
        /* 载入值 */
        load:function(key){
            var
                storage = this.storage,
                result = false;
            if(storage !== false){                
                result = storage.getItem(key);
            }  
            return result;
        }
    }; 
    global.fan1xia = global.fan1xia || {};
    global.fan1xia.model = global.fan1xia.model || {};
    global.fan1xia.model.StorageModel = StorageModel;
}(jQuery, window));
