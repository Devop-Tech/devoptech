const vue = new Vue({
    el : '#page',
    data : {
        product : "",
        name : "",
        surname : "",
        email : "",
        number : "",
        age : "",
        time : new Date().getHours() + " : " + new Date().getMinutes() + "/" + new Date().getDate(),
        select_office : false,
        aletmesaj : false,
        namecheck : false,
        namelabel : "",
        surnamelabel : "",
        emaillabel : "",
        numberlabel : "",
        agelabel : "",
        productlabel : ""
    },
    methods : {
        submit(e){
            e.preventDefault()
            if(this.name.length <=2){
                this.namecheck = true
                return
            }
            else{
                this.namecheck = false
            }
            if(this.surname.length <=5){
                this.namecheck = true
                return
            }
            else{
                this.namecheck = false
            }
            if(this.email.length <=6){
                this.namecheck = true
                return
            }
            else{
                this.namecheck = false
            }
            if(this.number.length <=9){
                return
            }
            else{
                this.namecheck = true
            }
            if(this.age.length !==2){
                this.namecheck = ture
                return
            }
            else{
                this.namecheck = false
            }
            if(this.product.length ==0){
                this.namecheck = true
                return
            }
            else{
                this.namecheck = false
            }
            vm = this
            this.aletmesaj = true
            setTimeout(function(){
                vm.aletmesaj = false
            },4000)
            axios({
                method: 'post',
                url: 'https://devoptech-89c8d-default-rtdb.firebaseio.com/devoptech.json',
                data: {
                  name : this.name,
                  surname : this.surname,
                  phone : this.number,
                  mail : this.email,
                  age : this.age,
                  product : this.product,
                  time : this.time
                }
              });
            this.name = ""
            this.surname = ""
            this.age = ""
            this.number = ""
            this.email = ""
            this.product = ""
            
            
            
        },
        name_label(){
            this.namelabel = "Ad 2 h??rfd??n b??y??k olmal??d??r!"
        },
        surname_label(){
            this.surnamelabel = "Soyad 5 h??rfd??n b??y??k olmal??d??r!"
        },
        email_label(){
            this.emaillabel = "Email 6 h??rfd??n b??y??k olmal??d??r!"
        },
        number_label(){
            this.numberlabel = "N??mr?? 9 r??q??md??n b??y??k olmal??d??r"
        },
        age_label(){
            this.agelabel = "Ya?? 2 r??q??m?? b??rab??r olmal??d??r"
        },
        product_label(){
            this.productlabel = "T??lim se??in"
        },
        
    }
})







