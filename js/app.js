window.$on = function(target, type, cb ){
			target.addEventListener(type,cb, false);
		}	

define(["./core","./field","./show"], function(CORE, field, show){

		CORE.addModule(field.id, field);
 		CORE.addModule(show.id, show);

 		field.init();
 		show.init();
})