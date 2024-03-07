<template>
    <div :class="{'modal':true , 'is-active': true }" >
        <div class="modal-background has-background-white" style="opacity:0.7">
        </div>
        <div id="scrollBlock"  class="modal-card box  shadow is-rounded h-100" style="width:96%;">
 
<!---------Composant entête fiche----------------------->      
            <div id="card-header-comp">
                <s-q-card-Header :soNo="sqCode" :soDesc="sqDescription" pageTitle="Devis vente"></s-q-card-Header>
            </div>
            
<!---------Composant rubban fiche client----------------------->      
            <s-q-card-ribbon></s-q-card-ribbon>

<!---------Section formulaire fiche client----------------------->      
            <div id="content-comp" class="columns mt-2" style="overflow-y: scroll;">
                <div class="column" style="overflow-y: scroll;">

<!---------sous-Section onglet 1 formulaire fiche client----------------------->                         
                    <div id="general">
                        <div class="columns has-border-bottom">
                            <div class="column p-0 has-text-left has-text-weight-bold">
                                <a @click="collapse('general_content');onglet1_expanded=!onglet1_expanded" v-if="onglet1_expanded">
                                    <span>Général</span>
                                </a>
                                <a @click="expand('general_content');onglet1_expanded=!onglet1_expanded" v-if="!onglet1_expanded">
                                    <span>Général</span>
                                    <span class="icon">
                                        <i class="fas fa-angle-right"></i>
                                    </span>
                                </a>
                            </div>
                            <div class="column py-0 has-text-right is-size-7" v-if="onglet1_expanded">
                                <a href="#">
                                    Afficher plus
                                </a>
                            </div>
                            <div class="column py-0 has-text-right is-size-7" v-if="!onglet1_expanded">
                                <span class="has-background-grey-lighter py-2 px-3">client gérald</span>
                                <span class="has-background-grey-lighter py-2 px-3" style="border-left:1px solid black;border-right:1px solid black;">26/02/2024</span>
                                <span class="has-background-grey-lighter py-2 px-3">ouvert</span>
                            </div>
                        </div>
                        <div id="general_content" class="columns">
                            <div class="column">
                                <input-text v-model="sqCode" labelInputText="N° client" :is_disabled="false" ></input-text>
                                <input-text v-model="sqDescription" labelInputText="Nom du client" :is_disabled="false" ></input-text>
                                <p class="has-text-left">
                                    <span class="title is-6">
                                        Donneur d'ordre
                                    </span>
                                </p>
                                <input-text labelInputText="N° Contact" :is_disabled="false"></input-text>
                                <input-text labelInputText="Contact" :is_disabled="false"></input-text>
                                <input-text labelInputText="Adresse" :is_disabled="false"></input-text>
                                <input-text labelInputText="Ville" :is_disabled="false"></input-text>
                                <input-text labelInputText="N° Téléphone" :is_disabled="false"></input-text>
                                <input-text labelInputText="Adresse e*mail" :is_disabled="false"></input-text>
                            </div>
                            <div class="column">
                                <input-text labelInputText="Date commande"  :is_disabled="false" ></input-text>
                                <input-text labelInputText="Date document"  :is_disabled="false"></input-text>
                                <input-text labelInputText="Date d'échéance" :is_disabled="false" ></input-text>
                                <input-text labelInputText="Fin de validité devis" :is_disabled="false"></input-text>
                                <input-text labelInputText="Date livraison demandée"  :is_disabled="false"></input-text>
                                <input-text labelInputText="Code vendeur" :is_disabled="false"></input-text>
                                <input-text labelInputText="N° campagne" :is_disabled="false"></input-text>
                                <input-text labelInputText="Centre de gestion" :is_disabled="false"></input-text>
                            </div>
                        </div>                    
                    </div>
                    <br><br>

