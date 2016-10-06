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
  var results = [];

  // arr.forEach(function(value){
  //   results.push("$" + value.boxOffice);
  // });

  for (var i = 0; i < arr.length; i++) {
    results.push("$"+arr[i].boxOffice);
  };

  return results;
}
