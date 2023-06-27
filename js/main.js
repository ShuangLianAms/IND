$(function () {
  //初始化
  $(".subMenu").hide();
  $("li.active>.subMenu").show();

  //给菜单项添加事件
  $(".navMenu a").click(function () {
    //获取所属列表ul
    var $subMenuElement = $(this).next();
    var $liElement = $(this).parent();
    var $ulElement = $(this).parent().parent();
    //没有子菜单，则直接返回
    if (!$subMenuElement.is("ul")) {
      $ulElement.find("li").removeClass("active");
      $ulElement.find("ul.subMenu").slideUp();
      $liElement.addClass("active");
      return;
    }
    //如果存在子菜单，则打开或者关闭
    if (!$liElement.hasClass("active")) {
      $ulElement.find("li").removeClass("active");
      $ulElement.find("ul.subMenu").slideUp();
      $liElement.addClass("active");
      $subMenuElement.slideDown();
    } else {
      //打开状态 则关闭本菜单
      $subMenuElement.slideUp();
      $liElement.removeClass("active");
    }
  });
});

$(function () {
  var k = 1;
  // menus
  $(".subMenu li").click(function () {
    var id = this.id;
    $(".box").hide();
    $(".box" + id).show();
    k = id;
  });
  // next
  $(".next").not('.last').click(function () {
    var id = parseInt($(".subMenu").find(".active").attr("id"));
    if (id) {
      id = 1;
    }
    if (k == 1) {
      var input = $("#input1").val();
      $("#answer1").html(input);
    }
    if (k == 2) {
      var input = $("#select1").val();
      console.log(input)
      
      if(input) {
        $("#answer2").html(input.join(','));
      }
      
    }
    if (k == 3) {
      var str = '';
      var select = $("#select10").val();
      if(select) {
        str = select.join(',');
      }

      var html = "";
      html += "<p>" + $("#num1").val() + "--" + $("#num2").val() + "</p>";
      html += "<p>" + str + "</p>";
      html += "<p>" + $("#input2").val() + "</p>";
      html += "<p>" + $("#input3").val() + "</p>";
      html += "<p>" + $("#input4").val() + "</p>";
      html += "<p>" + $("#input5").val() + "</p>";

      $("#answer3").html(html);
    }
    if (k == 4) {
      var input = $("#select2").val();
      $("#answer4").html(input);
      if(input == 'multi') {
        $('#select3').attr('multiple', 'multiple').css('height', 100)
      } else {
        $('#select3').removeAttr('multiple').css('height', '30px')
      }
    }
    if (k == 5) {
      var input = $("#select55").val();
      $("#answer55").html(input);
    }
    if (k == 6) {
      var input = $("#select3").val();
      $("#answer5").html(input);
    }
    if (k == 7) {
      var str = "";
      str += "<p>" + $("#select4").val() + "</p>";
      str += "<p>" + $(".j-media.cur").find("select").val() + "</p>";

      $("#answer6").html(str);

      var val = $('.j-media.cur').find('select').val();
      val = val.replace(/\s+/g,"");

      //alert(val)

      $('.ques-item').hide().removeClass('active');
      $('#' + val).show().addClass('active');



    }

    k++;
    $(".box").hide();
    $(".box" + k).fadeIn();
  });

  // finish
  $('.last').click(function() {

    var str = '';
    var inputs = $('.ques-item.active').find('input');
    for(var i = 0; i < inputs.length; i++) {
      str += '<p>'+inputs[i].value+'</p>';
    }
    $("#answer7").html(str);


    //alert('Submit successfully');
    var val = $('#select5').val();
    if(val == 'biography') {
      $('#box2').show();
    }
    if(val == 'journalism') {
      $('#box3').show();
    }
    $('#box1').hide();


  })

  // prev
  $(".prev").click(function () {
    var id = parseInt($(".subMenu").find(".active").attr("id"));
    k--;
    if (k <= 0) {
      k = 1;
    }
    $(".box").hide();
    $(".box" + k).fadeIn();
  });

  // add
  $('.jia').next().addClass('jia-role')
  $('.jia').not('.jia-2').click(function() {
    var name = 'Person';
    if($(this).hasClass('jia-1')) {
        name = 'Event';
    }
    if($(this).hasClass('cause')) {
        name = 'Cause';
    }

    var box = $(this).next();
    var len = box.find('input').length;
    var max = 5;
    if($(this).hasClass('len')) {
      max = 1000;
    }
    if(len < max) {
      box.append('<div style="display:inline-block;margin-left:5px">'+name+''+(len+1)+': <input type="text" /></div>');
    }
    
  })
  $('.jia-2').click(function() {
    
    var box = $(this).next();
    var len = box.find('div').length;
    var max = 1000;

    var str = '';
    var evts = $('#events').find('input');
    for(var i = 0; i < evts.length; i++) {
      str += '<option value="'+$(evts[i]).val()+'">'+$(evts[i]).val()+'</option>';
    }
    // 每个角色需要三个输入框，分别标明‘Name’；‘relationship with others’, ‘link to evets’。 
    // 其中link to events这个输入框不要文本输入框，而是下拉式选项（多选），
    // 选项的内容是上面一个问题的答案，也就是说，如果上面一个问题用户添加了3个event，那么这里的下拉选项应该是‘event 1’，event 2， event 3.) 
    if(len < max) {
      box.append('<div style="display:inline-block;margin-left:5px">name'+(len+1)+': <input type="text" /> relationship with others'+(len+1)+': <input type="text" /> link to evets'+(len+1)+': <select style="width: 100px">'+str+'</select></div>');
    }
    
  })

  // change
  $("#select4").change(function () {
    var val = this.value;
    var index = 0;
    if (val == "non-fiction") {
      index = 0;
    }
    if (val == "Historical-fiction") {
      index = 1;
    }
    if (val == "fiction") {
      index = 2;
    }
    if (val == "performance") {
      index = 3;
    }

    $(".j-media").removeClass("cur").hide();
    $(".j-media").eq(index).addClass("cur").show();
  });

  // pop
   $('.show').click(function () {
      $('#result').html($('#des').html())
      $('.dialog').show()
   })

   $('.close').click(function() {
    $('.dialog').hide()
   })

   // add
   $('.j-add1').click(function() {

      var that = $(this);
      $('.box1-per').hide()
      $('.box1-evt').show();

      $('.js-add1').click(function() {
        var name = $(this).parent().find('input').val();
        that.prev().append('<li>'+name+'</li>')
      })

   })

   $('.j-add2').click(function() {

      var that = $(this);
      $('.box1-evt').hide();
      $('.box1-per').show()

      $('.js-add2').click(function() {
        var name = $(this).parent().find('input').val();
        that.prev().append('<li>'+name+'</li>')
      })

   })



});
