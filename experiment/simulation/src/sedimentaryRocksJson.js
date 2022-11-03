tempMasterJson = {};
var masterJsonArr = [];
var tempQuestionArr = [];
masterJson = {};

//rock 1
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Detrital/Clastic",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Clayey",
	"wrongAns3": "Siliciclastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Reddish Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Earthy",
	"wrongAns3": "Glassy"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Pencil",
	"wrongAns2": "Non-existent",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "0",
	"wrongAns1": "1.5",
	"wrongAns2": "2",
	"wrongAns3": "1"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Primarily made up of quartz and feldspar grains together with small amounts of mica",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Quartz, feldspar, Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 1,
	"originalName": "Arkose",
	"dummyName": "sedirocks1",
	"src": "images/ARKOSE.jpg",
	"src1": "images/ARKOSE1.jpg",
	"src2": "images/ARKOSE2.jpg",
	"chemical_Classification": "Detrital/Clastic",
	"colour": "Reddish Brown",
	"streak": "White",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "0",
	"chemical_Composition": "Primarily made up of quartz and feldspar grains together with small amounts of mica",
	"specialProperties": "Frequently utilized as a building material",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 2
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Detrital",
	"wrongAns1": "Siliciclastic",
	"wrongAns2": "Clastic",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "White, gray, sometimes stained yellow",
	"wrongAns2": "Reddish Brown",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White,iron stain can discolour",
	"wrongAns2": "Silver",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull,earthy",
	"wrongAns2": "Pearly",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "1-3",
	"wrongAns1": "3.5-5",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2-2.5",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns1": "Primarily made up of quartz and feldspar grains together with small amounts of mica",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Quartz, feldspar, Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 2,
	"originalName": "Bauxite",
	"dummyName": "sedirocks2",
	"src": "images/BAUXITE.jpg",
	"src1": "images/BAUXITE1.jpg",
	"src2": "images/BAUXITE2.jpg",
	"chemical_Classification": "Detrital",
	"colour": "White, gray, sometimes stained yellow",
	"streak": "Usually white, but iron stain can discolour",
	"luster": "Dull, earthy",
	"mohs_Hardness": "1 to 3",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2 to 2.5",
	"chemical_Composition": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"specialProperties": "The primary ore of aluminium. Synthetic bauxite is used as an abrasive and as a fracking proppant",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 3
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Detrital/Clastic",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Silicate",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Black",
	"wrongAns2": "White",
	"wrongAns3": "Gray"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "Black,gray",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Earthy",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "3-4",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.8-3.0",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Primarily made up of quartz and feldspar grains together with small amounts of mica",
	"wrongAns3": "Quartz, feldspar, Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 3,
	"originalName": "Black Limestone",
	"dummyName": "sedirocks3",
	"src": "images/BLACKLIMESTONE.jpg",
	"src1": "images/BLACKLIMESTONE1.jpg",
	"src2": "images/BLACKLIMESTONE2.jpg",
	"chemical_Classification": "Detrital/Clastic",
	"colour": "Black",
	"streak": "Black, gray",
	"luster": "Dull",
	"mohs_Hardness": "3-4",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.8-3.0",
	"chemical_Composition": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"specialProperties": "Used mainly for internal flooring and covering in residential and commercial buildings",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

