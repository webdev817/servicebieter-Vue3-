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

  <div class="inner_title_area over_picture">
    <div class="container container-fluid">
      <div class="row no-margin">
        <div class="col-lg-12 col-md-12">
          <h2>Be a Partner</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="shedow_layer"></div>
  <div class="jon_offers_page_content_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1">
          <div class="beapartner_area">
            <div id="TabbedPanels1" class="TabbedPanels">
              <ul class="TabbedPanelsTabGroup beapartner_tabs">
                <li class="TabbedPanelsTab" 
                 v-bind:style="(curHoverTabId ===0 || curTabId ===0) ? 'background-color:#9ac22f; color:white;' : ''" 
                  v-on:click="selectTab(0)"
                  @mouseenter="hoverTab(0)"
                  @mouseout = "hoverTab(-1)" >About Shop</li>
                <li class="TabbedPanelsTab" 
                  v-bind:style="(curHoverTabId ===1 || curTabId ===1) ? 'background-color:#9ac22f; color:white;' : ''" 
                  @mouseenter="hoverTab(1)"
                  @mouseout = "hoverTab(-1)"                 
                  v-on:click="selectTab(1)">Owner Info</li>
                <li class="TabbedPanelsTab" 
                  v-bind:style="(curHoverTabId ===2 || curTabId ===2) ? 'background-color:#9ac22f; color:white;' : ''" 
                  @mouseenter="hoverTab(2)"
                  @mouseout = "hoverTab(-1)"                 
                  v-on:click="selectTab(2)">View & Post</li>
              </ul>
              <div class="TabbedPanelsContentGroup">
                <div v-if="curTabId === 0" class="TabbedPanelsContent">
                  <div class="tab_content_1">
                    <div class="job_post_section">
                      <div class="row">
                        <div class="file-upload">
                          <div class="col-lg-5 col-md-5 col-sm-6 new_palceholder2">
                            <div class="new_palceholder_1">
                              <div class="file-upload-content"> <img class="file-upload-image" src="#" alt="your image" />
                                <div class="image-title-wrap">
                                  <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title" style="display: none;">Uploaded Image</span> </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="image-upload-wrap">
                              <input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                              <div class="drag-text"> <img src="../assets/images/upload_btn.jpg" width="146" height="38" alt=""/> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="job_post_section">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <label class="job_post_section_lable">Firma</label>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <input class="job_post_textfield" placeholder="Company Name">
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <select class="job_post_textfield">
                          <option>Company Type</option>
                        </select>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <label class="job_post_section_lable">Eintragung</label>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <input class="job_post_textfield" placeholder="ST-Nr">
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <input class="job_post_textfield" placeholder="UMST-ID">
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <input class="job_post_textfield" placeholder="HRB-Number">
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <label class="job_post_section_lable">Leistungen</label>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <select class="job_post_textfield">
                          <option>Select  Category</option>
                        </select>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <select class="job_post_textfield">
                          <option>Select Sub Category</option>
                        </select>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <label class="job_post_section_lable">Einsatzsort</label>
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
                        <h6 class="new_tilte">Shop Info</h6>
                        <h4>Firmen Info</h4>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <label class="job_post_section_lable">Gründungsdatum</label>
                        <input class="job_post_textfield" placeholder="dd-mm-yyyy">
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <label class="job_post_section_lable">Employee</label>
                        <select class="job_post_textfield">
                          <option>District</option>
                        </select>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <label class="job_post_section_lable">Employee</label>
                        <select class="job_post_textfield">
                          <option>District</option>
                        </select>
                      </div>
                      <div class="col-lg-12 col-md-12">
                        <h4>Anschrift</h4>
                      </div>
                      <div class="col-lg-3 col-md-3">
                        <select class="job_post_textfield">
                          <option>City</option>
                        </select>
                      </div>
                      <div class="col-lg-3 col-md-3">
                        <input class="job_post_textfield" placeholder="Zipcode">
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <input class="job_post_textfield" placeholder="Address">
                      </div>
                    </div>
                  </div>
                  <div class="job_post_section">
                    <div class="row">
                      <div class="col-lg-12 col-md-12">
                        <h6 class="new_tilte">Upload Documents</h6>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="new_palceholder"> <img src="../assets/images/placehol;der_bew.jpg" class="img-responsive" alt=""/> </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <p>Drag and drop any image or files that might be
                          helpful in explaining your brief here.
                          (Max file size : 25 MB)</p>
                        <a href="#" role="button" data-toggle="modal"
                          @click="onShowModal"
                        ><img src="../assets/images/upload_btn.jpg" width="146" height="38" alt=""/></a> </div>
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
                <div v-if="curTabId === 1" class="TabbedPanelsContent">
                  <div class="tab_content_2">
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <h4>Anrede</h4>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <label class="job_post_section_lable">Gender</label>
                          <select class="job_post_textfield">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <h4>Name-Vorname</h4>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="First name">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="Last name">
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <h4>Bankverbindung</h4>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="Last name">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="Bank name">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="IBAN Number">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="PIC Number">
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <h6 class="new_tilte">Upload Documents</h6>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="new_palceholder"> <img src="../assets/images/placehol;der_bew.jpg" class="img-responsive" alt=""/> </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <p>Drag and drop any image or files that might be
                            helpful in explaining your brief here.
                            (Max file size : 25 MB)</p>
                          <a href="#myimagemodal" role="button" data-toggle="modal"
                          @click="onShowModal"><img src="../assets/images/upload_btn.jpg" width="146" height="38" alt=""/></a> </div>
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
                        <li><a class="back_btn" href="#"> Back</a></li>
                        <li><a href="#">Next</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div v-if="curTabId === 2" class="TabbedPanelsContent">
                  <div class="tab_content_3">
                    <div class="job_post_section">
                      <div class="row">
                        <div class="file-upload">
                          <div class="col-lg-5 col-md-5 col-sm-6 new_palceholder2">
                            <div class="new_palceholder_1">
                              <div class="file-upload-content"> <img class="file-upload-image" src="#" alt="your image" />
                                <div class="image-title-wrap">
                                  <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title" style="display: none;">Uploaded Image</span> </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="image-upload-wrap">
                              <input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                              <div class="drag-text"> <img src="../assets/images/upload_btn.jpg" width="146" height="38" alt=""/> </div>
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-3 col-sm-2">
                            <div class="edit_btn"> <a href="#">Edit</a> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-9 col-md-9">
                          <label class="job_post_section_lable">Firma</label>
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <div class="edit_btn"> <a href="#">Edit</a> </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="Company Name">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <select class="job_post_textfield">
                            <option>Company Type</option>
                          </select>
                        </div>
                        <div class="col-lg-9 col-md-9">
                          <label class="job_post_section_lable">Eintragung</label>
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <div class="edit_btn"> <a href="#">Edit</a> </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-4 col-md-4">
                          <input class="job_post_textfield" placeholder="ST-Nr">
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <input class="job_post_textfield" placeholder="UMST-ID">
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <input class="job_post_textfield" placeholder="HRB-Number">
                        </div>
                        <div class="col-lg-9 col-md-9">
                          <label class="job_post_section_lable">Leistungen</label>
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <div class="edit_btn"> <a href="#">Edit</a> </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-6 col-md-6">
                          <select class="job_post_textfield">
                            <option>Select  Category</option>
                          </select>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <select class="job_post_textfield">
                            <option>Select Sub Category</option>
                          </select>
                        </div>
                        <div class="col-lg-9 col-md-9">
                          <label class="job_post_section_lable">Einsatzsort</label>
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <div class="edit_btn"> <a href="#">Edit</a> </div>
                        </div>
                        <div class="clearfix"></div>
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
                        <div class="col-lg-12 col-md-12">
                          <h6 class="new_tilte2">Shop Info</h6>
                        </div>
                        <div class="col-lg-9 col-md-9">
                          <h4>Firmen Info</h4>
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <div class="edit_btn"> <a href="#">Edit</a> </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-4 col-md-4">
                          <label class="job_post_section_lable">Gründungsdatum</label>
                          <input class="job_post_textfield" placeholder="dd-mm-yyyy">
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <label class="job_post_section_lable">Employee</label>
                          <select class="job_post_textfield">
                            <option>District</option>
                          </select>
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <label class="job_post_section_lable">Employee</label>
                          <select class="job_post_textfield">
                            <option>District</option>
                          </select>
                        </div>
                        <div class="col-lg-9 col-md-9">
                          <h4>Anschrift</h4>
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <div class="edit_btn"> <a href="#">Edit</a> </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-3 col-md-3">
                          <select class="job_post_textfield">
                            <option>City</option>
                            <option>City</option>
                            <option>City</option>
                          </select>
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <input class="job_post_textfield" placeholder="Zipcode">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="Address">
                        </div>
                        <div class="clearfix">
                          <div class="col-lg-12 col-md-12">
                            <div class="edit_btn" id="edit_btn"> <a href="#">Edit</a> </div>
                          </div>
                          <div class="clearfix"></div>
                          <div class="col-lg-9 col-md-9">
                            <h4>Dokumente Hochladen</h4>
                            <input class="upload_files_area" type="file">
                            <input class="upload_files_area" type="file">
                          </div>
                          <div class="col-lg-3 col-md-3"> <a href="#myimagemodal" role="button" data-toggle="modal"
                          @click="onShowModal">
                            <div class="third_part_upload"><img src="../assets/images/placeholder_bew.jpg" class="img-responsive" alt=""/> </div>
                            </a> </div>
                        </div>
                      </div>
                    </div>
                    <div class="job_post_section">
                      <div class="row">
                        <div class="col-lg-9 col-md-9">
                          <h4>Anrede</h4>
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <div class="edit_btn"> <a href="#">Edit</a> </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-6 col-md-6">
                          <label class="job_post_section_lable">Gender</label>
                          <select class="job_post_textfield">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <label class="job_post_section_lable">Title</label>
                          <input class="job_post_textfield" placeholder="Address">
                        </div>
                        <div class="col-lg-9 col-md-9">
                          <h4>Name-Vorname</h4>
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <div class="edit_btn"> <a href="#">Edit</a> </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="First name">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="Last name">
                        </div>
                        <div class="col-lg-9 col-md-9">
                          <h4>Bankverbindung</h4>
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <div class="edit_btn"> <a href="#">Edit</a> </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="Owner Name">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="Bank Name">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="IBAN Number">
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <input class="job_post_textfield" placeholder="PIC Number">
                        </div>
                        <div class="clearfix">
                          <div class="col-lg-12 col-md-12">
                            <div class="edit_btn" id="edit_btn"> <a href="#">Edit</a> </div>
                          </div>
                          <div class="clearfix"></div>
                          <div class="col-lg-9 col-md-9">
                            <h4>Dokumente Hochladen</h4>
                            <input class="upload_files_area" type="file">
                            <input class="upload_files_area" type="file">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

  <!--Modal-->
  <div v-bind:class="showModal ? 'modal-show': 'modal-hidden'">
    <div class="modal-dialog" id="modal-dialog"> 
      <!-- Modal content-->
      <div class="modal-content" tabindex="1"
          style="overflow: hidden; outline: none;height:435px;width:669px; padding: 45px">
        <div class="modal-header" style="margin-top: -47px;">
          <button style="    margin-top: -5px;position: relative;left: 40px;" type="button" class="close"
              @click="onCloseModal">×</button>
          <h4 class="modal-title" style="font-family: 'Poppins', sans-serif;font-weight: normal !important;">Add Your
            Project Image Annd Detail Here</h4>
        </div>
        <div class="modal-body">
          <div class="wizard-portfolio" style="width: 545px;">
            <div class="wizard-inner">
              <ul class="nav nav-tabs custom-nav-tab" role="tablist">
                <li role="presentation" style="width:272px; text-align:center;" > <a href="#" style="margin-right: 0px !important;padding: 10px 60px!important;" aria-controls="step1"
                      role="tab" aria-expanded="true" data-original-title="Step 1"> Image </a> </li>
                <li role="presentation" style="width:273px;text-align:center;" class="active2"> <a href="#" title="Step2" style="margin-right: 0px !important;padding: 10px 60px!important;"
                      aria-controls="step2" role="tab" aria-expanded="true" data-original-title="Step 2"> Title </a> </li>
              </ul>
              <form action="post-job.html" role="form" style="width: 545px;">
                <div class="tab-content" style="background-color:  #f3f3f3;">
                  <div class="tab-pane active" role="tabpanel"
                      style="padding-top: 53px;padding-right:18px;padding-left:18px; background-color:  #f3f3f3;">
                    <h3 style="font-weight: normal !important;text-align:center;">Upload your portfolio image</h3>
                    <input type="file" name="fileToUpload" id="fileToUpload">
                    <br>
                    <br>
                    <button href="#steps2" data-toggle="tab" type="submit" class="btn btn-green next-steps"
                        style="padding: 6px 23px;margin-top:15px; float: right;">Save and Next</button>
                  </div>
                  <div class="tab-pane" role="tabpanel" id="steps2"
                      style="padding-bottom: 66px;padding-top:49px;font-weight:normal !important;text-align:center;height:260px;">
                    <h3 style="font-weight: normal !important;">Portfolio Title</h3>
                    <input type="text" placeholder="Portfolio Title" name="title" id="fileToUploads2" required>
                    <br>
                    <br>
                    <button style="position: relative;right: -19px;float: left" href="#steps1" data-placement="top"
                        data-toggle="tab" type="button" class="btn btn-green prev-step">Previous</button>
                    <button type="submit" data-dismiss="modal" class="btn btn-green next-step"
                        style="margin-right: 22px; float: right;">Submit</button>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.modal --> 



