<template>
    <div class="my-5 mx-5">
        
        <customer-list-ribbon pageTitle="Clients"></customer-list-ribbon>


        <div class="has-background-light columns" style="height: 750px;">
            <div class="column mt-5" id="customer-column" style="overflow: scroll;" v-if="true">
                <table class="table  is-narrow is-hoverable is-fullwidth">
                    <thead class=" my-2">
                        <tr> 
                            
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">N°</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Nom</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Code magasin</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">N° téléphone</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Contact</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Solde DS</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Solde dû DS</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Ventes DS</th>
                           
                           

                        </tr>   
                    </thead>
                    <tbody>
                        <tr id="" v-for="customer of customerList" :key="customer['No_']">
                            <td class="has-text-left has-background-light"> 
                                <router-link :to="`/CustomerCard/${ customer['No_'] }`">
                                    <a href="#" class="has-text-orange">
                                        {{ customer['No_'] }} 
                                    </a>
                                </router-link>
                            </td>
                            <td class="has-text-left has-background-light is-narrow"> {{ customer['Name'] }}</td>
                            <td class="has-text-left has-background-light is-narrow"> {{ customer['Location Code'] }}</td>
                            <td class="has-text-left has-background-light is-narrow"> {{ customer['Phone No_'] }}</td>
                            <td class="has-text-left has-background-light is-narrow"> {{ customer['Contact'] }}</td>
                            <td class="has-text-left has-background-light is-narrow"> {{ customer['Balance Amount'] }}</td>
                            <td class="has-text-left has-background-light is-narrow"> {{ customer['Amount Due'] }}</td>
                            <td class="has-text-left has-background-light is-narrow"> {{ customer['Amount'] }}</td>              
                                           
                                         
                                           
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="column" style="overflow-y: scroll;" v-if="false">
                <div class="columns is-multiline">
                    <div class="column is-one-third" v-for="customer of customerList" :key="customer['No_']">
                        <div class=" columns p-1 card-is-hoverable">
                            <div class="column is-narrow has-background-white">
                                <figure class="image is-64x64">
                                    <img class="is-rounded" :src="require(`@/assets/images/gerald1.jpg`)">
                                </figure>
                            </div>
                            <div class="column has-background-white card-is-hoverable">
                                <p class="has-text-left ">
                                    <span class="is-size-7 has-text-grey has-background-light">
                                        
                                        <router-link :to="`/CustomerCard/${ customer['No_'] }`">
                                            <a href="#" class="has-text-orange">
                                                {{ customer['No_'] }} 
                                            </a>
                                        </router-link>
                            
                                    </span>
                                </p>
                                <div class="has-text-left columns">
                                    <div class="column has-text-left has-text-orange py-0 mt-1" >
                                        <span class="is-size-7 is-underlined">{{ customer['Name'] }}</span>
                                    </div>
                                    <div class="column has-text-right is-narrow py-0 mt-1">
                                        <span class="is-size-7">{{ customer['Address'] }}</span>
                                    </div>
                                </div>
                                <div class="has-text-left columns">
                                    <div class="column has-text-left py-0" >
                                        <span class="is-size-7">{{ customer['Contact'] }}</span>
                                    </div>
                                    <div class="column has-text-right is-narrow py-0">
                                        <span class="is-size-7">{{ customer['Address 2'] }}</span>
                                    </div>
                                </div>
                            </div>
                            <a class="column is-narrow has-background-orange is-flex ">
                                <span class="is-align-self-center has-text-white">...</span>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" style="overflow-y: scroll;" v-if="false">
                <div class="columns is-multiline is-gapless">
                    <div class="column is-3 p-2 " v-for="customer of customerList" :key="customer['No_']">
                        <div class="has-background-white m-1">
                            <div class="card-is-hoverable box">
                                <div class="">
                                    <div class="has-text-left">
                                        <a href="#">
                                            <span class="py-0">...</span>
                                        </a>
                                    </div>
                                    <div class="is-flex is-justify-content-center">
                                        <figure class="image is-128x128">
                                            <img class="is-rounded" :src="require(`@/assets/images/gerald1.jpg`)">
                                        </figure>
                                    </div>
                                    <hr class="rounded">
                                    <div class="">
                                        <p class="has-text-left ">
                                            <span class="is-size-7 has-text-grey has-background-light">
                                        
                                                <router-link :to="`/CustomerCard/${ customer['No_'] }`">
                                                    <a href="#" class="has-text-orange">
                                                        {{ customer['No_'] }} 
                                                    </a>
                                                </router-link>
                            
                                            </span>
                                        </p>
                                        <div class="has-text-left columns">
                                            <div class="column has-text-left has-text-orange py-0 mt-1" >
                                                <span class="is-size-7 is-underlined">{{ customer['Name'] }}</span>
                                            </div>
                                            <div class="column has-text-right is-narrow py-0 mt-1">
                                                <span class="is-size-7">{{ customer['Contact'] }}</span>
                                            </div>
                                        </div>
                                        <div class="has-text-left columns">
                                            <div class="column has-text-left py-0" >
                                                <span class="is-size-7">{{ customer['Name 2'] }}</span>
                                            </div>
                                            <div class="column has-text-right is-narrow py-0">
                                                <span class="is-size-7">{{ customer['Address 2'] }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <customer-info ></customer-info>
        </div>
    </div>
    
</template>

<script scoped>
import CustomerInfo from './CustomerInfo.vue'
import CustomerListRibbon from './RibbonForLists.vue'
import axios from 'axios'
import { ref } from 'vue'

export default {

    name:'customer-list',
    components:{
        CustomerInfo,CustomerListRibbon
    },
    setup() {
    const customerList = ref([])

    // expose to template and other options API hooks
        return {
            customerList
        }
    },
    
    mounted(){
        axios.get(`http://localhost:3000/app/getCustomerList`)
        .then((result) => {
          this.customerList = result.data.recordset;
        })
        .catch(err=>console.log(err));
      
    }
}

</script>
<style>
.has-text-orange{
    color: orangered;
}
.has-background-orange{
    background-color: rgb(255, 155, 118);
}
.has-background-orange:hover {
    background-color: rgb(255, 68, 0);
}
.card-is-hoverable:hover{
    background-color: rgba(255, 68, 0, 0.068)
}
hr.rounded {
  border-top: 8px solid #bbb;
  border-radius: 5px;
}
</style>
