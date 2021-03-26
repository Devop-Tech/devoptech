const vue = new Vue({
    el : '#page',
    data : {
        product : "",
        name : "",
        surname : "",
        email : "",
        number : "",
        age : "",
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
            },3000)
            axios({
                method: 'post',
                url: 'https://devoptech-89c8d-default-rtdb.firebaseio.com/devoptech.json',
                data: {
                  name : this.name,
                  surname : this.surname,
                  phone : this.number,
                  mail : this.email,
                  age : this.age,
                  product : this.product
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
            this.namelabel = "Ad 2 hərfdən böyük olmalıdır!"
        },
        surname_label(){
            this.surnamelabel = "Soyad 5 hərfdən böyük olmalıdır!"
        },
        email_label(){
            this.emaillabel = "Email 6 hərfdən böyük olmalıdır!"
        },
        number_label(){
            this.numberlabel = "Nömrə 9 rəqəmdən böyük olmalıdır"
        },
        age_label(){
            this.agelabel = "Yaş 2 rəqəmə bərabər olmalıdır"
        },
        product_label(){
            this.productlabel = "Təlim seçin"
        },
        
    }
})