<!---------sous-Section onglet 2 formulaire fiche client----------------------->                         
                    <div id="line">
                        <div :class="{'has-background-white':onglet2_expanded}">

                            <div :class="{'columns':!onglet2_expanded,'p-3':onglet2_expanded,'has-border-bottom-grey':onglet2_expanded,'has-border-bottom':!onglet2_expanded}">
                                <div class="column p-0 has-text-left has-text-weight-bold">
                                    <a @click="collapse('line_content');onglet2_expanded=!onglet2_expanded" v-if="onglet2_expanded">
                                        <span>Lignes</span>
                                    </a>
                                    <a @click="expand('line_content');onglet2_expanded=!onglet2_expanded" v-if="!onglet2_expanded">
                                        <span>Lignes</span>
                                        <span class="icon">
                                            <i class="fas fa-angle-right"></i>
                                        </span>
                                    </a>
                                    <span class="ml-5 subtitle" v-if="onglet2_expanded">|</span>
    
                                    <a href="#" class="ml-5" v-if="onglet2_expanded" @click="selectOption('gérer')">
                                        <span class="subtitle is-7" >Gérer</span>
                                    </a>
    
                                    <a href="#" class="ml-5" v-if="onglet2_expanded" @click="selectOption('ligne')">
                                        <span class="subtitle is-7" >Ligne</span>
                                    </a>
    
                                    <a href="#" class="ml-5" v-if="onglet2_expanded && show_more_option" @click="selectOption('commande')">
                                        <span class="subtitle is-7" >commande</span>
                                    </a>
    
                                    <a href="#" class="ml-5 is-hover-orange py-4 px-2" v-if="onglet2_expanded && show_more_option" @click="show_more_option=false">
                                        <span class="subtitle is-7" >Moins d'options</span>
                                    </a>
    
                                    <a href="#" class="ml-5 is-hover-orange py-4 px-2" v-if="onglet2_expanded && !show_more_option" @click="show_more_option=true">
                                        <span class="subtitle is-7" >Plus d'options</span>
                                    </a>
                                </div>
                            </div>
                            <div class="has-background-white shadow has-text-left p-3" v-if="show_option_btn_bar">
                                <a href="#" class="is-hover-orange py-3 px-3" v-if="selected_option=='gérer'">
                                    <span class="icon">
                                        <i class="fas fa-plus"></i>
                                    </span>
                                    <span class="subtitle is-7" >
                                        <a href="#" @click="showAddRowByFormModal">Ajouter un article</a>
                                    </span>
                                </a>
                                <a href="#" class="is-hover-orange py-3 px-3" v-if="selected_option=='gérer'">
                                    <span class="icon">
                                        <i class="fas fa-edit"></i>
                                    </span>
                                    <span class="subtitle is-7" >
                                        <a href="#" @click="showEditRowByFormModal">Modifier l'article</a>
                                    </span>
                                </a>
                                <a href="#" class="is-hover-orange py-3 px-3" v-if="selected_option=='ligne'">
                                    <span class="icon">
                                        <i class="fas fa-plus"></i>
                                    </span>
                                    <span class="subtitle is-7" @click="addEmptyRow">Ajouter une ligne</span>
                                </a>
                                <a href="#" class="is-hover-orange py-3 px-3" v-if="selected_option=='ligne'">
                                    <span class="icon">
                                        <i class="fas fa-eraser"></i>
                                    </span>
                                    <span class="subtitle is-7" @click="deleteRow">Supprimer la ligne</span>
                                </a>
                            </div>
                            <div id="line_content" class=" px-5 mt-5" style="max-height: 250px; overflow:scroll;">
                                <div>
                                    <table class="table  is-narrow  is-fullwidth">
                                        <thead class=" my-2">
                                            <tr > 
                                                <th class="has-text-grey has-text-left has-text-weight-normal is-size-7"></th>
                                                <th class="has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">N°</th>
                                                <th class="has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Description</th>
                                                <th class="has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Description 2</th>
                                                <th class="has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Code magasin</th>
                                                <th class="has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Quantité</th>
                                                <th class="has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Code unité</th>
                                                <th class="has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Prix unitaire HT</th>
                                                <th class="has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">% remise ligne</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr :id="index" v-for="(elt,index) of sqLines" :key="index" @mouseover="setLineShadow(index)" @mouseout="removeLineShadow(index)" >
                                                <td class="has-text-left">
                                                    <span class="icon">
                                                        <i class="fas fa-arrow-right has-text-grey"></i>
                                                    </span>
                                                </td>
    
                                                <td class="has-text-left p-0" >
                                                    <div :id="index+'-'+elt['No_']+'-No_'" class="editme p-1" contenteditable="true" v-text="elt['No_']" @blur="onEdit" @keydown.enter="endEdit"></div>
                                                </td>
                                                <td class="has-text-left p-0" >
                                                    <div :id="index+'-'+elt['Description']+'-Description'" class="editme p-1" contenteditable="true" v-text="elt['Description']" @blur="onEdit" @keydown.enter="endEdit"></div>
                                                </td>
                                                <td class="has-text-left p-0" >
                                                    <div :id="index+'-'+elt['Description 2']+'-Description 2'" class="editme p-1" contenteditable="true" v-text="elt['Description 2']" @blur="onEdit" @keydown.enter="endEdit"></div>
                                                </td>
                                                <td class="has-text-left p-0" >
                                                    <div :id="index+'-'+elt['Location Code']+'-Location Code'" class="editme p-1" contenteditable="true" v-text="elt['Location Code']" @blur="onEdit" @keydown.enter="endEdit"></div>
                                                </td>
                                                <td class="has-text-left p-0" >
                                                    <div :id="index+'-'+elt['Quantity']+'-Quantity'" class="editme p-1" contenteditable="true"  @blur="onEdit" @keydown.enter="endEdit"></div>
                                                </td>
                                                <td class="has-text-left p-0" >
                                                    <div :id="index+'-'+elt['Unit of Measure']+'-Unit of Measure'" class="editme p-1" contenteditable="true"  @blur="onEdit" @keydown.enter="endEdit"></div>
                                                </td>
                                                <td class="has-text-left p-0" >
                                                    <div :id="index+'-'+elt['Unit Price']+'-Unit Price'" class="editme p-1" contenteditable="true" @blur="onEdit" @keydown.enter="endEdit"></div>
                                                </td>
                                                <td class="has-text-left p-0" >
                                                    <div :id="index+'-'+elt['VAT_']+'-name'" class="editme p-1" contenteditable="true" @blur="onEdit" @keydown.enter="endEdit"></div>
                                                </td>
                                                <td class="has-text-left p-0" >
                                                    <div :id="index+'-'+elt['Line Discount _']+'-name'" class="editme p-1" contenteditable="true" @blur="onEdit" @keydown.enter="endEdit"></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div v-if="sqLines.length==0">Il n'y'a rien à afficher</div>
                            </div>     

                        </div>
                        
                        
