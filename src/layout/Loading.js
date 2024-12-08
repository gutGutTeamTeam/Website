import { forwardRef } from "react";
import { Flex } from "rebass";

const Loading = forwardRef(function ({ show = false }, ref) {
  return (
    <Flex
      width="100vw"
      height="100vh"
      ref={ref}
      bg="rgba(0, 0, 0, 0.5)"
      sx={{
        visibility: show ? "visible" : "hidden",
        // float
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 0,
        top: 0,
      }}
    >
      <Flex
        bg="white"
        p={3}
        sx={{
          borderRadius: "10px",
          boxShadow: "0.01em 0.01em 0.1em darkgrey",
        }}
      >
        Loading...
      </Flex>
    </Flex>
  );
});

export default Loading;
