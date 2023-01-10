var i=1;
var maxIndexArr=2;
var mineralCount=1;
let  SampleRandomArr = [];
function randomIntFromInterval() {
	do {
		let num = Math.floor(Math.random() * 2 + 1);
		SampleRandomArr.push(num);
//		SampleRandomArr.push(i);
//	  	i++;
		SampleRandomArr = SampleRandomArr.filter((item, index) => {
			return SampleRandomArr.indexOf(item) === index;
		});
	} while (SampleRandomArr.length < maxIndexArr);
}

function randomIntFromIntervalPos(min, max) { 
	  return Math.floor(Math.random() * (max - min + 1) + min)
}

randomIntFromInterval();
console.log(tempMasterJson);
var htm='<div class="row">'
			+'<div class="col-sm-1">'
			+'</div>'
			+'<div class="col-sm-2">'
			+'<strong><center><span style="float:center;">Select Sedimentary texture</span></center></strong>'
			+'</div>'
			+'<div class="col-sm-7">'
			+'<select class="custom-select" id="mineral"  >'
			+'<option>------ Select sedimentary texture ------</option>'
	for(i=0;i<SampleRandomArr.length;i++){
			htm+='<option  value="'+ SampleRandomArr[i]+'">'+tempMasterJson.demo[i].dummyName +'</option>'
		}
		htm+='</select>'			
			+'</div>'
			+'</div>'
			+'<div class="col-sm-2">'
			+'</div>'
			+'<center><p id="helpTip"></p></center>'
			+'<div class="row" id="info_div"  >'
			
// $("#main-div").html(htm);
var thoery='<div class="container col-sm-12"  id="theory">'
	+'<div class="card ">'
	+'<center><p class="blink"> Select sedimentary texture to start the simulation!!! </p></center>'
	+'<div class="card-header heading_div">'
	+'<b><center>Basics to know about sedimentary texture</center></b>'
	+'</div>'
	+'<div class="card-body">'
	+'<p><b>TEXTURES AND IDENTIFICATION OF SEDIMENTARY ROCKS</b><br>'
	+'Sedimentary rocks are rocks formed by deposition from a fluid (i.e., water, air, or ice). '
	+'They are classified on the basis of their texture, grain size, and mineralogical composition.'
	+'</p>'
	+'<p><b>Texture:</b><br>'
	+'Texture refers to the size, shape and three-dimensional arrangement of the grains that make up sediments or '
	+'sedimentary rock. Texture is a small-scale character of a rock, but assumes importance in many of its significant '
	+'properties, such as bulk density, porosity and permeability. We can use texture of sedimentary rocks to infer '
	+'the mode and distance of transport, energy condition and depositional processes. '
	+'Textures can be clastic, where they are composed of grains derived from pre-existing rocks '
	+'or non-clastic, where sediments precipitate from a fluid.' 

	+'</p>'
	+'<p><b>Clastic texture</b><br>'
	+'Clastic textures are commonly described in terms of grain size of sediments, '
	+'their sorting behaviour, degree of roundness, packing of grains, textural maturity and grains '
	+'binding materials like matrix and cement. Texture of clastic sedimentary rocks is produced '
	+'primarily by physical processes of sedimentation. It is characteristic feature of rocks such '
	+'as conglomerates, sandstones and shales fragments which are derived from pre-existing rocks – igneous, '
	+'metamorphic or even pre-existing sedimentary rocks. Some biochemical sedimentary rocks such as '
	+'fossiliferous limestones (coquina) are composed of shell fragments also exhibit clastic texture. '
	+'Clastic sedimentary rocks are composed of grains, fragments of pre-existing rocks that have been '
	+'packed together with spaces (pores) between grains. These pores may later be filled in with cementing '
	+'materials such as silica or calcite deposited by groundwater moving through the sediment'
	+'</p>'
	+'<p>Examples of clastic sedimentary rocks are sandstone and conglomerate. Some clastic sedimentary '
	+'rocks (such as shale and mudstone) are fine enough that the individual grains cannot be distinguished. '
	+'These fine-grained rocks are said to have an aphanitic texture.'

	+'<p><b>Non clastic (crystalline) texture </b><br>'
	+'It is formed by chemical or biochemical precipitates from fluids. It may also be produced by '
	+'recrystallisation or alteration of pre-existing rocks. Grains show an interlocking mosaic of crystals. '
	+'Chemical sedimentary rocks such as limestone, dolomite, rock salt and gypsum show such texture. '
	+' Sedimentary rocks may have clastic (detrital) or non-clastic texture. ' 
	+'Non-clastic textures are found chiefly in rocks that have precipitated '
	+'chemically from water (chemical sedimentary rocks), such as limestone, dolomite and chert. '
	+'Other non-clastic sedimentary rocks include those formed by organisms (biochemical rocks), '
	+'and those formed from organic material, such as coal. '
	+'Rocks formed mainly from shell fragments are technically clastic rocks, but are commonly '
	+'classed with the non-clastic ones because they too are chemical precipitates - '
	+'except that organisms did the precipitating. If non-clastic rocks are fine-grained enough, they too can be called aphanitic. '
	+'Clastic sedimentary rocks are subdivided on the basis of grain size. Secondary characteristics used to further distinguish '
	+'clastic rocks are sorting, grain shape, and grain composition. '


	+'</p>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	$("#main-div").html(htm+thoery);	



