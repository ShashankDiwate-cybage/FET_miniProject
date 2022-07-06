$(document).ready
(
    function()
    {
        $("#upload").click   //id # given
        (
            function()
            {
               
                $.post
                (
                    "http://localhost:3000/Upload",
                    {
                        name :$("#name").val(),
                        file :$("#fileToUpload").val(),
                            
                    },
                    function(data,status){
                      alert("Data: " + data + "\nStatus: " + status);
                    }
                
                );
            }

        );
    }
);