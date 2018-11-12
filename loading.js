$(document).ready(function(){
            //Let's first setup the redirect
        function redirect(){
            window.location.assign('http://maycyber-download.blogspot.com/');
        }
            //which things we got to check
        function check(){
            if($('#copyright-id').length === 0){
                    redirect();
                }
                else if($('#copyright-link').length === 0){
                    redirect();
                }
                if($('my-copyright').length === 0){
                    redirect();
                }
                else if($('#copyright-link').length === 0){
                    redirect();
                }
                else if($("#copyright-link").attr("href") !== "http://maycyber-download.blogspot.com/"){
                    redirect();
                }
                else if($('#copyright-link').text() !== "MayCyber-Download"){
                    redirect();
                } 
            }
        //execute the function on page load
        check();
        //excute the function at the intervals of 5 seconds.
        setInterval(function () {check()}, 5000);
        });