<!---------sous-Section onglet 2 formulaire fiche client -----Modal d'ajout d'article----------------------->                         
                        <div :class="{'modal':true , 'is-active':addItemModalShowned }">
                            <div class="modal-background has-background-white" style="opacity:0.7" @click.prevent="addItemModalShowned=false"></div>
                            <div class="modal-content box w-75" style=" background-color: rgba(255,255,255,1);border: none;">
                                
                                <form @submit.prevent="addRowByForm">

                                    <div class="has-text-left mb-5">
                                        <span class="is-size-3 subtitle ">Fiche ligne article</span>
                                    </div>

                                    <div class="modal-content-hist container">

                                        <div id="general_content" class="columns">
                                        <div class="column">
                                            <input-text  v-model="sqlNo" labelInputText="N°" :is_disabled="false"></input-text>
                                            <input-text  v-model="sqlDesc" labelInputText="Description" :is_disabled="false"></input-text>
                                            <input-text  v-model="sqlDesc2" labelInputText="Description 2" :is_disabled="false"></input-text>
                                            <input-text  v-model="sqlLoc" labelInputText="Code magasin" :is_disabled="false"></input-text>
                                        </div>
                                        <div class="column">
                                            <input-text  v-model="sqlQty" labelInputText="Quantité"  :is_disabled="false"></input-text>
                                            <input-text  v-model="sqlUOM" labelInputText="Code unité"  :is_disabled="false"></input-text>
                                            <input-text  v-model="sqlUP" labelInputText="Prix unitaire" :is_disabled="false" ></input-text>
                                            <input-text  v-model="sqlLD" labelInputText="% remise"  :is_disabled="false" ></input-text>


                                        </div>
                                    </div> 
                                        
                                    <button type="submit" class="button has-background-orange is-fullwidth shadow has-text-white"> Ajouter la ligne</button>
                                    
                                    </div> 
                                </form>
                            </div>
                            <button class=" modal-close is-large has-background-dark is-large is-danger" aria-label="close" @click.prevent="addItemModalShowned=false"></button>
                        </div>


















                    </div>                         
                    <br><br>

