import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  p: {
      textColor : "white",
  }
});


export default function MovieDetails({movie, setSelectedMovie}) {
  const classes = useStyles();
  const movieDetails = {
        name : movie.show.name ? movie.show.name : "",
        score : movie.score ? movie.score : "",
        genre : movie.show.genres ? movie.show.genres : "",
        language : movie.show.language ? movie.show.language : "",
        status : movie.show.status ? movie.show.status : "",
        summary : movie.show.summary ? movie.show.summary : "",
  };

  const onClick = () => setSelectedMovie(null);
  return (
    <div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell>
                            name
                        </TableCell>
                        <TableCell>
                            {movieDetails.name}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            summary
                        </TableCell>
                        <TableCell>
                            {movieDetails.summary}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            language
                        </TableCell>
                        <TableCell>
                            {movieDetails.language}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            gender
                        </TableCell>
                        <TableCell>
                            {movieDetails.genres}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            score
                        </TableCell>
                        <TableCell>
                            {movieDetails.score}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            status
                        </TableCell>
                        <TableCell>
                            {movieDetails.status}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <Button variant="contained" onClick={onClick}>back</Button>
    </div>
  );
}
