const { createApp } = Vue;

createApp({
    data(){
        return{
            mails: [],
            mailProva: "" 
        }
    },
    methods:{

    },
    mounted(){

        for(i=0; i<10; i++){
            
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((risposta) => {
            
            this.mailProva = risposta.data.response;
            this.mails.push(this.mailProva);

            //DEBUG
            // console.log(risposta.data.response);
            // console.log(this.mails);
        })
        }
        
    }
}).mount('#app')