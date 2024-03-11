
let counter = 0;


const inputField = document.getElementById('input-field');
const latestContainer = document.getElementById('latest-container');
const counterRead = document.getElementById('counter-read');
const cardContainerDiscuss = document.getElementById('discuss-card');
const loadAllCategory = (manuelData) => {
    fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${manuelData}`)
        .then((res) => res.json())
        // .then((data)=> console.log(data.posts[0].author.name))
        .then((data) => {

            document.getElementById('loading-spiner1').style.display = 'block';

            setTimeout(() => {
                document.getElementById('side-bar').classList.remove('hidden');
                document.getElementById('loading-spiner1').style.display = 'none';

                data.posts.forEach(category => {
                    // console.log(category.category)

                    // const cardContainerDiscuss = document.getElementById('discuss-card');


                    const div = document.createElement('div');
                    div.innerHTML = `

                <div class="prime-card w-full  lg:w-[100%]  flex p-4 h-auto lg:h-[300px] border-none">
                <div class="flex justify-center gap-6">
                    <!-- first row -->
                    <div class="w-[10%]">
                        <div class="dot w-[10px] h-[10px] rounded-full relative left-12 ${category.isActive ? 'bg-green-600' : 'bg-red-600'}">

                        </div>
                        <img class="rounded-full" src="${category.image}" alt="">
                    </div>
                    <!-- main container -->
                    <div class="w-[80%] space-y-4">
                        <div class="flex gap-6">
                            <p># ${category.category}</p>
                            <p>Author : ${category.author.name}</p>
                        </div>
                        <h1 class="font-mulish font-bold text-xl ">
                        ${category.title}
                        </h1>

                        <p class="font-inter font-normal text-base text-[#12132D99] w-[50%]">${category.description}</p>

                        <hr class="line">

                        <div class="flex items-center gap-5 text-xl ">
                            <p><i class="fa-regular fa-message"></i> ${category.comment_count}</p>
                            <p><i class="fa-regular fa-eye"></i>${category.view_count}</p>
                            <p><i class="fa-regular fa-clock"></i> ${category.posted_time} min</p>
                            <p onclick="ChildRead(('${category.title.replace("'","")}') ,  ('${category.view_count}'));" class="read-btn pl-0 lg:pl-10"><span class="bg-[#10B981] rounded-full px-2 py-1"><i
                                        class="fa-solid fa-envelope text-white"></i></span></p>
                        </div>
                    </div>
                </div>
            </div>
                `
                    cardContainerDiscuss.appendChild(div);
                })




            }, 2000);
        })
}
const ChildRead = (title, viewCount) => {
    counter++;
    counterRead.innerText = counter;
    const rightSideBox = document.getElementById('right-side-box-content');

    const div1 = document.createElement('div');
    div1.innerHTML = `

    <div class="flex items-center gap-6 mt-5 right-mini-box shadow-xl p-5">
            <h1 class="w-[60%] font-mulish font-semibold text-base text-[#12132D]">${title}</h1>
            <p><i class="fa-regular fa-eye"></i> ${viewCount}</p>
        </div> 

    `
    rightSideBox.appendChild(div1);
}


const loadLatestCategory = () => {

    fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('loading-spiner2').style.display = 'block';


            setTimeout(() => {
                document.getElementById('loading-spiner2').style.display = 'none';
                latestContainer.innerHTML = '';
                data.forEach((latest) => {
                    const div2 = document.createElement('div');
                    div2.innerHTML = `
    
               <div class="space-y-3 latest-cards p-5 h-[550px]">
               <div>
                   <img class="w-[100%]" src="${latest.cover_image}" alt="">
               </div>
               <p class="font-mulish font-normal text-base text-[#12132D99]"><span><i
                           class="fa-regular fa-calendar"></i> ${latest.author.posted_date?latest.author.posted_date:'No Published Date'}</span></p>
               <p class="font-mulish font-extrabold text-lg">${latest.title}</p>
               <p class="font-mulish font-normal text-base text-[#12132D99]">
                   ${latest.description}
               </p>
               <div class="">
                   <div class="flex items-center gap-6">
                       <img class="w-[20%] rounded-full" src="${latest.profile_image}" alt="">
                       <p class="font-mulish font-bold">${latest.author.name}<br><span
                               class="font-mulish font-normal text-[#12132D99] text-sm">${latest.author.designation ? latest.author.designation : 'Unknown'}</span>
                       </p>
                   </div>
    
    
    
               </div>
           </div>
               `
                    latestContainer.appendChild(div2);
                })
            }, 2000)
        });
}


const inputFieldHandle = () => {

    const text1 = inputField.value

    const text = text1.toLowerCase()
    if (text === 'coding' || text === 'music' || text === 'comedy') {
        cardContainerDiscuss.innerHTML = '';
        loadAllCategory(text);
        inputField.value = '';

    }
    else {
        inputField.value = '';
        alert(`Please Enter :
        comedy , coding or music!!`);
    }
}


const firstFetch = () => {
    fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
        .then((res) => res.json())
        // .then((data)=> console.log(data.posts[0].author.name))
        .then((data) => {

            document.getElementById('loading-spiner1').style.display = 'block';

            setTimeout(() => {
                document.getElementById('side-bar').classList.remove('hidden');
                document.getElementById('loading-spiner1').style.display = 'none';

                data.posts.forEach(category => {
                    // console.log(category.category)

                    // const cardContainerDiscuss = document.getElementById('discuss-card');


                    const div = document.createElement('div');
                    div.innerHTML = `

            <div class="prime-card w-full  lg:w-[100%]  flex p-4 h-auto lg:h-[300px] border-none">
            <div class="flex justify-center gap-6">
                <!-- first row -->
                <div class="w-[10%]">
                    <div class="dot w-[10px] h-[10px] rounded-full relative left-12 ${category.isActive ? 'bg-green-600' : 'bg-red-600'}">

                    </div>
                    <img class="rounded-full" src="${category.image}" alt="">
                </div>
                <!-- main container -->
                <div class="w-[80%] space-y-4">
                    <div class="flex gap-6">
                        <p># ${category.category}</p>
                        <p>Author : ${category.author.name}</p>
                    </div>
                    <h1 class="font-mulish font-bold text-xl ">
                    ${category.title}
                    </h1>

                    <p class="font-inter font-normal text-base text-[#12132D99] w-[50%]">${category.description}</p>

                    <hr class="line">

                    <div class="flex items-center gap-5 text-xl ">
                        <p><i class="fa-regular fa-message"></i> ${category.comment_count}</p>
                        <p><i class="fa-regular fa-eye"></i>${category.view_count}</p>
                        <p><i class="fa-regular fa-clock"></i> ${category.posted_time} min</p>
                        <p onclick="ChildRead(('${category.title.replace("'","")}') ,  ('${category.view_count}'));" class="read-btn pl-0 lg:pl-10"><span class="bg-[#10B981] rounded-full px-2 py-1"><i
                                    class="fa-solid fa-envelope text-white"></i></span></p>
                    </div>
                </div>
            </div>
        </div>
            `
                    cardContainerDiscuss.appendChild(div);
                })




            }, 2000);
        })
}

firstFetch();
loadLatestCategory();
loadAllCategory();







