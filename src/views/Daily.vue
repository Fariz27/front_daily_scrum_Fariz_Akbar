<template>
  <div class="container-fluid page-body-wrapper">
    <div class="main-panel">
      <div class="content-wrapper" style="max-width: 90%;">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body" >
                <p class="card-title float-left">
                  <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                </p>
                <p class="card-description float-right">
                  <a
                    href="#"
                    class="btn btn-sm btn-success btn-icon-text"
                    data-toggle="modal"
                    data-target="#modalDailyScrum"
                  >
                    <i class="mdi mdi-plus btn-icon-prepend"></i>
                    Add Activity
                  </a>
                </p>

                <div v-if="status == 0" class="row" style="margin-top:25px">

                  <div class="col-md-3 offset-md-1">
                    <div class="card" style="width: 18rem;">
                      <div class="card-body bg-info text-light">
                        <h4 class="card-title text-light font-weight-bold" style="font-size:2rem">Senin</h4>
                        <p style="margin:0">Senin, 26 Maeret 2020</p><br/>
                        <p style="margin:0">Laravel & Vue</p>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h4><b>Aktifitas</b></h4>
                            <p>Aktifitas yang anda lakukan</p>
                        </li>
                        <li class="list-group-item">
                            <h4><b>Masalah</b></h4>
                            <p>Masalah yang anda alami</p>
                        </li>
                        <li class="list-group-item">
                            <h4><b>Solusi</b></h4>
                            <p>Solusi untuk masalah anda</p>
                        </li>
                      </ul>
                      <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 offset-md-1">
                    <div class="card" style="width: 18rem;">
                      <div class="card-body bg-primary text-light">
                        <h4 class="card-title text-light font-weight-bold" style="font-size:2rem">Minggu</h4>
                        <p style="margin:0">Senin, 26 Maeret 2020</p><br/>
                        <p style="margin:0">Laravel & Vue</p>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h4><b>Aktifitas</b></h4>
                            <p>Aktifitas yang anda lakukan</p>
                        </li>
                        <li class="list-group-item">
                            <h4><b>Masalah</b></h4>
                            <p>Masalah yang anda alami</p>
                        </li>
                        <li class="list-group-item">
                            <h4><b>Solusi</b></h4>
                            <p>Solusi untuk masalah anda</p>
                        </li>
                      </ul>
                      <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 offset-md-1">
                    <div class="card" style="width: 18rem;">
                      <div class="card-body bg-warning text-light">
                        <h4 class="card-title text-light font-weight-bold" style="font-size:2rem">Sabtu</h4>
                        <p style="margin:0">Senin, 26 Maeret 2020</p><br/>
                        <p style="margin:0">Laravel & Vue</p>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h4><b>Aktifitas</b></h4>
                            <p>Aktifitas yang anda lakukan</p>
                        </li>
                        <li class="list-group-item">
                            <h4><b>Masalah</b></h4>
                            <p>Masalah yang anda alami</p>
                        </li>
                        <li class="list-group-item">
                            <h4><b>Solusi</b></h4>
                            <p>Solusi untuk masalah anda</p>
                        </li>
                      </ul>
                      <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
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
                  <label for="id_siswa" class="col-form-label">Your Team</label>
                  <select class="form-control" name="team" id="team">
                    <option value="BEON" checked>BEON</option>
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
                  <label for="activity_yesterday" class="col-form-label">Yesterday Activity</label>
                  <textarea
                    name="activity_yesterday"
                    id="activity_yesterday"
                    class="form-control"
                    rows="7"
                    cols="10"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="activity_today" class="col-form-label">Today Activity</label>
                  <textarea
                    name="activity_today"
                    id="activity_today"
                    class="form-control"
                    rows="7"
                    cols="10"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="problem_yesterday" class="col-form-label">Yesterday Problem</label>
                  <textarea
                    name="problem_yesterday"
                    id="problem_yesterday"
                    class="form-control"
                    rows="7"
                    cols="10"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="solution" class="col-form-label">Your Solution</label>
                  <textarea name="solution" id="solution" class="form-control" rows="7" cols="10"></textarea>
                </div>
                <div class="form-group">
                  <button type="button" class="btn btn-md btn-success">Submit</button>
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
<script>
export default {
    data(){
        return{
            daily:[],
            currentPage:1,
            perPage:10,
            offset:0,
            status:0,
        }
    },
    methods:{
        getData(){
            let conf = { headers: { "Authorization" : 'Bearer ' + localStorage.getItem("Authorization") } };
            let offset = (this.currentPage - 1) * this.perPage;
            this.axios.get("/login/check", conf)
            .then(response => {
                this.axios.get("/daily/" + response.data.user.id, conf)
                .then(response => {
                    this.status = response.data.status;
                    if(response.data.status == 1){
                        this.daily = response.data.daily
                        console.log(response.data.count);
                        if(response.data.count == 0){
                            this.status = 0;
                        }
                    } else {
                        console.log("Data Tidak Ditemukan");
                    }
                    
                })
                .catch(error => {
                    console.log(error);
                });
            })
            .catch(error => {
                console.log(error);
            });
            
        }
    },
    mounted(){
        this.getData();
    }
}
</script>