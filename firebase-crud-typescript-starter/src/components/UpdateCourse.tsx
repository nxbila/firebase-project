import { Flex, Icon, Stack, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { FC, useState } from "react";
import { FaEdit } from "react-icons/fa";

import Modal from "./Modal";
import CourseHelperClass, { ICourseDoc } from "../CourseHelperClass";

interface IUpdateCourseProps {
  course:ICourseDoc;
  fetchCourses: () => void;
}

const UpdateCourse: FC<IUpdateCourseProps> = ({course,fetchCourses}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Modal title="Update User" isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: course.name,
            age: course.age,
            gender: course.gender,
            email: course.email,
            city: course.city,
          }}
          onSubmit={async (values) => {
            try{
              setIsLoading(true);
                await CourseHelperClass.updateCourse(course.id,
                  {name:values.name,
                    age:values.age,
                    gender:values.gender,
                    email:values.email,
                    city:values.city,
                  })
            }
            catch(error){
              console.log(error);
              alert(error);
            }finally{
              setIsLoading(false);
              fetchCourses();
              onClose();
            }
          }}
        >
          <Form>
            <Stack py="4">
              <InputControl
                name="name"
                label="Name"
                inputProps={{ placeholder: "Enter Name" }}
              />
              <NumberInputControl
                name="age"
                label="Age"
                helperText="Enter Age"
              />
              <SelectControl name="gender" label="Gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </SelectControl>
              <InputControl
                name="email"
                label="Email"
                inputProps={{ placeholder: "Enter Email" }}
              />
              <InputControl
                name="city"
                label="City"
                inputProps={{ placeholder: "Enter City" }}
              />
            </Stack>
            <Flex justify="end">
              <SubmitButton isLoading={isLoading} colorScheme="purple">
                Update 
              </SubmitButton>
            </Flex>
          </Form>
        </Formik>
      </Modal>
      <Icon onClick={onOpen} fontSize="xl">
        <FaEdit />
      </Icon>
    </>
  );
};
export default UpdateCourse;
