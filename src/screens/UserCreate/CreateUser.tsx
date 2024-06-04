import { useCreateUserMutation } from "../../store/api/usersApi";

const CreateUser = () => {
  const [createUser, result] = useCreateUserMutation();
  const submitHandler = () => {
    setSubmitMessage(`Användaren ... har skapats`);
    createUser({
        user: {
        firstName: firstName,
        lastName: lastName,
      },
    });
  };
};
