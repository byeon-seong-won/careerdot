




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













// ------- submit-list ------- 
    // pc checkbox checked
    $('#submitboxId').on('click', 'tr', function(e) {
        if($(e.target).is('input:checkbox, label, span')) {
            var chkbox = $(this).find('td:first-child :checkbox');
            chkbox.prop('checked', !chkbox.prop('checked'));

            if (chkbox.prop('checked')) {
                $(this).addClass('click');
            } else {
                $(this).removeClass('click');
            }
        } else {
            window.location.href = 'port-submit-view.html';
        }
    });

    // mobile checkbox checked
    $('.submit-list').on('click', 'li', function(e) {
        if($(e.target).is('input:checkbox, label, span')) {
            var chkbox = $(this).find('input:checkbox');
            chkbox.prop('checked', !chkbox.prop('checked'));

            if (chkbox.prop('checked')) {
                $(this).addClass('click');
            } else {
                $(this).removeClass('click');
            }
        } else {
            window.location.href = 'port-submit-view.html';
        }
    });












// ------- login 입력시 x버튼 노출 ------- 
    // 기본화면
    $('#loginId').on('input', function() {
        if ($(this).val().length > 0) {
            $('#clearLoginId').show();
        } else {
            $('#clearLoginId').hide();
        }
    });
    $('#loginPw').on('input', function() {
        if ($(this).val().length > 0) {
            $('#clearLoginPw').show();
        } else {
            $('#clearLoginPw').hide();
        }
    });
    $('#clearLoginId').on('click', function() {
        $('#loginId').val('');
        $(this).hide();
    });
    $('#clearLoginPw').on('click', function() {
        $('#loginPw').val('');
        $(this).hide();
    });



    // 로그인 실패화면
    $('#failId').on('input', function() {
        if ($(this).val().length > 0) {
            $('#clearfailId').show();
        } else {
            $('#clearfailId').hide();
        }
    });
    $('#failPw').on('input', function() {
        if ($(this).val().length > 0) {
            $('#clearfailPw').show();
        } else {
            $('#clearfailPw').hide();
        }
    });
    $('#clearfailId').on('click', function() {
        $('#failId').val('');
        $(this).hide();
    });
    $('#clearfailPw').on('click', function() {
        $('#failPw').val('');
        $(this).hide();
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











