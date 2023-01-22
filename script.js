let card = document.getElementById("cardContainer");
let url = "https://kontests.net/api/v1/all";
let a = fetch(url)
let v = a.then((v) => {
    console.log("scriptloaded")
    return v.json();
}).then((v) => {
    console.log(v)
    load(v);

})
let imgadd = {
    "CodeForces": "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062020/codeforces_logo.png?Qlx1_zCw.Q4T7PHPosbkLyNiBJQWX7GD&itok=6wPhjh1X",
    "CodeForces::Gym": "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062020/codeforces_logo.png?Qlx1_zCw.Q4T7PHPosbkLyNiBJQWX7GD&itok=6wPhjh1X",
    "TopCoder": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/tdenoarg7lu2emnoyu7c",
    "AtCoder": "https://d1q9av5b648rmv.cloudfront.net/v3/1024x1024/sticker/m/white/front/6242844/1614660290-967x954.png.jpg?h=508214e01a4eb6c5b734533da4420fed45bffa88&printed=true",
    "CS Academy": "https://play-lh.googleusercontent.com/mNLWhhjA3m3fNMxW8cK9l-PgCkUkvghvnYvdob5Eze4gOeod7FdH38huer7ulzTeWV8x=w480-h960-rw",
    "CodeChef": "https://pbs.twimg.com/media/EBcvIcaWwAEjIOA.png",
    "HackerRank": "https://cdn-images-1.medium.com/max/2600/1*UGT1Rh9xLww3JeIDR1F0RQ.png",
    "HackerEarth": "https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2021/07/16/HackerEarthFeatureImage.png",
    "Kick Start": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200908225219/What-is-Google-Kick-Start-Important-Dates-Eligibility-Contest-Details.png",
    "LeetCode": "https://leetcode.com/static/images/LeetCode_Sharing.png",
    "Toph": "https://static.toph.co/images/logo_120h.png?_=e36c556d521158f36164031eac9b2c0a0190f8b2"
}
var data;
const load = (v) => {
    data = v;
    let ihtml = ""
    for (index in v) {
        let uri = "";
        uri = imgadd[(v[index].site)]
        ihtml += `
       <div class="card my-2" style="width: 22rem; margin: 0 0.5rem">
  <img class="card-img-top" src="${uri}" alt="Card image cap" style="display: flex;
  justify-content: center;
   
   
   width: 100%; height:100%">
  <div class="card-body">
    <h5 class="card-title">${v[index].name}</h5>
    <p class="card-text">Status: ${v[index].status}</p>
    <p>Start Date(y-m-d):      <p>${v[index].start_time} </p></p>
    <p class="card-text"> End Date(y-m-d): <p>${v[index].end_time}</p> </p>
    <p class="card-text">Duration: ${Math.round(v[index].duration/3600)} hours</p>



    <a href="${v[index].url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
       `
    }
    card.innerHTML = ihtml

}
let e = document.getElementsByClassName("i24h")[0];
e.addEventListener('click', () => {
    card.innerHTML = " ";
    let ihtml = "";
    let count = 0;
    for (index in data) {
        let uri = "";

        let co = "Yes"
        if (data[index].in_24_hours == "Yes") {
            count++;
            uri = imgadd[(data[index].site)]
            ihtml += `
        <div class="card my-2" style="width: 22rem; margin: 0 0.5rem">
   <img class="card-img-top" src="${uri}" alt="Card image cap" style="display: block;
   margin-left: auto;
   margin-right: auto;
   width: 50%;">
   <div class="card-body">
     <h5 class="card-title">${data[index].name}</h5>
     <p class="card-text">Status: ${data[index].status}</p>
     <p>Start Date(y-m-d):      <p>${data[index].start_time} </p>      </p>
     <p class="card-text">End Date(y-m-d): <p>${data[index].end_time}</p>
     <p class="card-text">Duration: ${Math.round(data[index].duration/3600)} hours</p>
 
 
 
     <a href="${data[index].url}" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
        `
        }
    }
    console.log(count)
    card.innerHTML = ihtml

})
e = document.getElementsByClassName("sabkuch")[0];
e.addEventListener('click', () => {
    card.innerHTML = " ";
    load(data);

})


