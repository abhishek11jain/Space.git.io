$(function () {
    $("#hide").click(function () {
        $(".navbar-nav").fadeToggle(1500);
    })
})


$(function() {
    $('.nav-item a').click(function() {
      // Get the section to show
      var $section = $('#' + $(this).data('section'));

      // If its already visible, do nothing.
      // Otherwise, hide the others and then fade in the desired section.
      if (!$section.is(':visible')) {
        $('.hideable-section').hide();
        $section.fadeIn();
      }
    });
  });

// home 
  function homeimgchage(el)
  {
       serviceimg = $(el).attr('imgpath');
       $("#main-section").css("background-image", serviceimg);
  }

//   service 
  function serviceimgchage(el)
  {
       serviceimg = $(el).attr('imgpath');
       $("#main-section").css("background-image", serviceimg);
  }

//   product 
  function productimgchage(el)
  {
       serviceimg = $(el).attr('imgpath');
       $("#main-section").css("background-image", serviceimg);
  }

//   video 
  function videoimgchage(el)
  {
       serviceimg = $(el).attr('imgpath');
       $("#main-section").css("background-image", serviceimg);
  }

//   end 
  function endimgchage(el)
  {
       serviceimg = $(el).attr('imgpath');
       $("#main-section").css("background-image", serviceimg);
  }


                            
                               

//   $(function ()
//   {
//       setNavigation();
//   });
//   function setNavigation(){
//       var path = window.location.pathname;
//       path = path.replace(/\/$/,"");
//       path = decodeURIComponent(path);

//       $(".nav a").each(function(){
//           var href = $(this).attr('href');
//           if(path.substring(0,href.length)=== href){
//               $(this).closest('li').addClass('active');
//           }
//       });
//   }












