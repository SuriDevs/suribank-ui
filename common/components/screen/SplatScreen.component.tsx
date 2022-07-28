import { Box, Stack, Typography } from '@mui/material';
import type { FunctionComponent } from 'react';
import Image from 'next/image';
import { SplatScreenProps } from './SplatScreen.interface';

export const SplatScreen: FunctionComponent<SplatScreenProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ background: '#7165E3', width: '100vw', height: '100vh' }}
    >
      <Typography variant="h1" color="common.white" fontWeight={700}>
        {title}
      </Typography>
      <Typography variant="h4" color="common.white" fontWeight={400}>
        {description}
      </Typography>
      <Box marginTop="6px">
        <Image alt="SuriPorco" src={imgSrc} width={245} height={239} />
      </Box>
    </Stack>
  );
};
