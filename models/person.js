let array = [{
    id: "1",
    name:"David Becham",
    age:"45",
    skill:"Right foot shooter"
},
{
    id: "2",
    name:"Lionel Messi",
    age:"33",
    skill:"Dribbling, Assist"
},
{
    id: "3",
    name:"Cristiano Ronaldo",
    age:"35",
    skill:"Long shoot and header"
},
{
    id: "4",
    name:"M.Rashford",
    age:"23",
    skill:"Dribbling"
}]

exports.find = async () => {
    
    return array;
  }; 


  exports.findById = (id) => {
    for (i = 0; i<=array.length; i++){
       if (id == array[i].id){
          return array[i];
       }
    }
 }