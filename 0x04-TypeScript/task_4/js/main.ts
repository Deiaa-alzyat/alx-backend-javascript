/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

namespace Subjects {
    export import Cpp = Subjects.Cpp;
    export import Java = Subjects.Java;
    export import React = Subjects.React;
    export import Teacher = Subjects.Teacher;

    export const cTeacher: Teacher = {
        firstName: "John",
        lastName: "Doe",
        experienceTeachingC: 10
    };

    Cpp.teacher = cTeacher;
    console.log(Cpp.name);
    console.log(Cpp.getRequirements());
    console.log(Cpp.getAvailableTeacher());

    Java.teacher = cTeacher;
    console.log(Java.name);
    console.log(Java.getRequirements());
    console.log(Java.getAvailableTeacher());

    React.teacher = cTeacher;
    console.log(React.name);
    console.log(React.getRequirements());
    console.log(React.getAvailableTeacher());
}
