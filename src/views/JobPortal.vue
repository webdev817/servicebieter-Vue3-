<template>
<div>
  aaa
  <div v-bind:class="isTopMenu ? 'topMenu fadeIn': 'topMenu fadeOut'">

    <div class="container container-fluid">
      <div class="row no-margin">
        <div class="col-lg-2 col-md-2 col-xs-7">
          <div class="logo_area"> <a href="#"><img src="../assets/images/logo.png" width="156" height="31" alt=""/></a> </div>
        </div>
        <div class="col-lg-1 col-md-1 col-lg-push-9 col-md-push-9 col-xs-3">
          <div class="user_section"> <a class="user_btn"><img src="../assets/images/user.png" width="38" height="38" alt=""/></a>
            <div class="user_menu">
              <div class="user_btns_tab_area">
                <div id="TabbedPanels3" class="TabbedPanels">
                  <ul class="TabbedPanelsTabGroup user_btns_tab">
                    <li class="TabbedPanelsTab" tabindex="0">User Login</li>
                    <li class="TabbedPanelsTab" tabindex="0">Company Login</li>
                  </ul>
                  <div class="TabbedPanelsContentGroup">
                    <div class="TabbedPanelsContent" id="user_btns_section">
                      <div class="user_btns_area">
                        <ul>
                          <li><a href="#myLogin" role="button" data-toggle="modal">Sign In</a></li>
                          <li><a href="#myregister" role="button" data-toggle="modal">Sign Up</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="TabbedPanelsContent" id="user_btns_section">
                      <div class="user_btns_area">
                        <ul>
                          <li><a href="#">CEO Login </a></li>
                          <li><a href="#">Team Login </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-lg-pull-1 col-md-pull-1 col-xs-12">
          <div class="nav_section">
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation"> 
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
              </div>
              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="home">Home</a></li>
                  <li><a target="_blank" href="https://yamiyami.de/">Food Service</a></li>
                  <li><a href="buyservices">Buy Service</a></li>
                  <li><a href="services">Our Service</a></li>
                  <li><a href="job-portal">Job Portal</a></li>
                  <li><a href="be-a-partner">Be a Partner</a></li>
                  <li><a href="post-your-job">Post Your Job</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header">
    <div class="container container-fluid">
      <div class="row no-margin">
        <div class="col-lg-2 col-md-2 col-xs-7">
          <div class="logo_area"> <a href="#"><img src="../assets/images/logo.png" width="156" height="31" alt=""/></a> </div>
        </div>
        <div class="col-lg-1 col-md-1 col-lg-push-9 col-md-push-9 col-xs-3">
          <div class="user_section"> <a class="user_btn"><img src="../assets/images/user.png" width="38" height="38" alt=""/></a>
            <div class="user_menu">
              <div class="user_btns_tab_area">
                <div id="TabbedPanels2" class="TabbedPanels">
                  <ul class="TabbedPanelsTabGroup user_btns_tab">
                    <li class="TabbedPanelsTab" tabindex="0">User Login</li>
                    <li class="TabbedPanelsTab" tabindex="0">Company Login</li>
                  </ul>
                  <div class="TabbedPanelsContentGroup">
                    <div class="TabbedPanelsContent" id="user_btns_section">
                      <div class="user_btns_area">
                        <ul>
                          <li><a href="#myLogin" role="button" data-toggle="modal">Sign In</a></li>
                          <li><a href="#myregister" role="button" data-toggle="modal">Sign Up</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="TabbedPanelsContent" id="user_btns_section">
                      <div class="user_btns_area">
                        <ul>
                          <li><a href="#">CEO Login </a></li>
                          <li><a href="#">Team Login </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-lg-pull-1 col-md-pull-1 col-xs-12">
          <div class="nav_section">
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation"> 
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
              </div>
              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="home">Home</a></li>
                  <li><a target="_blank" href="https://yamiyami.de/">Food Service</a></li>
                  <li><a href="buyservices">Buy Service</a></li>
                  <li><a href="services">Our Service</a></li>
                  <li><a href="job-portal">Job Portal</a></li>
                  <li><a href="be-a-partner">Be a Partner</a></li>
                  <li><a href="post-your-job">Post Your Job</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="inner_title_area">
    <div class="container container-fluid">
      <div class="row no-margin">
        <div class="col-lg-12 col-md-12">
          <h2>Job Portal</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="job_fiters_section">
    <div class="container container-fluid">
      <div class="row no-margin">
        <div class="col-lg-3 col-md-3">
          <div class="search_area2">
            <input type="button" class="search_btn">
            <input type="text" class="search_text_field" placeholder="Search">
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <select class="select_field2">
            <option>City</option>
          </select>
        </div>
        <div class="col-lg-2 col-md-2">
          <select class="select_field3">
            <option>Categories</option>
          </select>
        </div>
        <div class="col-lg-2 col-md-2">
          <select class="select_field3">
            <option>Type of work</option>
          </select>
        </div>
        <div class="col-lg-2 col-md-2">
          <div class="job_btn"> <a href="#">Find Jobs</a> </div>
        </div>
      </div>
    </div>
  </div>  

  <div class="inner_content_area">
    <div class="container container-fluid">
      <div class="row no-margin">
        <div class="clearfix"></div>
        <div class="job_tabs_area">
          <div id="TabbedPanels1" class="TabbedPanels">
            <ul class="TabbedPanelsTabGroup">
              <li class="TabbedPanelsTab" tabindex="0"
                v-bind:style="curTabId ===0 ? 'background-color:#9ac22f; color:white;' : curHoverTabId ===0 ? 'background-color:#f4f3f3;': ''" 
                v-on:click="selectTab(0)"
                @mouseenter="hoverTab(0)"
                @mouseout = "hoverTab(-1)"
              >SEARCH JOB</li>
              <li class="TabbedPanelsTab" tabindex="0"
                v-bind:style="curTabId ===1 ? 'background-color:#9ac22f; color:white;' : curHoverTabId ===1 ? 'background-color:#f4f3f3;': ''" 
                v-on:click="selectTab(1)"
                @mouseenter="hoverTab(1)"
                @mouseout = "hoverTab(-1)"
              >JOB OFERS</li>
            </ul>
            <div class="TabbedPanelsContentGroup">
              <div class="TabbedPanelsContent">
                <div class="job_posts_area">
                  <div class="job_post">
                    <div class="row no-margin">
                      <div class="col-lg-12 col-md-12">
                        <div class="job_post_details"> <a href="#myModal" role="button"  data-toggle="modal"><img src="../assets/images/jjob1.png" class="img-responsive" alt=""/></a>
                          <h2><a href="#myModal" role="button"  data-toggle="modal">IT - System Administrator (M/W/D)</a></h2>
                          <p><a href="#myModal" role="button"  data-toggle="modal">Entelios AG</a></p>
                          <ul>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Berlin</li>
                            <li><i class="fa fa-calendar" aria-hidden="true"></i> 1 weak ago</li>
                          </ul>
                          <div class="like_section"> <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job_post">
                    <div class="row no-margin">
                      <div class="col-lg-12 col-md-12">
                        <div class="job_post_details"> <a href="#myModal" role="button"  data-toggle="modal"><img src="../assets/images/jjob2.png" class="img-responsive" alt=""/></a>
                          <h2><a href="#myModal" role="button"  data-toggle="modal">IT - System Administrator (M/W/D)</a></h2>
                          <p><a href="#myModal" role="button"  data-toggle="modal">Entelios AG</a></p>
                          <ul>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Berlin</li>
                            <li><i class="fa fa-calendar" aria-hidden="true"></i> 1 weak ago</li>
                          </ul>
                           <div class="like_section"> <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job_post">
                    <div class="row no-margin">
                      <div class="col-lg-12 col-md-12">
                        <div class="job_post_details"> <a href="#myModal" role="button"  data-toggle="modal"><img src="../assets/images/jjob3.png" class="img-responsive" alt=""/></a>
                          <h2><a href="#myModal" role="button"  data-toggle="modal">IT - System Administrator (M/W/D)</a></h2>
                          <p><a href="#myModal" role="button"  data-toggle="modal">Entelios AG</a></p>
                          <ul>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Berlin</li>
                            <li><i class="fa fa-calendar" aria-hidden="true"></i> 1 weak ago</li>
                          </ul>
                           <div class="like_section"> <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job_post">
                    <div class="row no-margin">
                      <div class="col-lg-12 col-md-12">
                        <div class="job_post_details"> <a href="#myModal" role="button"  data-toggle="modal"><img src="../assets/images/jjob4.png" class="img-responsive" alt=""/></a>
                          <h2><a href="#myModal" role="button"  data-toggle="modal">IT - System Administrator (M/W/D)</a></h2>
                          <p><a href="#myModal" role="button"  data-toggle="modal">Entelios AG</a></p>
                          <ul>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Berlin</li>
                            <li><i class="fa fa-calendar" aria-hidden="true"></i> 1 weak ago</li>
                          </ul>
                           <div class="like_section"> <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="TabbedPanelsContent">
                <div class="job_posts_area">
                  <div class="job_post">
                    <div class="row no-margin">
                      <div class="col-lg-12 col-md-12">
                        <div class="job_post_details"><a href="#myModal" role="button"  data-toggle="modal"> <img src="../assets/images/jjob1.png" class="img-responsive" alt=""/></a>
                          <h2><a href="#myModal" role="button"  data-toggle="modal">IT - System Administrator (M/W/D)</a></h2>
                          <p><a href="#myModal" role="button"  data-toggle="modal">Entelios AG</a></p>
                          <ul>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Berlin</li>
                            <li><i class="fa fa-calendar" aria-hidden="true"></i> 1 weak ago</li>
                          </ul>
                          <div class="like_section"> <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job_post">
                    <div class="row no-margin">
                      <div class="col-lg-12 col-md-12">
                        <div class="job_post_details"><a href="#myModal" role="button"  data-toggle="modal"> <img src="../assets/images/jjob2.png" class="img-responsive" alt=""/></a>
                          <h2><a href="#myModal" role="button"  data-toggle="modal">IT - System Administrator (M/W/D)</a></h2>
                          <p><a href="#myModal" role="button"  data-toggle="modal">Entelios AG</a></p>
                          <ul>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Berlin</li>
                            <li><i class="fa fa-calendar" aria-hidden="true"></i> 1 weak ago</li>
                          </ul>
                          <div class="like_section"> <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job_post">
                    <div class="row no-margin">
                      <div class="col-lg-12 col-md-12">
                        <div class="job_post_details"> <a href="#myModal" role="button"  data-toggle="modal"><img src="../assets/images/jjob3.png" class="img-responsive" alt=""/></a>
                          <h2><a href="#myModal" role="button"  data-toggle="modal">IT - System Administrator (M/W/D)</a></h2>
                          <p><a href="#myModal" role="button"  data-toggle="modal">Entelios AG</a></p>
                          <ul>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Berlin</li>
                            <li><i class="fa fa-calendar" aria-hidden="true"></i> 1 weak ago</li>
                          </ul>
                          <div class="like_section"> <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job_post">
                    <div class="row no-margin">
                      <div class="col-lg-12 col-md-12">
                        <div class="job_post_details"> <a href="#myModal" role="button"  data-toggle="modal"><img src="../assets/images/jjob4.png" class="img-responsive" alt=""/></a>
                          <h2><a href="#myModal" role="button"  data-toggle="modal">IT - System Administrator (M/W/D)</a></h2>
                          <p><a href="#myModal" role="button"  data-toggle="modal">Entelios AG</a></p>
                          <ul>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Berlin</li>
                            <li><i class="fa fa-calendar" aria-hidden="true"></i> 1 weak ago</li>
                          </ul>
                          <div class="like_section"> <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="col-lg-6 col-md-6 col-sm-6">
      <div class="copyrights">
        <p>© 2020 Servicebieter. All Rights Reserved</p>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6">
      <div class="terms">
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Condetions</a></li>
          <li><a href="#lang" role="button" data-toggle="modal"><img src="../assets/images/download.png" width="53" height="53" alt=""/></a></li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>

<script>
  export default {
      name: 'JobPortal',
      data() {
        return {
          curTabId:0,
          curHoverTabId:-1,
          isTopMenu: false,
        };
      },
      created() {
        window.addEventListener('scroll', this.handleScroll);
      },

      methods: {
        selectTab( selTabId) {
          this.curTabId = selTabId;
        },
        hoverTab ( hoverTabId) {
          this.curHoverTabId = hoverTabId;
        },
        handleScroll() {
          this.isTopMenu = ( window.pageYOffset>200);        
        }
      },
      components: {
      },
      mounted() {
      },
      updated() {
      }
    };

</script>

<style>

  @import "../assets/css/j-forms.css";

</style>
