function gettime() {
    $.ajax({
        url: "/time",
        timeout: 10000,
        success: function (data) {
            $("#time").html(data)
        },
        error: function () {

        }
    })
}

function get_cl_data() {
    $.ajax({
        url: "/center",
        success: function (data) {
            $(".num").eq(0).text(data.confirms);
            $(".num").eq(1).text(data.suspect);
            $(".num").eq(2).text(data.heal);
            $(".num").eq(3).text(data.dead);
        },
        error: function () {

        }
    })
}

function get_c2_data() {
    $.ajax({
        url: "/center2",
        success: function (data) {
            ec_center_option.series[0].data = data.data;
            ec_center.setOption(ec_center_option);
        },
        error: function () {
            console.log("失败了")
        }
    })
}

function get_l1_data() {
    $.ajax({
        url: "/left1",
        success: function (data) {
            ec_left1_option.xAxis[0].data = data.day;
            ec_left1_option.series[0].data = data.confirms;
            ec_left1_option.series[1].data = data.suspect;
            ec_left1_option.series[2].data = data.heal;
            ec_left1_option.series[3].data = data.dead;
            ec_left1.setOption(ec_left1_option);
        },
        error: function () {
            console.log("失败了")
        }
    })
}

function get_l2_data() {
    $.ajax({
        url: "/left2",
        success: function (data) {
            ec_left2_option.xAxis[0].data = data.day;
            ec_left2_option.series[0].data = data.confirm_add;
            ec_left2_option.series[1].data = data.suspect_add;
            ec_left2.setOption(ec_left2_option);
        },
        error: function () {
            console.log("失败了")
        }
    })
}

function get_r1_data() {
    $.ajax({
        url: "/right1",
        success: function (data) {
            ec_right1_option.xAxis[0].data = data.city;
            ec_right1_option.series[0].data = data.confirms;
            ec_right1.setOption(ec_right1_option);
        },
        error: function () {
            console.log("失败了")
        }
    })
}

function get_r2_data() {
    $.ajax({
        url: "/right2",
        success: function (data) {
            ec_right2_option.series[0].data = data.kws;
            ec_right2.setOption(ec_right2_option);
        },
        error: function () {
            console.log("失败了")
        }
    })
}

get_r2_data();
get_r1_data();
get_l1_data();
get_l2_data();
get_c2_data();
get_cl_data();
gettime();
setInterval(gettime, 1000);
setInterval(get_r1_data, 1000 * 10);
setInterval(get_r2_data, 1000 * 10);
setInterval(get_cl_data, 1000 * 10);
setInterval(get_c2_data, 1000 * 10);
setInterval(get_l1_data, 1000 * 10);
setInterval(get_l2_data, 1000 * 10);

