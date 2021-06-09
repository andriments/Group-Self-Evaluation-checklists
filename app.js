//Variables
var GLnameInput = document.getElementById("GLname");
var NameInput = document.getElementById("Name");
var CblockInput  = document.getElementById("Cblock");
var dateInput  = document.getElementById("date");
var PtitleInput  = document.getElementById("Ptitle");

var question1Input  = document.getElementById("question1");
var question2Input  = document.getElementById("question2");
var question3Input  = document.getElementById("question3");

var question4Input  = document.getElementById("question4");
var question5Input  = document.getElementById("question5");
var question6Input  = document.getElementById("question6");
var question7Input  = document.getElementById("question7");

var op1  = document.getElementById("op1");
var op2  = document.getElementById("op2");
var op3  = document.getElementById("op3");

//get the data 
var userdata = JSON.parse(localStorage.getItem("userdata"));

if (userdata) {
    GLnameInput.value = userdata.GLname;
    NameInput .value = userdata.Name;
    CblockInput.value = userdata.Cblock;
    dateInput.value = userdata.date;
    PtitleInput.value = userdata.Ptitle;

    question1Input.value = userdata.question1;
    question2Input.value = userdata.question2;
    question3Input.value = userdata.question3;

    question4Input.value = userdata.question4;
    question5Input.value = userdata.question5;
    question6Input.value = userdata.question6;
    question7Input.value = userdata.question7;


}
document
.getElementById("myform")
.addEventListener("submit", function (event) {
    event.preventDefault();

    
//get data from the form inputs
var  GLname =  GLnameInput.value.trim();
var  Name =  NameInput.value.trim();
var Cblock = CblockInput.value.trim();
var date = dateInput.value.trim();
var Ptitle = PtitleInput.value.trim();

var question1 = question1Input.value.trim();
var question2 = question1Input.value.trim();
var question3 = question3Input.value.trim();

var question4 = question4Input.value.trim();
var question5 = question5Input.value.trim();
var question6 = question6Input.value.trim();
var question7 = question7Input.value.trim();



//if values are invalid
if (!GLname || !Name || !Cblock || !date || !Ptitle || !question4 || !question5 || !question6 || !question7) {
    return;
}
   
if (question1 == op1 || question1 == op1
    && question2 == op2 || question2 == op2 
    && question3 == op3 || question3 == op3) {
        return;
}


//save to localstorage
var userdata = {
    GLname: GLname,
    Name: Name,
    Cblock: Cblock,
    date: date,
    Ptitle: Ptitle,

    question1: question1,
    question2: question2,
    question3: question3,

    question4: question4,
    question5: question5,
    question6: question6,
    question7: question7
    
};
localStorage.setItem("userdata", JSON.stringify(userdata));

for (let i = 0; i < localStorage.length; i++) {
    const userdata = localStorage.userdata[i];
    var output = document.getElementById("output");
    console.log(localStorage.getItem('userdata'));
    output.innerHTML += `
                             <table>
                               <tbody>
                               <tr>
                                  <td>Group Leader Name: </td>
                                  <td>${GLname}</td>
                                </tr>
                                <tr>
                                  <td>Name: </td>
                                  <td>${Name}</td>
                                </tr>
                                <tr>
                                  <td>Course/Block: </td>
                                  <td>${Cblock}</td>
                                </tr>
                                <tr>
                                  <td>Date: </td>
                                  <td>${date}</td>
                                </tr>
                                <tr>
                                  <td>Project title: </td>
                                  <td>${Ptitle}</td>
                                </tr>
                               </tbody>
                              </table>
    
                             <table>
                               <tbody>
                                <tr>
                                  <td> We finished our task on time, and we did a good job!: </td>
                                  <td>${question1}</td>
                                </tr>
                                <tr>
                                  <td>We encourage each other and we cooperated with each other.: </td>
                                  <td>${question2}</td>
                                </tr>
                                <tr>
                                  <td> We each shared our ideas, then listened and valued each other’s ideas.: </td>
                                  <td>${question3}</td>
                                </tr>
                                <tr>
                                  <td> We did best at: </td>
                                  <td>${question4}</td>
                                </tr>
                                <tr>
                                <td> Next time we could improve at: </td>
                                <td>${question5}</td>
                              </tr>
                              <tr>
                              <td> As part of the group, I learned: </td>
                              <td>${question6}</td>
                            </tr>
                            <tr>
                            <td> By doing this project I can: </td>
                            <td>${question7}</td>
                          </tr>
                               </tbody>
                              </table>`
};
});
