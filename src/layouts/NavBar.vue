<template>
  <div class="horizontal-menu">
    <nav class="navbar top-navbar col-lg-12 col-12 p-0">
      <div class="nav-top flex-grow-1">
        <div class="container d-flex flex-row h-100 align-items-center">
          <div
            class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
          >
            <a class="navbar-brand brand-logo" href="index.html">
              <img src="assets/img/logo.png" />
            </a>
            <a class="navbar-brand brand-logo-mini" href="index.html">
              <img src="assets/img/logo.png" />
            </a>
          </div>
          <div
            class="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1"
          >
            <ul class="navbar-nav navbar-nav-right">
              <li class="nav-item nav-profile dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  id="profileDropdown"
                >Hi, Siswa</a>
                <div
                  class="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="profileDropdown"
                >
                  <a class="dropdown-item"
                  v-on:click="logout">
                    <i class="mdi mdi-logout text-primary"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
            <button
              class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="horizontal-menu-toggle"
            >
              <span class="mdi mdi-menu"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <nav class="bottom-navbar">
      <div class="container">
        <ul class="nav page-navigation">
          <li class="nav-item" v-bind:class="{ active: isActive }">
            <a class="nav-link" href="input_daily_scrum.html">
              <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              <span class="menu-title">Today</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="input_daily_scrum.html">
              <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              <span class="menu-title">My Daily Scrum</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>  
  </div>
</template>
<script>
export default {
    data(){
        return{
            isActive:true,

        }
    },
    methods:{
        logout() {
      let conf = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Authorization")
        }
      };
      let form = new FormData();
      this.axios
        .post("/logout", form, conf)
        .then(response => {
          if (response.data.logged === false || response.data.status === 0) {
            this.$store.commit("logout");
            localStorage.removeItem("Authorization");
            this.$router.push({ path: "/login" });
          }
        })
        .catch(error => {});
    }
    }
}
</script>