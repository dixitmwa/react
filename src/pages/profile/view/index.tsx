import React from 'react'
import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Layout from '@/components/layout'
import { useRouter } from 'next/router';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StackedChart from '@/components/chart/AreaChart/stackedChart';

const View = () => {
  const router = useRouter();
  const { id } = router.query;


  const viewResult = [
    { id: 1, correct: "true", response: "true", responseLat: "3219ms", certainlyRate: "3" },
    { id: 2, correct: "false", response: "true", responseLat: "1758ms", certainlyRate: "3" },
    { id: 3, correct: "true", response: "false", responseLat: "1572mx", certainlyRate: "3" },
    { id: 4, correct: "false", response: "false", responseLat: "2568mx", certainlyRate: "3" },
    { id: 5, correct: "true", response: "true", responseLat: "1919mx", certainlyRate: "3" }
  ]

  return (
    <Layout title="Profile | CozQuiz" footer>
      <Container className='main-container'>
        <Box display={"flex"} color={"#2D4F44"} style={{
          cursor: "pointer",
          width:"fit-content",
        }}
          onClick={() => router.back()}
        >
          <KeyboardArrowLeftIcon />
          <Typography style={{
            fontWeight: "600"
          }}>Back</Typography>
        </Box>

        <Box mt={2}>
          <Grid container spacing={2}>
            {/* <Grid item xs={4}>
              <StackedChart />
            </Grid>
            <Grid item xs={8}>
              <Typography variant='h6'>Results for Syllogisms Test for participant admin</Typography>
            </Grid> */}
            <Grid item xs={12} textAlign={"center"} mb={3} fontSize={25}>Coming soon...</Grid>
            <Grid item xs={9}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Correct answer</TableCell>
                      <TableCell>Response</TableCell>
                      <TableCell >Response latency</TableCell>
                      <TableCell  align='center'>Certainty rating</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {viewResult.map((row, index) => (
                      <TableRow
                        key={row.id}
                        style={{ backgroundColor: index % 2 === 0 ? '#F1FAFF' : 'white' }}
                      >
                        <TableCell component="th" scope="row">
                          {row.correct}
                        </TableCell>
                        <TableCell>{row.response}</TableCell>
                        <TableCell >{row.responseLat}</TableCell>
                        <TableCell align='center' >{row.certainlyRate}</TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={3}>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Layout >
  )
}

export default View