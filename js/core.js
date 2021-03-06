define([], function(){

	"use strict";

			//keep track on modules

				var modules = {};

			function addModule(module_id, mod){
				modules[module_id] = mod;

			}

			function registerEvents(evt,module_id){

				modules[module_id].events = evt;
			}

			function triggerEvents(evt){
				var mod;
				
				for ( mod in modules){
					if(modules.hasOwnProperty(mod)){
						mod = modules[mod];
						if(mod.events && mod.events[evt.type]){
							mod.events[evt.type](evt.data);
						}

					}
				}

			}

			return{
				addModule : addModule,
				registerEvents: registerEvents,
				triggerEvents: triggerEvents
			}
		})