import "./App.css";
import SideBar from "./layout/SideBar";
import EmailList from "./layout/EmailList";
import { Flex, Heading, Text } from "rebass";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import emails from "./test_data/emails";
import ChatBox from "./layout/ChatBox";

function App() {
  let [selected, select] = useState(0);
  let [showEmail, setShowEmail] = useState(-1);
  let selectedEmails;
  switch (selected) {
    case 2:
      selectedEmails = emails;
      break;
    case 1:
      selectedEmails = emails.filter((email) => email.label);
      break;
    default:
      selectedEmails = emails.filter((email) => !email.label);
  }
  return (
    <ThemeProvider theme={theme}>
      {/* Float Layer */}
      <ChatBox
        width="1000px"
        height="800px"
        title="Content"
        onClose={() => setShowEmail(-1)}
        show={showEmail !== -1}
      >
        {selectedEmails[showEmail]?.content}
      </ChatBox>
      {/* Main Layer */}
      <Flex
        flexDirection="column"
        width="100vw"
        height="100vh"
        alignContent="space-between"
        bg={theme.colors.primary}
      >
        {/* Header */}
        <Flex height="70px" width="100vw" fontWeight={800} fontFamily="serif">
          <Heading pt={3} px={4} fontSize={5}>
            Email Client
          </Heading>
          <Flex
            p={3}
            mr={2}
            ml="auto"
            height="30px"
            alignSelf="center"
            justifyContent="center"
            alignItems="center"
            bg={theme.colors.accent}
            sx={{ cursor: "pointer", borderRadius: "10px" }}
          >
            LOGIN
          </Flex>
        </Flex>

        {/* Body */}
        <Flex flex={1}>
          <SideBar
            selected={selected}
            onSelect={select}
            items={["Inbox", "Junk Emails", "All Emails"]}
          />
          <EmailList
            flex={1}
            content={selectedEmails}
            onSelect={(i) => setShowEmail(i)}
          />
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
