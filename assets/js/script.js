/* 
_______________________________________________
///////////////////////////////////////////////
              general code for all
_______________________________________________    
*/

// Sidebar toggle
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('click', () => {
  sidebar.classList.remove('-translate-x-full');
});

closeIcon.addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
});

// nav sticky, top link
const header = document.getElementById('header');
const topLink = document.getElementById('topLink');

window.addEventListener('scroll',()=>{
  const scrollHeight = window.pageYOffset;
  const navHeight = header.getBoundingClientRect().height;
  if(scrollHeight > navHeight){
    header.classList.add('nav-sticky');
  }
  else{
    header.classList.remove('nav-sticky');
  }
  if(scrollHeight > 500){
    topLink.classList.add('show-top-link')
  }
  else{
    topLink.classList.remove('show-top-link')
  }
});
/* 
_______________________________________________
///////////////////////////////////////////////
              Home Page
_______________________________________________    
*/

// counter timer
const docHours = document.getElementById('hours');
const docMinutes = document.getElementById('minutes');
const docSeconds = document.getElementById('seconds');

// Function to reset the countdown timer
const resetCountdown = () => {
  const countdownEndTime = new Date().getTime() + 50 * 60 * 60 * 1000; // 50 hours in milliseconds
  localStorage.setItem('countdownEndTime', countdownEndTime);
  return countdownEndTime;
};

// Get the countdown end time from local storage or set a new one
let countdownEndTime = localStorage.getItem('countdownEndTime');
if (!countdownEndTime || isNaN(parseInt(countdownEndTime, 10))) {
  countdownEndTime = resetCountdown(); // Reset if not set or invalid
} else {
  countdownEndTime = parseInt(countdownEndTime, 10);
}

const interval = setInterval(() => {
  const nowDate = new Date().getTime();
  const distance = countdownEndTime - nowDate;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  docHours.textContent = String(hours).padStart(2, '0');
  docMinutes.textContent = String(minutes).padStart(2, '0');
  docSeconds.textContent = String(seconds).padStart(2, '0');

  if (distance < 0) {
    clearInterval(interval);
    docHours.textContent = "00";
    docMinutes.textContent = "00";
    docSeconds.textContent = "00";
    localStorage.removeItem('countdownEndTime');
  }
}, 1000);



/* 
_______________________________________________
///////////////////////////////////////////////
              shop page
_______________________________________________    
*/

// menu filters
const menu = [
  {
    id: 1,
    img: '../assets/media/product/p1.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$33',
    category: 'pants'
  },
  {
    id: 2,
    img: '../assets/media/product/p2.webp',
    brand: 'gucci',
    title: 'Sky blue denim shirt',
    price: '$28',
    category: 'shirts'
  },
  {
    id: 3,
    img: '../assets/media/product/p3.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$39',
    category: 'tshirts'
  },
  {
    id: 4,
    img: '../assets/media/product/p4.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$43',
    category: 'pants'
  },
  {
    id: 5,
    img: '../assets/media/product/p5.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$46',
    category: 'pants'
  },
  {
    id: 6,
    img: '../assets/media/product/p6.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$22',
    category: 'shirts'
  },
  {
    id: 7,
    img: '../assets/media/product/p7.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$41',
    category: 'shirts'
  },
  {
    id: 8,
    img: '../assets/media/product/p8.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$36',
    category: 'tshirts'
  },
  {
    id: 9,
    img: '../assets/media/product/n9.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$41',
    category: 'shirts'
  },
  {
    id: 10,
    img: '../assets/media/product/n10.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$41',
    category: 'shirts'
  },
  {
    id: 11,
    img: '../assets/media/product/n11.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$41',
    category: 'shirts'
  },
  {
    id: 12,
    img: '../assets/media/product/n12.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$41',
    category: 'shirts'
  },
  {
    id: 13,
    img: '../assets/media/product/n13.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$41',
    category: 'shirts'
  },
  {
    id: 14,
    img: '../assets/media/product/n14.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$41',
    category: 'shirts'
  },
  {
    id: 15,
    img: '../assets/media/product/n15.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$41',
    category: 'shirts'
  },
  {
    id: 16,
    img: '../assets/media/product/n16.webp',
    brand: 'zara',
    title: 'Sky blue denim shirt',
    price: '$41',
    category: 'shirts'
  }
];

const shopProducts = document.querySelector('.shop-container-product');
const filterBtn = document.querySelectorAll('.filter-btn');
// show menu
window.addEventListener('DOMContentLoaded',()=>{
  displayMenuItems(menu);
});
// "all" already active when dom contect loads
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('[data-id="all"]').classList.add('active');
  displayMenuItems(menu);
});
// filter menu
filterBtn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      filterBtn.forEach((btn) => btn.classList.remove('active'));
      e.currentTarget.classList.add('active');

      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem)=>{
        if(menuItem.category === category){
          return menuItem;
        }
      });

      if(category === 'all'){
        displayMenuItems(menu);
      }
      else{
        displayMenuItems(menuCategory);
      }
      
    });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item)=>{
    return `  <div class="product py-[10px] px-[12px] border-[1px] border-[#cce7d0] text-start cursor-pointer" onclick="window.location.href='product.html'">
                <img src=${item.img} loading="lazy" class="w-full rounded-[20px]">
                <div class="des py-2">
                    <span class="text-[12px] text-[#606063]">${item.brand}</span>
                    <p class="font-medium text-sm sm:text-md">${item.title}</p>
                    <div class="stars text-xs sm:text-sm py-2 text-[#F3B519]">
                      <i class='bx bxs-star'></i>
                      <i class='bx bxs-star'></i>
                      <i class='bx bxs-star'></i>
                      <i class='bx bxs-star'></i>
                      <i class='bx bxs-star-half'></i>
                    </div>
                    <p class="font-semibold text-[#088178]">${item.price}</p>
                    <div class="cart text-end px-4 relative"><i class='bx bx-cart-alt h-[35px] w-[35px] text-[#088178] bg-[#e8f6ea] hover:bg-[#088178] hover:text-[white] hover:cursor-pointer hover:bg-[#088178] hover:text-[white] hover:cursor-pointer rounded-full font-medium border-[1px] border-[#cce7d0] text-[18px] flex items-center justify-center absolute right-0 sm:right-2 bottom-0'></i></div>
                </div>
              </div>`
  });
  displayMenu = displayMenu.join("");
  shopProducts.innerHTML = displayMenu;

};
/* 
_______________________________________________
///////////////////////////////////////////////
            single product page
_______________________________________________    
*/
const mainImg = document.getElementById('main-img');
const smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = ()=>{
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = ()=>{
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = ()=>{
  mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = ()=>{
  mainImg.src = smallImg[3].src;
};