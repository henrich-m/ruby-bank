var neonLogin = neonLogin || {};

;(function($, window, undefined)
{
  "use strict";
  $(document).on("ready page:load",function()
  {
    neonLogin.$container = $("#form_login");

    // Login Form Setup
    neonLogin.$body = $(".login-page");
    //neonLogin.$login_progressbar_indicator = $(".login-progressbar-indicator h3");
    neonLogin.$login_progressbar = neonLogin.$body.find(".login-progressbar div");

    //neonLogin.$login_progressbar_indicator.html('0%');

    if(neonLogin.$body.hasClass('login-form-fall'))
    {
      var focus_set = false;

      setTimeout(function(){
        neonLogin.$body.addClass('login-form-fall-init')

        setTimeout(function()
        {
          if( !focus_set)
          {
            neonLogin.$container.find('input:first').focus();
            focus_set = true;
          }

        }, 550);

      }, 0);
    }
    else
    {
      neonLogin.$container.find('input:first').focus();
    }

    // Focus Class
    neonLogin.$container.find('.form-control').each(function(i, el)
    {
      var $this = $(el),
        $group = $this.closest('.input-group');

      $this.prev('.input-group-addon').click(function()
      {
        $this.focus();
      });

      $this.on({
        focus: function()
        {
          $group.addClass('focused');
        },

        blur: function()
        {
          $group.removeClass('focused');
        }
      });
    });

  });

})(jQuery, window);