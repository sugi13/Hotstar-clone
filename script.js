let ContainerOne = document.querySelector(".container-1");
let ContainerTwo = document.querySelector(".container-2");
let ContainerThree = document.querySelector(".container-3");
let ContainerFour = document.querySelector(".container-4");
let ContainerFive = document.querySelector(".container-5");



let imageSlides = document.querySelectorAll(".img-slide");
let NextButton = document.querySelector("#next");
let PreviousButton = document.querySelector('#prev');
let MenuContainer = document.getElementById("Menu");
let MenuButton = document.getElementById("Menu-btn")

let currentIndex = 0;

// Toggle Menu //

function ToggleMenu(){
   if(MenuContainer.style.display == "block"){
       MenuContainer.style.display = "none";
   }
   else {
       MenuContainer.style.display = "block";
   }
}
MenuButton.addEventListener("click", ToggleMenu);









// slide function //

function showOne(){
    for (let i = 0; i < imageSlides.length; i++){
        if(currentIndex === i){
            imageSlides[currentIndex].style.display = "block";
        }
        else {
            imageSlides[i].style.display = "none";
        }
    }
}

showOne();

function slideright(){
    imageSlides[currentIndex + 1].style.display = "block";
    imageSlides[currentIndex].style.display = "none";
    currentIndex++; 
}

function slideleft(){
    imageSlides[currentIndex -1].style.display = "block";
    imageSlides[currentIndex].style.display = "none";
    currentIndex--;

}

NextButton.addEventListener("click", slideright);
PreviousButton.addEventListener("click", slideleft);


// adding images//

let ArrayOne = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v",
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2038/1102038-v-1bac28aa23cb",
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v",
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v",
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1327/441327-v",
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v",
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7393/1000087393/1000087393-v",
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v"
    }
];

let ArrayTwo = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795",
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4296/1000194296/1000194296-v",
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8061/928061-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1347/1091347-v-1ddd8b64ce22"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2069/1062069-v-f34508e5a405"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2462/742462-v",
    }
];

let ArrayThree = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/407/1110407-v-b107820b6918"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8354/1108354-v-94b4c49f3938"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5288/1105288-v-61f6f6df0137"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/461/1080461-v-e627f18c989a"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4910/1104910-v-6e6a4b59535e"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7607/1097607-v-991130b4ec64"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8804/1068804-v-900825dcd2d0"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4299/1074299-v-a4563c5fe889"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8804/1068804-v-900825dcd2d0"
    }
];

let ArrayFour = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/88/1100088-v-b96714f721d0"
    }, 
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8721/1078721-v-868cbfb9539d"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6104/686104-v"
    }, 
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6879/1036879-v-0c7332475e07"
    }, 
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4569/674569-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4528/674528-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1109/1071109-v-e87ffb9ba90f"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5180/875180-v"
    }, 
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5229/875229-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/88/1100088-v-b96714f721d0"
    }
];

let ArrayFive = [
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9726/439726-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/701/600701-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5953/525953-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7309/177309-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7416/957416-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1354/1000001354/1000001354-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4851/1000104851/1000104851-v"
    },
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5002/705002-v"
    }
];




function showTopPicks(){
    
    ArrayOne.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        ContainerOne.appendChild(imgDiv);
    })
}

function showPopularMovies(){
    ArrayTwo.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        ContainerTwo.appendChild(imgDiv);
    })
}

function DisneyHotstar(){
    ArrayThree.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        ContainerThree.appendChild(imgDiv);
    })
}

function PopInTamilMovies(){
    ArrayFour.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        ContainerFour.appendChild(imgDiv);
    })
}

function BestOfBollywood(){
    ArrayFive.forEach((img)=>{
        let NewImgElement = document.createElement("img");
        NewImgElement.src = img.src;
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img");
        imgDiv.appendChild(NewImgElement);
        ContainerFive.appendChild(imgDiv);
    })
}

showTopPicks()
showPopularMovies()
DisneyHotstar()
PopInTamilMovies()
BestOfBollywood()


