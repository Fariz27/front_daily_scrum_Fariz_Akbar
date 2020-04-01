<template>
  <div class="container-fluid page-body-wrapper">
    <div class="main-panel">  
      <div class="content-wrapper" style="max-width: 90%;">
        <div v-if="messageBox" class="alert alert-success"> <a><span class="material-icons">cancel</span></a>
            <strong>{{messageSts}}</strong> {{messageDsc}}
        </div>
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <p class="card-title float-left">
                  <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                </p>
                <p class="card-description float-right">
                  <a
                    v-on:click="add"
                    href="#"
                    class="btn btn-sm btn-success btn-icon-text"
                    data-toggle="modal"
                    data-target="#modalDailyScrum"
                  >
                    <i class="mdi mdi-plus btn-icon-prepend"></i>
                    Add Activity
                  </a>
                </p>
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
                <div v-if="status == 0" class="row" style="margin-top:50px">
                  <div class="col-md-3 offset-md-1">
                    <div class="card" style="width: 18rem;">
                      <div class="card-body bg-success text-light">
                        <h4
                          class="card-title text-light font-weight-bold"
                          style="font-size:2rem"
                        >Senin</h4>
                        <p style="margin:0">Senin, 26 Maeret 2020</p>
                        <br />
                        <p style="margin:0">Laravel & Vue</p>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <h4>
                            <b>Aktifitas</b>
                          </h4>
                          <p>Aktifitas yang anda lakukan</p>
                        </li>
                        <li class="list-group-item">
                          <h4>
                            <b>Masalah</b>
                          </h4>
                          <p>Masalah yang anda alami</p>
                        </li>
                        <li class="list-group-item">
                          <h4>
                            <b>Solusi</b>
                          </h4>
                          <p>Solusi untuk masalah anda</p>
                        </li>
                      </ul>
                      <div class="card-body">
                        <a href="#" class="card-link">
                          <span class="material-icons">create</span>
                        </a>
                        <a href="#" class="card-link text-danger">
                          <span class="material-icons">delete_forever</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 offset-md-1">
                    <div class="card" style="width: 18rem;">
                      <div class="card-body bg-primary text-light">
                        <h4
                          class="card-title text-light font-weight-bold"
                          style="font-size:2rem"
                        >Minggu</h4>
                        <p style="margin:0">Senin, 26 Maeret 2020</p>
                        <br />
                        <p style="margin:0">Laravel & Vue</p>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <h4>
                            <b>Aktifitas</b>
                          </h4>
                          <p>Aktifitas yang anda lakukan</p>
                        </li>
                        <li class="list-group-item">
                          <h4>
                            <b>Masalah</b>
                          </h4>
                          <p>Masalah yang anda alami</p>
                        </li>
                        <li class="list-group-item">
                          <h4>
                            <b>Solusi</b>
                          </h4>
                          <p>Solusi untuk masalah anda</p>
                        </li>
                      </ul>
                      <div class="card-body">
                        <a href="#" class="card-link">
                          <span class="material-icons">create</span>
                        </a>
                        <a href="#" class="card-link text-danger">
                          <span class="material-icons">delete_forever</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 offset-md-1">
                    <div class="card" style="width: 18rem;">
                      <div class="card-body bg-warning text-light">
                        <h4
                          class="card-title text-light font-weight-bold"
                          style="font-size:2rem"
                        >Sabtu</h4>
                        <p style="margin:0">Senin, 26 Maeret 2020</p>
                        <br />
                        <p style="margin:0">Laravel & Vue</p>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <h4>
                            <b>Aktifitas</b>
                          </h4>
                          <p>Aktifitas yang anda lakukan</p>
                        </li>
                        <li class="list-group-item">
                          <h4>
                            <b>Masalah</b>
                          </h4>
                          <p>Masalah yang anda alami</p>
                        </li>
                        <li class="list-group-item">
                          <h4>
                            <b>Solusi</b>
                          </h4>
                          <p>Solusi untuk masalah anda</p>
                        </li>
                      </ul>
                      <div class="card-body">
                        <a href="#" class="card-link">
                          <span class="material-icons">create</span>
                        </a>
                        <a href="#" class="card-link text-danger">
                          <span class="material-icons">delete_forever</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="!status == 0" class="row" style="margin-top:50px;">
                  <div class="col-md-3 offset-md-1" v-for="(scrum, index) in daily" :key="scrum.id">
                    <div class="card" style="width: 18rem;">
                      <div
                        v-if="index == 0"
                        class="card-body bg-success text-light"
                        style="padding-bottom:15px"
                      >
                        <h4
                          class="card-title text-light font-weight-bold"
                          style="font-size:2rem;margin-bottom:5px"
                        >{{scrum.created_at | moment("dddd")}}</h4>
                        <p style="margin:0">{{scrum.created_at | moment("Do MMMM YYYY")}}</p>
                        <br />
                        <h4 style="margin:0;">{{scrum.team | change | capitalize}}</h4>
                      </div>
                      <div
                        v-if="index == 1"
                        class="card-body bg-primary text-light"
                        style="padding-bottom:15px"
                      >
                        <h4
                          class="card-title text-light font-weight-bold"
                          style="font-size:2rem;margin-bottom:5px"
                        >{{scrum.created_at | moment("dddd")}}</h4>
                        <p style="margin:0">{{scrum.created_at | moment("Do MMMM YYYY")}}</p>
                        <br />
                        <h4 style="margin:0;">{{scrum.team | change | capitalize}}</h4>
                      </div>
                      <div
                        v-if="index == 2"
                        class="card-body bg-warning text-light"
                        style="padding-bottom:15px"
                      >
                        <h4
                          class="card-title text-light font-weight-bold"
                          style="font-size:2rem;margin-bottom:5px"
                        >{{scrum.created_at | moment("dddd")}}</h4>
                        <p style="margin:0">{{scrum.created_at | moment("Do MMMM YYYY")}}</p>
                        <br />
                        <h4 style="margin:0;">{{scrum.team | change | capitalize}}</h4>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <h4>
                            <b>Aktifitas</b>
                          </h4>
                          <p>{{scrum.activity_today}}</p>
                        </li>
                        <li class="list-group-item">
                          <h4>
                            <b>Masalah</b>
                          </h4>
                          <p>{{scrum.problem_today}}</p>
                        </li>
                        <li class="list-group-item">
                          <h4>
                            <b>Solusi</b>
                          </h4>
                          <p>{{scrum.solution}}</p>
                        </li>
                      </ul>
                      <div class="card-body">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#modalDailyScrum"
                          class="card-link"
                          v-on:click="edit(scrum)"
                        >
                          <span class="material-icons">create</span>
                        </a>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#modalDailyScrum"
                          class="card-link text-danger"
                        >
                          <span class="material-icons">delete_forever</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modalDailyScrum"
        tabindex="-1"
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content modal-md">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalLabel">Add Activity</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="id_siswa" class="col-form-label">Kelas / Team</label>
                  <select v-model="team" class="form-control" name="team" id="team" required>
                    <option selected value="BEON">BEON</option>
                    <option value="DDS">DDS</option>
                    <option value="DOT">DOT</option>
                    <option value="node1">Node 1</option>
                    <option value="node2">Node 2</option>
                    <option value="react1">React 1</option>
                    <option value="react2">React 2</option>
                    <option value="laravel">Laravel</option>
                    <option value="laravel_vue">Laravel & Vue</option>
                    <option value="android">Android</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="activity_today" class="col-form-label">Aktifitas Hari Ini</label>
                  <textarea
                    v-model="activity_today"
                    name="activity_today"
                    id="activity_today"
                    class="form-control"
                    rows="7"
                    cols="10"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="problem_yesterday" class="col-form-label">Masalah Hari Ini</label>
                  <textarea
                    v-model="problem_today"
                    name="problem_yesterday"
                    id="problem_yesterday"
                    class="form-control"
                    rows="7"
                    cols="10"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="solution" class="col-form-label">Your Solution</label>
                  <textarea
                    v-model="solution"
                    name="solution"
                    id="solution"
                    class="form-control"
                    rows="7"
                    cols="10"
                  ></textarea>
                </div>
                <div class="form-group">
                  <button
                    v-on:click="save"
                    type="button"
                    class="btn btn-md btn-success"
                    data-dismiss="modal"
                  >>Submit</button>
                  <button type="button" class="btn btn-md btn-light" data-dismiss="modal">Cancel</button>
                </div>
              </form>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>

      <!-- content-wrapper ends -->
      <!-- partial:partials/_footer.html -->
      <footer class="footer">
        <div class="w-100 clearfix">
          <span
            class="text-muted d-block text-center text-sm-left d-sm-inline-block"
          >Copyright © 2020 Moklet. All rights reserved.</span>
          <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Tugas PJJ Moklet & Made With
            <i class="mdi mdi-heart-outline text-danger"></i>
          </span>
        </div>
      </footer>
      <!-- partial -->
    </div>
    <!-- main-panel ends -->
  </div>
