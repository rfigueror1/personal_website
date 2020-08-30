import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tableContainer: {
    margin: 100,
  },
  images: {
    maxWidth: 400,
    maxHeight: 400,
    borderRadius: 100
  },
  container: {
    color: theme.palette.primary.dark
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: 100,
    color: 'black',
    width: 600,
    align: 'justified'
  },
  text: {
    margin: 25
  },
  paper:{
    width: 600,
    height: 400
  },

  projectThumbnail: {
      maxWidth: 500,
      maxHeight: 500,
      borderRadius: 50
  },

  icon:{
    fontSize: 'large',
    margin: 20,
    maxWidth: 100
  },

  table: {
    width: 200
  },
  tableCell: {
    fontSize: 20,
    align: 'center',
    background: theme.palette.primary.main,
    color: 'white'
  },
  title: {
    background: theme.palette.secondary.main,
    color: 'white',
    width: 400
  }
}));

export default useStyles
