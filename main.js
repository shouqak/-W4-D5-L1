
let but = document.getElementById("bun")
let butSizeL = document.getElementById("bun-sizel")
let butSizes = document.getElementById("bun-sizes")
let bunColor = document.getElementById("bun-color")
let bunBack = document.getElementById("bun-back")
let bunImg = document.getElementById("bun-img")

but.addEventListener('click' , ()=>{
let text = document.getElementById("text")
text.innerText="manal"

})

butSizes.addEventListener('click' , ()=>{
    let text = document.getElementById("text")
    text.style.fontSize="x-small";

    
    })

    butSizeL.addEventListener('click' , ()=>{
        let text = document.getElementById("text")
        text.style.fontSize="x-large";
    
        
        })

        bunColor.addEventListener('click' , ()=>{
            let text = document.getElementById("text")
            text.style.color="blue"
        
            
            })

           bunBack.addEventListener('click' , ()=>{
                let text = document.getElementById("text")
                text.style.backgroundColor="pink"
            
                
                })

                bunImg.addEventListener('click' , ()=>{
                    let text = document.getElementsByTagName("img")
                    
                    text.src="https://images.pexels.com/photos/31301003/pexels-photo-31301003/free-photo-of-grey-squirrel-on-fence-in-scottish-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                
                    
                    })