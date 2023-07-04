
const sections = document.querySelectorAll('.section');//header
const sectBtns = document.querySelectorAll('.controls'); //overall section of buttons
const sectBtn = document.querySelectorAll('.control');//button
// const click = document.querySelectorAll('.click');
const allSections = document.querySelector('.main-content'); //body

function PageTransitions(){
    //Button Click active class--changes green and where is active class
    for(let i = 0; i < sectBtn.length; i++){
      sectBtn[i].addEventListener('click', function() {
         let currentBtn = document.querySelectorAll('.active-btn');
          currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
           this.className += ' active-btn';
    }) 
    }

        //Button Click active class
        // for(let i = 0; i < click.length; i++){
        //     click[i].addEventListener('click', function() {
        //         let currentBtn = document.querySelectorAll('.active-btn');
        //         currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
        //         this.className += ' active-btn';
        //     }) 
        // }

    //Sections Active Class
    allSections.addEventListener('click', (e) => {
        //whatever is clicked, target the dataset, and put that dataset into variable
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')

            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }    
    })



    
    // TOGGLE THEME===========================================================

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
})
}
PageTransitions();


