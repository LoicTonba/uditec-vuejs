<template>
    <div :class="{'modal':true , 'is-active': true }" >
        <div class="modal-background has-background-white" style="opacity:0.7">
        </div>
        <div id="scrollBlock"  class="modal-card box  shadow is-rounded h-100" style="width:96%;">
 
<!---------Composant entête fiche----------------------->      
            <div id="card-header-comp">
                <s-o-card-Header soNo="000001" soDesc="client Gérald" pageTitle="Commande vente" />
            </div>
            
<!---------Composant rubban fiche client----------------------->      
            <s-o-card-ribbon></s-o-card-ribbon>

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
                            <div class="column py-0 has-text-right is-size-7" v-if="onglet1_expanded">Afficher plus</div>
                            <div class="column py-0 has-text-right is-size-7" v-if="!onglet1_expanded">
                                <span class="has-background-grey-lighter py-2 px-3">client gérald</span>
                                <span class="has-background-grey-lighter py-2 px-3" style="border-left:1px solid black;border-right:1px solid black;">26/02/2024</span>
                                <span class="has-background-grey-lighter py-2 px-3">ouvert</span>
                            </div>
                        </div>
                        <div id="general_content" class="columns">
                            <div class="column">
                                <input-text labelInputText="N° client" valueInputText="soHeader['Code client']" ></input-text>
                                <input-text labelInputText="Nom du client" valueInputText="soHeader['Nom du client']" ></input-text>
                                <input-text labelInputText="Contact" valueInputText="soHeader['Contact client']" ></input-text>
                                <input-text labelInputText="Adresse" valueInputText="soHeader['Adresse du client']" ></input-text>
                                <input-text labelInputText="Ville" valueInputText="soHeader['Ville du client']" ></input-text>
                                <input-text labelInputText="Code postal" valueInputText="soHeader['Code postal client']" ></input-text>
                                <input-text labelInputText="Code pays/région" valueInputText="soHeader['Code région client']" ></input-text>
                                <input-text labelInputText="Code vendeur" valueInputText="soHeader['Code vendeur']" ></input-text>
                            </div>
                            <div class="column">
                                <input-text labelInputText="Date commande" valueInputText="new Date(soHeader['Date de commande']).toDateString()" ></input-text>
                                <input-text labelInputText="Date comptabilisation " valueInputText="new Date(soHeader['Date comptabilisation']).toDateString()" ></input-text>
                                <input-text labelInputText="Date document" valueInputText="new Date(soHeader['Date document']).toDateString()" ></input-text>
                                <input-text labelInputText="Date d'échéance" valueInputText="new Date(soHeader[`Date d'échéance`]).toDateString()" ></input-text>
                                <input-text labelInputText="N° doc. externe" valueInputText="soHeader['N° doc. externe']" ></input-text>
                                <input-text labelInputText="N° devis" valueInputText="soHeader['N° devis']" ></input-text>
                                <input-text labelInputText="Utilisateur affecté" valueInputText="soHeader['Code utilisateur assigné']" ></input-text>
                                <input-text labelInputText="Statut" valueInputText="soHeader['Statut']" ></input-text>
                            </div>
                        </div>                    
                    </div>
                    <br><br>

