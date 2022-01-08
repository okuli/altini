import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import {
  Modal,
  ModalOverlay,
  Button,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  ModalBody,
  Input,
  ModalContent,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import { ReduxState, TodoItem, User } from "../interfaces";
import { addTodo } from "../store/actions/todoActions";

interface AddTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
}

const AddTodo: React.FC<AddTodoModalProps> = ({ isOpen, onClose, users }) => {
  const [state, setState] = useState<TodoItem>({
    id: "",
    title: "",
    description: "",
    status: "todo",
    user: "",
  });

  const dispatch = useDispatch();
  const { todoList } = useSelector((store: ReduxState) => store.tasks);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAddTodo = () => {
    if (state.description !== "" && state.title !== "") {
      dispatch(addTodo(todoList, { ...state, id: uuidV4() }));
      setState({
        id: "",
        title: "",
        description: "",
        status: "todo",
        user: "",
      });
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add ToDO </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={state.title}
              onChange={handleChange}
              placeholder="Title"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              name="description"
              value={state.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Responsible</FormLabel>
            <Select
              name="user"
              placeholder="Select Responsible"
              onChange={handleChange}
            >
              {users.map((user: User, idx: number) => (
                <option key={idx} value={user.name}>
                  {user.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={handleAddTodo} mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

AddTodo.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddTodo;
