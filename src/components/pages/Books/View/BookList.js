import { Link as RouterLink } from 'react-router-dom';
// material components
import {
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';

// material icons
import AddIcon from '@mui/icons-material/Add';
// page wrapper for dynamic meta tags
import Page from '../../../utils/Page';
import DataTable from '../../../utils/DataTable';

// table header cell config
const TABLE_HEAD = [
  { id: 'name', label: 'Book Name', alignRight: false,type:"stack" },
  { id: 'create_at', label: 'Create at', alignRight: false ,type:"text"},
  { id: 'status', label: 'Status', alignRight: false ,type:"text"},
  { id: 'author', label: 'Author', alignRight: false ,type:"text"},
  { id: 'code', label: 'Code', alignRight: false ,type:"text"},
];

const TABLE_DATA =[
    {
        id:"134doojon",
        name:"The Seen",
        create_at:"25 February 2022",
        status:"in stock",
        type:"Noval",
        author:"Khan",
        code:"CDS8545"
    },
    {
        id:"ounr34343",
        name:"The Two Towers",
        create_at:"18 January 2022",
        status:"in stock",
        type:"Noval",
        author:"Jolly",
        code:"BSA5215"
    },
    {
        id:"343433ojnn",
        name:"The Picture of Dorian Gray",
        create_at:"18 January 2022",
        status:"out of stock",
        type:"Noval",
        author:"Jolly",
        code:"BSA5215"
    },{
        id:"eonkn2434",
        name:"How Innovation works",
        create_at:"18 January 2022",
        status:"in stock",
        type:"Noval",
        author:"Jolly",
        code:"BSA5215"
    }
]



export default function BookList() {

  return (
    <Page title="BookList">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
           Book List
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/book/add"
            startIcon={<AddIcon/>}
          >
            Add Book
          </Button>
        </Stack>
        <DataTable
            TABLE_DATA={TABLE_DATA}
            TABLE_HEAD={TABLE_HEAD}
        />
      </Container>
    </Page>
  );
}