<!---------sous-Section onglet 2 formulaire fiche client----------------------->                         
                    <div id="line">
                        <div :class="{'has-background-light':onglet2_expanded}">

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
    
                                    <a href="#" class="ml-5" v-if="onglet2_expanded && show_more_option" @click="selectOption('ligne')">
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
                                    <span class="subtitle is-7" >Nouvelle ligne</span>
                                </a>
                                <a href="#" class="is-hover-orange py-3 px-3" v-if="selected_option=='gérer'">
                                    <span class="icon">
                                        <i class="fas fa-eraser"></i>
                                    </span>
                                    <span class="subtitle is-7" >Supprimer la ligne</span>
                                </a>
                                <a href="#" class="is-hover-orange py-3 px-3" v-if="selected_option=='gérer'">
                                    <span class="icon">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    <span class="subtitle is-7" >Sélectionner des articles</span>
                                </a>
                            </div>
                            <div id="line_content" class="columns px-5 mt-5" style="max-height: 250px; overflow:scroll;">
                                <table class="table  is-narrow  is-fullwidth">
                                    <thead class=" my-2">
                                        <tr > 
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7"></th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;" > Type</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">N°</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Description</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Code magasin</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Quantité</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Code unité</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Prix unitaire HT</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">% remise ligne</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Montant ligne HT</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Montant ligne HT</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Montant ligne HT</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Montant ligne HT</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Montant ligne HT</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Montant ligne HT</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Montant ligne HT</th>
                                            <th class="has-background-light has-text-grey has-text-left has-text-weight-normal is-size-7" style="min-width: 100px;">Montant ligne HT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr :id="index" v-for="(elt,index) of [1,2,3,4,5,6,7,8,9,11,10,12,13,14,145,14,1,1,1,4,4,4,44,4,7]" :key="index" @mouseover="setLineShadow(index)" @mouseout="removeLineShadow(index)" >
                                            <td class="has-text-left has-background-light">
                                                <span class="icon">
                                                    <i class="fas fa-arrow-right has-text-grey"></i>
                                                </span>
                                            </td>
                                            <td class="has-text-left has-background-light p-0">
                                                <div class="editme p-1" contenteditable="true" v-text="txt" @blur="onEdit" @keydown.enter="endEdit"></div>
                                            </td>
                                            <td class="has-text-left has-background-light"> salut</td>
                                            <td class="has-text-left has-background-light"> salut</td>
                                            <td class="has-text-left has-background-light"> slaut</td>
                                            <td class="has-text-left has-background-light"> slaut</td>
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                            <td class="has-text-left has-background-light"> slaut</td>                
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>     
                        </div>
                        <div class="columns mt-3" id="line_total" v-if="onglet2_expanded">
                                <div class="column">
                                    <input-text1 is_disabled="true" labelInputText="Sous-total HT" valueInputText="soHeader['Sous-total HT']" devise="soHeader['Code devise']"></input-text1>
                                    <input-text1 is_disabled="true" labelInputText="Montant remise facture HT" valueInputText="soHeader['Montant remise facture HT']" devise="soHeader['Code devise']"></input-text1>
                                    <input-text1 is_disabled="true" labelInputText="%remise facture" devise="soHeader['Code devise']" ></input-text1>
                                </div>
                                <div class="column">
                                    <input-text1 is_disabled="true" labelInputText="Total HT" valueInputText="soHeader['Total HT']" devise="soHeader['Code devise']" ></input-text1>
                                    <input-text1 is_disabled="true" labelInputText="Total TVA" valueInputText="soHeader['Total TVA']" devise="soHeader['Code devise']"></input-text1>
                                    <input-text1 is_disabled="true" labelInputText="Total TTC" valueInputText="soHeader['Total TTC']" devise="soHeader['Code devise']"></input-text1>
                                </div>
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
                                <input-text labelInputText="N° client" valueInputText="soHeader['Code client']" ></input-text>
                                <input-text labelInputText="Nom du client" valueInputText="soHeader['Nom du client']" ></input-text>
                                <input-text labelInputText="Contact" valueInputText="soHeader['Contact client']" ></input-text>
                                <input-text labelInputText="Adresse" valueInputText="soHeader['Adresse du client']" ></input-text>
                                <input-text labelInputText="Ville" valueInputText="soHeader['Ville du client']" ></input-text>
                                <input-text labelInputText="Code postal" valueInputText="soHeader['Code postal client']" ></input-text>
                                <input-text labelInputText="Code pays/région" valueInputText="soHeader['Code région client']" ></input-text>
                                <input-text labelInputText="Code vendeur" valueInputText="soHeader['Code vendeur']" ></input-text>
                            </div>
                            <div class="column">
                                <input-text labelInputText="Date commande" valueInputText="new Date(soHeader['Date de commande']).toDateString()" ></input-text>
                                <input-text labelInputText="Date comptabilisation " valueInputText="new Date(soHeader['Date comptabilisation']).toDateString()" ></input-text>
                                <input-text labelInputText="Date document" valueInputText="new Date(soHeader['Date document']).toDateString()" ></input-text>
                                <input-text labelInputText="Date d'échéance" valueInputText="new Date(soHeader[`Date d'échéance`]).toDateString()" ></input-text>
                                <input-text labelInputText="N° doc. externe" valueInputText="soHeader['N° doc. externe']" ></input-text>
                                <input-text labelInputText="N° devis" valueInputText="soHeader['N° devis']" ></input-text>
                                <input-text labelInputText="Utilisateur affecté" valueInputText="soHeader['Code utilisateur assigné']" ></input-text>
                                <input-text labelInputText="Statut" valueInputText="soHeader['Statut']" ></input-text>
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
                                <input-text labelInputText="N° client" valueInputText="soHeader['Code client']" ></input-text>
                                <input-text labelInputText="Nom du client" valueInputText="soHeader['Nom du client']" ></input-text>
                                <input-text labelInputText="Contact" valueInputText="soHeader['Contact client']" ></input-text>
                                <input-text labelInputText="Adresse" valueInputText="soHeader['Adresse du client']" ></input-text>
                                <input-text labelInputText="Ville" valueInputText="soHeader['Ville du client']" ></input-text>
                                <input-text labelInputText="Code postal" valueInputText="soHeader['Code postal client']" ></input-text>
                                <input-text labelInputText="Code pays/région" valueInputText="soHeader['Code région client']" ></input-text>
                                <input-text labelInputText="Code vendeur" valueInputText="soHeader['Code vendeur']" ></input-text>
                            </div>
                            <div class="column">
                                <input-text labelInputText="Date commande" valueInputText="new Date(soHeader['Date de commande']).toDateString()" ></input-text>
                                <input-text labelInputText="Date comptabilisation " valueInputText="new Date(soHeader['Date comptabilisation']).toDateString()" ></input-text>
                                <input-text labelInputText="Date document" valueInputText="new Date(soHeader['Date document']).toDateString()" ></input-text>
                                <input-text labelInputText="Date d'échéance" valueInputText="new Date(soHeader[`Date d'échéance`]).toDateString()" ></input-text>
                                <input-text labelInputText="N° doc. externe" valueInputText="soHeader['N° doc. externe']" ></input-text>
                                <input-text labelInputText="N° devis" valueInputText="soHeader['N° devis']" ></input-text>
                                <input-text labelInputText="Utilisateur affecté" valueInputText="soHeader['Code utilisateur assigné']" ></input-text>
                                <input-text labelInputText="Statut" valueInputText="soHeader['Statut']" ></input-text>
                            </div>
                        </div>                    
                    </div>
                    <br><br>

<!---------sous-Section onglet 5 formulaire fiche client----------------------->                         
                    <div id="international">
                        <div class="columns has-border-bottom">
                            <div class="column p-0 has-text-left has-text-weight-bold">
                                <a @click="collapse('international_content');onglet5_expanded=!onglet5_expanded" v-if="onglet5_expanded">
                                    <span>International</span>
                                </a>
                                <a @click="expand('international_content');onglet5_expanded=!onglet5_expanded" v-if="!onglet5_expanded">
                                    <span>International</span>
                                    <span class="icon">
                                        <i class="fas fa-angle-right"></i>
                                    </span>
                                </a>
                            </div>
                           <div class="column py-0 has-text-right is-size-7" v-if="onglet5_expanded">Afficher plus</div>
                        </div>
                        <div id="international_content" class="columns">
                            <div class="column">
                                <input-text labelInputText="N° client" valueInputText="soHeader['Code client']" ></input-text>
                                <input-text labelInputText="Nom du client" valueInputText="soHeader['Nom du client']" ></input-text>
                                <input-text labelInputText="Contact" valueInputText="soHeader['Contact client']" ></input-text>
                                <input-text labelInputText="Adresse" valueInputText="soHeader['Adresse du client']" ></input-text>
                                <input-text labelInputText="Ville" valueInputText="soHeader['Ville du client']" ></input-text>
                                <input-text labelInputText="Code postal" valueInputText="soHeader['Code postal client']" ></input-text>
                                <input-text labelInputText="Code pays/région" valueInputText="soHeader['Code région client']" ></input-text>
                                <input-text labelInputText="Code vendeur" valueInputText="soHeader['Code vendeur']" ></input-text>
                            </div>
                            <div class="column">
                                <input-text labelInputText="Date commande" valueInputText="new Date(soHeader['Date de commande']).toDateString()" ></input-text>
                                <input-text labelInputText="Date comptabilisation " valueInputText="new Date(soHeader['Date comptabilisation']).toDateString()" ></input-text>
                                <input-text labelInputText="Date document" valueInputText="new Date(soHeader['Date document']).toDateString()" ></input-text>
                                <input-text labelInputText="Date d'échéance" valueInputText="new Date(soHeader[`Date d'échéance`]).toDateString()" ></input-text>
                                <input-text labelInputText="N° doc. externe" valueInputText="soHeader['N° doc. externe']" ></input-text>
                                <input-text labelInputText="N° devis" valueInputText="soHeader['N° devis']" ></input-text>
                                <input-text labelInputText="Utilisateur affecté" valueInputText="soHeader['Code utilisateur assigné']" ></input-text>
                                <input-text labelInputText="Statut" valueInputText="soHeader['Statut']" ></input-text>
                            </div>
                        </div>                    
                    </div>
                    <br><br>

<!---------sous-Section onglet 6 formulaire fiche client----------------------->                         
                    <div id="acompte">
                        <div class="columns has-border-bottom">
                            <div class="column p-0 has-text-left has-text-weight-bold">
                                <a @click="collapse('prepayment_content');onglet6_expanded=!onglet6_expanded" v-if="onglet6_expanded">
                                    <span>Acompte</span>
                                </a>
                                <a @click="expand('prepayment_content');onglet6_expanded=!onglet6_expanded" v-if="!onglet6_expanded">
                                    <span>Acompte</span>
                                    <span class="icon">
                                        <i class="fas fa-angle-right"></i>
                                    </span>
                                </a>
                            </div>
                           <div class="column py-0 has-text-right is-size-7" v-if="onglet6_expanded">Afficher plus</div>
                        </div>
                        <div id="prepayment_content" class="columns">
                            <div class="column">
                                <input-text labelInputText="N° client" valueInputText="soHeader['Code client']" ></input-text>
                                <input-text labelInputText="Nom du client" valueInputText="soHeader['Nom du client']" ></input-text>
                                <input-text labelInputText="Contact" valueInputText="soHeader['Contact client']" ></input-text>
                                <input-text labelInputText="Adresse" valueInputText="soHeader['Adresse du client']" ></input-text>
                                <input-text labelInputText="Ville" valueInputText="soHeader['Ville du client']" ></input-text>
                                <input-text labelInputText="Code postal" valueInputText="soHeader['Code postal client']" ></input-text>
                                <input-text labelInputText="Code pays/région" valueInputText="soHeader['Code région client']" ></input-text>
                                <input-text labelInputText="Code vendeur" valueInputText="soHeader['Code vendeur']" ></input-text>
                            </div>
                            <div class="column">
                                <input-text labelInputText="Date commande" valueInputText="new Date(soHeader['Date de commande']).toDateString()" ></input-text>
                                <input-text labelInputText="Date comptabilisation " valueInputText="new Date(soHeader['Date comptabilisation']).toDateString()" ></input-text>
                                <input-text labelInputText="Date document" valueInputText="new Date(soHeader['Date document']).toDateString()" ></input-text>
                                <input-text labelInputText="Date d'échéance" valueInputText="new Date(soHeader[`Date d'échéance`]).toDateString()" ></input-text>
                                <input-text labelInputText="N° doc. externe" valueInputText="soHeader['N° doc. externe']" ></input-text>
                                <input-text labelInputText="N° devis" valueInputText="soHeader['N° devis']" ></input-text>
                                <input-text labelInputText="Utilisateur affecté" valueInputText="soHeader['Code utilisateur assigné']" ></input-text>
                                <input-text labelInputText="Statut" valueInputText="soHeader['Statut']" ></input-text>
                            </div>
                        </div>                    
                    </div>
                    <br><br>

                </div>

<!---------composant info client----------------------->
                <customer-info id="customer-info"></customer-info>

            </div>
        </div>

    </div>    
</template>
<script>
import SOCardHeader from './HeaderForCard.vue'
import CustomerInfo from './CustomerInfo.vue'
import SOCardRibbon from './RibbonForCard.vue'
import inputText from './input/input-text.vue'
import inputText1 from './input/input-text1.vue'


export default {
    name:'sale-order-card',
    components:{
        SOCardHeader,CustomerInfo,inputText,inputText1,SOCardRibbon
    },
    data(){
        return{

            //indique si les onglets sont réduits ou non
            onglet1_expanded:true,
            onglet2_expanded:true,
            onglet3_expanded:true,
            onglet4_expanded:true,
            onglet5_expanded:true,
            onglet6_expanded:true,

            //indique si tous les options les lignes sont affichées
            show_more_option:false,

            //indique si la barre des boutons d'option est affichée
            show_option_btn_bar:false,

            //indique l'option par défaut
            selected_option:'',

            selected_line:'',

            txt:'Edit me'
        }
    },
    methods:{
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
                element.classList.remove('has-background-light')
                element.classList.add('is-hover-orange')
            })
            //console.log(children)

        },
        removeLineShadow(id){
            const myElt=document.getElementById(id)
            const children =  myElt.childNodes
            children.forEach(element => {
                element.classList.remove('is-hover-orange')
                element.classList.add('has-background-light')
            })
            //console.log(children)

        },
        onEdit(evt){
             var src = evt.target.innerText
             this.txt = src
         },
         endEdit(){
            this.$el.querySelector('.editme').blur()
         }


    }
}

</script>
<style scoped>
#general_content,#line_content,#invoice_details_content,#international_content,#prepayment_content,#delivery_invoicing_content{
    max-height: 5000px;
    overflow: hidden;
    transition: max-height 0.5s
}

.has-border-bottom-grey{
    border-bottom: 1px solid rgba(0, 0, 0, 0.152);
}

.is-hover-orange:hover{
    background-color: rgba(255, 68, 0, 0.068);
}

.hover{
    background-color: rgba(255, 68, 0, 0.856);

}

div[contenteditable="true"]:focus {
    outline: none; /* Remove the default focus outline */
    border: 2px solid rgba(255, 89, 0, 0.437); /* Add your desired border style */
    background-color: #f9f9f9; /* Change the background color */
    /* Add any other styles you want */
}

</style>