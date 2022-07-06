
  $(document).ready
  (
      ()=>
      {
          $('#register').click
          (
              ()=>
              {
                  console.log("In func")
                  $.get('http://localhost:3000/User',
                  (data,status)=>
                  {
                      for(var i=0;i<data.length;i++)
                      {
                          var obj=data[i];
                          if(obj.email===$("#email").val() && obj.password===$("#password").val())
                          {
                              console.log("Done");
                          }
                          else
                          {
                              console.log("Fail");
                          }
                      }
                  } 
                  )
              }
          );
      }
  );