<template>
  <div class="container-fluid page-body-wrapper full-page-wrapper">
    <div class="main-panel" style="background-color:white">
      <div class="content-wrapper d-flex align-items-center auth">
        <div v-if="loading" class="loading">
          <div class="row">
            <div class="spinner-grow text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-info" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <div class="row w-100" style="background-color:white">
          <div class="col-lg-5 mx-auto">
            <img src="assets/img/flat.png" width="100%" />
          </div>
          <div class="col-lg-5 mx-auto">
            <div class="auth-form-light text-left p-5" style="background-color:#f7f7f7">
              <div class="navbar-brand brand-logo">
                <img src="assets/img/logo.png" />
              </div>
              <h4>Selamat datang!</h4>
              <h6 class="font-weight-light">Login untuk mengakses aplikasi daily scrum.</h6>
              <form class="pt-3" method="post" action="#">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-account-outline text-primary"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      class="form-control form-control-lg border-left-0"
                      id="email"
                      name="email"
                      placeholder="E-Mail"
                      v-model="email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-lock-outline text-primary"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      class="form-control form-control-lg border-left-0"
                      name="password"
                      id="password"
                      v-model="password"
                      placeholder="Kata Sandi"
                      required
                    />
                  </div>
                </div>
                <div class="my-3">
                  <input
                    class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    value="MASUK"
                    v-on:click="login"
                  />
                </div>
                <div class="my-3">
                  <input
                    class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    value="LOGOUT"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- content-wrapper ends -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      message: "",
      loading:false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(response => {
          console.log("berhasil");
          this.$router.push({ path: "/" });
        })
        console.log("Login Gagal");
        this.loading = false;
    },
  },  
  mounted() {
    if(!localStorage.getItem("Authorization")==null){
      this.$router.push({ path: "/" });
    }
  }
};
</script>