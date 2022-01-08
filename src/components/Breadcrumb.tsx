import { useEffect, useState } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import AddTodo from "./AddTodoModal";
import { User } from "../interfaces";

const Breadcrumb: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people");
        const data = await response.json();
        const todoUsers = data?.results;
        todoUsers.forEach((singleUser: any) => {
          const formatedUser = {
            name: singleUser.name,
          };
          setUsers((prevUsers) => [...prevUsers, formatedUser]);
        });
        setUsers(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_box text-center">
                <h1 className="breadcrumb-title text-color-primary">
                  TODOLIST{" "}
                </h1>{" "}
                <br />
                <br />
                <Button
                  type="button"
                  color="white"
                  size="lg"
                  _hover={{ bg: "blue.500" }}
                  backgroundColor="blue.600"
                  onClick={onOpen}
                >
                  ADD TODO <i className="fa plus-circle"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddTodo onClose={onClose} isOpen={isOpen} users={users} />
    </>
  );
};

export default Breadcrumb;
