import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg:'100px', xs:'0'}}}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:2, position:'relative'}}>
        {targetMuscleExercises.length !==0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader/>}
      </Stack>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{p:2, position:'relative'}}>
        {equipmentExercises.length !==0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises