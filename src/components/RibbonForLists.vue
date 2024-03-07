<template>
        <div class="columns has-background-light" style="border-bottom:1px solid rgba(0, 0, 0, 0.284) ;">
            <div class="column has-text-left" >
                <div class="columns is-multiline is-mobile is-gapless is-vcentered">

                    <div class="column is-narrow">
                        <span class="title is-6">{{ pageTitle }} : </span>
                    </div>

                    <div class="column is-narrow">
                        <a href="#" class="px-3 py-1" style="border-right: 1px solid black;">
                            <span class="subtitle is-6">Tous</span>
                        </a>
                    </div>

                    <div class="column is-narrow" v-if="!searchInput_isDisabled">
                        <div class="field px-2 has-addons">
                            <div class="control has-icons-left">
                                <input class="input has-border-bottom-orange is-small " type="text" placeholder="Rechercher" v-model="searchInput_data">
                                <span class="icon is-small is-left">
                                <i class="fas fa-search"></i>
                                </span>
                            </div>
                            <div class="control ">
                                <a href="#" class=" button is-small has-border-bottom-orange" @click="searchInput_isDisabled=true">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-close"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="column is-narrow" v-else>
                        <a href="#" class="px-3 py-3" @click="searchInput_isDisabled=false;searchInput_data=''">
                            <span class="icon">
                                <i class="fas fa-search"></i>
                            </span>
                            <span class="subtitle is-6">Rechercher</span>
                        </a>
                    </div>

                    <div class="column is-narrow">
                        <a href="#" class="px-3 py-3">
                            <span class="icon">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="subtitle is-6">Nouveau</span>
                        </a>
                    </div>

                    <div class="column  is-narrow">
                        <a href="#" class="px-3 py-3">
                            <span class="icon">
                                <i class="fas fa-pencil"></i>
                            </span>
                            <span class="subtitle is-6">Modifier</span>
                        </a>
                    </div>
            
                    <div class="column is-narrow">
                        <a href="#" class="px-3 py-3">
                            <span class="icon">
                                <i class="far fa-eye"></i>
                            </span>
                            <span class="subtitle is-6">Afficher</span>
                        </a>
                    </div>

                    <div class="column is-narrow">
                        <a href="#" class="px-3 py-3">
                            <span class="icon">
                                <i class="far fa-address-book"></i>
                            </span>
                            <span class="subtitle is-6">Contact</span>
                        </a>
                    </div>

                    <div class="column is-narrow">
                        <div :class="{'dropdown':true,'is-active':expandedOrCollapsedBtn=='actionBtn'}" style="border-radius: 0">
                            <div class="dropdown-trigger">
                                <a href="#" class="px-3 py-3"  aria-haspopup="true" aria-controls="dropdown-menu" @click="expand_collapse_ReportBtn('actionBtn')">
                                <span class="subtitle is-6">Traitement</span>
                                <span class="icon" style="padding:;">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </span>
                                </a>
                            </div>
                            <div class="dropdown-menu mt-2 shadow" id="dropdown-menu" role="menu" style="padding: 0;border: 0;">
                                <div class="dropdown-content"  style="padding: 0;">
                                <a href="#" class="dropdown-item">
                                    Dropdown item
                                </a>
                                <a href="#" class="dropdown-item">
                                    Active dropdown item
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column is-narrow">
                        <div :class="{'dropdown':true, 'is-active':expandedOrCollapsedBtn=='navigateBtn'}" style="border-radius: 0">
                            <div class="dropdown-trigger">
                                <a href="#" class="px-3 py-3"  aria-haspopup="true" aria-controls="dropdown-menu1" @click="expand_collapse_ReportBtn('navigateBtn')">
                                <span class="subtitle is-6">Naviguer</span>
                                <span class="icon" style="padding:;">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </span>
                                </a>
                            </div>
                            <div class="dropdown-menu mt-2 shadow" id="dropdown-menu1" role="menu" style="padding: 0;border: 0;">
                                <div class="dropdown-content"  style="padding: 0;">
                                <a href="#" class="dropdown-item">
                                    Dropdown item
                                </a>
                                <a href="#" class="dropdown-item ">
                                    Active dropdown item
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column is-narrow">
                        <div :class="{'dropdown':true, 'is-right':true,  'is-active':expandedOrCollapsedBtn=='reportBtn'}" style="border-radius: 0">
                            <div class="dropdown-trigger">
                                <a href="#" class="px-3 py-3"  aria-haspopup="true" aria-controls="dropdown-menu2" @click="expand_collapse_ReportBtn('reportBtn')">
                                <span class="subtitle is-6">Etat</span>
                                <span class="icon" >
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </span>
                                </a>
                            </div>
                            <div class="dropdown-menu mt-2 shadow" id="dropdown-menu2" role="menu" style="padding: 0;border: 0;">
                                <div class="dropdown-content" style="padding: 0;">
                                <a href="#" class="dropdown-item">
                                    Dropdown item
                                </a>
                                <a href="#" class="dropdown-item">
                                    Active dropdown item
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>



            <div class="column is-2 has-text-right">
                <a href="#" class="mx-2">
                    <span class="icon">
                        <i class="fas fa-share"></i>
                    </span>
                </a>
                <a href="#" class="mx-2">
                    <span class="icon">
                        <i class="fas fa-filter"></i>
                    </span>
                </a>
                <a href="#" class="mx-2">
                    <span class="icon">
                        <i class="fas fa-list"></i>
                    </span>
                </a>
                <a href="#" class="mx-2">
                    <span class="icon">
                        <i class="fas fa-info"></i>
                    </span>
                </a>

            </div>
        </div>
</template>
<script>

export default {
    name:'ribbon-for-list',
    components:{
    },
    props:['pageTitle'],
    data(){
    return {
        //permet de manipuler l'affichage des boutons dropdown
        expandedOrCollapsedBtn:'',

        //permet d'afficher la zone de recherche
        searchInput_isDisabled:true,
        //indique la variable qui contiendra les données à rechercher
        searchInput_data:''

    }
    },
    methods:{
        expand_collapse_ReportBtn(currentBtn){
            if (this.expandedOrCollapsedBtn ==currentBtn) this.expandedOrCollapsedBtn= ''
            else this.expandedOrCollapsedBtn= currentBtn
        }
}
    
}
</script>
<style scoped>
a:hover, th:hover {
    background-color: rgba(255, 68, 0, 0.068);
}
span i{
    color: #ffa500;
}
.dropdown-content a:hover{
    background-color: rgba(255, 68, 0, 0.067)
}

.has-border-bottom-orange{
    border-bottom:3px solid orange;
}

.has-background-orange{
    background-color: #ff4500;
}


</style>