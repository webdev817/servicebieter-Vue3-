<template>
<div>
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
          <h2>Buy Services</h2>
        </div>
      </div>
    </div>
  </div>


  <div class="inner_content_area">
    <div class="container container-fluid">
      <div class="row no-margin">
        <div class="fiters_section">
          <div class="col-lg-3 col-md-3">
            <div class="search_area">
              <input type="button" class="search_btn">
              <input type="text" class="search_text_field" placeholder="Search">
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6">
            <select class="select_field">
              <option>Select Sub-category</option>
            </select>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6">
            <select class="select_field">
              <option>Select Type</option>
            </select>
          </div>
          <div class="col-lg-2 col-md-2">
            <select class="select_field">
              <option>Select Price</option>
            </select>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="filters_btns">
              <ul>
                <li><a href="#">Apply</a></li>
                <li><a href="#">Reset</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="inner_services_area">
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="service_post">
              <div class="service_banner"> <img src="../assets/images/post.jpg" class="img-responsive" alt=""/> </div>
              <div class="service_post_details">
                <div class="post_owner"> <img src="../assets/images/ceo.png" width="45" height="45" alt=""/>
                  <h3>AWSOME VILLA<br>
                    <span>CEO</span></h3>
                </div>
                <p>Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum</p>
                <div class="stars"> <img src="../assets/images/stars.png" width="87" height="16" alt=""/> </div>
                <div class="service_post_price_sec">
                  <div class="pull-left heart_sec"> <i class="fa fa-heart" aria-hidden="true"></i> </div>
                  <div class="pull-right price_sec">
                    <h4>$ 35.99</h4>
                  </div>
                </div>
              </div>
              <div class="service_post_btns">
                <ul>
                  <li><a href="#myModal" role="button" data-toggle="modal">Buy Now</a></li>
                  <li><a href="#sendgiftmethod" role="button" data-toggle="modal">Send as Gift</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="service_post">
              <div class="service_banner"> <img src="../assets/images/post.jpg" class="img-responsive" alt=""/> </div>
              <div class="service_post_details">
                <div class="post_owner"> <img src="../assets/images/ceo.png" width="45" height="45" alt=""/>
                  <h3>AWSOME VILLA<br>
                    <span>CEO</span></h3>
                </div>
                <p>Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum</p>
                <div class="stars"> <img src="../assets/images/stars.png" width="87" height="16" alt=""/> </div>
                <div class="service_post_price_sec">
                  <div class="pull-left heart_sec"> <i class="fa fa-heart" aria-hidden="true"></i> </div>
                  <div class="pull-right price_sec">
                    <h4>$ 35.99</h4>
                  </div>
                </div>
              </div>
              <div class="service_post_btns">
                <ul>
                   <li><a href="#myModal" role="button" data-toggle="modal">Buy Now</a></li>
                  <li><a href="#sendgiftmethod" role="button" data-toggle="modal">Send as Gift</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="service_post">
              <div class="service_banner"> <img src="../assets/images/post.jpg" class="img-responsive" alt=""/> </div>
              <div class="service_post_details">
                <div class="post_owner"> <img src="../assets/images/ceo.png" width="45" height="45" alt=""/>
                  <h3>AWSOME VILLA<br>
                    <span>CEO</span></h3>
                </div>
                <p>Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum</p>
                <div class="stars"> <img src="../assets/images/stars.png" width="87" height="16" alt=""/> </div>
                <div class="service_post_price_sec">
                  <div class="pull-left heart_sec"> <i class="fa fa-heart" aria-hidden="true"></i> </div>
                  <div class="pull-right price_sec">
                    <h4>$ 35.99</h4>
                  </div>
                </div>
              </div>
              <div class="service_post_btns">
                <ul>
                   <li><a href="#myModal" role="button" data-toggle="modal">Buy Now</a></li>
                  <li><a href="#sendgiftmethod" role="button" data-toggle="modal">Send as Gift</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="service_post">
              <div class="service_banner"> <img src="../assets/images/post.jpg" class="img-responsive" alt=""/> </div>
              <div class="service_post_details">
                <div class="post_owner"> <img src="../assets/images/ceo.png" width="45" height="45" alt=""/>
                  <h3>AWSOME VILLA<br>
                    <span>CEO</span></h3>
                </div>
                <p>Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum</p>
                <div class="stars"> <img src="../assets/images/stars.png" width="87" height="16" alt=""/> </div>
                <div class="service_post_price_sec">
                  <div class="pull-left heart_sec"> <i class="fa fa-heart" aria-hidden="true"></i> </div>
                  <div class="pull-right price_sec">
                    <h4>$ 35.99</h4>
                  </div>
                </div>
              </div>
              <div class="service_post_btns">
                <ul>
                   <li><a href="#myModal" role="button" data-toggle="modal">Buy Now</a></li>
                   <li><a href="#sendgiftmethod" role="button" data-toggle="modal">Send as Gift</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="service_post">
              <div class="service_banner"> <img src="../assets/images/post.jpg" class="img-responsive" alt=""/> </div>
              <div class="service_post_details">
                <div class="post_owner"> <img src="../assets/images/ceo.png" width="45" height="45" alt=""/>
                  <h3>AWSOME VILLA<br>
                    <span>CEO</span></h3>
                </div>
                <p>Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum</p>
                <div class="stars"> <img src="../assets/images/stars.png" width="87" height="16" alt=""/> </div>
                <div class="service_post_price_sec">
                  <div class="pull-left heart_sec"> <i class="fa fa-heart" aria-hidden="true"></i> </div>
                  <div class="pull-right price_sec">
                    <h4>$ 35.99</h4>
                  </div>
                </div>
              </div>
              <div class="service_post_btns">
                <ul>
                  <li><a href="#myModal" role="button" data-toggle="modal">Buy Now</a></li>
                  <li><a href="#sendgiftmethod" role="button" data-toggle="modal">Send as Gift</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="service_post">
              <div class="service_banner"> <img src="../assets/images/post.jpg" class="img-responsive" alt=""/> </div>
              <div class="service_post_details">
                <div class="post_owner"> <img src="../assets/images/ceo.png" width="45" height="45" alt=""/>
                  <h3>AWSOME VILLA<br>
                    <span>CEO</span></h3>
                </div>
                <p>Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum</p>
                <div class="stars"> <img src="../assets/images/stars.png" width="87" height="16" alt=""/> </div>
                <div class="service_post_price_sec">
                  <div class="pull-left heart_sec"> <i class="fa fa-heart" aria-hidden="true"></i> </div>
                  <div class="pull-right price_sec">
                    <h4>$ 35.99</h4>
                  </div>
                </div>
              </div>
              <div class="service_post_btns">
                <ul>
                   <li><a href="#myModal" role="button" data-toggle="modal">Buy Now</a></li>
                   <li><a href="#sendgiftmethod" role="button" data-toggle="modal">Send as Gift</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="service_post">
              <div class="service_banner"> <img src="../assets/images/post.jpg" class="img-responsive" alt=""/> </div>
              <div class="service_post_details">
                <div class="post_owner"> <img src="../assets/images/ceo.png" width="45" height="45" alt=""/>
                  <h3>AWSOME VILLA<br>
                    <span>CEO</span></h3>
                </div>
                <p>Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum</p>
                <div class="stars"> <img src="../assets/images/stars.png" width="87" height="16" alt=""/> </div>
                <div class="service_post_price_sec">
                  <div class="pull-left heart_sec"> <i class="fa fa-heart" aria-hidden="true"></i> </div>
                  <div class="pull-right price_sec">
                    <h4>$ 35.99</h4>
                  </div>
                </div>
              </div>
              <div class="service_post_btns">
                <ul>
                   <li><a href="#myModal" role="button" data-toggle="modal">Buy Now</a></li>
                 <li><a href="#sendgiftmethod" role="button" data-toggle="modal">Send as Gift</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="service_post">
              <div class="service_banner"> <img src="../assets/images/post.jpg" class="img-responsive" alt=""/> </div>
              <div class="service_post_details">
                <div class="post_owner"> <img src="../assets/images/ceo.png" width="45" height="45" alt=""/>
                  <h3>AWSOME VILLA<br>
                    <span>CEO</span></h3>
                </div>
                <p>Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum</p>
                <div class="stars"> <img src="../assets/images/stars.png" width="87" height="16" alt=""/> </div>
                <div class="service_post_price_sec">
                  <div class="pull-left heart_sec"> <i class="fa fa-heart" aria-hidden="true"></i> </div>
                  <div class="pull-right price_sec">
                    <h4>$ 35.99</h4>
                  </div>
                </div>
              </div>
              <div class="service_post_btns">
                <ul>
                   <li><a href="#myModal" role="button" data-toggle="modal">Buy Now</a></li>
                  <li><a href="#sendgiftmethod" role="button" data-toggle="modal">Send as Gift</a></li>
                </ul>
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
      name: 'BuyServices',
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
