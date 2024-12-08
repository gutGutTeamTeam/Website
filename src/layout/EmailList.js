import { Flex } from "rebass";
import { useTheme } from "styled-components";

export default function EmailList({ content, onSelect, ...props }) {
  const theme = useTheme();
  return (
    <Flex
      color={theme.colors.text}
      flexDirection="column"
      alignContent="stretch"
      overflowY="auto"
      overflowX="hidden"
      bg="white"
      width="200px"
      sx={{
        borderRadius: "10px 4px 4px 10px",
        boxShadow: "inset 0.01em 0.01em 0.1em darkgrey",
      }}
      {...props}
    >
      {content.map((item, index) => (
        <Flex
          key={index}
          py={2}
          px={3}
          onClick={() => onSelect(index)}
          sx={{
            cursor: "pointer",
            borderBottom: "0.5px solid grey",
            ...(item.label && {
              color: theme.colors.deleted,
              backgroundColor: "#f8d7da",
              fontStyle: "italic",
            }),
          }}
        >
          <Flex
            fontWeight={700}
            flex={0.5}
            overflow="hidden"
            sx={{ whiteSpace: "nowrap" }}
          >
            [{item.sender}]
          </Flex>
          <Flex
            flex={3}
            overflow="hidden"
            sx={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
          >
            {item.content}
          </Flex>
          <Flex
            flex={0.5}
            fontStyle="italic"
            color="darkgrey"
            justifyContent="flex-end"
          >
            {item.date}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
