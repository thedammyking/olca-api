export function passwordReset(url) {
  return `<!doctype html>
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="format-detection" content="telephone=no" />
    <title>Password Reset</title>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"> 
    <!--<![endif]--> 
    <style type="text/css">
    body {-webkit-text-size-adjust: 100% !important;-ms-text-size-adjust: 100% !important;-webkit-font-smoothing: antialiased !important;width: 100%;height: 100%;
        background-color: #E7F0F7;	margin: 0;	padding: 0;	-webkit-font-smoothing: antialiased;}
    img { border: 0 !important; outline: none !important; }
    p { Margin: 0px !important; Padding: 0px !important; }
    table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
    td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
    .ExternalClass * { line-height: 100%; }
    span.MsoHyperlink { mso-style-priority: 99; color: inherit; }
    span.MsoHyperlinkFollowed { mso-style-priority: 99; color: inherit; }
    .em_defaultlink a { color: inherit !important; text-decoration: none !important; }
    .rw_phone_layout .em_full_img{width:100%; height:auto!important;}
    .rw_tablet_layout .em_full_img{width:100%; height:auto!important;} 
    </style>
    <!-- @media only screen and (max-width: 640px) 
               {
               -->
    <style type="text/css">
    @media only screen and (max-width: 640px) {
    td[class=em_h1] { height:60px !important;  font-size:1px !important;  line-height:1px !important;}
    table[class=myfull] {width:100% !important; max-width:300px!important; text-align:center!important;}
    table[class=notify-5-wrap] {width:100% !important; max-width:400px;}
    table[class=full] { width:100% !important;}
    td[class=fullCenter] { width:100% !important; text-align:center!important}
    td[class=em_hide] {display:none !important;}
    table[class=em_hide] {display:none !important;}
    span[class=em_hide] {display:none !important;}
    br[class=em_hide] {display:none !important;}
    img[class=em_full_img] {width:100% !important; height:auto !important;}
    img[class="em_logo"] {text-align:center;}
    td[class=em_center] {text-align:center !important;}
    table[class=em_center] {text-align:center !important;}
    td[class=em_h20] {height:20px !important;} 
    td[class=em_h30] { height:30px !important;}
    td[class=em_h40] { height:40px !important;}
    td[class=em_h50] { height:50px !important;} 
    td[class=em_pad] { padding-left:15px !important; padding-right:15px !important;} 
    td[class=em_pad2] { padding-left:25px !important; padding-right:25px !important;} 
    img[class=img125] { max-width:125px;}
    table[class=small-center] { max-width:350px!important; text-align:center!important;}
    td[class=em_autoHeight] {height:auto!important;}
    td[class=winebg] { background:#b92547; -webkit-border-top-right-radius:5px!important; -moz-border-radius-topright:5px!important; border-top-right-radius:5px!important; -webkit-border-bottom-left-radius:0!important;-moz-border-radius-bottomleft:0!important; border-bottom-left-radius:0!important;}
    td[class=myHeading]{font-size:24px!important; text-align:center!important; }
    td[class=heading]{font-size:28px!important; text-align:center!important;line-height:35px; }
    }
    </style>
    <!-- @media only screen and (max-width: 479px) 
               {
               -->
    <style type="text/css">
    @media only screen and (max-width: 479px)  {
    table[class=full] {width:100% !important; max-width:100%!important;}
    table[class=myfull] { width:100% !important;}
    table[class=notify-5-wrap] {width:100% !important;}
    table[class=em_wrapper] {width:100% !important;}
    td[class=fullCenter] { width:100% !important; text-align:center!important}
    td[class=em_aside] {width:10px !important;}
    td[class=em_hide] { display:none !important;}
    table[class=em_hide] {display:none !important;}
    span[class=em_hide] {display:none !important;}
    br[class=em_hide] {display:none !important;}
    img[class=em_full_img] {width:100% !important;height:auto !important;}
    img[class="em_logo"] {text-align:center;}
    td[class=em_center] {text-align:center !important;}
    table[class=em_center] {text-align:center !important;}
    td[class=em_h20] {height:20px !important;}  
    td[class=em_h30] {height:30px !important;}
    td[class=em_h40] {height:40px !important;}
    td[class=em_h50] {height:50px !important;} 
    td[class=em_pad] {padding-left:10px !important;padding-right:10px !important;} 
    td[class=em_pad2] {padding-left:20px !important;padding-right:20px !important;} 
    table[class=em_btn] {width:130px !important;}
    td[class=em_btn_text] {font-size:10px !important;height:26px !important;}
    a[class=em_btn_text] {line-height:26px !important;}
    td[class=em_h1] {height:60px !important;font-size:1px !important;line-height:1px !important;}
    td[class=em_bg] {background:none !important;}
    img[class=img125] {max-width:110px;height:auto!important;}
    table[class=small-center] {max-width:100%!important;text-align:center!important;}
    td[class=em_autoHeight] {height:auto!important;}
    td[class=myHeading]{font-size:24px!important; text-align:center!important; color:#ff0000}
    td[class=heading]{font-size:26px!important; text-align:center!important;line-height:35px; }
    td[class=winebg] {background:#b92547; -webkit-border-top-right-radius:5px!important; -moz-border-radius-topright:5px!important; border-top-right-radius:5px!important; -webkit-border-bottom-left-radius:0!important;-moz-border-radius-bottomleft:0!important; border-bottom-left-radius:0!important;}
     
    }
    hr{ border-top: 0px #ddd solid; border-bottom: 1px #ddd solid; }
    </style>
     
    <!--[if mso]>
    <style type="text/css">
    body {
       font-family:arial, helvetica, sans-serif !important;
    }
    
    table {
       font-family:arial, helvetica, sans-serif !important;
    }
    
    td {
       font-family:arial, helvetica, sans-serif !important;
    }
    
    </style>
    <![endif]-->
     
    
    </head>
    
    <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
    <!--Full width table start-->
    <div id="sort_them"> 
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
        <tr>
          <td align="center" valign="top" ><div>
              <table align="center" class="em_main_table" width="500" border="0" cellspacing="0" cellpadding="0" style="table-layout:fixed; " >
                <tr>
                  <td class="em_hide" style="line-height:1px; font-size:1px;" width="500"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" height="1"  width="500" style="max-height:1px; min-height:1px; display:block; width:500px; min-width:500px;" border="0" /></td>
                </tr>               
              </table>
            </div></td>
        </tr>     
      </table>
    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module">
        <tr mc:repeatable>
            <td bgcolor="#e7f0f7" align="center">			
                <!-- Mobile Wrapper -->
                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#e7f0f7" >
                    <tr>
                        <td width="100%" align="center">				
                            
                            <div class="sortable_inner">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                <tr>
                                     <td height="60" class="em_h1"><img src="imgs/emails/spacer.gif" height="1"  width="100%" style="max-height:1px; min-height:1px; display:block; width:100%; min-width:280px;" border="0" /></td>
                                </tr>               
                            </table>  
                            
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                <tr>
                                    <td align="center" width="100%" valign="middle" height="60">
                                        <img src="https://accounts.olcang.com/imgs/olca-small.png" alt="logo"/>
                                    </td>
                                </tr>
                            </table>
                         
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                <tr>
                                     <td height="20" class="em_h20"><img src="imgs/emails/spacer.gif" height="1"  width="100%" style="max-height:1px; min-height:1px; display:block; width:100%; min-width:280px;" border="0" /></td>
                                </tr>               
                            </table> 
                            
                            </div>
                        </td>
                    </tr>
                </table>
                
                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full"  style="max-width:400px!important"  >
                    <tr>
                     
                        <td align="center" width="100%" valign="middle" class="em_pad">	
                        
                            <table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="full" style="border-top-right-radius: 5px; border-top-left-radius: 5px;">
                                <tr>
                                    <td align="center" width="100%" valign="middle" bgcolor="#ffffff" style="-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;" >
                                    
                                <div class="sortable_inner">
                    
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                         <tr>
                                             <td height="35" class="em_h30"><img src="imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
                                
                                    <table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="em_wrapper" object="drag-module-small">
                                        <tr>
                                            <td align="center" width="100%" valign="middle" >
                                            
                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                                    <tr>
                                                        <td width="100%" align="center" style="font-size:35px; color:#033953; font-family:'Acme', sans-serif; font-weight:900;">Password Reset </td>
                                                    </tr>
                                                </table>							
                                            </td>
                                        </tr>
                                    </table>
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="26" class="em_h20"><img src="imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
                                    
                                    <table width="300" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                        <tr>
                                            <td align="center" width="300" valign="middle" class="em_pad">
                                            
                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                                    <tr>
                                                        <td width="100%" align="center" style="font-size:13px; color:#161619; font-family:'Quicksand', sans-serif; font-weight:400; line-height:24px;">It seems that you’ve forgotten your password. Please click on the link below to reset your passowrd.</td>
                                                    </tr>
                                                </table>							
                                            </td>
                                        </tr>
                                    </table>
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="30" class="em_h30"><img src="imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" >
                                        <tr>
                                          <td valign="top" align="center">
                                            <img class="" src="https://accounts.olcang.com/imgs/emails/password.png" width="77" height="94" alt="" style="font-family:Arial, sans-serif; font-size:20px; color:#000000;   max-width:77px;" border="0"  />
                                          </td>
                                        </tr>
                                    </table>
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="80" class="em_h30"><img src="imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /><hr/></td>
                                        </tr>
                                    </table>
    
    
                                    <table border="0" cellpadding="0" cellspacing="0" align="center" class="em_wrapper" object="drag-module-small">
                                      <tr>
                                        <td width="100%" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="mcenter" width="270">
                                            <tr>
                                              <td width="100%" align="center"><!-- SORTABLE -->
                                                
                                                <div class="sortable_inner">
                                                  <table border="0" cellpadding="0" cellspacing="0" class="mcenter" width="100%" >
                                                    <tr>
                                                      <td align="center" valign="middle" height="40" bgcolor="#ed5659" style="font-size:14px;  font-family:'Quicksand', sans-serif; font-weight:900; color:#ffffff; border-radius:5px; background:#ed5659;" class="first-btn"  >
                                                  <a href=${url} target="_blank" style="text-decoration:none; color:#ffffff; line-height:18px; display:block;" object="link-editable" > RESET PASSWORD</a></td>
                                                    </tr>
                                                  </table>
                                                </div></td>
                                            </tr>
                                          </table></td>
                                      </tr>
                                    </table>
                                <!-- End Button -->
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="25" class="em_h20"><img src="imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
    
                                    <table width="300" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                        <tr>
                                            <td align="center" width="300" valign="middle" class="em_pad">
                                            
                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                                    <tr>
                                                        <td width="100%" align="center" style="font-size:12px; color:#161619; font-family:'Quicksand', sans-serif; font-weight:400; line-height:24px;">* Disregard this mail if you did not make the request. </td>
                                                    </tr>
                                                </table>							
                                            </td>
                                        </tr>
                                    </table>
    
            
                                <!-- End Button -->
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="25" class="em_h20"><img src="imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>								
                                    </div>									
                                    </td>
                                </tr>
                            </table>
                        </td>	 
                    </tr>
                </table>
    
                <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                    <tr>
                      <td height="20" class="em_h40"><img src="imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                    </tr>
                </table>
                
             
       
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" object="drag-module">
      <tr mc:repetable>
        <td align="center" valign="top" >
          <!-- SORTABLE -->
            
                <table align="center" class="full" width="400" border="0" cellspacing="0" cellpadding="0" style="table-layout:fixed;" >
                 <tr>
                  <td>
                  <div class="sortable_inner">
                                  
                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                        <tr>
                          <td valign="top" align="center" style="font-family:'Quicksand', sans-serif; font-weight:400; font-size:12px; color:#777; line-height:22px;">
                          Copyright &copy; 2019 Olusola Lanre Coaching Academy.<br/>All Rights Reserved.
                          </td>
                        </tr>
                    </table>
                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                        <tr>
                          <td height="73" class="em_h1"><img src="imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                        </tr>
                    </table>
                    </div>
                        </td>
                    </tr>
                </table>
            
        </td>
     </tr>
    </table>   
            </td>
        </tr>
    </table>
     <!-- End of Notify 1--> 
    
    
    </div>
     </body></html> 
    
    `;
}

