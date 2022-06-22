import {
  Text,
  ScrollArea
} from '@mantine/core';
import Collection from '../components/molecules/Collection/Collection';

export default function Videos() {
  return (
    <div
      style={{
        paddingTop: '63px',
        width: '100vw',
        backgroundColor: 'black',
      }}
    >
      <Collection />
    </div>
  );
}
