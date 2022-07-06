
  $(document).ready
  (
      function()
      {
          $("#register").click   //id # given
          (
              function()
              {
                 
                  $.post
                  (
                      "http://localhost:3000/Artist",
                      {
                          name :$("#name").val(),
                          art :$("#art").val(),
                          gender:$("#gender").val(),
                          number:$("#number").val(),
                          email:$("#email").val(),
                          password:$("#password").val(),    
                      },
                      function(data,status){
                        alert("Data: " + data + "\nStatus: " + status);
                      }
                  
                  );
              }

          );
      }
  );