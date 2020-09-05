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
    width: 1000,
    margin: 100
  },

  projectThumbnail: {
      maxWidth: 600,
      maxHeight: 600,
      borderRadius: 50
  },

  icon:{
    fontSize: 'large',
    margin: 20,
    maxWidth: 100,
    color: theme.palette.primary.contrastText
  },

  button: {
    color: theme.palette.primary.contrastText
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
  description:{
    marginTop: 30,
    marginBottom: 30
  },
  technologyGrid: {
    width: 10,
    marginRight: 100
  },
  tech_subtitle:{
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  },
  container_carousel: {
    height: 600
  }

}));

export default useStyles
