define(['./sandbox'], function(sb){


	var id, show, inputs, submit, info;

			id = "send-module";


			function init() {	
				show = document.getElementById("add-contact");
				show.classList.toggle("module-active");

				inputs = document.getElementsByTagName("input");	
				submit = inputs[2];
				sb.listen({"close-view" : closeForm}, id);
				$on(submit, 'click', getValues);
			}

			function getValues(e) {

				info = {
						 inputName: inputs[0].value,
				 		 inputNumber: inputs[1].value
				} 

				sb.notify({
					type: "notify-contact",
					data: info
				});

				show.classList.toggle("module-active");
				e.preventDefault();
			}

			function closeForm() {
				show.classList.toggle("module-active");
			}

			return {
				id: id,
				init: init,
				getValues: getValues
			}

		})