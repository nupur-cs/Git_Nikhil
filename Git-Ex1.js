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
