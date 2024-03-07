<template>
    <div class="">
        <nav class="navbar  is-transparent has-centered-logo-alt" role="navigation" aria-label="main navigation">
            <div class="navbar-brand is-hidden-desktop">
                <span class="navbar-item">
                    <a class="navbar-item">
                        <img src="https://bulma.io/images/bulma-logo.png" width="80">
                    </a>
                    <input class="input " type="text" placeholder="Medium input">
                </span>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
                       
            <div class="navbar-menu" style="border-bottom: 1px solid rgba(128, 128, 128, 0.175);margin-left: 5%;margin-right: 5%;">
                <div class="navbar-start">
                    <a class="navbar-item">
                        <img src="https://bulma.io/images/bulma-logo.png" >
                    </a>
                </div>
                <div class="navbar-brand is-hidden-touch">
                    <span class="navbar-item" href="#">
                        <input class="input" type="text" placeholder="Medium input">
                    </span>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-end">
                    <a class="navbar-item"> notif </a>
                    <a class="navbar-item"> photo </a>
                </div>
            </div>
        </nav>
        <div id="navbarBasicExample" class="navbar-menu is-active">
            <div>
                <div class="tabs is-boxed">
                    <ul>
                        <li :class="{'is-active':store.activeTab=='dashboard'}">
                            <a @click="store.setActiveTab('dashboard')">
                              <span class="icon is-small"><i class="fas fa-gauge" aria-hidden="true"></i></span>
                              <span>Dashboard</span>
                            </a>
                        </li>
                        <li :class="{'is-active':store.activeTab=='customers'}">
                          <a @click="store.setActiveTab('customers')">
                            <span class="icon is-small"><i class="fas fa-user" aria-hidden="true"></i></span>
                            <span>Clients</span>
                          </a>
                        </li>
                        <li :class="{'is-active':store.activeTab=='prospects'}">
                          <a @click="store.setActiveTab('prospects')">
                            <span class="icon is-small"><i class="fas fa-user-plus" aria-hidden="true"></i></span>
                            <span>Prospects</span>
                          </a>
                        </li>
                        <li :class="{'is-active':store.activeTab=='saleOrders'}">
                          <a @click="store.setActiveTab('saleOrders')">
                            <span class="icon is-small"><i class="fas fa-coins" aria-hidden="true"></i></span>
                            <span>Commandes vente</span>
                          </a>
                        </li>
                        <li :class="{'is-active':store.activeTab=='saleQuotes'}">
                          <a @click="store.setActiveTab('saleQuotes')">
                            <span class="icon is-small"><i class="fas fa-coins" aria-hidden="true"></i></span>
                            <span>Devis vente</span>
                          </a>
                        </li>
                        <li :class="{'is-active':store.activeTab=='items'}">
                          <a @click="store.setActiveTab('items')">
                            <span class="icon is-small"><i class="fas fa-mobile-screen" aria-hidden="true"></i></span>
                            <span>Articles</span>
                          </a>
                        </li>
                        <li :class="{'is-active':store.activeTab=='discountRequests'}">
                          <a @click="store.setActiveTab('discountRequests')">
                            <span class="icon is-small"><i class="fas fa-tag" aria-hidden="true"></i></span>
                            <span>Demandes de remise</span>
                          </a>
                        </li>
                        <li :class="{'is-active':store.activeTab=='releaseRequests'}">
                          <a @click="store.setActiveTab('releaseRequests')">
                            <span class="icon is-small"><i class="fas fa-lock-open" aria-hidden="true"></i></span>
                            <span>Demandes de déblocage</span>
                          </a>
                        </li>
                        <li :class="{'is-active':store.activeTab=='revisionRequests'}">
                          <a @click="store.setActiveTab('revisionRequests')">
                            <span class="icon is-small"><i class="fas fa-pen-to-square" aria-hidden="true"></i></span>
                            <span class="">Demandes de révision</span>
                          </a>
                        </li>
                        <li :class="{'is-active':store.activeTab=='history'}">
                          <a @click="store.setActiveTab('history')">
                            <span class="icon is-small"><i class="fas fa-clock-rotate-left" aria-hidden="true"></i></span>
                            <span>Historique</span>
                          </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>         
    </div>
</template>
<script setup>

  import {useNavigationTabStore} from '@/Stores/NavigationTab'

  const store = useNavigationTabStore()

</script>
