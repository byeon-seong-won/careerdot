




// ------- port-list ------- 
    // 다운로드 버튼 클릭시 이동방지
    function showAlert(event) {
        event.stopPropagation();
        alert('다운로드 버튼 클릭');
    }










// ------- port-admin-list ------- 
    // pc checkbox checked
    $('#contboxId').on('click', 'tr', function(e) {
        if($(e.target).is('input:checkbox, label, span')) {
            var chkbox = $(this).find('td:first-child :checkbox');
            chkbox.prop('checked', !chkbox.prop('checked'));

            if (chkbox.prop('checked')) {
                $(this).addClass('click');
            } else {
                $(this).removeClass('click');
            }
        } else {
            window.location.href = 'port-admin-view.html';
        }
    });

    // mobile checkbox checked
    $('.admin-list').on('click', 'li', function(e) {
        if($(e.target).is('input:checkbox, label, span')) {
            var chkbox = $(this).find('input:checkbox');
            chkbox.prop('checked', !chkbox.prop('checked'));

            if (chkbox.prop('checked')) {
                $(this).addClass('click');
            } else {
                $(this).removeClass('click');
            }
        } else {
            window.location.href = 'port-admin-view.html';
        }
    });






    




// ------- index 메뉴 클릭시 ------- 
    $(".mobile-menu").click(function() {
      $(".mobile-menu-cont").fadeIn();
    })
    $(".btn-close, .depth1").click(function() {
      $(".mobile-menu-cont").fadeOut();
    })
    window.addEventListener("resize", function() {
        $(".mobile-menu-cont").css({"display":"none"});
    })














// ------- 사업영역 클릭시 ------- 
    // $('.service-item').click(function(e) {
    //     e.preventDefault(); 
    //     var idx = $(this).index();
    //     $('.visual-wrap').css({"display":"none"});
    //     $('.cont-wrap').addClass('active');
    //     $('.cont-wrap > div').removeClass('active').eq(idx).addClass('active');
    // })


    // 모바일에서 클릭시

// 사업영역 서브메뉴 클릭시

