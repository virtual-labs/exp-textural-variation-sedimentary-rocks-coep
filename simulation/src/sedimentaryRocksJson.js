tempMasterJson = {};
var masterJsonArr = [];
var tempQuestionArr = [];
masterJson = {};

//rock 1
questionAnswer = {
	"question": "Distinct texture shown by limestone is ______",
	"correctAns": "Fossiliferous nature",
	"wrongAns1": "Sheeting",
	"wrongAns2": "Lamination",
	"wrongAns3": "Mud cracks"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "The texture which the characteristics in between granitic and felsitic are______",
	"correctAns": "Kankar",
	"wrongAns1": "Chalk",
	"wrongAns2": "Shelly-limestone",
	"wrongAns3": "Argillaceous limestone"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "The major use of limestone is_______ ",
	"correctAns": "Primary source material for manufacture of Portland cement",
	"wrongAns1": "Used in metallurgical industries as flux",
	"wrongAns2": "Used as building stone",
	"wrongAns3": "Used as a source of magnesium"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is a metamorphosed sedimentary rocks?",
	"correctAns": "Coal",
	"wrongAns1": "Limestone",
	"wrongAns2": "Shale",
	"wrongAns3": "Dolomite"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "The grade of coal with very low calorific value is_______",
	"correctAns": "Peat",
	"wrongAns1": "Lignite",
	"wrongAns2": "Bituminous",
	"wrongAns3": "Anthracite"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "The other name for brown coal is______",
	"correctAns":"Lignite",
	"wrongAns1": "Peat",
	"wrongAns2": "Bituminous",
	"wrongAns3": "Anthracite"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the hardness of the lignite grade of coal?",
	"correctAns": "2.5",
	"wrongAns1": "0.5",
	"wrongAns2": "5.5",
	"wrongAns3": "9"
};
tempQuestionArr.push(questionAnswer);


//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 1,
	"textureName": "Clastic",
	"dummyName": "Texture1",
	"src": "images/SANDSTONE1.jpg",
	"src1": "images/SANDSTONE2.jpg",
	"src2": "images/SANDSTONE3.jpg",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 2
tempQuestionArr = [];
questionAnswer = {
		"question": "The non-clastic sedimentary rock chiefly made of carbonate of calcium is_____",
		"correctAns": "Limestone",
		"wrongAns1": "Sandstone",
		"wrongAns2": "Shale",
		"wrongAns3": "Breccia"
	};
	tempQuestionArr.push(questionAnswer);
	questionAnswer = {
		"question": "The texture which the characteristics in between granitic and felsitic are",
		"correctAns": "Kankar",
		"wrongAns1": "Chalk",
		"wrongAns2": "Shelly-limestone",
		"wrongAns3": "Argillaceous limestone"
	};
	tempQuestionArr.push(questionAnswer);
	questionAnswer = {
		"question": "The major use of limestone is ",
		"correctAns": "Primary source material for manufacture of Portland cement",
		"wrongAns1": "Used in metallurgical industries as flux",
		"wrongAns2": "Used as building stone",
		"wrongAns3": "Used as a source of magnesium"
	};
	tempQuestionArr.push(questionAnswer);
	questionAnswer = {
		"question": "What is a metamorphosed sedimentary rocks?",
		"correctAns": "Coal",
		"wrongAns1": "Limestone",
		"wrongAns2": "Shale",
		"wrongAns3": "Dolomite"
	};
	tempQuestionArr.push(questionAnswer);
	questionAnswer = {
		"question": "The grade of coal with very low calorific value is_______",
		"correctAns": "Peat",
		"wrongAns1": "Lignite",
		"wrongAns2": "Bituminous",
		"wrongAns3": "Anthracite"
	};
	tempQuestionArr.push(questionAnswer);
	questionAnswer = {
		"question": "The other name for brown coal is______",
		"correctAns":"Lignite",
		"wrongAns1": "Peat",
		"wrongAns2": "Bituminous",
		"wrongAns3": "Anthracite"
	};
	tempQuestionArr.push(questionAnswer);
	questionAnswer = {
		"question": "What is the hardness of the lignite grade of coal?",
		"correctAns": "2.5",
		"wrongAns1": "0.5",
		"wrongAns2": "5.5",
		"wrongAns3": "9"
	};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 2,
	"textureName": "Non-Clastic",
	"dummyName": "Texture2",
	"src": "images/SHELLY_LIMESTONE1.jpg",
	"src1": "images/SHELLY_LIMESTONE2.jpg",
	"src2": "images/SHELLY_LIMESTONE3.jpg",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

