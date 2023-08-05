import { IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Icon } from 'components/Icons';
const ColumnHeader = ({ title }) => {
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <div>
              <IconButton>
                <Icon id={'edit'} />
              </IconButton>
              <IconButton>
                <Icon id={'delete'} />
              </IconButton>
            </div>
          }
          title={title}
        />
      </Card>
    </div>
  );
};
export default ColumnHeader;
