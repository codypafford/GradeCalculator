function convert(number) {
    if (!Number.isNaN(number)){
        return number;
    }
    else{
        return 0;
    }
}

/**
 * @return {boolean}
 */
function PointGrader() {
    var total_points = 0;
    var points_received = 0;


    var i;
    for (i = 1; i <= 10; i++) {
        total_points = total_points + convert(parseInt(document.getElementById("weight" + i + "_p").value));
    }

    var w;
    for (w = 1; w <= 10; w++) {
        points_received = points_received + convert(parseInt(document.getElementById("grade" + w + "_p").value));
    }


    var final_grade = (points_received/total_points) * 100;

    document.getElementById("your_grade").innerHTML = '<div align="center"><span> YOUR FINAL GRADE: ' +  final_grade + '%</span></div>';


    return false;
}

/**
 * @return {boolean}
 */
function GetGrade(){
    if(document.getElementById('by_points').checked){
        PointGrader();
    }else{
        myFunction();
    }

    return false;
}

function myFunction(){


    var final_grade = 0;
    var final_weight_sums = 0;


    var i;
    for (i = 1; i <= 10; i++) {
        var weight = convert(parseInt(document.getElementById("weight" + i).value));
        final_grade = final_grade + convert(parseInt(document.getElementById("grade" + i).value)) * weight;
        final_weight_sums = final_weight_sums + weight;
    }


    final_grade = final_grade/final_weight_sums;



    document.getElementById("your_grade").innerHTML = '<div align="center"><span> YOUR FINAL GRADE: ' +  final_grade + '%</span></div>';

    return false;


}

function SetTypeOfGrader(){
    if (document.getElementById('by_weight').checked) {
        rate_value = document.getElementById('by_weight').value;
        document.getElementById("by_point_block").style.display = 'none';
        document.getElementById('by_percent_block').style.display = 'block';
    }
    else{
        rate_value = document.getElementById('by_points').value;
        document.getElementById("by_point_block").style.display = 'block';
        document.getElementById('by_percent_block').style.display = 'none';
    }


}