// @packages
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

interface MessageProps {
  message: string
}

const Message: FC<MessageProps> = ({ message }) => (
  <Typography
    sx={{
      my: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {message}
  </Typography>
);

export default Message;
