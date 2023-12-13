const { createApp } = Vue;

createApp({
    data(){
        return{
            mails: []
        }
    },
    methods:{

    },
    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function(risposta){
            console.log(risposta.data.response);
            //this.mails.push(risposta)
        })
    }
}).mount('#app')