import { Flex } from "rebass";
import { useTheme } from "styled-components";

export default function SideBar({ items, selected = 0, onSelect, ...props }) {
  const theme = useTheme();
  return (
    <Flex
      flexDirection="column"
      bg="primary"
      alignItems="stretch"
      width="250px"
      {...props}
    >
      <Flex
        p={3}
        mb={2}
        width="230px"
        bg={theme.colors.accent}
        alignItems="center"
        sx={{ borderRadius: "0px 10px 10px 0px", cursor: "pointer" }}
      >
        Start an Email
      </Flex>
      {items.map((item, index) => (
        <Flex
          bg={
            selected === index ? theme.colors.secondary : theme.colors.primary
          }
          width="230px"
          fontWeight={selected === index ? 800 : 400}
          onClick={() => onSelect(index)}
          my="2px"
          py={2}
          pl={3}
          key={index}
          sx={{
            borderRadius: "0px 10px 10px 0px",
            cursor: "pointer",
          }}
        >
          {item}
        </Flex>
      ))}
    </Flex>
  );
}
