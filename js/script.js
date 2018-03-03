
    $(document).ready(function(){
        $('a').on('click',function(e){
            e.preventDefault();
            showContent($(this).attr("id"));
        })
    })
    function showContent(myId){
        $.ajax({
            url:'import.html',
            type:'GET',
            dataType:'text',
            success:function(res){
                
               var data = $.parseHTML(res);
               for(var key in data){
                   var id = $(data[key]).attr("id");
                   if(id == myId){
                       var result = data[key];
                       break;
                   }
               }
               $('.dynamic').css('display','block');
               $('.dynamic').html(result);

               $('.test-content').on({
                    click:function(){
                        var div = $(this);
                        div.animate({width: '300px', opacity: '0.8'}, "slow");
                        div.animate({width: '100px', opacity: '0.8'}, "slow");
                    },
                });

                $(document).ready(function(){
                    var x=0;
                    var y=0;
                    var z=0;
                    var a=0;
                    var b=0;
                    $('input').focus(function(){
                        $(this).css('background','ivory');
                    });
                    $('input').blur(function(){
                        $(this).css('background','#fff');
                    });
                    $('div.over').mouseover(function(){
                        $('.over span').text(x +=1);
                    });
                    $('div.enter').mouseenter(function(){
                        $('.enter span').text(y +=1);
                    });
                    $('div.move').mousemove(function(){
                        $('.move span').text(z +=1);
                    });
                    $('div.leave').mouseleave(function(){
                        $('.leave span').text(a +=1);
                    });
                    $('div.out').mouseout(function(){
                        $('.out span').text(b +=1);
                    });

                    $("#one p:nth-child(2)").one("click", function(){
                            $(this).animate({fontSize: "+=6px"});
                    });
                    
                    $('#kpress').keypress(function(){
                        alert('Keypress event triggered');
                    });
                    $('#kdwn').keydown(function(){
                        alert('Keydown event triggered');
                    });
                    $('#kup').keyup(function(){
                        alert('Keyup event triggered');
                    });
                });
              
            },

        });
    }


