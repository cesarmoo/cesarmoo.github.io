(function($) {
    var curr_time = new Date();

    // write current time
    $("#sleepcurrtime").text(convert_to_12(curr_time));

    // write wake up times
    wake_times = calculate_wake_times(curr_time);
    for (i = 0; i < 6; ++i) {
        $("#sleepwaketime" + i).text(wake_times[i]);
    }

    function convert_to_12(date, show_am_pm=true) {
        var hours = date.getHours();
        var am_pm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours == 0 ? 12 : hours;
        var minutes = date.getMinutes();
        minutes = minutes.toString().padStart(2, '0');
        if (show_am_pm) {
            return hours + ":" + minutes + am_pm;
        }
        else {
            return hours + ":" + minutes;
        }
    }

    function calculate_wake_times(date) {
        var times = []
        var time = curr_time;
        time.setMinutes(time.getMinutes() + 14); // 14 min to fall sleep
        for (i = 0; i < 6; ++i) {
            time.setHours(time.getHours() + 1);
            time.setMinutes(time.getMinutes() + 30); 
            times.push(convert_to_12(time));
        }
        return times;
    }

})(jQuery);