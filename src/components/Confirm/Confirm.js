import { Box } from 'components/Box/Box';
import { Form, Text, Button } from './Confirm.styled';

export function Confirm({ onFormSubmit, toggleConfirm, name, isProcessing }) {
  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>
        Delete note <b>{name}</b>?
      </Text>
      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button type="button" aria-label="Cancel" onClick={toggleConfirm}>
          Cancel
        </Button>

        <Button type="submit" aria-label="Delete note" disabled={isProcessing}>
          DELETE
        </Button>
      </Box>
    </Form>
  );
}
