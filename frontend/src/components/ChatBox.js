import { Box } from "@chakra-ui/layout";
import "./style.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../context/ChatProvider";
 
const Chatbox = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat } = ChatState();

    return (
        <Box
            display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
            alignItems="center"
            flexDirection="column"
            padding={3}
            bg="white"
            width={{ base: "100%", md: "68%" }}
            borderRadius="lg"
            borderWidth="1px"
        >
            <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            
        </Box>
    );
};

export default Chatbox;