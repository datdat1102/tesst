import { Form, FormLayout, TextField, Button, DatePicker, Card } from '@shopify/polaris';
import { useState, useCallback } from 'react';

function Setting() {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [background, setBackground] = useState('');

  const handleSubmit = useCallback((_event) => setTitle(''), []);

  const handleTitleChange = useCallback((value) => setTitle(value), []);

  const handleEmailChange = useCallback((value) => setEmail(value), []);

  const handleBackgroundChange = useCallback((value) => setBackground(value), []);

  const [{ month, year }, setDate] = useState({ month: 1, year: 2018 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    end: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    [],
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <Card>
          <FormLayout.Group>
            <TextField
              value={title}
              onChange={handleTitleChange}
              label="Title"
              type="text"
              autoComplete="off"
            />
            <TextField
              value={email}
              onChange={handleEmailChange}
              label="Email"
              type="email"
              autoComplete="off"
            />
          </FormLayout.Group>
          <FormLayout.Group>
            <TextField
              value={background}
              onChange={handleBackgroundChange}
              label="Background"
              type="text"
              autoComplete="off"
            />

            <TextField
              value={selectedDates}
              // onChange={[]}
              label="Active Date"
              type="date"
              autoComplete="off"
            />
          </FormLayout.Group>
          <Button submit>Save</Button>
        </Card>
      </FormLayout>
    </Form>
  );
}
export default Setting;