export function passwordChange() {
  return `<!doctype html>
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="format-detection" content="telephone=no" />
    <title>Password Changed</title>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"> 
    <!--<![endif]--> 
    <style type="text/css">
    body {-webkit-text-size-adjust: 100% !important;-ms-text-size-adjust: 100% !important;-webkit-font-smoothing: antialiased !important;width: 100%;height: 100%;
        background-color: #E7F0F7;	margin: 0;	padding: 0;	-webkit-font-smoothing: antialiased;}
    img { border: 0 !important; outline: none !important; }
    p { Margin: 0px !important; Padding: 0px !important; }
    table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
    td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
    .ExternalClass * { line-height: 100%; }
    span.MsoHyperlink { mso-style-priority: 99; color: inherit; }
    span.MsoHyperlinkFollowed { mso-style-priority: 99; color: inherit; }
    .em_defaultlink a { color: inherit !important; text-decoration: none !important; }
    .rw_phone_layout .em_full_img{width:100%; height:auto!important;}
    .rw_tablet_layout .em_full_img{width:100%; height:auto!important;} 
    </style>
    <!-- @media only screen and (max-width: 640px) 
               {
               -->
    <style type="text/css">
    @media only screen and (max-width: 640px) {
    td[class=em_h1] { height:60px !important;  font-size:1px !important;  line-height:1px !important;}
    table[class=myfull] {width:100% !important; max-width:300px!important; text-align:center!important;}
    table[class=notify-5-wrap] {width:100% !important; max-width:400px;}
    table[class=full] { width:100% !important;}
    td[class=fullCenter] { width:100% !important; text-align:center!important}
    td[class=em_hide] {display:none !important;}
    table[class=em_hide] {display:none !important;}
    span[class=em_hide] {display:none !important;}
    br[class=em_hide] {display:none !important;}
    img[class=em_full_img] {width:100% !important; height:auto !important;}
    img[class="em_logo"] {text-align:center;}
    td[class=em_center] {text-align:center !important;}
    table[class=em_center] {text-align:center !important;}
    td[class=em_h20] {height:20px !important;} 
    td[class=em_h30] { height:30px !important;}
    td[class=em_h40] { height:40px !important;}
    td[class=em_h50] { height:50px !important;} 
    td[class=em_pad] { padding-left:15px !important; padding-right:15px !important;} 
    td[class=em_pad2] { padding-left:25px !important; padding-right:25px !important;} 
    img[class=img125] { max-width:125px;}
    table[class=small-center] { max-width:350px!important; text-align:center!important;}
    td[class=em_autoHeight] {height:auto!important;}
    td[class=winebg] { background:#b92547; -webkit-border-top-right-radius:5px!important; -moz-border-radius-topright:5px!important; border-top-right-radius:5px!important; -webkit-border-bottom-left-radius:0!important;-moz-border-radius-bottomleft:0!important; border-bottom-left-radius:0!important;}
    td[class=myHeading]{font-size:24px!important; text-align:center!important; }
    td[class=heading]{font-size:28px!important; text-align:center!important;line-height:35px; }
    }
    </style>
    <!-- @media only screen and (max-width: 479px) 
               {
               -->
    <style type="text/css">
    @media only screen and (max-width: 479px)  {
    table[class=full] {width:100% !important; max-width:100%!important;}
    table[class=myfull] { width:100% !important;}
    table[class=notify-5-wrap] {width:100% !important;}
    table[class=em_wrapper] {width:100% !important;}
    td[class=fullCenter] { width:100% !important; text-align:center!important}
    td[class=em_aside] {width:10px !important;}
    td[class=em_hide] { display:none !important;}
    table[class=em_hide] {display:none !important;}
    span[class=em_hide] {display:none !important;}
    br[class=em_hide] {display:none !important;}
    img[class=em_full_img] {width:100% !important;height:auto !important;}
    img[class="em_logo"] {text-align:center;}
    td[class=em_center] {text-align:center !important;}
    table[class=em_center] {text-align:center !important;}
    td[class=em_h20] {height:20px !important;}  
    td[class=em_h30] {height:30px !important;}
    td[class=em_h40] {height:40px !important;}
    td[class=em_h50] {height:50px !important;} 
    td[class=em_pad] {padding-left:10px !important;padding-right:10px !important;} 
    td[class=em_pad2] {padding-left:20px !important;padding-right:20px !important;} 
    table[class=em_btn] {width:130px !important;}
    td[class=em_btn_text] {font-size:10px !important;height:26px !important;}
    a[class=em_btn_text] {line-height:26px !important;}
    td[class=em_h1] {height:60px !important;font-size:1px !important;line-height:1px !important;}
    td[class=em_bg] {background:none !important;}
    img[class=img125] {max-width:110px;height:auto!important;}
    table[class=small-center] {max-width:100%!important;text-align:center!important;}
    td[class=em_autoHeight] {height:auto!important;}
    td[class=myHeading]{font-size:24px!important; text-align:center!important; color:#ff0000}
    td[class=heading]{font-size:26px!important; text-align:center!important;line-height:35px; }
    td[class=winebg] {background:#b92547; -webkit-border-top-right-radius:5px!important; -moz-border-radius-topright:5px!important; border-top-right-radius:5px!important; -webkit-border-bottom-left-radius:0!important;-moz-border-radius-bottomleft:0!important; border-bottom-left-radius:0!important;}
     
    }
    hr{ border-top: 0px #ddd solid; border-bottom: 1px #ddd solid; }
    </style>
     
    <!--[if mso]>
    <style type="text/css">
    body {
       font-family:arial, helvetica, sans-serif !important;
    }
    
    table {
       font-family:arial, helvetica, sans-serif !important;
    }
    
    td {
       font-family:arial, helvetica, sans-serif !important;
    }
    
    </style>
    <![endif]-->
     
    
    </head>
    
    <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
    <!--Full width table start-->
    <div id="sort_them"> 
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
        <tr>
          <td align="center" valign="top" ><div>
              <table align="center" class="em_main_table" width="500" border="0" cellspacing="0" cellpadding="0" style="table-layout:fixed; " >
                <tr>
                  <td class="em_hide" style="line-height:1px; font-size:1px;" width="500"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" height="1"  width="500" style="max-height:1px; min-height:1px; display:block; width:500px; min-width:500px;" border="0" /></td>
                </tr>               
              </table>
            </div></td>
        </tr>     
      </table>
    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module">
        <tr mc:repeatable>
            <td bgcolor="#e7f0f7" align="center">			
                <!-- Mobile Wrapper -->
                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#e7f0f7" >
                    <tr>
                        <td width="100%" align="center">				
                            
                            <div class="sortable_inner">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                <tr>
                                     <td height="60" class="em_h1"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" height="1"  width="100%" style="max-height:1px; min-height:1px; display:block; width:100%; min-width:280px;" border="0" /></td>
                                </tr>               
                            </table>  
                            
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                <tr>
                                    <td align="center" width="100%" valign="middle" height="60">
                                        <img src="https://accounts.olcang.com/imgs/olca-small.png" alt="logo"/>
                                    </td>
                                </tr>
                            </table>
                         
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                <tr>
                                     <td height="20" class="em_h20"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" height="1"  width="100%" style="max-height:1px; min-height:1px; display:block; width:100%; min-width:280px;" border="0" /></td>
                                </tr>               
                            </table> 
                            
                            </div>
                        </td>
                    </tr>
                </table>
                
                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full"  style="max-width:400px!important"  >
                    <tr>
                     
                        <td align="center" width="100%" valign="middle" class="em_pad">	
                        
                            <table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="full" style="border-top-right-radius: 5px; border-top-left-radius: 5px;">
                                <tr>
                                    <td align="center" width="100%" valign="middle" bgcolor="#ffffff" style="-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;" >
                                    
                                <div class="sortable_inner">
                    
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                         <tr>
                                             <td height="35" class="em_h30"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
                                
                                    <table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="em_wrapper" object="drag-module-small">
                                        <tr>
                                            <td align="center" width="100%" valign="middle" >
                                            
                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                                    <tr>
                                                        <td width="100%" align="center" style="font-size:35px; color:#033953; font-family:'Acme', sans-serif; font-weight:900;">Password Changed</td>
                                                    </tr>
                                                </table>							
                                            </td>
                                        </tr>
                                    </table>
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="26" class="em_h20"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
                                    
                                    <table width="300" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                        <tr>
                                            <td align="center" width="300" valign="middle" class="em_pad">
                                            
                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                                    <tr>
                                                        <td width="100%" align="center" style="font-size:13px; color:#161619; font-family:'Quicksand', sans-serif; font-weight:400; line-height:24px;">Your new password has been set successfully. Ensure to keep all your login credentials safe always.<br/></td>
                                                    </tr>
                                                </table>							
                                            </td>
                                        </tr>
                                    </table>
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="30" class="em_h30"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" >
                                        <tr>
                                          <td valign="top" align="center">
                                            <img class="" src="https://accounts.olcang.com/imgs/emails/password.png" width="77" height="94" alt="" style="font-family:Arial, sans-serif; font-size:20px; color:#000000;   max-width:77px;" border="0"  />
                                          </td>
                                        </tr>
                                    </table>
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="62" class="em_h30"><hr/></td>
                                        </tr>
                                    </table>
                                    <!-- Centered Button -->
                                
                                    <table border="0" cellpadding="0" cellspacing="0" align="center" class="em_wrapper" object="drag-module-small">
                                      <tr>
                                        <td width="100%" align="center">
                                        
                                <!-- End Button -->
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="35" class="em_h20"><img src="https://accounts.olcang.com/imgs//emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>							
                                    </div>	
                                        
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                     
                    </tr>
                </table>
             <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                        <tr>
                          <td height="20" class="em_h40"><img src="https://accounts.olcang.com/imgs//emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                        </tr>
                    </table>
                
             
       
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" object="drag-module">
      <tr mc:repetable>
        <td align="center" valign="top" >
          <!-- SORTABLE -->
            
                <table align="center" class="full" width="400" border="0" cellspacing="0" cellpadding="0" style="table-layout:fixed;" >
                 <tr>
                  <td>
                  <div class="sortable_inner">
                                  
                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                        <tr>
                          <td valign="top" align="center" style="font-family:'Quicksand', sans-serif; font-weight:400; font-size:12px; color:#777; line-height:22px;">Copyright &copy; 2019 Olusola Lanre Coaching Academy.<br/>All Rights Reserved.</td>
                        </tr>
                    </table>
                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                        <tr>
                          <td height="43" class="em_h1"><img src="https://accounts.olcang.com/imgs//emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                        </tr>
                    </table>
                    </div>
                        </td>
                    </tr>
                </table>
            
        </td>
     </tr>
    </table>   
            </td>
        </tr>
    </table>
     <!-- End of Notify 1--> 
    
    
    </div>
     </body></html> 
    
    `;
}

