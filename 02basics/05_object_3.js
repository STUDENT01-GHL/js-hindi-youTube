const course = {
    coursename : "JS" , 
    coursefess : "999",
    courseInstuctor : "Hitesh"
}

 // course.courseInstuctor    ---- that is tottaly fine but we will going use another way

 const {courseInstuctor} = course
 console.log(courseInstuctor);
 
 const {coursename : name} = course   // for changing the name of the key use { : }
 console.log(name);
 

 // ---- introductiom t0 API --------

 // APIs can be found in object or arrays 