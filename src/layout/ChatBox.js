import { Flex, Heading } from "rebass";
import { useTheme } from "styled-components";
import "../styles/style.css";

export default function ChatBox({
  show = false,
  width,
  height,
  title,
  children,

  onClose,
}) {
  const theme = useTheme();
  return (
    <>
      <Flex
        width="100vw"
        height="100vh"
        className={show ? "fade_in" : "fade_out"}
        bg="rgba(0, 0, 0, 0.5)"
        sx={{
          visibility: show ? "visible" : "hidden",

          // floating layer
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Flex
        width={width}
        height={height}
        bg={"white"}
        className={show ? "fade_in" : "fade_out"}
        flexDirection={"column"}
        justifyContent="stretch"
        alignContent="stretch"
        sx={{
          boxShadow: "0 0 4px rgba(0, 0, 0, .125)",
          borderRadius: "10px",
          visibility: show ? "visible" : "hidden",

          // floating layer
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Heading fontSize={5} mx={4} my={3}>
          {title}
        </Heading>
        <Flex flex={1} m={4}>
          {children}
        </Flex>
        <Flex
          height="80px"
          width="80px"
          alignSelf="flex-end"
          bg={theme.colors.accent}
          justifyContent="center"
          alignItems="center"
          color={theme.colors.text}
          onClick={onClose}
          m={3}
          sx={{ borderRadius: "10px", cursor: "pointer" }}
        >
          Back
        </Flex>
      </Flex>
    </>
  );
}