var copyMineralid;

$(document).ready(function() {
	 
	 $('#myresult').hide();
	 $('#myimage').hide();
	 $('#originalName').hide();

	 $('#mineral').change(function(){
		 mineralSelect();
	 });
}); 

function mineralSelect(){
		$("#helpTip").html("");
		$("#helpTip").removeClass("blink");
		$('#myresult').show();
		$('#myimage').show();
		$('#originalName').show();
		tempMasterJson.demo = masterJsonArr;
		$('#info_div').html(""); 
		var tempmineral=$('#mineral :selected').val();
		
	 var mineral=parseInt(tempmineral);
		for(i=0,j=1;i<tempMasterJson.demo.length;i++,j++){	
			 if(mineral==tempMasterJson.demo[i].mineralId){	
				 copyMineralid=i;
				 var text='<div class="col-lg-2  col-sm-12">'
					 	+'</div>'
					 	+'<div class="container col-lg-4 col-sm-12 imgLens">'
					 	+'<img id="myimage"  class="img-fluid myImage" src="'+tempMasterJson.demo[i].src+'" width="500" height="300" ><br>'
					 	+'<br>'
					 	+'<br>'
					 	+'<div class="row" id="previewPanel" >'
					 	previewPanel();
					 	text+='</div>'
						+'<br>'
					 	+'<strong><b>Which texture is ?</b></strong>'
					 	+'<br>'
					 	+'<br>'
					 	+'<select class="custom-select" id="originalName"  >'
					 	+'<option  value="">------ Select texture name  ------</option>'
				for(i=0;i<tempMasterJson.demo.length;i++){	
					text+='<option  value="'+tempMasterJson.demo[i].mineralId+'">'+tempMasterJson.demo[i].textureName +'</option>'
				}
			 	text+='</select>'
				 	+'<br>'
				 	+'<br>'
				 	+'<div class=" " id="error" >'
		 			+'</div>'
					+'</div>'
				 	+'<div class="container  col-lg-4 col-sm-12 img-zoom-container">'
				 	+'<div id="myresult" class="container img-zoom-result"></div>'
				 	+'</div>'
				 	+'<div class="col-sm-1">'
		 			+'</div>'

		 		$('#info_div').html(text);
		 		imageZoom("myimage", "myresult");
		 		
			 }
		
			$('#originalName').change(function(){
					originalName();
			});
		}
		
		function previewPanel(){
				
						if("src1" in tempMasterJson.demo[copyMineralid] ){
						text+='<div class="col-lg-2" id="previewPanel1" >'
							+'<center><img id="preview1"  class="previewImg" src="'+tempMasterJson.demo[copyMineralid].src1+'" width="90" height="90" ></center><br>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src2" in tempMasterJson.demo[copyMineralid]){
							text+='<div class="col-lg-2" id="previewPanel2" >'
							+'<center><img id="preview2"  class="previewImg" src="'+tempMasterJson.demo[copyMineralid].src2+'" width="90" height="90" ></center><br>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src3" in tempMasterJson.demo[copyMineralid]){
							text+='<div class="col-lg-2" id="previewPanel3" >'
							+'<center><img id="preview3"  class="previewImg" src="'+tempMasterJson.demo[copyMineralid].src3+'" width="90" height="90" ></center><br>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src4" in tempMasterJson.demo[copyMineralid]){
							text+='<div class="col-lg-2" id="previewPanel4" >'
							+'<center><img id="preview4"  class="previewImg" src="'+tempMasterJson.demo[copyMineralid].src4+'" width="90" height="90" ></center><br>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src" in tempMasterJson.demo[copyMineralid] ){
							text+='<div class="col-lg-2" id="previewPanel5" >'
								+'<center><img id="preview5"  class="previewImg" src="'+tempMasterJson.demo[copyMineralid].src+'" width="90" height="90" ><center><br>'
								+'</div>'
								$("#previewPanel").append(text);
							}
						
							
				
		}
		$('#preview1').click(function(){
			var images = $('#preview1').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview2').click(function(){
			var images = $('#preview2').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview3').click(function(){
			var images = $('#preview3').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview4').click(function(){
			var images = $('#preview4').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview5').click(function(){
			var images = $('#preview5').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		
		function originalName(){
			$("#mineral").attr("disabled", true);
			for(i=0;i<tempMasterJson.demo.length;i++){
					var mineral=$('#mineral :selected').val();
					var originalName=$('#originalName :selected').text();
						 	if(tempMasterJson.demo[copyMineralid].textureName==originalName){
						 		$('#info_div').html("");

						 		var text='<div class="container col-lg-5  col-sm-12" >'
						 				+'<div class="heading_div">'
						 				+'<b><center>'+tempMasterJson.demo[copyMineralid].textureName+'</center></b>'
						 				+'</div>'
						 				+'<div class="row " >'
						 				
						 				+'<div class="container col-lg-4 imgLens " id="imgScreen" >'
						 				+'<img id="myimage"  class="img-fluid myImage myImageScreen" src="'+tempMasterJson.demo[copyMineralid].src+'"   >'
						 				+'</div>'
						 				
						 				+'<div class="container  col-lg-7 col-sm-12 img-zoom-container">'
										+'<div id="myresult" class=" container img-zoom-result img-zoom-result-screen" style="margin-top:50px;" ></div>'
									 	+'</div>'
						 				+'</div>'
						 				+'<hr class="hrStyle">'
						 				+'<div class="row " >'
						 				+'<br>'
						 				
						 				+'<div class="col-lg-12 col-sm-12 " id="answerPanel" >'
						 				+'</div>'
						 				+'</div>'
						 				
						 				+'</div>'
						 				
						 			  	+'<div class="container col-lg-6 col-sm-12  ">'
						 				+'<div class="container heading_div">'
						 				+'<b><center>IDENTIFICATIONS OF SEDIMENTARY TEXTURE </center></b>'
						 				+'</div>'
						 			
						 				+'<div class="container col-lg-12 col-sm-12" style=" height: 700px; overflow-y: scroll;margin:10px;">'
			 			        var option=[];	
						 		var questionLength=tempMasterJson.demo[copyMineralid].question.length;
//						 		console.log("copyMineralid "+copyMineralid+" questionLength  "+questionLength);
						 		
						 	for(var j=0;j<questionLength;j++){
//						 		console.log("question "+tempMasterJson.demo[copyMineralid].question[j].question);
				 				text+='<br><button type="button" class="btn btnStyle" id="questionNumBtn"  style="cursor: default;"><b>Question No - '+(j+1)+'</b></button><br>'
					 				+'<br><caption> <h5><b>'+tempMasterJson.demo[copyMineralid].question[j].question+'</b></h5></caption><br>'
					 				+'<b><div class="row">'
				 				
				 				option[0]=tempMasterJson.demo[copyMineralid].question[j].wrongAns1;
				 				option[1]=tempMasterJson.demo[copyMineralid].question[j].wrongAns2;
				 				option[2]=tempMasterJson.demo[copyMineralid].question[j].wrongAns3;
				 				
				 				const pos = randomIntFromIntervalPos(0, 3);

				 				text+='<div class="form-check">'
				 				var ans=tempMasterJson.demo[copyMineralid].question[j].correctAns;
				 				for(var op=0,p=0;op<4;op++){	
				 							if(pos==op){
				 								text+='<input class="form-check-input" type="radio" name="radioOption'+j+'" value="'+ans+'" id="radioOption" >'
				 									+'<b>'+ans+'</b></input><br>'
				 							}else{
				 								text+='<input class="form-check-input" type="radio" name="radioOption'+j+'" value="'+option[p]+'" id="radioOption" >'
				 									+'<b>'+option[p]+'</b></input><br>'
				 								p++;
				 							}
				 						}
				 				text+='</div></div></b>'
				 					}
						 		text+='<br><button type="button" class="btn btn-success "   id="smt" data-toggle="modal" data-target="#myModal">Submit</button></div>'
						 		+'</div>'
						 	// add model data-target="#myModal"
						 		
						 		$('#info_div').html(text);	
						 		
						 		imageZoomquestionnairePage("myimage", "myresult");
								
						 	}
						
						 	else
						 		{
						 	    var str1='<div class="alert alert-success">'
						 	    	+'<strong>Select correct original name of sedimentary texture  </strong>'
			 			  	+'</div>'
						 	    	$("#error").html(str1);
						 	}
						 	
						} 
			$("#smt").click(function(){
				smtQuestion();
			});
}

function smtQuestion(){
	$('#answerPanel').show();
	var selected=[];
	var correctAnsCount=0;
	var wrongAnsCount=0;
	var notSelected=0;
	
	$("#helpTip").html("You need to perform the task for all the available sedimentary texture to complete the experiment. Find \"Click here to select next sedimentary texture\" button to continue.");
	$("#helpTip").addClass("blink");
	
	var questionLength=tempMasterJson.demo[copyMineralid].question.length;
	$("input[id='radioOption']").next().css('color', '#000');
	
	for(var z=0; z <questionLength ;z++){
		selected[z]= $("input[name='radioOption"+z+"']:checked").val();		
	}

	for(var j=0,k=0;j<questionLength;j++,k++){
	  
	   if(selected[j]==tempMasterJson.demo[copyMineralid].question[j].correctAns){
		   	correctAnsCount++;
		   	$("input[name='radioOption"+j+"']:checked").css('accent-color', 'green');
		   	$("input[name='radioOption"+j+"']:checked").next().css('color', 'green');
	   }else if(selected[j]==tempMasterJson.demo[copyMineralid].question[j].wrongAns1||selected[j]==tempMasterJson.demo[copyMineralid].question[j].wrongAns2||selected[j]==tempMasterJson.demo[copyMineralid].question[j].wrongAns3)
	   {
		   	wrongAnsCount++;
		    $("input[name='radioOption"+j+"']:checked").css('accent-color', 'red');
			$("input[name='radioOption"+j+"']:checked").next().css('color', 'red');
	   }else{
		   	notSelected++;
	   }
  }
	
	if(notSelected==questionLength){
		$("#helpTip").html("");
		$("#helpTip").removeClass("blink");	
		$('#mineral :selected').attr('disabled', false);
		resultModal();
		$("#modalHeading").html("Alert");
		$("#AddResult").html('<strong>Please attempt all questions .</strong>');
		$("#ModalFooter").html('<button type="button" class="btn btn-primary"  data-dismiss="modal" >OK</button>');
	}else{
		$('#mineral :selected').attr('disabled', true);
		var answerPanel,AddResult;	
		resultModal();
		answerPanel='<button type="button" class="btn btn-success blink position"   id="selectAnotherMineral">Click here to select next sedimentary texture</button>'
			+'<div class="summary"><strong id="correctAns" enable="true">Correct Answer :'+correctAnsCount+' </strong><br>'
			+'<strong id="wrongAns">Wrong Answer : '+wrongAnsCount+'</strong><br>'
	  		+'<strong id="notSelected">Skipped Question : '+notSelected+' </strong><br>'
		  	+'</div>'
			
			$("#modalHeading").html("Selected sedimentary texture : " + tempMasterJson.demo[copyMineralid].textureName);
			$("#AddResult").html("<center><strong style='color:green;'>Click on OK button to continue</strong></center><br/>");
				 
		
		if(mineralCount!=maxIndexArr){
			 	$("#answerPanel").html(answerPanel);
//			 	$("#modalHeading").html("Summary");
			 	$("#ModalFooter").html('<button type="button" class="btn btnStyle"  data-dismiss="modal" style="padding: 5px 20px;" >OK</button>');
			 	$("#AddResult").html(AddResult);
			  	$('#info_div').html();
			}else{
				$("#helpTip").html("");
				$("#helpTip").removeClass("blink");
				$("#answerPanel").html(answerPanel);
				$("#selectAnotherMineral").hide();
//				$("#modalHeading").html("Summary");
				$("#AddResult").html("<center><strong style='color:green;'>Congratulation!!<br> You have completed the experiment successfully.</strong></center><br/>");
				$("#ModalFooter").html('<button type="button" class="btn btnStyle"  data-dismiss="modal" style="padding: 5px 20px;" >OK</button><button type="button" class="btn btnStyle"  data-dismiss="modal" id="refreshPage" style="padding: 5px 20px;" >Exit</button>');
			}
		}
	$("#refreshPage").click(function(){
		location.reload(true);
	 });	
	 
		$("#selectAnotherMineral").click(function(){
			mineralCount++;
			$("#mineral").attr("disabled", false);
			$("#helpTip").html("");
			$("#helpTip").removeClass("blink");
			$("#info_div").html("");
			$("#info_div").html(thoery);
		 });	
	}
}

function resultModal(){
	var modelAnswerPanel='<!-- Model for answer panel -->'
		+' <div class="modal fade modal" id="myModal">'
		+' <div class="modal-dialog">'
		+' <div class="modal-content">'
      
		+' <!-- Modal Header -->'
		+' <div class="modal-header modal_heading_div">'
		+'  <h4 class="modal-title" id="modalHeading">Confirmation Box</h4>'
		+'  <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
		+' </div>'
        
		+'<!-- Modal body -->'
		+' <div class="modal-body" id="modalBody">'
		+'  <b style="color:red" id="AddResult"></b>'
		+' </div>'
        
		+' <!-- Modal footer -->'
		+' <div class="modal-footer" id="ModalFooter">'
		
		+'  </div>'
		+' </div>'
		+' </div>'
		+' </div>'
		$('#info_div').append(modelAnswerPanel);
}

function imageZoom(imgID, resultID) {
	  var img, lens, result, cx, cy;
	  img = document.getElementById(imgID);
	  result = document.getElementById(resultID);
	  /* create lens: */
	  lens = document.createElement("DIV");
	  lens.setAttribute("class", "img-zoom-lens");

	  /* insert lens: */
	  img.parentElement.insertBefore(lens, img);
	  /* calculate the ratio between result DIV and lens: */
	  cx = result.offsetWidth / lens.offsetWidth;
	  cy = result.offsetHeight / lens.offsetHeight;
	  /* set background properties for the result DIV: */
	  result.style.backgroundImage = "url('" + img.src + "')";
	  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
	  /*
		 * execute a function when someone moves the cursor over the image, or
		 * the lens:
		 */
	  lens.addEventListener("mousemove", moveLens);
	  img.addEventListener("mousemove", moveLens);
	  /* and also for touch screens: */
	  lens.addEventListener("touchmove", moveLens);
	  img.addEventListener("touchmove", moveLens);
	  function moveLens(e) {
	    var pos, x, y;
	    /* prevent any other actions that may occur when moving over the image: */
	    e.preventDefault();
	    /* get the cursor's x and y positions: */
	    pos = getCursorPos(e);
	    /* calculate the position of the lens: */
	    x = pos.x - (lens.offsetWidth / 2);
	    y = pos.y - (lens.offsetHeight / 2);
	    /* prevent the lens from being positioned outside the image: */
	    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
	    if (x < 0) {x = 0;}
	    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
	    if (y < 0) {y = 0;}
	    /* set the position of the lens: */
	    lens.style.left = (x+5) + "px";
	    lens.style.top = (y+5) + "px";
	    /* display what the lens "sees": */
	    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
	  }
	  function getCursorPos(e) {
	    var a, x = 0, y = 0;
	    e = e || window.event;
	    /* get the x and y positions of the image: */
	    a = img.getBoundingClientRect();
	    /* calculate the cursor's x and y coordinates, relative to the image: */
	    x = e.pageX - a.left;
	    y = e.pageY - a.top;
	    /* consider any page scrolling: */
	    x = x - window.pageXOffset;
	    y = y - window.pageYOffset;
	    return {x : x, y : y};
	  }
}

function imageZoomquestionnairePage(imgID, resultID) {
	 var img, lens, result, cx, cy;
	  img = document.getElementById(imgID);
	  result = document.getElementById(resultID);
	  /* create lens: */
	  lens = document.createElement("DIV");
	  lens.setAttribute("class", "img-zoom-lens");

	  /* insert lens: */
	  img.parentElement.insertBefore(lens, img);
	  /* calculate the ratio between result DIV and lens: */
	  cx = result.offsetWidth / lens.offsetWidth;
	  cy = result.offsetHeight / lens.offsetHeight;
	  /* set background properties for the result DIV: */
	  result.style.backgroundImage = "url('" + img.src + "')";
	  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
	  /*
		 * execute a function when someone moves the cursor over the image, or
		 * the lens:
		 */
	  lens.addEventListener("mousemove", moveLens);
	  img.addEventListener("mousemove", moveLens);
	  /* and also for touch screens: */
	  lens.addEventListener("touchmove", moveLens);
	  img.addEventListener("touchmove", moveLens);
	  function moveLens(e) {
	    var pos, x, y;
	    /* prevent any other actions that may occur when moving over the image: */
	    e.preventDefault();
	    /* get the cursor's x and y positions: */
	    pos = getCursorPos(e);
	    /* calculate the position of the lens: */
	    x = pos.x - (lens.offsetWidth / 2);
	    y = pos.y - (lens.offsetHeight / 2);
	    /* prevent the lens from being positioned outside the image: */
	    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
	    if (x < 0) {x = 0;}
	    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
	    if (y < 0) {y = 0;}
	    /* set the position of the lens: */
	    lens.style.left = (x+5) + "px";
	    lens.style.top = (y+5) + "px";
	    /* display what the lens "sees": */
	    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
	  }
	  function getCursorPos(e) {
	    var a, x = 0, y = 0;
	    e = e || window.event;
	    /* get the x and y positions of the image: */
	    a = img.getBoundingClientRect();
	    /* calculate the cursor's x and y coordinates, relative to the image: */
	    x = e.pageX - a.left;
	    y = e.pageY - a.top;
	    /* consider any page scrolling: */
	    x = x - window.pageXOffset;
	    y = y - window.pageYOffset;
	    return {x : x, y : y};
	  
	  }
}
