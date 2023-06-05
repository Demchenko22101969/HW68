/*Напишите программу на JavaScript для удаления свойства rollno из следующего объекта. Также распечатайте объект до или после удаления свойства.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };*/

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    console.log(student);
    delete student.rollno;
    console.log(student);