<div class="modal fade " id="myimagemodal" role="dialog" aria-hidden="true">
  <div class="modal-dialog" id="modal-dialog"> 
    <!-- Modal content-->
    <div class="modal-content" tabindex="1"
        style="overflow: hidden; outline: none;height:435px;width:669px; padding: 45px">
      <div class="modal-header" style="margin-top: -47px;">
        <button style="    margin-top: -5px;position: relative;left: 40px;" type="button" class="close"
            data-dismiss="modal">×</button>
        <h4 class="modal-title" style="font-family: 'Poppins', sans-serif;font-weight: normal !important;">Add Your
          Project Image Annd Detail Here</h4>
      </div>
      <div class="modal-body">
        <div class="wizard-portfolio" style="width: 545px;">
          <div class="wizard-inner">
            <ul class="nav nav-tabs custom-nav-tab" role="tablist">
              <li role="presentation" style="width:272px; text-align:center;" class="active"> <a href="#" style="margin-right: 0px !important;padding: 10px 60px!important;" aria-controls="step1"
                    role="tab" aria-expanded="true" data-original-title="Step 1"> Image </a> </li>
              <li role="presentation" style="width:273px;text-align:center;" class="active2"> <a href="#" title="Step2" style="margin-right: 0px !important;padding: 10px 60px!important;"
                    aria-controls="step2" role="tab" aria-expanded="true" data-original-title="Step 2"> Title </a> </li>
            </ul>
            <form action="post-job.html" role="form" style="width: 545px;">
              <div class="tab-content" style="background-color:  #f3f3f3;">
                <div class="tab-pane active" role="tabpanel" id="steps1"
                    style="padding-top: 53px;padding-right:18px;padding-left:18px">
                  <h3 style="font-weight: normal !important;text-align:center;">Upload your portfolio image</h3>
                  <input type="file" name="fileToUpload" id="fileToUpload">
                  <br>
                  <br>
                  <button href="#steps2" data-toggle="tab" type="submit" class="btn btn-green next-steps"
                      style="padding: 6px 23px;margin-bottom: 24px;float: right;">Save and Next</button>
                </div>
                <div class="tab-pane" role="tabpanel" id="steps2"
                    style="padding-bottom: 66px;padding-top:49px;font-weight:normal !important;text-align:center;height:260px;">
                  <h3 style="font-weight: normal !important;">Portfolio Title</h3>
                  <input type="text" placeholder="Portfolio Title" name="title" id="fileToUploads2" required>
                  <br>
                  <br>
                  <button style="position: relative;right: -19px;float: left" href="#steps1" data-placement="top"
                      data-toggle="tab" type="button" class="btn btn-green prev-step">Previous</button>
                  <button type="submit" data-dismiss="modal" class="btn btn-green next-step"
                      style="margin-right: 22px; float: right;">Submit</button>
                </div>
                <div class="clearfix"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

</template>

<script>
  export default {
      name: 'BePartner',
      data() {
        return {
          curTabId:0,
          curHoverTabId:-1,
          isTopMenu: false,
          showModal: false,
        };
      },
      created() {
        window.addEventListener('scroll', this.handleScroll);
      },     
      methods: {
        selectTab : function( selTabId) {
          this.curTabId = selTabId;
        },
        hoverTab : function ( hoverTabId) { 
          this.curHoverTabId = hoverTabId;
        },
        handleScroll: function() {
          this.isTopMenu = ( window.pageYOffset>200);
        },
        onShowModal: function() {
          $('#myimagemodal').modal('show');
          //this.showModal = true;
        },
        onCloseModal() {
          this.showModal = false;
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
  .over_picture {
    background:url(../assets/images/post_job_banner.jpg) no-repeat; padding:200px 0 120px 0  
  }
</style>
