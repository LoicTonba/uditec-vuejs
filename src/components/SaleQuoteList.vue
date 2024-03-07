<template>
    <div class="my-5 mx-5">
        
        <s-q-list-ribbon pageTitle="Devis vente"></s-q-list-ribbon>


        <div class="has-background-light columns" style="height: 750px;">
            <div class="column mt-5" id="customer-column" style="overflow: scroll;">
                <table class="table  is-narrow is-hoverable is-fullwidth">
                    <thead class=" my-2">
                        <tr> 
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">N°</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">N° Donneur d'ordre</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Nom donneur d'ordre</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Contact donneur d'ordre</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Date document</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Date comptabilisation</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Montant</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Code magasin</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Date de fin de validité devis</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Date livraison demandée</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="" v-for="saleQuote of saleQuoteList" :key="saleQuote['No_']">
                            <td class="has-text-left has-background-light"> 
                                <router-link :to="`/SaleQuoteCard/${ saleQuote['No_'] }`">
                                    <a href="#" class="has-text-orange">
                                        {{ saleQuote['No_'] }} 
                                    </a>
                                </router-link>
                            </td>
                            <td class="has-text-left has-background-light"> {{ saleQuote['Sell-to Customer No_'] }}</td>
                            <td class="has-text-left has-background-light is-narrow"> {{ saleQuote['Sell-to Customer Name'] }}</td>
                            <td class="has-text-left has-background-light is-narrow"> {{ saleQuote['Ship-to Contact'] }}</td>
                            <td class="has-text-left has-background-light is-narrow"> {{ formatDate(saleQuote['Document Date']) }}</td>                
                            <td class="has-text-left has-background-light is-narrow"> {{ saleQuote[''] }}</td>                
                            <td class="has-text-left has-background-light is-narrow"> {{ saleQuote[''] }}</td>                
                            <td class="has-text-left has-background-light is-narrow"> {{ saleQuote['Location Code'] }}</td>                
                            <td class="has-text-left has-background-light is-narrow"> {{ formatDate(saleQuote['Quote Valid Until Date']) }}</td>                               
                            <td class="has-text-left has-background-light is-narrow"> {{ formatDate(saleQuote['Requested Delivery Date']) }}</td>                               
                        </tr>
                    </tbody>
                </table>
            </div>

            <prospect-info id="prospect-info" v-if="true"></prospect-info>
            <customer-info id="customer-info" v-else></customer-info>
        </div>
    </div>
    
</template>

<script>
import CustomerInfo from './CustomerInfo.vue'
import ProspectInfo from './ProspectInfo.vue'
import SQListRibbon from './RibbonForLists.vue'
import axios from 'axios'
import { ref } from 'vue'


export default {
    name:'sale-quote-list',
    components:{
        CustomerInfo,ProspectInfo,SQListRibbon
    },
    setup() {
    const saleQuoteList = ref([])

    // expose to template and other options API hooks
        return {
            saleQuoteList
        }
    },
    methods:{
        formatDate(date){
            if (date.includes('1753-')) return ''
            else return new Date(date).toLocaleDateString()
        }

    },
    mounted(){
        axios.get(`http://localhost:3000/app/getSQList`)
        .then(result => {
            this.saleQuoteList=result.data.recordset
        }).catch(err=>console.log(err))
    },
}

</script>

