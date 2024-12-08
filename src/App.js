import "./App.css";
import SideBar from "./layout/SideBar";
import EmailList from "./layout/EmailList";
import { Flex, Heading } from "rebass";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { useRef, useState } from "react";
import ChatBox from "./layout/ChatBox";
import { useEffect } from "react";
import { fetchEmails, postEmails } from "./test_data/loader";
import Loading from "./layout/Loading";

let loaded = false;

function App() {
  let [selected, select] = useState(0);
  let [showEmail, setShowEmail] = useState(-1);
  let [emails, setEmails] = useState({ Message: [] });
  let [spamIndices, setSpamIndices] = useState([]);

  let loading_ref = useRef(null);

  useEffect(() => {
    if (!loaded) {
      fetchEmails((data) => setEmails(data));
      loaded = true;
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* Float Layer */}

      <Loading ref={loading_ref} show={emails["Message"].length === 0} />

      {loaded && (
        <ChatBox
          width="1000px"
          height="800px"
          title="Content"
          onClose={() => setShowEmail(-1)}
          show={showEmail !== -1}
        >
          {emails["Message"][showEmail]}
        </ChatBox>
      )}
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
            Email4LazyNerds
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
            onClick={() => {
              console.log("loading_ref", loading_ref);
              loading_ref.current.style.visibility = "visible";
              postEmails(emails["Message"], (data) => {
                loading_ref.current.style.visibility = "hidden";
                setSpamIndices(data["spams"]);
              });
            }}
          >
            CLEAN NOW!
          </Flex>
        </Flex>

        {/* Body */}
        <Flex flex={1}>
          <SideBar
            selected={selected}
            onSelect={select}
            items={["Inbox", "Spams", "All Emails"]}
          />
          <EmailList
            flex={1}
            names={names}
            spamIndices={spamIndices}
            column={selected}
            content={emails["Message"]}
            onSelect={(i) => setShowEmail(i)}
          />
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;

function spawnRandomNames(count) {
  const names = [
    "Super Hacker",
    "Giga Chad",
    "Secret Geek",
    "Smart Nerd",
    "Cook Techie",
    "Funny Guy",
    "Crazy Dude",
    "Anonymous",
  ];
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(names[Math.floor(Math.random() * names.length)]);
  }
  return result;
}

const names = spawnRandomNames(20);
