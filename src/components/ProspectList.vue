<template>
    <div class="my-5 mx-5">
        
        <prospect-list-ribbon pageTitle="Prospects"></prospect-list-ribbon>


        <div class="has-background-light columns" style="height: 750px;">
            <div class="column mt-5" id="customer-column" style="overflow: scroll;">
                <table class="table  is-narrow is-hoverable is-fullwidth">
                    <thead class=" my-2">
                        <tr> 
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">N°</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Nom</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Code magasin</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">N° téléphone</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Contact</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">nom de l'entreprise</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">pays</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Relation Business</th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">N° téléphone mobile </th>
                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Nom du métietr</th>

                        </tr>
                    </thead>
                    <tbody>
                            <tr id="" v-for="prospect of prospectList" :key="prospect['No_']">
                                <td class="has-text-left has-background-light">{{ prospect['Name']  }}</td>
                                <td class="has-text-left has-background-light"> {{ prospect['Location Code'] }}</td>
                                <td class="has-text-left has-background-light"> {{prospect['Phone No_']}}</td>
                                <td class="has-text-left has-background-light"> {{prospect['Contact']}}</td>
                                <td class="has-text-left has-background-light"> {{prospect['Company Name']}}</td>
                                <td class="has-text-left has-background-light"> {{prospect['County']}}</td>                
                                <td class="has-text-left has-background-light"> {{prospect['Business Relation']}}</td>                
                                <td class="has-text-left has-background-light"> {{prospect['Mobile Phone No_']}}</td>                
                                <td class="has-text-left has-background-light"> {{prospect['Job Title']}}</td>                
                            
                            </tr>
                    </tbody>
                </table>
            </div>

            <prospect-info></prospect-info>
        </div>
    </div>
    
</template>

<script>
import ProspectInfo from './ProspectInfo.vue'
import ProspectListRibbon from './RibbonForLists.vue'
import { ref } from 'vue'
import axios from 'axios'
export default {
    name:'prospect-list',
    components:{
        ProspectInfo,ProspectListRibbon
    },
    setup() {
        const prospectList = ref([])

        // expose to template and other options API hooks
        return {
            prospectList
        }
    },
    mounted(){
        axios
        .get(`http://localhost:3000/app/getLeadList`)
        .then((result) => { 
          this.prospectList = result.data.recordset;
          console.log(result.data)
        })
        .catch(err=>console.log(err));
    }
}

</script>