// rock 4
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Detrital/Clastic",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Clayey",
	"wrongAns3": "Siliciclastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Reddish Brown",
	"wrongAns2": "White",
	"wrongAns3": "Red"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull to pearly",
	"wrongAns2": "Earthy",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.86-2.87",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Quartz, feldspar, Lithics ",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Primarily made up of quartz and feldspar grains together with small amounts of mica"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 4,
	"originalName": "Breccia",
	"dummyName": "sedirocks4",
	"src": "images/BRECCIA.jpg",
	"src1": "images/BRECCIA1.jpg",
	"src2": "images/BRECCIA2.jpg",
	"chemical_Classification": "Detrital/Clastic",
	"colour": "Reddish Brown",
	"streak": "White",
	"luster": "Dull to Pearly",
	"mohs_Hardness": "7",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.86-2.87",
	"chemical_Composition": "Quartz, feldspar, Lithics ",
	"specialProperties": "Used as architectural stones for paving stone, building,stone, tiles, window sills, and interior building veneers",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 5
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Detrital/Clastic",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Siliciclastic",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Tan, brown, gray and yellow",
	"wrongAns2": "White,gray,yellow",
	"wrongAns3": "Black,gray"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Earthy",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "2-3",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.7-3.0",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Calcium carbonate, iron oxide, silica",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Primarily made up of quartz and feldspar grains together with small amounts of mica"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 5,
	"originalName": "Calcareous Conglomerate",
	"dummyName": "sedirocks5",
	"src": "images/CALCAREOUSCONGLOMERATE.jpg",
	"src1": "images/CALCAREOUSCONGLOMERATE1.jpg",
	"src2": "images/CALCAREOUSCONGLOMERATE2.jpg",
	"chemical_Classification": "Detrital/Clastic",
	"colour": "Tan, brown, gray and yellow",
	"streak": "White",
	"luster": "Dull",
	"mohs_Hardness": "2-3",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.7-3.0",
	"chemical_Composition": "Calcium carbonate, iron oxide, silica",
	"specialProperties": "Used as a source of aggregates in construction",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 6
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Detrital/Clastic",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Silicate",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Red, Brown, Yellow and White",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Glassy",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.2-2.8",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Aluminium Oxide, CaO, Iron (III) Oxide, MgO and Sodium Oxide",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Primarily made up of quartz and feldspar grains together with small amounts of mica"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 6,
	"originalName": "Coarse_Grained_Sandstone",
	"dummyName": "sedirocks6",
	"src": "images/FERRUGINOUSSANDSTONE.jpg",
	"src1": "images/FERRUGINOUSSANDSTONE1.jpg",
	"src2": "images/FERRUGINOUSSANDSTONE2.jpg",
	"chemical_Classification": "Detrital/Clastic",
	"colour": "Red, Brown, Yellow and White",
	"streak": "White",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.2-2.8",
	"chemical_Composition": "Aluminium Oxide, CaO, Iron (III) Oxide, MgO and Sodium Oxide",
	"specialProperties": "Used for cement and concrete production, Pavement and road Construction, tunnelling and monumental stones, tiles, window sills, and interior building veneers",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 7
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Detrital/Clastic",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Silicate",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Tan to brown",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Earthy",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "2-3",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.86-2.88",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Made of rounded pebbles and sand that is usually held together (cemented) by silica, calcite or iron oxide ",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Quartz, feldspar, Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent "
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 7,
	"originalName": "Conglomerate",
	"dummyName": "sedirocks7",
	"src": "images/CONGLOMERATE.jpg",
	"src1": "images/CONGLOMERATE1.jpg",
	"src2": "images/CONGLOMERATE2.jpg",
	"chemical_Classification": "Detrital/Clastic",
	"colour": "Tan to brown	",
	"streak": "White",
	"luster": "Dull",
	"mohs_Hardness": "2-3",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.86-2.88",
	"chemical_Composition": "Made of rounded pebbles and sand that is usually held together (cemented) by silica, calcite or iron oxide",
	"specialProperties": "Used as a crush where low-performance material is required and also used in the cement manufacturing industry",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 8
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Detrital/Clastic",
	"wrongAns1": "Siliciclastic",
	"wrongAns2": "Silicate",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Yellow, white, or gray",
	"wrongAns2": "White or black",
	"wrongAns3": "Tan to brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Yellow",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull to pearly",
	"wrongAns2": "Earthy",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Dull",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "2-3",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.3-2.7",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Mainly of calcium carbonate CaCO<sub>3</sub>. Can also contain magnesium carbonate and clay",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Quartz, feldspar, Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 8,
	"originalName": "Coral_Limestone",
	"dummyName": "sedirocks8",
	"src": "images/CORAL_LIMESTONE.jpg",
	"src2": "images/CORAL_LIMESTONE2.jpg",
	"chemical_Classification": "Detrital/Clastic",
	"colour": "Yellow, white, or gray",
	"streak": "White",
	"luster": "Dull to Pearly",
	"mohs_Hardness": "2-3",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.3-2.7",
	"chemical_Composition": "Mainly of calcium carbonate CaCO<sub>3</sub>. Can also contain magnesium carbonate and clay",
	"specialProperties": "Coral limestones have a beautiful appearance and are therefore often used as building stones",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 9
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Detrital/Clastic",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Silicate",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Black, gray, red ",
	"wrongAns2": "White",
	"wrongAns3": "Gray"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "Brown to red",
	"wrongAns2": "Black",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Earthy",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "3",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.68",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Coral shale consists of at least 30 percent clay, with varying amounts of quartz, feldspar, carbonates, iron oxides, and organic matter",
	"wrongAns1": "Quartz, feldspar, Lithics ",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Primarily made up of quartz and feldspar grains together with small amounts of mica"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 9,
	"originalName": "Ferruginous Shale",
	"dummyName": "sedirocks9",
	"src": "images/FerruginousShale.jpg",
	//"src1": "images/FerruginousShale1.jpg",
	//"src2": "images/FerruginousShale2.jpg",
	"chemical_Classification": "Detrital/Clastic",
	"colour": "Black, gray, red ",
	"streak": "Brown to red",
	"luster": "Dull",
	"mohs_Hardness": "3",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.68",
	"chemical_Composition": "Coral shale consists of at least 30 percent clay, with varying amounts of quartz, feldspar, carbonates, iron oxides, and organic matter",
	"specialProperties": "Used to make brick, pottery, tile, and Portland cement",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 10
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Detrital/Clastic",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Silicate",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Mostly Red, Brown, Yellow ",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "Reddish, brown",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Pearly",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.5-2.8",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Contains at least 15% Iron oxides along with oxides of aluminium, sodium and potassium",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Primarily made up of quartz and feldspar grains together with small amounts of mica"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 10,
	"originalName": "Ferruginous Sandstone",
	"dummyName": "sedirocks10",
	"src": "images/FERRUGINOUS_SANDSTONE.jpg",
	"src1": "images/FERRUGINOUS_SANDSTONE1.jpg",
	"src2": "images/FERRUGINOUS_SANDSTONE2.jpg",
	"chemical_Classification": "Detrital/Clastic",
	"colour": "Mostly Red, Brown, Yellow ",
	"streak": "Reddish, brown",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.5-2.8",
	"chemical_Composition": "Contains at least 15% Iron oxides along with oxides of aluminium, sodium and potassium",
	"specialProperties": "Used as foundations stones, fire place surrounds, wall cladding and as garden benches",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 11
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Microcrystalline or cryptocrystalline",
	"wrongAns1": "Detrital/Clastic",
	"wrongAns2": "Silicate",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Gray, brown, grayish brown and light green to rusty red (occasionally dark green)",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Waxy or resinous",
	"wrongAns2": "Pearly",
	"wrongAns3": "Earthy"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "No cleavage planes.",
	"wrongAns1": "Pencil",
	"wrongAns2": "Dull",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.6-2.64",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Primarily made up of quartz and feldspar grains together with small amounts of mica"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "None of these",
	"wrongAns1": "Opaque",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 11,
	"originalName": "Chert",
	"dummyName": "sedirocks11",
	"src": "images/Chert.jpg",
