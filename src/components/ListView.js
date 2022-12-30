import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ScoreList({scoreList}) {
    console.log(scoreList);
  return (
    <List sx={{ width: '100%', maxWidth: 460}}>
      {scoreList?.map((item, index) => (
        <ListItem
          key={index}
          disableGutters
          sx={{ margin: 2, p: 2, bgcolor: '#E3ebee', borderRadius: 20}}
        >
          <ListItemText primary={`${item?.name} highest's score is ${item?.score}`} />
        </ListItem>
      ))}
      </List>
  );
}
