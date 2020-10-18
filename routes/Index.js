var express = require('express');
const fs = require('fs');
//One peculiar thing about the fs module is that all the methods are asynchronous by default, but they can also work synchronously by appending Sync.
var router = express.Router();
var counter = 0;
router.get('/', function (req, res) {
  res.send('Welcome to the Sample Program Please redirect to /MileStone1 url to view demo');
})
router.get('/MileStone1', function (req, res) {
data='';

//Node.js has many unique features which  allow for pagination,filteration and sorting on a request
function onlyUnique(value,index,self){
	return self.indexOf(value)===index;
}
try{ 
   var array = fs.readFileSync('Read.txt', 'utf8').split(',');
   }
   catch(err){
   	console.log(err);
   }
//Filtering the array to save only unique values
var unique=array.filter(onlyUnique);
//Looping through the unique elements and printing odd or even based on the numbers
var odd=[];
var even=[];
for(var i in unique){
 if(unique[i]%2===0){
 	even.push(unique[i]);
 }else{
 	odd.push(unique[i]);
 }
}

//Writing the unique elements in  the array to the Output file
counter=counter+1;
var output="Unique elements "+unique +"<br>";
output=output+"Odd elements  "+odd+"<br>"+"Even elements "+even+"<br>";
output=output+" "+"Number of times executed "+counter;
try { 
  fs.writeFileSync("Output.txt",output+"\n",{flag:'a+'});   //'a+' is append mode 
  console.log("File written successfully"); 
  res.send("Input"+ " "+array +"<br>"+"Output"+" "+output);
} catch(err) { 
  console.error(err); 
} 


 
})


module.exports = router;