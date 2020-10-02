<template>
<div id="post-your-job">
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
  <div class="inner_title_area over_picture">
    <div class="container container-fluid">
      <div class="row no-margin">
        <div class="col-lg-12 col-md-12">
          <h2>Post Your Job</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="shedow_layer"></div>
  <div class="jon_offers_page_content_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">
          <div class="job_post_tab_area">
            <div id="TabbedPanels1" class="TabbedPanels">
              <ul class="TabbedPanelsTabGroup jon_offers_tabs">
                <li class="TabbedPanelsTab" 
                  v-bind:style="(curHoverTabId ===0 || curTabId ===0) ? 'background-color:#9ac22f; color:white;' : ''" 
                  v-on:click="selectTab(0)"
                  @mouseenter="hoverTab(0)"
                  @mouseout = "hoverTab(-1)" >Job Description </li>
                <li class="TabbedPanelsTab"
                  v-bind:style="(curHoverTabId ===1 || curTabId ===1) ? 'background-color:#9ac22f; color:white;' : ''" 
                  @mouseenter="hoverTab(1)"
                  @mouseout = "hoverTab(-1)"                 
                  v-on:click="selectTab(1)">Payment & Work Plan</li>
                <li class="TabbedPanelsTab" 
                  v-bind:style="(curHoverTabId ===2 || curTabId ===2) ? 'background-color:#9ac22f; color:white;' : ''" 
                  @mouseenter="hoverTab(2)"
                  @mouseout = "hoverTab(-1)"                 
                  v-on:click="selectTab(2)">View & Post</li>
              </ul>
              <div class="TabbedPanelsContentGroup">
                <div v-if="curTabId === 0"  class="TabbedPanelsContent">
                  <div class="tab_content_1">
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <label class="job_post_section_lable">Select service</label>
                          <input class="job_post_textfield" placeholder="Job Title">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <select class="job_post_textfield">
                            <option>Select Category</option>
                          </select>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <select class="job_post_textfield">
                            <option>Select Sub Category</option>
                          </select>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <label class="job_post_section_lable">Select service</label>
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <select class="job_post_textfield">
                            <option>Country</option>
                          </select>
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <select class="job_post_textfield">
                            <option>District</option>
                          </select>
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <select class="job_post_textfield">
                            <option>City</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <h4>Choose a name for your project</h4>
                          <input class="job_post_textfield" placeholder="e.g. Build me a website">
                          <h4>Tell me more about your project</h4>
                          <textarea class="job_post_textarea" placeholder="Decribe your project here..."></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-6 col-md-6">
                          <div class="new_palceholder"> <img src="../assets/images/placeholder_bew.jpg" class="img-responsive" alt=""/> </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <p>Drag and drop any image or files that might be
                            helpful in explaining your brief here.
                            (Max file size : 25 MB)</p>
                          <a href="#myimagemodal" role="button" data-toggle="modal"><img src="../assets/images/upload_btn.jpg" width="146" height="38" alt=""/></a> </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-12 col-md-12">
                          <div class="upload_files_area">
                            <h5 class="pull-left">File.jpg</h5>
                            <h6 class="pull-right"><a href="#"><i class="fa fa-trash" aria-hidden="true"></i></a></h6>
                          </div>
                          <div class="clearfix"></div>
                          <div class="upload_files_area">
                            <h5 class="pull-left">File 2.png</h5>
                            <h6 class="pull-right"><a href="#"><i class="fa fa-trash" aria-hidden="true"></i></a></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="form_btns_area">
                      <ul>
                        <li><a href="#">Next</a></li>
                      </ul>
                    </div>
                  </div>
                </div>


                <div v-if="curTabId === 1" class="TabbedPanelsContent">
                  <div class="tab_content_2">
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <h4>Select inquire type</h4>
                          <p>Select any one option</p>
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <div class="select_inquire_post"> <a class="#">ASSIGNMENT</a> </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <div class="select_inquire_post"> <a class="#">COST ESTIMATE</a> </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <div class="select_inquire_post"> <a class="open_offers_btn">OFFER</a> </div>
                        </div>
                        <div class="open_offers">
                          <div class="col-lg-4 col-md-4">
                            <div class="select_inquire_post"> <a class="#">Verbindlich</a> </div>
                          </div>
                          <div class="col-lg-4 col-md-4">
                            <div class="select_inquire_post"> <a class="#">Unverbindlich</a> </div>
                          </div>
                          <div class="col-lg-4 col-md-4">
                            <div class="select_inquire_post"> <a class="#">Both</a> </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <h4>Select contract type</h4>
                          <p>Select any one option</p>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="select_inquire_post"> <a class="#">STANDARD CONTRACT</a> </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="select_inquire_post"> <a class="express_contract_btn">EXPRESS CONTRACT</a> </div>
                        </div>
                        <div class="express_contract_details">
                          <div class="col-lg-12 col-md-12">
                            <p>TAB THREE - Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <h4>Select company skills</h4>
                          <div class="row myskills" style="margin-left: -6px;"> 
                            <!-- Html Button --> 
                            <b id="skill-html" class="skill1" style="display:none;"><a href="#"
                              class="glyphicon glyphicon-remove"></a>HTML</b> 
                            
                            <!-- NodeJs Button --> 
                            
                            <b id="skill-node" class="skill1" style="display:none;"><a href="#"
                              class="glyphicon glyphicon-remove"></a>Node.js</b> 
                            
                            <!-- HTML5 Button --> 
                            
                            <b id="skill-html5" class="skill1" style="display:none;"><a href="#"
                              class="glyphicon glyphicon-remove"></a>HTML5</b> 
                            
                            <!-- Angular Button --> 
                            
                            <b id="skill-angular" class="skill1" style="display:none;"><a href="#"
                              class="glyphicon glyphicon-remove"></a>Angular.js</b> 
                            
                            <!-- React Button --> 
                            
                            <b id="skill-react" class="skill1" style="display:none;"><a href="#"
                              class="glyphicon glyphicon-remove"></a>React.js</b> 
                            
                            <!-- End All Skills Button --> 
                            
                            <a data-toggle="collapse" href="#collapse1">
                            <div class="form-control " id="selectedSkill" style="height: 48px;border-color: #97be2e; margin-bottom:20px;"></div>
                            </a> </div>
                          <div id="collapse1" class="panel-collapse collapse" style="background-color: #ffffff;">
                            <div class="checkbox_posts">
                              <ul id="asd" role="menu">
                                <li>
                                  <label class="lbl" for="html">
                                    <input onclick="SkillFun()" type="checkbox" class="a" id="html">
                                    HTML</label>
                                </li>
                                <!-- <li class="divider"></li> -->
                                <li>
                                  <label class="lbl" for="nodejs">
                                    <input onclick="SkillFun2()" type="checkbox" class="a" id="nodejs">
                                    Node.js</label>
                                </li>
                                <li>
                                  <label class="lbl" for="html5">
                                    <input onclick="SkillFun3()" type="checkbox" class="a" id="html5">
                                    HTML5</label>
                                </li>
                                <li>
                                  <label class="lbl" for="angularjs">
                                    <input onclick="SkillFun4()" type="checkbox" class="a" id="angularjs">
                                    Angularjs</label>
                                </li>
                                <li>
                                  <label class="lbl" for="reactjs">
                                    <input onclick="SkillFun5()" type="checkbox" class="a" id="reactjs">
                                    React.js</label>
                                </li>
                                <li>
                                  <center>
                                    <a class="btn btn-success" data-toggle="collapse" href="#collapse1"
                                  style="margin-bottom: 20px;">Submit Skills</a>
                                  </center>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <h4>Select company characteristics</h4>
                          <div class="row myskills" style="margin-left: -6px;"> 
                            <!-- Html Button --> 
                            <b id="skill-html2" class="skill1" style="display:none;"><a href="#"
                              class="glyphicon glyphicon-remove"></a>HTML</b> 
                            
                            <!-- NodeJs Button --> 
                            
                            <b id="skill-node2" class="skill1" style="display:none;"><a href="#"
                              class="glyphicon glyphicon-remove"></a>Node.js</b> 
                            
                            <!-- HTML5 Button --> 
                            
                            <b id="skill-html52" class="skill1" style="display:none;"><a href="#"
                              class="glyphicon glyphicon-remove"></a>HTML5</b> 
                            
                            <!-- Angular Button --> 
                            
                            <b id="skill-angular2" class="skill1" style="display:none;"><a href="#"
                              class="glyphicon glyphicon-remove"></a>Angular.js</b> 
                            
                            <!-- React Button --> 
                            
                            <b id="skill-react2" class="skill1" style="display:none;"><a href="#"
                              class="glyphicon glyphicon-remove"></a>React.js</b> 
                            
                            <!-- End All Skills Button --> 
                            
                            <a data-toggle="collapse" href="#collapse2">
                              <div class="form-control " id="selectedSkill" style="height: 48px;border-color: #97be2e; margin-bottom:20px;"> </div>
                            </a> 
                          </div>
                          <div id="collapse2" class="panel-collapse collapse" style="background-color: #ffffff;">
                            <div class="checkbox_posts">
                              <ul id="asdf" role="menu">
                                <li>
                                  <label class="lbl" for="html">
                                    <input onclick="SkillFun6()" type="checkbox" class="a" id="html">
                                    HTML</label>
                                </li>
                                <!-- <li class="divider"></li> -->
                                <li>
                                  <label class="lbl" for="nodejs">
                                    <input onclick="SkillFun7()" type="checkbox" class="a" id="nodejs">
                                    Node.js</label>
                                </li>
                                <li>
                                  <label class="lbl" for="html5">
                                    <input onclick="SkillFun8()" type="checkbox" class="a" id="html5">
                                    HTML5</label>
                                </li>
                                <li>
                                  <label class="lbl" for="angularjs">
                                    <input onclick="SkillFun9()" type="checkbox" class="a" id="angularjs">
                                    Angularjs</label>
                                </li>
                                <li>
                                  <label class="lbl" for="reactjs">
                                    <input onclick="SkillFun10()" type="checkbox" class="a" id="reactjs">
                                    React.js</label>
                                </li>
                              </ul>
                              <center>
                                <a class="btn btn-success" data-toggle="collapse" href="#collapse2"
                                  style="margin-bottom: 20px;">Submit Skills</a>
                              </center>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <h4>Select job task</h4>
                          <div class="row">
                            <div class="col-lg-8 col-md-8 col-xs-11">
                              <form id="add_poll_form" class="form-horizontal" method="POST" enctype="multipart/form-data" >
                                <div class="box-body">
                                  <div id='option_clone1' class="form-group option_clone" style="display: none;">
                                    <div class="col-sm-9 col-xs-10">
                                      <input type="text" class="job_post_textfield value1" name="options_value[]" id="options_value1" placeholder="Enter Option">
                                    </div>
                                    <div class="col-sm-2 col-xs-2"> <a href="#" class="btn btn-warning close_option" id="close1" data-dismiss="alert" aria-label="close" data-id="option_clone1"> <span class="glyphicon glyphicon-remove"></span> </a> </div>
                                  </div>
                                  <div id='option_clone2' class="form-group option_clone" style="">
                                    <div class="col-sm-9 col-xs-10">
                                      <input type="text" class="job_post_textfield value1" name="options_value[]" id="options_value2" placeholder="Enter Option">
                                    </div>
                                    <div class="col-sm-2 col-xs-2 add_option"> <img class="btn-info" src="images/add_icon.jpg" width="29" height="29" alt=""/> </div>
                                  </div>
                                  <div class="col-sm-12 box-footer" style="text-align:center;">
                                 
                                  </div>
                                
                                </div>
                              
                              </form>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <h4>What is your budget ?</h4>
                          <p>Select any one option</p>
                          <div class="row">
                            <div class="col-lg-4 col-md-4">
                              <div class="select_inquire_post"> <a class="fix_btn">FIX</a> </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                              <div class="select_inquire_post"> <a class="hourly_btn">HOURLY</a> </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                              <div class="select_inquire_post"> <a class="agreement_btn">AGREEMENT</a> </div>
                            </div>
                            <div class="fix_details">
                              <div class="col-lg-12 col-md-12">
                                <label>Budget by Fix</label>
                                <input class="fix_text_field" placeholder="$00.00">
                                <p>Payouts</p>
                                <ul>
                                  <li><a href="#">Fix</a></li>
                                  <li><a href="#">Agreement</a></li>
                                </ul>
                              </div>
                            </div>
                            <div class="hourly_details">
                              <div class="col-lg-12 col-md-12">
                                <label>Budget by Fix</label>
                                <div class="row">
                                  <div class="col-lg-6 col-md-6">
                                    <input class="fix_text_field" placeholder="How much Hours ">
                                  </div>
                                  <div class="col-lg-6 col-md-6">
                                    <input class="fix_text_field" placeholder="Price each Hour ">
                                  </div>
                                </div>
                                <p>Payouts</p>
                                <ul>
                                  <li><a href="#">Fix</a></li>
                                  <li><a href="#">Agreement</a></li>
                                </ul>
                              </div>
                            </div>
                            <div class="agreement_details">
                              <div class="col-lg-12 col-md-12">
                                <label>Agreement</label>
                                <div class="row">
                                  <div class="col-lg-6 col-md-6">
                                    <div class="select_inquire_post"> <a class="by_date_btn">By Date</a> </div>
                                  </div>
                                  <div class="col-lg-6 col-md-6">
                                    <div class="select_inquire_post"> <a href="#">Agreement</a> </div>
                                  </div>
                                </div>
                                <div class="by_date_details">
                                  <div class="j-row">
                                    <div class="span6 unit">
                                      <div class="input">
                                        <input type="text" class="fix_text_field" id="date-icon" placeholder="datepicker" readonly>
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

                    
                    
                    <div class="clearfix"></div>
                    <div class="form_btns_area">
                      <ul>
                        <li><a class="back_btn" href="#"> Back</a></li>
                        <li><a href="#">Next</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div v-if="curTabId===2" class="TabbedPanelsContent">
                  <div class="tab_content_3">
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <h4>Select inquire type</h4>
                          <input class="job_post_textfield" placeholder="Job Title">
                          <textarea class="job_post_textarea" placeholder="Description"></textarea>
                          <div class="clearfix"></div>
                          <div class="col-lg-6 col-md-6">
                            <input class="job_post_textfield" placeholder="Category">
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <input class="job_post_textfield" placeholder="Sub Category">
                          </div>
                          <div class="clearfix"></div>
                          <div class="col-lg-4 col-md-4">
                            <input class="job_post_textfield" placeholder="Country">
                          </div>
                          <div class="col-lg-4 col-md-4">
                            <input class="job_post_textfield" placeholder="District">
                          </div>
                          <div class="col-lg-4 col-md-4">
                            <input class="job_post_textfield" placeholder="City">
                          </div>
                          <div class="clearfix"></div>
                          <div class="upload_files_area">
                            <h5 class="pull-left">File.jpg</h5>
                          </div>
                          <div class="clearfix"></div>
                          <div class="upload_files_area">
                            <h5 class="pull-left">File.jpg</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <h4>Company skills</h4>
                          <input class="job_post_textfield" placeholder="HTML    Node.js    Bootstrap    CSS">
                          <h4>Company characteristics</h4>
                          <input class="job_post_textfield" placeholder="HTML    Node.js    Bootstrap    CSS">
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-5 col-md-5">
                          <h4>Inquire type</h4>
                          <div class="select_inquire_post">
                            <p>ASSIGNMENT</p>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1">
                          <h4>Contract type</h4>
                          <div class="select_inquire_post">
                            <p>EXPRESS CONTRACT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                      <div class="col-lg-8 col-md-8">
                        <div class="job_post_section">
                          <div class="row">
                            <div class="col-lg-12 col-md-12">
                              <h4>job tasks</h4>
                              <input class="job_post_textfield" placeholder="Task 1">
                              <input class="job_post_textfield" placeholder="Task 2">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <div class="job_post_section2">
                          <div class="row">
                            <div class="col-lg-12 col-md-12">
                              <h4>Budget / Payment </h4>
                              <input class="job_post_textfield2" placeholder="Fix">
                              <input class="job_post_textfield2" placeholder="$500">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <div class="terms_sec">
                          <ul>
                            <li>
                              <input class="job_post_check_post2" type="checkbox">
                              Accept terms & conditions</li>
                            <li>
                              <input class="job_post_check_post2" type="checkbox">
                              Accept privacy policy</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="form_btns_area">
                      <ul>
                        <li><a class="back_btn" href="#"> Back</a></li>
                        <li><a href="#">Submit</a></li>
                      </ul>
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
      name: 'PostYourJob',
      created() {
        window.addEventListener('scroll', this.handleScroll);
      },
      data() {
        return {
          isTopMenu: false,
          curTabId:0,
          curHoverTabId:-1,
        };
      },
      methods: {
        selectTab( selTabId) {
          this.curTabId = selTabId;
        },
        hoverTab ( hoverTabId) {
          this.curHoverTabId = hoverTabId;
        },
        handleScroll() {
          this.isTopMenu =  (window.pageYOffset>200);
        }
      },
      components: {
      },
      mounted() {
      },
    };

</script>

<style>
  @import "../assets/css/j-forms.css";
  .over_picture {
    background:url(../assets/images/post_job_banner.jpg) no-repeat; padding:200px 0 120px 0  
  }
</style>
