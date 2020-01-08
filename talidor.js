

$(document).ready(function() {
	alert("tits ready occurred!");
	var statuschatali = document.getElementsByClassName('statuschatali') 

	
				// this approach is interesting if you need to dynamically create data in Javascript 
				var metadata = [];
				metadata.push({ name: "name2", label: "NAME", datatype: "string", editable: true});
				metadata.push({ name: "talidor", label:"Talidor", datatype: "string", editable: true});

				// a small example of how you can manipulate the object in javascript

		
				var data = [];
				data.push({id: 1, values: {"name2":"Level","talidor":"1"}})
				data.push({id: 2, values: {"name2":"Experience","talidor":"0"}})
			
				data.push({id: 3, values: {"name2":"Class","talidor":"Gunman"}})
				data.push({id: 4, values: {"name2":"Subclass","talidor":"Mercenary, Hitman, Gunsmith"}})
			
				data.push({id: 5, values: {"name2":"Size","talidor":"Medium"}})
				data.push({id: 6, values: {"name2":"Type","talidor":"Human"}})
			
				data.push({id: 7, values: {"name2":"Age","talidor":"123 (Physically 42)"}})
				data.push({id: 8, values: {"name2":"Affinity","talidor":"Dark"}})
				
				data.push({id: 9, values: {"name2":"Magical Category","talidor":"Category 1 (Air)"}})
			
				data.push({id: 10, values: {"name2":"Alignment","talidor":"True Neutral"}})
				data.push({id: 11, values: {"name2":"Saves","talidor":"Dexterity, Constitution"}})
			
				data.push({id: 12, values: {"name2":"Hit Points","talidor":"11"}})
				data.push({id: 13, values: {"name2":"Hit Dice","talidor":"1d10 + 3"}})
			
				data.push({id: 14, values: {"name2":"Weight Capacity","talidor":"90lb"}})
				data.push({id: 15, values: {"name2":"Status Effects","talidor":"null."}})
			
				data.push({id: 16, values: {"name2":"Currency (Mensi)","talidor":"100"}})
				data.push({id: 17, values: {"name2":"Speed","talidor":"12m"}})
			
				data.push({id: 18, values: {"name2":"Strength","talidor":"9 (-1)"}})
				data.push({id: 19, values: {"name2":"Dexterity","talidor":"20 (+5)"}})
			
				data.push({id: 20, values: {"name2":"Constitution","talidor":"16 (+3)"}})
				data.push({id: 21, values: {"name2":"Intelligence","talidor":"10 (0)"}})
			
				data.push({id: 22, values: {"name2":"Wisdom","talidor":"16 (+3)"}})
				data.push({id: 23, values: {"name2":"Charisma","talidor":"13 (+1)"}})
			
				data.push({id: 24, values: {"name2":"Accuracy Level","talidor":"17"}})
				data.push({id: 25, values: {"name2":"Evasion Level","talidor":"4"}})
			
				data.push({id: 26, values: {"name2":"Weapon Proficiencies","talidor":"Simple melee, Martial Ranged"}})
				data.push({id: 27, values: {"name2":"Equipped","talidor":"Talidor’s Pistol 1d8 + 3 (6 shots, 3lb)"}})
			
				data.push({id: 28, values: {"name2":"Off-Hand","talidor":"null."}})
				data.push({id: 29, values: {"name2":"Holstered","talidor":"null."}})
			
				data.push({id: 30, values: {"name2":"Armour Proficiencies","talidor":"Light or Less"}})
				data.push({id: 31, values: {"name2":"Armour","talidor":"Light – Steel (-10% and -2 damage)"}})
			
				data.push({id: 32, values: {"name2":"Spells","talidor":"null."}})
			
				data.push({id: 33, values: {"name2":"Inventory","talidor":"Talidor’s Pistol 1d8 + 3 (6 shots, +2 Accuracy Level, 3lb, ER 20m, LER 60m, MR 120m, 70 mensi), Normal bullets (x60, 6lb), "}})
				data.push({id: 34, values: {"name2":"Stocks","talidor":"Huntsmen’s Dogs: 120, "}})
			
			
				editableGrid = new EditableGrid("talidorGridJsData");
				editableGrid.load({"metadata": metadata, "data": data});
				editableGrid.renderGrid("talidor4", "testgrid");
})