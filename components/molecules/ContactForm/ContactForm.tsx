import React from 'react';
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  ScrollArea
} from '@mantine/core';
import ContactIcon from '../../atoms/ContactIcon/ContactIcon';
import { useStyles } from './ContactForm.styles';

export default function ContactForm() {
  const { classes } = useStyles();
  return (
    <Group
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <div className={classes.mail}>
        <ContactIcon />
      </div>
      <Paper
        style={{
          overflow: 'hidden',
        }}
        shadow="md"
        radius="lg"
      >
        <div className={classes.wrapper}>
          <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
            <Text size="lg" weight={700} className={classes.title}>
              Get in touch
            </Text>
            <div className={classes.fields}>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput label="Your email" placeholder="pussydestroyer@gmail.com" required />
              </SimpleGrid>
              <TextInput mt="md" label="Subject" placeholder="Subject" required />
              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />
              <Group position="right" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Group>
  );
}