<!---------sous-Section ongle 3 formulaire fiche client----------------------->                         
                    <div id="details-facture">
                        <div class="columns has-border-bottom">
                            <div class="column p-0 has-text-left has-text-weight-bold">
                                <a @click="collapse('invoice_details_content');onglet3_expanded=!onglet3_expanded" v-if="onglet3_expanded">
                                    <span>Détails facture</span>
                                </a>
                                <a @click="expand('invoice_details_content');onglet3_expanded=!onglet3_expanded" v-if="!onglet3_expanded">
                                    <span>Détails facture</span>
                                    <span class="icon">
                                        <i class="fas fa-angle-right"></i>
                                    </span>
                                </a>
                            </div>
                           <div class="column py-0 has-text-right is-size-7" v-if="onglet3_expanded">Afficher plus</div>
                        </div>
                        <div id="invoice_details_content" class="columns">
                            <div class="column">
                                <input-text labelInputText="Groupe compta. marché TVA" valueInputText="soHeader['Ville du client']" :is_disabled="false"></input-text>
                                <input-text labelInputText="Code condition paiement" valueInputText="soHeader['Code postal client']" :is_disabled="false"></input-text>
                                <input-text labelInputText="Code condition règlement" valueInputText="soHeader['Code postal client']" :is_disabled="false"></input-text>
                            </div>
                            <div class="column">
                                <input-text labelInputText="Code magasin" valueInputText="new Date(soHeader[`Date d'échéance`]).toDateString()" :is_disabled="false"></input-text>
                            </div>
                        </div>                    
                    </div>
                    <br><br>

<!---------sous-Section ongle 4 formulaire fiche client----------------------->                         
                    <div id="expedition-facturation">
                        <div class="columns has-border-bottom">
                            <div class="column p-0 has-text-left has-text-weight-bold">
                                <a @click="collapse('delivery_invoicing_content');onglet4_expanded=!onglet4_expanded" v-if="onglet4_expanded">
                                    <span>Expedition et facturation</span>
                                </a>
                                <a @click="expand('delivery_invoicing_content');onglet4_expanded=!onglet4_expanded" v-if="!onglet4_expanded">
                                    <span>Expedition et facturation</span>
                                    <span class="icon">
                                        <i class="fas fa-angle-right"></i>
                                    </span>
                                </a>
                            </div>
                           <div class="column py-0 has-text-right is-size-7" v-if="onglet4_expanded">Afficher plus</div>
                        </div>
                        <div id="delivery_invoicing_content" class="columns">
                            <div class="column">
                                <input-text labelInputText="Contact" :is_disabled="false" ></input-text>
                                <p class="has-text-left">
                                    <span class="title is-6">
                                        Conditions de livraison
                                    </span>
                                </p>
                                <input-text labelInputText="Destinataire"  :is_disabled="false"></input-text>
                                <input-text labelInputText="Code"  :is_disabled="false"></input-text>
                                <input-text labelInputText="Contact"  :is_disabled="false"></input-text>
                            </div>
                            <div class="column">
                                <input-text labelInputText="Nom" valueInputText="new Date(soHeader['Date comptabilisation']).toDateString()"  :is_disabled="false"></input-text>
                                <input-text labelInputText="Adresse" valueInputText="new Date(soHeader['Date document']).toDateString()"  :is_disabled="false"></input-text>
                                <input-text labelInputText="Adresse (2ème ligne)" valueInputText="new Date(soHeader[`Date d'échéance`]).toDateString()"  :is_disabled="false"></input-text>
                                <input-text labelInputText="Ville" valueInputText="soHeader['N° doc. externe']"  :is_disabled="false"></input-text>
                                <input-text labelInputText="Région/Etat" valueInputText="soHeader['N° devis']"  :is_disabled="false"></input-text>
                                <input-text labelInputText="Code postal" valueInputText="soHeader['Code utilisateur assigné']"  :is_disabled="false"></input-text>
                                <input-text labelInputText="Pays/région" valueInputText="soHeader['Statut']"  :is_disabled="false"></input-text>
                            </div>
                        </div>                    
                    </div>
                    <br><br>

                </div>

<!---------composant info client----------------------->
                <prospect-info id="prospect-info" v-if="true"></prospect-info>
                <customer-info id="customer-info" v-else></customer-info>

            </div>
        </div>

    </div>    
</template>
<script>
import SQCardHeader from './HeaderForCard.vue'
import CustomerInfo from './CustomerInfo.vue'
import ProspectInfo from './ProspectInfo.vue'
import SQCardRibbon from './RibbonForCard.vue'
import inputText from './input/input-text.vue'
import { ref } from 'vue'