//"src1": "images/Chert1.jpg",
//	"src2": "images/Chert2.jpg",
	"chemical_Classification": "Microcrystalline or cryptocrystalline",
	"colour": "Gray, brown, grayish brown and light green to rusty red (occasionally dark green)",
	"streak": "White",
	"luster": "Waxy or resinous",
	"mohs_Hardness": "7",
	"cleavage": "No cleavage planes",
	"diaphaneity": "NA",
	"gravity": "2.6-2.64",
	"chemical_Composition": "Silicon dioxide (SiO<sub>2</sub>)",
	"specialProperties": "Chert improves humor and has a calming influence. Helps redirect energy and is a stone of protection and healing. Aids memory and helps to find lost items. Enhances serenity and brings peaceful sleep",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 12
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Non-Clastic",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Silicate",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Black and Brownish black",
	"wrongAns2": "White",
	"wrongAns3": "Red"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull to Vitreous to Submetallic",
	"wrongAns2": "Pearly",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None",
	"wrongAns1": "Pencil",
	"wrongAns2": "Non-existent",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "1-2",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "1.10 to 2.24",
	"wrongAns1": "4.3 to 5",
	"wrongAns2": "2.5 to 2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Coquina is composed mainly of the mineral calcite, often including some phosphate, in the form of seashells or coral.",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Primarily made up of quartz and feldspar grains together with small amounts of mica"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 12,
	"originalName": "Coal",
	"dummyName": "sedirocks12",
	"src": "images/Coal.jpg",
	"chemical_Classification": "Non-Clastic",
	"colour": "Black and Brownish black",
	"streak": "White",
	"luster": "Dull to Vitreous to Submetallic",
	"mohs_Hardness": "1-2",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "1.10 to 2.24",
	"chemical_Composition": "Coquina is composed mainly of the mineral calcite, often including some phosphate, in the form of seashells or coral",
	"specialProperties": "Coquina contains very little silt or clay-size particles, and its fossil fragments are lightly cemented together. This makes it an extremely porous rock that can serve as an aquifer for community and private water supplies",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//rock 13
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Siliciclastic",
	"wrongAns1": "Detrital",
	"wrongAns2": "Clastic",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Black, Blue, Brown, Green, Gray, Orange, Red, White, Yellow, and in different hues of black color ",
	"wrongAns2": "Blue,Black,Red,pitch,golden,gray",
	"wrongAns3": "Black,pink,gray,green,silver"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Blue",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Pencil",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Non-existent",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Pencil"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "2-3",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.2-2.8",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Aluminium Oxide, NaCl, CaO, Iron (III) Oxide, Silicon Dioxide",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Primarily made up of quartz and feldspar grains together with small amounts of mica"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 13,
	"originalName": "Mudstone",
	"dummyName": "sedirocks13",
	"src": "images/Mudstone.jpg",
	"chemical_Classification": "Siliciclastic",
	"colour": "Black, Blue, Brown, Green, Gray, Orange, Red, White, Yellow, and in different hues of black color",
	"streak": "White",
	"luster": "Dull",
	"mohs_Hardness": "2-3",
	"cleavage": "Perfect",
	"diaphaneity": "Opaque",
	"gravity": "2.2-2.8",
	"chemical_Composition": "Aluminium Oxide, NaCl, CaO, Iron (III) Oxide, Silicon Dioxide",
	"specialProperties": "Mudstone is used to construct and cover shelves, kitchen and office counters and walling structures in a building. Granite is also used in the construction of statues and pavement structures.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//rock 14
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Clastic",
	"wrongAns1": "Clayey",
	"wrongAns2": "Detrital",
	"wrongAns3": "Siliciclastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Red",
	"correctAns": "Brown to yellow",
	"wrongAns2": "White to yellow",
	"wrongAns3": "Black to gray"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull to Pearly",
	"wrongAns2": "Earthy",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Non-existent",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "3-4",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "1.68",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Calcite (calcium carbonate, CaCO<sub>3</sub>)",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Primarily made up of quartz and feldspar grains together with small amounts of mica"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 14,
	"originalName": "Travertine",
	"dummyName": "sedirocks14",
	"src": "images/Travertine.jpg",
	"chemical_Classification": "Clastic",
	"colour": "It is brown to yellow due to impurities",
	"streak": "White",
	"luster": "Dull to Pearly ",
	"mohs_Hardness": "3-4",
	"cleavage": "None-existent",
	"diaphaneity": "Opaque",
	"gravity": "1.68",
	"chemical_Composition": "Calcite (calcium carbonate, CaCO<sub>3</sub>)",
	"specialProperties": "The structure of travertine stone is uniform with a soft texture and a low hardness, and is nowhere near as dense or hard as granite. Because of these attributes, Travertine stone is fairly easy to mine and process. The density of the stone is also light, allowing for manageable transportation",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//rock 15
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Composed of small coarse particles of sand, gravel, or other minute mineral material",
	"wrongAns1": "Argillaceous rock",
	"wrongAns2": "Carbonate sedimentary rock",
	"wrongAns3": "Feldspathic arenites"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Light shade of orange",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Green",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Pearly",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Non-existent"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.250",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.19",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "The main composition of gritstone is quartz, calcite and kaolin",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Contains at least 15% Iron oxides along with oxides of aluminium, sodium and potassium"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 15,
	"originalName": "Grit",
	"dummyName": "sedirocks15",
	"src": "images/Grit.jpg",
	"chemical_Classification": "Grit is composed of small coarse particles of sand, gravel, or other minute mineral material",
	"colour": "Light shade of orange ",
	"streak": "White",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "Perfect",
	"diaphaneity": "Opaque",
	"gravity": "2.250",
	"chemical_Composition": "The main composition of gritstone is quartz, calcite and kaolin",
	"specialProperties": "Gritstone or grit is a hard, coarse-grained, siliceous sandstone. This term is especially applied to such sandstones that are quarried for building material. British gritstone was used for millstones to mill flour, to grind wood into pulp for paper and for grindstones to sharpen blades.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 16
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Argillaceous Rock",
	"wrongAns1": "Siliciclastic",
	"wrongAns2": "Detrital",
	"wrongAns3": "Clastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Reddish to yellow ",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Earthy",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None of these",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "2",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "None of these",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "0"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Rich in aluminum and iron",
	"wrongAns1": "The main composition of gritstone is quartz, calcite and kaolin",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Contains at least 15% Iron oxides along with oxides of aluminium, sodium and potassium"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 16,
	"originalName": "Laterite",
	"dummyName": "sedirocks16",
	"src": "images/LATERITE1.jpg",
	"src1": "images/LATERITE2.jpg",
	"chemical_Classification": "Argillaceous Rock",
	"colour": "Reddish to yellow  ",
	"streak": "White",
	"luster": "Dull",
	"mohs_Hardness": "2",
	"cleavage": "NA",
	"diaphaneity": "Opaque",
	"gravity": "NA",
	"chemical_Composition": "Rich in aluminum and iron",
	"specialProperties": "In laterite areas where a high level of culture once prevailed, ruins often disclose laterite used as a building stone. Open cisterns, sewers, headwalls, culverts, flagstones, quays, moles, and breakwa- ters of laterite have functioned successfully for hundreds of years",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 17
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Carbonate sedimentary rocks",
	"wrongAns1": "Clayey",
	"wrongAns2": "Detrital",
	"wrongAns3": "Clastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Gray,white, yellow or brown",
	"wrongAns2": "Green",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull to Pearly ",
	"wrongAns2": "Pearly",
	"wrongAns3": "Grassy"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Non-existent",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "3-4",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.3-2.7",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "CaCO<sub>3</sub>",
	"wrongAns1": "SiO<sub>2</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 17,
	"originalName": "Limestone",
	"dummyName": "sedirocks17",
	"src": "images/LIMESTONE1.jpg",
	"src1": "images/LIMESTONE2.jpg",
	"chemical_Classification": "Carbonate sedimentary rocks",
	"colour": "Usually gray, but it may also be white, yellow or brown ",
	"streak": "White",
	"luster": "Dull to pearly",
	"mohs_Hardness": "3-4",
	"cleavage": "Non-existent ",
	"diaphaneity": "Opaque",
	"gravity": "2.3-2.7",
	"chemical_Composition": "CaCO<sub>3</sub>",
	"specialProperties": "Limestone is extremely durable. It does, however, absorb water and, since it is a carbonate rock, it is highly reactive when exposed to acids or even mildly acidic rainwater, and it can suffer substantial deterioration. The most common effect of weathering and erosion is loss of precise detail.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 18
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Feldspathic Arenites",
	"wrongAns1": "Siliciclastic",
	"wrongAns2": "Detrital",
	"wrongAns3": "Clastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Shades of red, yellow, orange, gray and brown",
	"wrongAns2": "White,yellow,silver",
	"wrongAns3": "Black,gray"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Pearly",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Non-existent ",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.7",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "SiO<sub>2</sub> ",
	"wrongAns1": "CaCO<sub>3</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "None of these",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 18,
	"originalName": "Micaceous Sandstone",
	"dummyName": "sedirocks18",
	"src": "images/MICAEOUS_SANDSTONES.jpg",
	"src1": "images/MICAEOUS_SANDSTONES1.jpg",
	"src2": "images/MICAEOUS_SANDSTONES2.jpg",
	"chemical_Classification": "Feldspathic Arenites",
	"colour": "Shades of red, yellow, orange, gray and brown",
	"streak": "White",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "Non-existent ",
	"diaphaneity": "NA",
	"gravity": "2.7",
	"chemical_Composition": "Silica (SiO<sub>2</sub>)",
	"specialProperties": "Sandstone is compact and quite hard. It has good compressive strength and low absorption property as well. It is fireproof and non-slippery. All these properties make sandstone just suitable to make walls",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 19
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Clastic ",
	"wrongAns1": "Non-Clastic",
	"wrongAns2": "Detrital",
	"wrongAns3": "Siliciclastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "White to tan",
	"wrongAns2": "Green",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Perfect",
	"correctAns": "Vitreous to Dull",
	"wrongAns2": "Pearly",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Non-existent",
	"wrongAns1": "Pencil",
	"wrongAns2": "Perfect",
	"wrongAns3": "Indistinct"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "3-4",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.7",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "2.5"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Calcite",
	"wrongAns1": "Calcium Carbonate",
	"wrongAns2": "Quartz, feldspar",
	"wrongAns3": "Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "None of these",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 19,
	"originalName": "Milli Oolitic Limestone",
	"dummyName": "sedirocks19",
	"src": "images/MILLIOLITIC_LIMESTONE.jpg",
	"src1": "images/MILLIOLITIC_LIMESTONE1.jpg",
	"src2": "images/MILLIOLITIC_LIMESTONE2.jpg",
	"chemical_Classification": "Clastic ",
	"colour": "White to tan ",
	"streak": "White",
	"luster": "Vitreous to Dull",
	"mohs_Hardness": "3-4",
	"cleavage": "Non-existent ",
	"diaphaneity": "NA",
	"gravity": "2.7",
	"chemical_Composition": "Calcite",
	"specialProperties": "Milli Oolitic limestone is a calcite cemented calcareous stone composed of shell fragments, practically non- crystalline in character. Generally without cleavage, and extremely uniform in composition and texture, oolitic limestone adjusts to temperature changes.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 20
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Clastic ",
	"wrongAns1": "Clayey",
	"wrongAns2": "Non-Clastic",
	"wrongAns3": "Siliciclastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "White to tan",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Vitreous to Dull",
	"wrongAns2": "Pearly",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Non-existent ",
	"wrongAns1": "Pencil",
	"wrongAns2": "Dull",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "3-4",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.7",
	"wrongAns1": "2.2",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Calcite  ",
	"wrongAns1": "Calcium Carbonate",
	"wrongAns2": "Quartz, feldspar",
	"wrongAns3": "Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "None of these",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);


