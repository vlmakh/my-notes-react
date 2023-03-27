import { Box } from 'components/Box/Box';
import { Form, Text } from 'components/Confirm/Confirm.styled';
import { Button } from 'components/Buttons/Buttons';

export function Warn({ agreeWarn }) {
  const handleSubmit = e => {
    e.preventDefault();
    agreeWarn();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>
        <b>
          This application has been uploaded to a free backend server, so the
          first launch may be delayed up to 15sec
        </b>
      </Text>
      <Box mt={4} display="flex" justifyContent="center" alignItems="center">
        <Button type="submit" aria-label="Agree">
          OK
        </Button>
      </Box>
    </Form>
  );
}