export function appreciate(name) {
  return `<!doctype html>
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="format-detection" content="telephone=no" />
    <title>Thank you for registering</title>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"> 
    <!--<![endif]--> 
    <style type="text/css">
    body {-webkit-text-size-adjust: 100% !important;-ms-text-size-adjust: 100% !important;-webkit-font-smoothing: antialiased !important;width: 100%;height: 100%;
        background-color: #E7F0F7;	margin: 0;	padding: 0;	-webkit-font-smoothing: antialiased;}
    img { border: 0 !important; outline: none !important; }
    p { Margin: 0px !important; Padding: 0px !important; }
    table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
    td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
    .ExternalClass * { line-height: 100%; }
    span.MsoHyperlink { mso-style-priority: 99; color: inherit; }
    span.MsoHyperlinkFollowed { mso-style-priority: 99; color: inherit; }
    .em_defaultlink a { color: inherit !important; text-decoration: none !important; }
    .rw_phone_layout .em_full_img{width:100%; height:auto!important;}
    .rw_tablet_layout .em_full_img{width:100%; height:auto!important;} 
    </style>
    <!-- @media only screen and (max-width: 640px) 
               {
               -->
    <style type="text/css">
    @media only screen and (max-width: 640px) {
    td[class=em_h1] { height:60px !important;  font-size:1px !important;  line-height:1px !important;}
    table[class=myfull] {width:100% !important; max-width:300px!important; text-align:center!important;}
    table[class=notify-5-wrap] {width:100% !important; max-width:400px;}
    table[class=full] { width:100% !important;}
    td[class=fullCenter] { width:100% !important; text-align:center!important}
    td[class=em_hide] {display:none !important;}
    table[class=em_hide] {display:none !important;}
    span[class=em_hide] {display:none !important;}
    br[class=em_hide] {display:none !important;}
    img[class=em_full_img] {width:100% !important; height:auto !important;}
    img[class="em_logo"] {text-align:center;}
    td[class=em_center] {text-align:center !important;}
    table[class=em_center] {text-align:center !important;}
    td[class=em_h20] {height:20px !important;} 
    td[class=em_h30] { height:30px !important;}
    td[class=em_h40] { height:40px !important;}
    td[class=em_h50] { height:50px !important;} 
    td[class=em_pad] { padding-left:15px !important; padding-right:15px !important;} 
    td[class=em_pad2] { padding-left:25px !important; padding-right:25px !important;} 
    img[class=img125] { max-width:125px;}
    table[class=small-center] { max-width:350px!important; text-align:center!important;}
    td[class=em_autoHeight] {height:auto!important;}
    td[class=winebg] { background:#b92547; -webkit-border-top-right-radius:5px!important; -moz-border-radius-topright:5px!important; border-top-right-radius:5px!important; -webkit-border-bottom-left-radius:0!important;-moz-border-radius-bottomleft:0!important; border-bottom-left-radius:0!important;}
    td[class=myHeading]{font-size:24px!important; text-align:center!important; }
    td[class=heading]{font-size:28px!important; text-align:center!important;line-height:35px; }
    }
    </style>
    <!-- @media only screen and (max-width: 479px) 
               {
               -->
    <style type="text/css">
    @media only screen and (max-width: 479px)  {
    table[class=full] {width:100% !important; max-width:100%!important;}
    table[class=myfull] { width:100% !important;}
    table[class=notify-5-wrap] {width:100% !important;}
    table[class=em_wrapper] {width:100% !important;}
    td[class=fullCenter] { width:100% !important; text-align:center!important}
    td[class=em_aside] {width:10px !important;}
    td[class=em_hide] { display:none !important;}
    table[class=em_hide] {display:none !important;}
    span[class=em_hide] {display:none !important;}
    br[class=em_hide] {display:none !important;}
    img[class=em_full_img] {width:100% !important;height:auto !important;}
    img[class="em_logo"] {text-align:center;}
    td[class=em_center] {text-align:center !important;}
    table[class=em_center] {text-align:center !important;}
    td[class=em_h20] {height:20px !important;}  
    td[class=em_h30] {height:30px !important;}
    td[class=em_h40] {height:40px !important;}
    td[class=em_h50] {height:50px !important;} 
    td[class=em_pad] {padding-left:10px !important;padding-right:10px !important;} 
    td[class=em_pad2] {padding-left:20px !important;padding-right:20px !important;} 
    table[class=em_btn] {width:130px !important;}
    td[class=em_btn_text] {font-size:10px !important;height:26px !important;}
    a[class=em_btn_text] {line-height:26px !important;}
    td[class=em_h1] {height:60px !important;font-size:1px !important;line-height:1px !important;}
    td[class=em_bg] {background:none !important;}
    img[class=img125] {max-width:110px;height:auto!important;}
    table[class=small-center] {max-width:100%!important;text-align:center!important;}
    td[class=em_autoHeight] {height:auto!important;}
    td[class=myHeading]{font-size:24px!important; text-align:center!important; color:#ff0000}
    td[class=heading]{font-size:26px!important; text-align:center!important;line-height:35px; }
    td[class=winebg] {background:#b92547; -webkit-border-top-right-radius:5px!important; -moz-border-radius-topright:5px!important; border-top-right-radius:5px!important; -webkit-border-bottom-left-radius:0!important;-moz-border-radius-bottomleft:0!important; border-bottom-left-radius:0!important;}
     
    }
    hr{ border-top: 0px #ddd solid; border-bottom: 1px #ddd solid; }
    </style>
     
    <!--[if mso]>
    <style type="text/css">
    body {
       font-family:arial, helvetica, sans-serif !important;
    }
    
    table {
       font-family:arial, helvetica, sans-serif !important;
    }
    
    td {
       font-family:arial, helvetica, sans-serif !important;
    }
    
    </style>
    <![endif]-->
     
    
    </head>
    
    <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
    <!--Full width table start-->
    <div id="sort_them"> 
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
        <tr>
          <td align="center" valign="top" ><div>
              <table align="center" class="em_main_table" width="500" border="0" cellspacing="0" cellpadding="0" style="table-layout:fixed; " >
                <tr>
                  <td class="em_hide" style="line-height:1px; font-size:1px;" width="500"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" height="1"  width="500" style="max-height:1px; min-height:1px; display:block; width:500px; min-width:500px;" border="0" /></td>
                </tr>               
              </table>
            </div></td>
        </tr>     
      </table>
    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module">
        <tr mc:repeatable>
            <td bgcolor="#e7f0f7" align="center">			
                <!-- Mobile Wrapper -->
                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#e7f0f7" >
                    <tr>
                        <td width="100%" align="center">				
                            
                            <div class="sortable_inner">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                <tr>
                                     <td height="60" class="em_h1"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" height="1"  width="100%" style="max-height:1px; min-height:1px; display:block; width:100%; min-width:280px;" border="0" /></td>
                                </tr>               
                            </table>  
                            
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                <tr>
                                    <td align="center" width="100%" valign="middle" height="60">
                                        <img src="https://accounts.olcang.com/imgs/olca-small.png" alt="logo"/>
                                    </td>
                                </tr>
                            </table>
                         
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                <tr>
                                     <td height="20" class="em_h20"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" height="1"  width="100%" style="max-height:1px; min-height:1px; display:block; width:100%; min-width:280px;" border="0" /></td>
                                </tr>               
                            </table> 
                            
                            </div>
                        </td>
                    </tr>
                </table>
                
                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full"  style="max-width:400px!important"  >
                    <tr>
                     
                        <td align="center" width="100%" valign="middle" class="em_pad">	
                        
                            <table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="full" style="border-top-right-radius: 5px; border-top-left-radius: 5px;">
                                <tr>
                                    <td align="center" width="100%" valign="middle" bgcolor="#ffffff" style="-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;" >
                                    
                                <div class="sortable_inner">
                    
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                         <tr>
                                             <td height="35" class="em_h30"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
                                
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" >
                                        <tr>
                                          <td valign="top" align="center">
                                            <img class="" src="https://accounts.olcang.com/imgs/emails/welcome.png" alt="" border="0"/>
                                          </td>
                                        </tr>
                                    </table>
    
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                         <tr>
                                             <td height="15" class="em_h30"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
    
                                    <table width="400" border="0" cellpadding="0" cellspacing="0" align="center" class="em_wrapper" object="drag-module-small">
                                        <tr>
                                            <td align="center" width="100%" valign="middle" >
                                            
                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                                    <tr>
                                                        <td width="100%" align="center" style="font-size:35px; color:#033953; font-family:'Acme', sans-serif; font-weight:bold !important;">Welcome to OLCA</td>
                                                    </tr>
                                                </table>							
                                            </td>
                                        </tr>
                                    </table>
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="26" class="em_h20"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
                                    
                                    <table width="300" border="0" cellpadding="0" cellspacing="0" align="center" class="full" object="drag-module-small">
                                        <tr>
                                            <td align="center" width="300" valign="middle" class="em_pad">
                                            
                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="text-align: center; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">
                                                    <tr>
                                                        <td width="100%" align="left" style="font-size:13px; color:#161619; font-family:'Quicksand', sans-serif; font-weight:400; line-height:24px;">
                                                            Hi, ${name}<br/>
                                                            Thank you for registering on OLCA, we're super excited to have you here!.<br/>
                                                            Now you can access products and services from OLCA.<br/><br/>
    
                                                            Best Regards,<br/>
                                                            Lanre Olusola "The Catalyst"
                                                        </td>
                                                    </tr>
                                                </table>							
                                            </td>
                                        </tr>
                                    </table>
                                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                                        <tr>
                                          <td height="30" class="em_h30"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                                        </tr>
                                    </table>
                                    </div>	
                                        
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                     
                    </tr>
                </table>
             <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                        <tr>
                          <td height="20" class="em_h40"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                        </tr>
                    </table>
                
             
       
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" object="drag-module">
      <tr mc:repetable>
        <td align="center" valign="top" >
          <!-- SORTABLE -->
            
                <table align="center" class="full" width="400" border="0" cellspacing="0" cellpadding="0" style="table-layout:fixed;" >
                 <tr>
                  <td>
                  <div class="sortable_inner">
                                  
                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                        <tr>
                          <td valign="top" align="center" style="font-family:'Quicksand', sans-serif; font-weight:400; font-size:12px; color:#777; line-height:22px;">Copyright &copy; 2019 Olusola Lanre Coaching Academy.<br/>All Rights Reserved.</td>
                        </tr>
                    </table>
                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" object="drag-module-small">
                        <tr>
                          <td height="43" class="em_h1"><img src="https://accounts.olcang.com/imgs/emails/spacer.gif" width="1" alt="" height="1" border="0" style="display:block;" /></td>
                        </tr>
                    </table>
                    </div>
                        </td>
                    </tr>
                </table>
            
        </td>
     </tr>
    </table>   
            </td>
        </tr>
    </table>
     <!-- End of Notify 1--> 
    
    
    </div>
     </body></html> 
    
    `;
}