//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 20,
	"originalName": "Oolitic Limestone",
	"dummyName": "sedirocks20",
	"src": "images/OOLITIC_LIMESTONE.jpg",
	"src1": "images/OOLITIC_LIMESTONE1.jpg",
	"src2": "images/OOLITIC_LIMESTONE2.jpg",
	"chemical_Classification": "Clastic ",
	"colour": "White to tan ",
	"streak": "White",
	"luster": "Vitreous to Dull",
	"mohs_Hardness": "3-4",
	"cleavage": "Non-existent ",
	"diaphaneity": "NA",
	"gravity": "2.7",
	"chemical_Composition": "Calcite",
	"specialProperties": "Oolitic limestone is a calcite cemented calcareous stone composed of shell fragments, practically non- crystalline in character. Generally without cleavage, and extremely uniform in composition and texture, oolitic limestone adjusts to temperature changes.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 21
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Quartz minerals ",
	"wrongAns1": "Clayey",
	"wrongAns2": "Siliciclastic",
	"wrongAns3": "Detrital/Clastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "White to gray ",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "None",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Glassy ",
	"wrongAns2": "Dull",
	"wrongAns3": "Vitreous to Dull"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None Conchoidal Fracture",
	"wrongAns1": "Pencil",
	"wrongAns2": "Perfect",
	"wrongAns3": "Indistinct"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.7",
	"wrongAns1": "2.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "CaCO<sub>3</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Transparent to nearly opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 21,
	"originalName": "Quartzite or siliceous sandstone",
	"dummyName": "sedirocks21",
	"src": "images/Quartzite.jpg",
	"chemical_Classification": "Quartz minerals ",
	"colour": "White to gray ",
	"streak": "None",
	"luster": "Glassy ",
	"mohs_Hardness": "7",
	"cleavage": "None Conchoidal Fracture",
	"diaphaneity": "Transparent to nearly opaque",
	"gravity": "2.7",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Quartzite, sandstone that has been converted into a solid quartz rock. Unlike sandstones, quartzites are free from pores and have a smooth fracture; when struck, they break through, not around, the sand grains, producing a smooth surface instead of a rough and granular one",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 22
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Silicate ",
	"wrongAns1": "Clayey",
	"wrongAns2": "Detrital",
	"wrongAns3": "Clastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Variable through gray, yellow, red to white",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "Tan or yellow",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Pearly",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Non-existent"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.2-2.8",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "CaCO<sub>3</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 22,
	"originalName": "Sandstone showing laminations",
	"dummyName": "sedirocks22",
	"src": "images/showingLaminations.jpg",
	"chemical_Classification": "Silicate  ",
	"colour": "Variable through gray, yellow, red to white",
	"streak": "Tan or yellow ",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "Perfect",
	"diaphaneity": "Opaque",
	"gravity": "2.2 to 2.8",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Sandstone is compact and quite hard. It has good compressive strength and low absorption property as well. It is fireproof and nonslippery. All these properties make sandstone just suitable to make walls.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 23
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Silicate",
	"wrongAns1": "Detrital",
	"wrongAns2": "Clayey",
	"wrongAns3": "Clastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Variable through gray, yellow, red to white",
	"wrongAns2": "White or green",
	"wrongAns3": "Black,red or blue"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "Tan or yellow ",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Perfect",
	"correctAns": "Dull",
	"wrongAns2": "Pearly",
	"wrongAns3": "Dull to Pearly"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Indistinct",
	"wrongAns2": "Pencil",
	"wrongAns3": "Non-existent"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.2-2.8",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "2.5"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "CaCO<sub>3</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 23,
	"originalName": "Sandstone showing ripple marks",
	"dummyName": "sedirocks23",
	"src": "images/RippleMarks.jpg",
	"chemical_Classification": "Silicate ",
	"colour": "Variable through gray, yellow, red to white",
	"streak": "Tan or yellow ",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "Perfect ",
	"diaphaneity": "Opaque",
	"gravity": "2.2 to 2.8",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Sandstone is compact and quite hard. It has good compressive strength and low absorption property as well. It is fireproof and nonslippery. All these properties make sandstone just suitable to make walls.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 24
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Silicate",
	"wrongAns1": "Detrital/Clastic",
	"wrongAns2": "Calcium carbonate",
	"wrongAns3": "Iron oxide"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Gray, yellow, red to white",
	"wrongAns2": "White or green",
	"wrongAns3": "Black,red or blue"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Gray",
	"correctAns": "Tan or yellow ",
	"wrongAns2": "Red",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Perfect",
	"correctAns": "Dull",
	"wrongAns2": "Pearly",
	"wrongAns3": "Waxy or resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Pencil",
	"wrongAns2": "Glassy",
	"wrongAns3": "Non-existent"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.2-2.8",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "2.5"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "CaCO<sub>3</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 24,
	"originalName": "Sandstone",
	"dummyName": "sedirocks24",
	"src": "images/SANDSTONE.jpg",
	"src1": "images/SANDSTONE1.jpg",
	"src2": "images/SANDSTONE2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Variable through gray, yellow, red to white ",
	"streak": "Tan or yellow",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "Perfect",
	"diaphaneity": "Opaque",
	"gravity": "2.2 to 2.8",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Sandstone is compact and quite hard. It has good compressive strength and low absorption property as well. It is fireproof and nonslippery. All these properties make sandstone just suitable to make walls",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 25
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Carbonate rock",
	"wrongAns1": "Clastic",
	"wrongAns2": "Siliciclastic",
	"wrongAns3": "Clayey"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Gray",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Perfect",
	"correctAns": "Vitreous to Dull",
	"wrongAns2": "Pearly",
	"wrongAns3": "Glassy"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "None of these",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "3-4",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.65 to 2.70",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "2.5"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "Calcium Carbonate",
	"wrongAns1": "Calcite",
	"wrongAns2": "Quartz, feldspar",
	"wrongAns3": "Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque ",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 25,
	"originalName": "Shelly Limestone",
	"dummyName": "sedirocks25",
	"src": "images/SHELLY_LIMESTONE.jpg",
	"src1": "images/SHELLY_LIMESTONE1.jpg",
	"src2": "images/SHELLY_LIMESTONE2.jpg",
	"chemical_Classification": "Carbonate rock",
	"colour": "Gray",
	"streak": "White",
	"luster": "Vitreous to Dull",
	"mohs_Hardness": "3-4",
	"cleavage": "NA",
	"diaphaneity": "Opaque",
	"gravity": "2.65 to 2.70",
	"chemical_Composition": "Calcium Carbonate",
	"specialProperties": "Shelly limestone is a sedimentary rock because it is made up of fragments. To be shelly, it is full of broken shells which are glued together with calcite. Calcium carbonate often makes up around 10% of the volume, whilst many varied sized shells from granular to very large pebbles. Its color is gray.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 26
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Clayey",
	"wrongAns1": "Detrital",
	"wrongAns2": "Clastic",
	"wrongAns3": "Siliciclastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "White",
	"wrongAns2": "Green",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Black",
	"correctAns": "White to gray  ",
	"wrongAns2": "Yellow",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Earthy",
	"correctAns": "Strong pitch",
	"wrongAns2": "Pearly",
	"wrongAns3": "Dull to pearly"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Pencil",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Non-existent"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "3-4",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.68",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "2.5"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "A typical shale is composed of about 58% clay minerals, 28% quartz, 6% feldspar, 5% carbonate minerals, and 2% iron oxides",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Quartz, feldspar, Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent "
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 26,
	"originalName": "White Shale",
	"dummyName": "sedirocks26",
	"src": "images/WhiteShale.jpg",
	"chemical_Classification": "Clayey",
	"colour": "White",
	"streak": "White to gray  ",
	"luster": "Strong pitch",
	"mohs_Hardness": "3-4",
	"cleavage": "Pencil",
	"diaphaneity": "Opaque",
	"gravity": "2.68",
	"chemical_Composition": "A typical shale is composed of about 58% clay minerals, 28% quartz, 6% feldspar, 5% carbonate minerals, and 2% iron oxides",
	"specialProperties": "Shales typically have a laminated structure and are fissile; i.e., they exhibit a tendency to split into thin layers that are usually parallel to the bedding-plane surface. Such physical properties as permeability and plasticity are largely dependent on the grain sizes of the constituent minerals",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//rock 27
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this sedimentary rock?",
	"correctAns": "Clayey",
	"wrongAns1": "Detrital",
	"wrongAns2": "Clastic",
	"wrongAns3": "Siliciclastic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this sedimentary rock?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Yellow",
	"wrongAns2": "White",
	"wrongAns3": "Yellw to Gray"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this sedimentary rock?",
	"wrongAns1": "Light blue",
	"correctAns": "Yellow to gray",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this sedimentary rock?",
	"wrongAns1": "Perfect",
	"correctAns": "Strong pitch",
	"wrongAns2": "Vitreous",
	"wrongAns3": "Dull"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this sedimentary rock?",
	"correctAns": "Pencil",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Non-existent"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this sedimentary rock?",
	"correctAns": "3-4",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this sedimentary rock?",
	"correctAns": "2.68",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "2.5"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this sedimentary rock?",
	"correctAns": "A typical shale is composed of about 58% clay minerals, 28% quartz, 6% feldspar, 5% carbonate minerals, and 2% iron oxides",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Quartz, feldspar, Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this sedimentary rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 27,
	"originalName": "Yellow Shale",
	"dummyName": "sedirocks27",
	"src": "images/YellowShale.jpg",
	"chemical_Classification": "Clayey",
	"colour": "Yellow",
	"streak": "Yellow to gray",
	"luster": "Strong pitch",
	"mohs_Hardness": "3-4",
	"cleavage": "Pencil",
	"diaphaneity": "Opaque",
	"gravity": "2.68",
	"chemical_Composition": "A typical shale is composed of about 58% clay minerals, 28% quartz, 6% feldspar, 5% carbonate minerals, and 2% iron oxides",
	"specialProperties": "Shales typically have a laminated structure and are fissile; i.e., they exhibit a tendency to split into thin layers that are usually parallel to the bedding-plane surface. Such physical properties as permeability and plasticity are largely dependent on the grain sizes of the constituent minerals",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;
