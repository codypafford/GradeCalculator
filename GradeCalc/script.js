/**
 * @return {boolean}
 */
function PointGrader() {
    var grade1 = parseInt(document.getElementById("grade1_p").value);
    var grade2 = parseInt(document.getElementById("grade2_p").value);
    var grade3 = parseInt(document.getElementById("grade3_p").value);
    var grade4 = parseInt(document.getElementById("grade4_p").value);
    var grade5 = parseInt(document.getElementById("grade5_p").value);
    var grade6 = parseInt(document.getElementById("grade6_p").value);
    var grade7 = parseInt(document.getElementById("grade7_p").value);
    var grade8 = parseInt(document.getElementById("grade8_p").value);
    var grade9 = parseInt(document.getElementById("grade9_p").value);
    var grade10 = parseInt(document.getElementById("grade10_p").value);

    var weight1 = parseInt(document.getElementById("weight1_p").value);
    var weight2 = parseInt(document.getElementById("weight2_p").value);
    var weight3 = parseInt(document.getElementById("weight3_p").value);
    var weight4 = parseInt(document.getElementById("weight4_p").value);
    var weight5 = parseInt(document.getElementById("weight5_p").value);
    var weight6 = parseInt(document.getElementById("weight6_p").value);
    var weight7 = parseInt(document.getElementById("weight7_p").value);
    var weight8 = parseInt(document.getElementById("weight8_p").value);
    var weight9 = parseInt(document.getElementById("weight9_p").value);
    var weight10 = parseInt(document.getElementById("weight10_p").value);

    var final_grade = 0;
    var counter = 0;
    var grade = 0;

    if(Number.isNaN(grade1)){
        alert("Enter a number");
        return false;
    }else{
        final_grade = (grade1 / weight1);
        grade = grade + final_grade;
        counter = counter + 1;
    }

    // var x=document.getElementById('point_table');
    // // deep clone the targeted row
    // var new_row = x.rows[1].cloneNode(true);
    // // get the total number of rows
    // var len = x.rows.length;
    //
    // var inp1 = new_row.cells[1].getElementsByTagName('input')[0].value;
    // var inp2 = new_row.cells[2].getElementsByTagName('input')[0].value;
    //
    //
    // new_row.cells[0].innerHTML = '11';


  //  alert(inp2);
  //  x.append(new_row);

    if(!Number.isNaN(grade2) && !Number.isNaN(weight2)){
        final_grade = (grade2 / weight2);
        grade = grade + final_grade;
        counter = counter + 1;    }

    if(!Number.isNaN(grade3) && !Number.isNaN(weight3)){
        final_grade = (grade3 / weight3);
        grade = grade + final_grade;
        counter = counter + 1;    }

    if(!Number.isNaN(grade4) && !Number.isNaN(weight4)){
        final_grade = (grade4 / weight4);
        grade = grade + final_grade;
        counter = counter + 1;    }

    if(!Number.isNaN(grade5) && !Number.isNaN(weight5)){
        final_grade = (grade5 / weight5);
        grade = grade + final_grade;
        counter = counter + 1;    }

    if(!Number.isNaN(grade6) && !Number.isNaN(weight6)){
        final_grade = (grade6 / weight6);
        grade = grade + final_grade;
        counter = counter + 1;    }

    if(!Number.isNaN(grade7) && !Number.isNaN(weight7)){
        final_grade = (grade7 / weight7);
        grade = grade + final_grade;
        counter = counter + 1;    }

    if(!Number.isNaN(grade8) && !Number.isNaN(weight8)){
        final_grade = (grade8 / weight8);
        grade = grade + final_grade;
        counter = counter + 1;    }

    if(!Number.isNaN(grade9) && !Number.isNaN(weight9)){
        final_grade = (grade9 / weight9);
        grade = grade + final_grade;
        counter = counter + 1;    }

    if(!Number.isNaN(grade10) && !Number.isNaN(weight10)){
        final_grade = (grade10 / weight10);
        grade = grade + final_grade;
        counter = counter + 1;    }

    final_grade = grade / counter;
    final_grade = final_grade * 100;



   // alert(final_grade);
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
    // var isPointChecked = document.getElementById('by_points').checked;
    // if(isPointChecked){
    //     PointGrader();
    //     return false;
    // }
    var grade1 = parseInt(document.getElementById("grade1").value);
    var grade2 = parseInt(document.getElementById("grade2").value);
    var grade3 = parseInt(document.getElementById("grade3").value);
    var grade4 = parseInt(document.getElementById("grade4").value);
    var grade5 = parseInt(document.getElementById("grade5").value);
    var grade6 = parseInt(document.getElementById("grade6").value);
    var grade7 = parseInt(document.getElementById("grade7").value);
    var grade8 = parseInt(document.getElementById("grade8").value);
    var grade9 = parseInt(document.getElementById("grade9").value);
    var grade10 = parseInt(document.getElementById("grade10").value);

    var weight1 = parseInt(document.getElementById("weight1").value);
    var weight2 = parseInt(document.getElementById("weight2").value);
    var weight3 = parseInt(document.getElementById("weight3").value);
    var weight4 = parseInt(document.getElementById("weight4").value);
    var weight5 = parseInt(document.getElementById("weight5").value);
    var weight6 = parseInt(document.getElementById("weight6").value);
    var weight7 = parseInt(document.getElementById("weight7").value);
    var weight8 = parseInt(document.getElementById("weight8").value);
    var weight9 = parseInt(document.getElementById("weight9").value);
    var weight10 = parseInt(document.getElementById("weight10").value);

    var final_grade;
    var final_weight_sums = 0;


    if(Number.isNaN(grade1)){
        alert("Enter a number");
        return false;
    }else{
        final_grade = (grade1 * weight1);
        final_weight_sums = final_weight_sums+ weight1;
    }

    //use for loop to cycle through an array of pairs for this:

    if(!Number.isNaN(grade2) && !Number.isNaN(weight2)){
        final_grade = final_grade + (grade2 * weight2);
        final_weight_sums = final_weight_sums + weight2;
    }

    if(!Number.isNaN(grade3) && !Number.isNaN(weight3)){
        final_grade = final_grade + (grade3 * weight3);
        final_weight_sums = final_weight_sums + weight3;
    }

    if(!Number.isNaN(grade4) && !Number.isNaN(weight4)){
        final_grade = final_grade + (grade4 * weight4);
        final_weight_sums = final_weight_sums + weight4;
    }

    if(!Number.isNaN(grade5) && !Number.isNaN(weight5)){
        final_grade = final_grade + (grade5 * weight5);
        final_weight_sums = final_weight_sums + weight5;
    }

    if(!Number.isNaN(grade6) && !Number.isNaN(weight6)){
        final_grade = final_grade + (grade6 * weight6);
        final_weight_sums = final_weight_sums + weight6;
    }

    if(!Number.isNaN(grade7) && !Number.isNaN(weight7)){
        final_grade = final_grade + (grade7 * weight7);
        final_weight_sums = final_weight_sums + weight7;
    }

    if(!Number.isNaN(grade8) && !Number.isNaN(weight8)){
        final_grade = final_grade + (grade8 * weight8);
        final_weight_sums = final_weight_sums + weight8;
    }

    if(!Number.isNaN(grade9) && !Number.isNaN(weight9)){
        final_grade = final_grade + (grade9 * weight9);
        final_weight_sums = final_weight_sums + weight5;
    }

    if(!Number.isNaN(grade10) && !Number.isNaN(weight10)){
        final_grade = final_grade + (grade10 * weight10);
        final_weight_sums = final_weight_sums + weight10;
    }

    final_grade = final_grade/final_weight_sums;




  //  alert(final_grade);

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


  //  alert(rate_value);
}