import { Button, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { FC, useState } from "react";

import Modal from "./Modal";
import CourseHelperClass from "../CourseHelperClass";

interface IAddCourseProps {
  fetchCourses: () => void;
}

const AddCourse: FC<IAddCourseProps> = ({fetchCourses}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Modal title="Add User" isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{ name: "", age: "", gender: "",email: "",city: "" }}
          onSubmit={async (values) => {
            console.log(values);
            try{
              setIsLoading(true);
                await CourseHelperClass.addCourse(
                  {name:values.name,
                    age:parseInt(values.age),
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
                Add User
              </SubmitButton>
            </Flex>
          </Form>
        </Formik>
      </Modal>
      <Button onClick={onOpen} mb="4">
        Add User
      </Button>
    </>
  );
};
export default AddCourse;
