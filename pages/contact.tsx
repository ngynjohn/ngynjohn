import {
  ScrollArea,
} from '@mantine/core';
import ContactForm from '../components/molecules/ContactForm/ContactForm';

export default function Contact() {
  return (
    <ScrollArea
      style={{
        height: 'max-content',
        paddingTop: 63,
        backgroundColor: '#fafafa',
      }}
    >
      <ContactForm />
    </ScrollArea>
  );
}