e = document.getElementsByClassName("tm")[0];
e.addEventListener('click', () => {
    card.innerHTML = " ";
    let ihtml = "";
    let count = 0;
    for (index in data) {
        let uri = "";

        let co = "Yes"


        for (let c = 1; c <= 7; c++) {
            // console.log(data[index].end_time.substring(5, 7))
            let dt = new Date();
            dt = dt.getMonth()+1;
            // console.log("dt:",dt)
            let rep = Number.parseInt(data[index].end_time.toString().substring(5, 7));
            // console.log("rep:",rep)
            if (dt===rep||data[index].status=="CODING") {

                count++;
                uri = imgadd[(data[index].site)]
                ihtml += `
        <div class="card my-2" style="width: 22rem; margin: 0 0.5rem">
   <img class="card-img-top" src="${uri}" alt="Card image cap" style="display: block;
   margin-left: auto;
   margin-right: auto;
   width: 50%;">
   <div class="card-body">
     <h5 class="card-title">${data[index].name}</h5>
     <p class="card-text">Status: ${data[index].status}</p>
     <p>Start Date(y-m-d):      <p>${data[index].start_time} </p></p>
     <p class="card-text">End Date(y-m-d): <p>${data[index].end_time}</p></p>
     <p class="card-text">Duration: ${Math.round(data[index].duration/3600)} hours</p>
 
 
 
     <a href="${data[index].url}" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
        `
            }
        }
    }
    console.log(count)
    card.innerHTML = ihtml

})
e = document.getElementsByClassName("og")[0];
e.addEventListener('click', () => {
    card.innerHTML = " ";
    let ihtml = "";
    let count = 0;
    for (index in data) {
        let uri = "";

        let co = "Yes"
        if (data[index].status == "CODING") {
            count++;
            uri = imgadd[(data[index].site)]
            ihtml += `
        <div class="card my-2" style="width: 22rem; margin: 0 0.5rem">
   <img class="card-img-top" src="${uri}" alt="Card image cap" style="display: block;
   margin-left: auto;
   margin-right: auto;
   width: 50%;">
   <div class="card-body">
     <h5 class="card-title">${data[index].name}</h5>
     <p class="card-text">Status: ${data[index].status}</p>
     <p>Start Date(y-m-d):      <p>${data[index].start_time} </p></p>
     <p class="card-text">End Date(y-m-d): <p>${data[index].end_time}</p></p>
     <p class="card-text">Duration: ${Math.round(data[index].duration/3600)} hours</p>
 
 
 
     <a href="${data[index].url}" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
        `
        }
    }
    console.log(count)
    card.innerHTML = ihtml

})
e = document.getElementsByClassName("lter")[0];
e.addEventListener('click', () => {
    card.innerHTML = " ";
    let ihtml = "";
    let count = 0;
    for (index in data) {
        let uri = "";



        
            // console.log(data[index].end_time.substring(5, 7))
            let dt = new Date();
            dt = dt.getMonth()+2;
            // console.log("dt:",dt)
            let rep = Number.parseInt(data[index].end_time.toString().substring(5, 7));
            let repo = Number.parseInt(data[index].start_time.toString().substring(5, 7));
            // console.log("rep:",rep)
            if (repo>dt) {

                count++;
                uri = imgadd[(data[index].site)]
                ihtml += `
        <div class="card my-2" style="width: 22rem; margin: 0 0.5rem">
   <img class="card-img-top" src="${uri}" alt="Card image cap" style="display: block;
   margin-left: auto;
   margin-right: auto;
   width: 50%;">
   <div class="card-body">
     <h5 class="card-title">${data[index].name}</h5>
     <p class="card-text">Status: ${data[index].status}</p>
     <p>Start Date(y-m-d):      <p>${data[index].start_time} </p></p>
     <p class="card-text">End Date(y-m-d): <p>${data[index].end_time}</p></p>
     <p class="card-text">Duration: ${Math.round(data[index].duration/3600)} hours</p>
 
 
 
     <a href="${data[index].url}" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>
        `
            
        }
    }
    console.log(new Date(data[1].start_time))
    console.log(count)
    card.innerHTML = ihtml

})



