import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   p: {
//       textColor : "white",
//   }
// });


export default function MovieDetails({movie, setSelectedMovie}) {
//   const classes = useStyles();

  const movieDetails = [
      {label: "name", value: movie.show.name ? movie.show.name : ""},
      {label: "score", value: movie.score ? movie.score : ""},
      {label: "genre", value: movie.show.genres ? movie.show.genres : ""},
      {label: "language", value: movie.show.language ? movie.show.language : ""},
      {label: "status", value: movie.show.status ? movie.show.status : ""},
      {label: "summary", value: movie.show.summary ? movie.show.summary : ""}
  ];

  const onClick = () => setSelectedMovie(null);
  return (
    <div>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    {movieDetails.map((itemDetail) => (
                        <TableRow>
                            <TableCell>{itemDetail.label}</TableCell>
                            <TableCell>{itemDetail.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Button variant="contained" onClick={onClick}>back</Button>
    </div>
  );
}
