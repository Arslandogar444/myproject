import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems,doctor,customer } from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';
import * as doctorService from '../../Axios-Actions/doctorService';
import * as adminService from '../../Axios-Actions/adminService';
import { Button } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©️ '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [cust,setCust] = React.useState(false);
  const [docs,setDocs] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [cards, setCard] = React.useState([]);
  const delp=(email)=>{
    adminService.del(email);
      }
      const deld=(email)=>{
        adminService.delcc(email);
          }
const viewCustomer=()=>
{    doctorService.CustomerView()
  .then((result) => {setCard(result.data)});
     setCust(true)
     setDocs(false)
}
const viewDoctor=()=>
{
  doctorService.DoctorView()
  .then((result) => {setCard(result.data)});
  setDocs(true)
  setCust(false)
}
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
           <a href="/adminlogin">
              <Button style={{color:'white',border:'1px solid white'}}>Logout</Button>
              </a>
        
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
     
        <Divider />
        <Button onClick={()=>viewCustomer()}> 
        <br/>
        <br/>
         View Customers
        </Button>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
        <Button onClick={()=>viewDoctor()}> 
         View Doctors
        </Button>
        <br/>
        <br/>
        <Divider />
      
      
      
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              {cust ?
              <Paper className={classes.paper}>

       <TableContainer component={Paper} style={{height:'400px'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Patient name</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Delete Account</StyledTableCell>

          </TableRow>
        </TableHead>
        { cards.map((card,key) => ( 
        <TableBody>
          
            <StyledTableRow >
            
              <StyledTableCell align="right">{card.firstname} {card.lastname}</StyledTableCell>
              <StyledTableCell align="right">{card._id}</StyledTableCell>
              <StyledTableCell align="right">{card.email}</StyledTableCell>
              <StyledTableCell align="left"  onClick={()=>{delp(card.email)}}><Button variant="contained" color="secondary">Delete</Button></StyledTableCell>
                       

            </StyledTableRow>
     
        </TableBody>
        ))
}
      </Table>
    </TableContainer>
</Paper>
:<div></div>}
{ docs?

<Paper className={fixedHeightPaper}>
    <TableContainer component={Paper} style={{height:'400px'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Doctor name</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">PMDC</StyledTableCell>
            <StyledTableCell align="right">Delete Account</StyledTableCell>
          </TableRow>
        </TableHead>
        { cards.map((card,key) => (
        <TableBody>
          
            <StyledTableRow >
            
              <StyledTableCell align="right">{card.firstname} {card.lastname}</StyledTableCell>
              <StyledTableCell align="right">{card._id}</StyledTableCell>
              <StyledTableCell align="right">{card.email}</StyledTableCell>
              <StyledTableCell align="right">{card.pmdc}</StyledTableCell>
              <StyledTableCell align="left"  onClick={()=>{deld(card.email)}}><Button variant="contained" color="secondary"> Delete</Button></StyledTableCell>
                       
            </StyledTableRow>
     
        </TableBody>
        ))
      }
      </Table>
    </TableContainer>


              </Paper>
:<div></div>}
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}