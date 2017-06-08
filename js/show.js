define(['./sandbox'], function(sb){

var id, result, ul, close;

 			id = "show-module";


 			function init() {

 				result = document.getElementById('contacts');

 				ul = document.getElementById('contact-list');
 				close = document.getElementsByClassName("add-contact")[0];
 				$on(close, "click", hideView);
 				sb.listen({
 					"notify-contact": displayContact
 				}, id)

 			}

 			function hideView(e) {
 				result.classList.toggle("module-active");
 				e.preventDefault();
 				sb.notify({
 					type: "close-view",
 					data: null
 				})
 			}

 			function displayContact(info) {
 				var list = document.createElement('li');
				var h3 = document.createElement('h3');
				var h4 = document.createElement('h4');
				var br = document.createElement('br');

				var h3txt = document.createTextNode(info.inputName);
				var h4txt = document.createTextNode(info.inputNumber);

				h3.appendChild(h3txt);
				h4.appendChild(h4txt);

				list.appendChild(h3);
				ul.appendChild(list);

				list.appendChild(h4);
				ul.appendChild(list);

				list.appendChild(br);
				ul.appendChild(list);

				result.classList.toggle('module-active');
 			};


 			return {
 				id: id,
 				init: init,
 				displayContact: displayContact
 			}

 		})
