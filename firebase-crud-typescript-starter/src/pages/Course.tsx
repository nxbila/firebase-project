import { Heading, List, ListItem, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseHelperClass, { ICourseDoc } from "../CourseHelperClass";

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<ICourseDoc>();
  
  const fetchCourse  = async () => {
    if(id){
    const course = await CourseHelperClass.getCourse(id);
    setCourse(course);
    }
  };
  useEffect(() => {
    fetchCourse();
  },[]);
 
  return (
    <Stack m="8" p="5" boxShadow="xl">
      <Heading>{course?.name}</Heading>
      <List>
        <ListItem>
          <strong>Age:</strong> {course?.age}
        </ListItem>
        <ListItem>
          <strong>Gender:</strong> {course?.gender}
        </ListItem>
        <ListItem>
          <strong>Email:</strong> {course?.email}
        </ListItem>
        <ListItem>
          <strong>City:</strong> {course?.city}
        </ListItem>
      </List>
    </Stack>
  );
};

export default Course;
