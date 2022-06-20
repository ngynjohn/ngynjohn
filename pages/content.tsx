import {
  Text,
  ScrollArea
} from '@mantine/core';

export default function Content() {
  return (
    <ScrollArea
      style={{
        height: '200vh'
      }}
    >
      <Text>
        This is the content page
      </Text>
    </ScrollArea>
  );
}
