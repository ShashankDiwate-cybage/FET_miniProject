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
                    "http://localhost:3000/User",
                    {
                        name :$("#name").val(),
                        number:$("#number").val(),
                        address:$("#address").val(),
                        profession:$("#profession").val(),
                        email:$("#email").val(),
                        password:$("#password").val(),
                    }
                
                );
            }

        );
    }
);