</template>
<style>
/* Absolute Center Spinner */
.loading {
  position: fixed;
  z-index: 999;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
}

/* Transparent Overlay */
.loading:before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
<script>
export default {
  data() {
    return {
      daily: [],
      currentPage: 1,
      perPage: 10,
      offset: 0,
      status: 0,
      team: "",
      activity_today: "",
      problem_today: "",
      solution: "",
      key: "",
      id: null,
      message: "",
      loading: true,
      selectedOp: "",
      messageBox: false,
      messageSts: "",
      messageDsc: "",
    };
  },
  methods: {
    getData() {
      let conf = { headers: { Authorization: "Bearer " + this.key } };
      let offset = (this.currentPage - 1) * this.perPage;
      this.loading = true;
      this.axios
        .get("/login/check", conf)
        .then(response => {
          this.id = response.data.user.id;
          this.axios
            .get("/daily/" + response.data.user.id, conf)
            .then(response => {
              this.status = response.data.status;
              if (response.data.status == 1) {
                this.daily = response.data.daily;
                console.log(response.data.count);
                this.loading = false;
                if (response.data.count == 0) {
                  this.status = 0;
                  this.loading = false;
                }
              } else {
                console.log("Data Tidak Ditemukan");
                this.loading = false;
              }
            })
            .catch(error => {
              console.log(error);
              this.loading = false;
            });
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },
    add() {
      this.selectedOp = "";
      this.action = "insert";
      this.Team = "";
      this.activity_today = "";
      this.problem_today = "";
      this.solution = "";
    },
    edit(scrum) {
      this.action = "edit";
      this.Team = scrum.team;
      this.selectedOp = scrum.team;
      this.activity_today = scrum.activity_today;
      this.problem_today = scrum.problem_today;
      this.solution = scrum.solution;
    },
    save() {
      let conf = { headers: { Authorization: "Bearer " + this.key } };
      this.loading = true;
      if (this.action === "insert") {
        let form = new FormData();
        form.append("team", this.team);
        form.append("activity_today", this.activity_today);
        form.append("problem_today", this.problem_today);
        form.append("solution", this.solution);

        this.axios
          .post("/daily/" + this.id, form, conf)
          .then(response => {
            this.getData();
            this.message = response.data.message;
            this.loading = false;
          })
          .catch(error => {
            console.log(error);
            this.loading = false;
          });
      } else {
        this.loading = true;
        let form = {
          team: this.team,
          activity_today: this.activity_today,
          problem_today: this.problem_today,
          solution: this.solution
        };
        this.axios
          .put("/daily/" + this.id, form, conf)
          .then(response => {
            this.message = response.data.message;
            this.loading = false;
          })
          .catch(error => {
            console.log(error);
            this.loading = false;
          });
      }
    }
  },
  filters: {
    capitalize(value) {
      var splitStr = value.toLowerCase().split(" ");
      for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(" ");
    },
    change(value) {
      var myStr = value;
      var newStr = myStr.replace(/_/g, " & ");
      return newStr;
    }
  },
  mounted() {
    this.key = localStorage.getItem("Authorization");
    this.getData();
  }
};
</script>
