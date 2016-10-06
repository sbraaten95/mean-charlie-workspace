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

// Is there another less code way?

//   method 2
//   arr.forEach(function(value){
//     results.push("$" + value.boxOffice);
//   });
//
//
//   Method 1
//   for (var i = 0; i < arr.length; i++) {
//     results.push("$"+arr[i].boxOffice);
//   };
//
  return results;
}

// In node... use the console.log
// console.log(grabBoxOfficeData(topFilms));


//We have the original repo in Github
//I forked the repo and cloned it locally
//after typing git remote -v
//we can see where we can upate to
//to have changes updated to the main repo on my repo
//submit a change
//
// How do you get the changes on your machine?
//
// If I just do a pull on my own repo, it does nothing really. l
// That's just linked to my master Account, let's add another connection
// I have the original connection aptly named origin
// I can add a second connection called parent, or whatever you want.
//
// git remote add parent https://github.com/danieloostra/mean-charlie-workspace.git
//
// Now in my case, I can pull from my own origin... it's strange, but you can
// also create a connection to the class repo in the same way. Then you can
// goto gitHub to make the pull requests.
//
// look at what I see when I type git remote -v
//
// origin  https://github.com/danieloostra/mean-charlie-workspace.git (fetch)
// origin  https://github.com/danieloostra/mean-charlie-workspace.git (push)
// parent  https://github.com/danieloostra/mean-charlie-workspace.git (fetch)
// parent  https://github.com/danieloostra/mean-charlie-workspace.git (push)
//
// so now I can git pull parent master and grab what's been updated. that's
// just how I've created a new connection to my repo. You can pull to the
// class repo in the same way.
