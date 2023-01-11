import { Box } from 'components/Box/Box';
import { Form, Text, Button } from './Confirm.styled';

export function Confirm({ onFormSubmit, toggleConfirm, name }) {
  return (
    <Form>
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

        <Button type="button" aria-label="Delete note" onClick={onFormSubmit}>
          DELETE
        </Button>
      </Box>
    </Form>
  );
}
