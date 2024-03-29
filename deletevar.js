if(confirm("Are you sure you wish to remove all variables?")){
	var qsvd_variables=document.querySelectorAll("div.property-content>div.pp-accordion-container ul.pp-expandable-list>li[tid='variable'] div.pp-expandable-list-content div[tid='name'] div.value select.lui-select>option[label!='<Seleccione un valor>']"),qsvd_variableCount=qsvd_variables.length;
	if(qsvd_variableCount>0){
		var qsvd_alert="QSVD: Starting, if you have many variables please be patient.";
		console.log(qsvd_alert),alert(qsvd_alert),new Promise(async function(e,a){
			for(let a=0;a<qsvd_variableCount;a++)engineModuleGlobal.currentApp.getVariableByName(qsvd_variables[a].innerHTML).then(function(l){
				var r=qsvd_variables[a].innerHTML;
				l.getLayout().then(function(l){
					var o=l.qText;
					console.log("Loading variable "+(a+1)+"/"+qsvd_variableCount+" ["+r+"]: ["+o+"]"),engineModuleGlobal.currentApp.destroyVariableByName(r),a+1==qsvd_variableCount&&e()})})}).then(function(){
						var e="QSVD: Process complete, attempted to clear "+qsvd_variableCount+" variables.";
						console.log(e),alert(e)
					})
	}
	else{
		qsvd_alert="QSVD: Either the variables window isn't open, or no variables were found.";
		console.log(qsvd_alert),alert(qsvd_alert)
	}
}else console.log("You've cancelled the variable delete.");
