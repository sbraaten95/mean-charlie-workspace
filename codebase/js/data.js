var topFilms =[{
          title: "Don't Breath",
          tomatoMeter: 86,
          boxOffice: 15.7
        },{
          title: "Suicide Squad",
          tomatoMeter: 26,
          boxOffice: 73.2
        },{
          title: "Top Gun Part 2",
          tomatoMeter: 87,
          boxOffice: 222.2
        },{
          title: "Kubo and the Two Strings",
          tomatoMeter: 96,
          boxOffice: 23.1
        },{
          title: "Sausage Party Redux",
          tomatoMeter: 92,
          boxOffice: 1.2
        }];

function grabBoxOfficeData(arr){
  // var results = [];

  //Method 3
  //This returns a newe array with the results.
  return arr.map(function(value){
    return "$" + value.boxOffice;
  });


  //method 2
  // arr.forEach(function(value){
  //   results.push("$" + value.boxOffice);
  // });


  //Method 1
  // for (var i = 0; i < arr.length; i++) {
  //   results.push("$"+arr[i].boxOffice);
  // };

  return results;
}

// In node... use the console.log
console.log(grabBoxOfficeData(topFilms));


//We have the original repo in Github
//I forked the repo and cloned it locally
//after typing git remote -v
//we can see where we can upate to
//to have changes updated to the main repo on my repo
//submit a change