export default {
    name:'sale-quote-card',
    components:{
        SQCardHeader,CustomerInfo,ProspectInfo,inputText,SQCardRibbon
    },
    data(){
        return{
            list:[],
            height:'5000px',
            //indique si les onglets sont réduits ou non
            onglet1_expanded:true,
            onglet2_expanded:true,
            onglet3_expanded:true,
            onglet4_expanded:true,
            onglet5_expanded:true,

            //indique si tous les options les lignes sont affichées
            show_more_option:false,

            //indique si la barre des boutons d'option est affichée
            show_option_btn_bar:false,

            //indique l'option par défaut
            selected_option:'',

            selected_line:'',

            //élement pour le modal ajout d'article
            addItemModalShowned:false,
            editItemModalShowned:false


        }
    },
    setup(){
            //entête dynamique de la fiche
            const sqHeader = {
                sqCode : ref(''),
                sqDescription : ref(''),
            }

            const sqLineForm = {
                sqlNo: ref(''),
                sqlDesc: ref(''),
                sqlDesc2: ref(''),
                sqlLoc: ref(''),
                sqlQty: ref(''),
                sqlUOM: ref(''),
                sqlUP: ref(''),
                sqlLD: ref(''),
            }

            const sqLines =  ref([])

            function  addEmptyRow(){
                this.sqLines.push({No_:'',Description:'','Description 2':'','Location Code':'',Quantity:'','Unit of Measure':'','Unit Price':'','Line Discount _':''})
            }

            function addRowByForm(){
                this.sqLines.push(
                    {
                    No_:this.sqlNo,
                    Description:this.sqlDesc,
                    'Description 2':this.sqlDesc2,
                    'Location Code':this.sqlLoc,
                    Quantity:this.sqlQty,
                    'Unit of Measure':this.sqlUOM,
                    'Unit Price':this.sqlUP,
                    'Line Discount _':this.sqlLD 
                })
            }

        return{
            ...sqHeader,sqLines,addEmptyRow,addRowByForm,...sqLineForm
            
        }
    },
    methods:{
        showAddRowByFormModal(){
            this.addItemModalShowned = true
        },
        showEditRowByFormModal(){
            this.editItemModalShowned = true
        },
        expand(id){
            const myElt=document.getElementById(id);
            if (id=='line_content') myElt.style.maxHeight='250px'
            else myElt.style.maxHeight='500px'
        },
        collapse(id){
            
            const myElt=document.getElementById(id);
            console.log(myElt.style.maxHeight)
            myElt.style.maxHeight="0px"
        },
        selectOption(currentOpt){
                        
            if (this.selected_option ==currentOpt) { this.show_option_btn_bar=!this.show_option_btn_bar;}
            else {this.selected_option= currentOpt;this.show_option_btn_bar=this.show_option_btn_bar?true:true}
        },

        setLineShadow(id){
            const myElt=document.getElementById(id)
            const children =  myElt.childNodes
            children.forEach(element => {
                element.classList.add('has-background-light')
                element.classList.add('is-hover-orange')
                element.classList.add('is-hover-orange')
  
            })
            //console.log(children)

        },
        removeLineShadow(id){
            const myElt=document.getElementById(id)
            const children =  myElt.childNodes
            children.forEach(element => {
                element.classList.remove('is-hover-orange')
                element.classList.remove('has-background-light')
                element.classList.remove('remove')
                element.classList.add('has-background-white')
            })
            //console.log(children)

        },
        onEdit(evt){
            const id =evt.target.id
            const value = evt.target.innerText
            const parentId= new String(id).split('-')[0]
            const parentAttri = new String(id).split('-')[2]
            this.sqLines[parentId][parentAttri] = value
            console.log(this.sqLines)
         },
         endEdit(){
            this.$el.querySelector('.editme').blur()
         }
    },
    mounted(){

    }
}

</script>
<style scoped>
#general_content,#line_content,#invoice_details_content,#international_content,#delivery_invoicing_content{
    max-height: v-bind(height);
    overflow: hidden;
    transition: max-height 0.5s
}

.has-border-bottom-grey{
    border-bottom: 1px solid rgba(0, 0, 0, 0.152);
}

.is-hover-orange:hover{
    background-color: rgba(255, 68, 0, 0.068);
}

.has-background-orange{
    background-color: rgba(255, 68, 0, 0.856);

}

div[contenteditable="true"]:focus {
    outline: none; /* Remove the default focus outline */
    border: 2px solid rgba(255, 89, 0, 0.437); /* Add your desired border style */
    background-color: #f9f9f9; /* Change the background color */
    /* Add any other styles you want */
}

</style>