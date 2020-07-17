// feetToMile

function feetToMile(feet) {
	if (feet < (0)) {
		return 'input cannot be less than zero';
    } 
     else {
            return (feet*0.00018939);
        }
}




// woodCalculator

function woodCalculator (chair , table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
 var result = woodCalculator( 5, 2 , 3);
 console.log(result);


 

// tinyFriend

function tinyFriend(names){
    var tiny = names[0];
    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < tiny.length){
            tiny = currentName;
        }
    }
     return tiny;
}
var result = tinyFriend(["Prerona" , "Raisa", "Sumu", "Tonny", "Priya", "Koli"]);
console.log(result);
