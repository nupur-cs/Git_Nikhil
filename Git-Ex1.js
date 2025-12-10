class Teacher {
    constructor(id, name){
        this.id = id; 
        this.name = name;
    }
}
class Classroom{
constructor(id, Teacher){
        this.id = id;
        this.Teacher = Teacher;
        this.students = [];
        this.attendance = [];
        this.gradebook = new Gradebook();
}
addStudent(student){
    this.students.push(student);
}
markPresent(studentId, date = (new Date()).toISOString().slice(0,10))
{
 if (!this.attendance[studentId]) this.attendance[studentId] = [];
 this.attendance[studentId].push(date);
 }
 attendancePercentage(studentId, sessionCount=10) {
 const present = (this.attendance[studentId] || []).length;
 return (present / sessionCount) * 100;
 } 

//Connect Gradebook to Classroom so the teacher can post grades for a class. 

 postgrade(studentId, assignment, record){
    this.gradebook.record(studentId, assignment, record);
 }

// summary records of the classroom



}
class Gradebook{
    constructor() {

 this.records = {};
 } 
 record(studentId, assignments, score){
    if (!this.records[studentId]) this.records[studentId] = [];
    this.records[studentId].push({ assignments, score});
 }
 average(studentId){
    const rec = this.records[studentId] || [];
    if (rec.length === 0) return null; 
    return rec.reduce((s, r) => s + r.score, 0) / rec.length;
 }

 /* Implement Gradebook which records assignment scores and computes average and
letter grades */

 lettergrade(studentId){
    const avg = this.average(studentId);
    if(avg >= 90) return 'A';
    if(avg >= 80) return 'B';
    if(avg >= 70) return 'C';
    if(avg >= 60) return 'D';
    return 'f';
 }
}

//Changes done by Nupur
// Teacher
const t1 = new Teacher(1, "Mr. Sharma");
 
// Classroom
const classA = new Classroom("A1", t1);
 
// Demo Students
const s1 = { id: 101, name: "Amit" };
const s2 = { id: 102, name: "Riya" };
const s3 = { id: 103, name: "Karan" };
 
// Add Students
classA.addStudent(s1);
classA.addStudent(s2);
classA.addStudent(s3);
 
// Attendance Demo
classA.markPresent(101);
classA.markPresent(101);
classA.markPresent(102);
classA.markPresent(103);
classA.markPresent(103);
classA.markPresent(103);
 
// Grade Demo
classA.gradebook.record(101, "Math Test", 90);
classA.gradebook.record(101, "Science Test", 80);
 
classA.gradebook.record(102, "Math Test", 85);
classA.gradebook.record(102, "Science Test", 92);
 
classA.gradebook.record(103, "Math Test", 70);
 
// Display Results
console.log("\n--- AVERAGES ---");
console.log("Amit:", classA.gradebook.average(101));
console.log("Riya:", classA.gradebook.average(102));
console.log("Karan:", classA.gradebook.average(103));
 
console.log("\n--- ATTENDANCE % ---");
console.log("Amit:", classA.attendancePercentage(101), "%");
console.log("Riya:", classA.attendancePercentage(102), "%");
console.log("Karan:", classA.attendancePercentage(103), "%");
 
 