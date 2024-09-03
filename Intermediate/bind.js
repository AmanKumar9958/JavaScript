class react{
    constructor(){
        this.library = "React"
        this.server = "https://localhost:300"

        const button = document.querySelector('button')
        // button.addEventListener('click', this.handleClick)   // this will not take the reference of "this"..
        button.addEventListener('click', this.handleClick.bind(this))   // now this will take the reference of this..
    }
    handleClick(){
        console.log("Button Clicked"); 
        console.log(this.server);
        console.log(this.library);
        
    }
}

const app = new react()