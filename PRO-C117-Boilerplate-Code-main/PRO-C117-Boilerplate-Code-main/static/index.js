//Create date variable
var date=new Date()

$(document).ready(function(){
    $('#display_date').html(date.toLocaleDateString())
})

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call
        var input_data = {'sentence': $('#text').val()}
        $.ajax({
            type:'POST',
            url:'/predict-emotion',
            data:JSON.stringify(input_data),
            dataType:'json',
            contentType:'application/json',
            success:function(result){
                $('#emo_img_url').attr('src',result.data.img)
                $('#prediction').html(result.data.emotion)
            },
            error:function(result){
                alert(result.responseJSON.message)
            }
              
            //Error function
            
        });
    });
})

